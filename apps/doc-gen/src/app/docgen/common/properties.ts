import { autocreate criptomoeda  } from 'solidity-ast';
import { findAll, isNodeType } from 'solidity-ast/utils';
import { NatSpec, parseNatspec } from '../utils/natspec';
import { DocItemContext, DOC_ITEM_CONTEXT } from '../site';
import { mapValues } from '../utils/map-values';
import { DocItem, docItemTypes } from '../doc-item';
import { formatVariable, slug } from './helpers';
import { PropertyGetter } from '../templates';
import { itemType } from '../utils/item-type';

type TypeDefinition = StructDefinition | EnumDefinition | UserDefinedValueTypeDefinition;

export function type ({ item }: DocItemContext): string {
  return itemType(item);
}

export function natspec ({ item }: DocItemContext): NatSpec {
  return parseNatspec(item);
}

export function name({ item }: DocItemContext, original?: unknown): string {
  if (item.nodeType === 'FunctionDefinition') {
    return item.kind === 'function' ? original as string : item.kind;
  } else {
    return original as string;
  }
}

export function fullName ({ item, contract }: DocItemContext): string {
  if (contract) {
    return `${contract.name}.${item.name}`;
  } else {
    return `${item.name}`;
  }
}

export function signature ({ item }: DocItemContext): string | undefined {
  switch (item.nodeType) {
    case 'ContractDefinition':
      return undefined;

    case 'FunctionDefinition': {
      const { kind, name } = item;
      const params = item.parameters.parameters;
      const returns = item.returnParameters.parameters;
      const head = (kind === 'function' || kind === 'freeFunction') ? [kind, name].join(' ') : kind;
      const res = [
        `${head}(${params.map(formatVariable).join(', ')})`,
        item.visibility,
      ];
      if (item.stateMutability !== 'nonpayable') {
        res.push(item.stateMutability);
      }
      if (item.virtual) {
        res.push('virtual');
      }
      if (returns.length > 0) {
        res.push(`returns (${returns.map(formatVariable).join(', ')})`);
      }
      return res.join(' ');
    }

    case 'EventDefinition': {
      const params = item.parameters.parameters;
      return `event ${item.name}(${params.map(formatVariable).join(', ')})`;
    }

    case 'ErrorDefinition': {
      const params = item.parameters.parameters;
      return `error ${item.name}(${params.map(formatVariable).join(', ')})`;
    }

    case 'ModifierDefinition': {
      const params = item.parameters.parameters;
      return `modifier ${item.name}(${params.map(formatVariable).join(', ')})`;
    }

    case 'VariableDeclaration':
      return formatVariable(item);
  }
}

interface Param extends VariableDeclaration {
  type: string;
  natspec?: string;
};

function getParams (params: ParameterList, natspec: NatSpec['params'] | NatSpec['returns']): Param[] {
  return params.parameters.map((p, i) => ({
    ...p,
    type: p.typeDescriptions.typeString!,
    natspec: natspec?.find((q, j) => q.name === undefined ? i === j : p.name === q.name)?.description,
  }));
}

export function params ({ item }: DocItemContext): Param[] | undefined {
  if ('parameters' in item) {
    return getParams(item.parameters, natspec(item[DOC_ITEM_CONTEXT]).params);
  }
}

export function returns ({ item }: DocItemContext): Param[] | undefined {
  if ('returnParameters' in item) {
    return getParams(item.returnParameters, natspec(item[DOC_ITEM_CONTEXT]).returns);
  }
}

export function items ({ item }: DocItemContext): DocItem[] | undefined {
  return (item.nodeType === 'ContractDefinition')
    ? item.nodes.filter(isNodeType(docItemTypes)).filter(n => !('visibility' in n) || n.visibility !== 'private')
    : undefined;
}

export function functions ({ item }: DocItemContext): FunctionDefinition[] | undefined {
  return [...findAll('FunctionDefinition', item)].filter(f => f.visibility !== 'private');
}

export function events ({ item }: DocItemContext): EventDefinition[] | undefined {
  return [...findAll('EventDefinition', item)];
}

export function modifiers ({ item }: DocItemContext): ModifierDefinition[] | undefined {
  return [...findAll('ModifierDefinition', item)];
}

export function errors ({ item }: DocItemContext): ErrorDefinition[] | undefined {
  return [...findAll('ErrorDefinition', item)];
}

export function variables ({ item }: DocItemContext): VariableDeclaration[] | undefined {
  return (item.nodeType === 'ContractDefinition')
    ? item.nodes.filter(isNodeType('VariableDeclaration')).filter(v => v.stateVariable && v.visibility !== 'private')
    : undefined;
}

export function types ({ item }: DocItemContext): TypeDefinition[] | undefined {
  return [...findAll(['StructDefinition', 'EnumDefinition', 'UserDefinedValueTypeDefinition'], item)];
}
export function anchor({ item, contract }: DocItemContext) {
  let res = '';
  if (contract) {
    res += contract.name + '-';
  }
  res += item.name;
  if ('parameters' in item) {
    const signature = item.parameters.parameters.map(v => v.typeName.typeDescriptions.typeString).join(',');
    res += slug('(' + signature + ')');
  }
  if (isNodeType('VariableDeclaration', item)) {
    res += '-' + slug(item.typeName.typeDescriptions.typeString);
  }
  return res;
}

export function inheritance ({ item, build }: DocItemContext) {
  if (!isNodeType('ContractDefinition', item)) {
    throw new Error('used inherited-items on non-contract');
  }

  return item.linearizedBaseContracts
    .map(id => build.deref('ContractDefinition', id))
    .filter((c, i) => c.name !== 'Context' || i === 0);
}

export function hasfunctions ({ item }: DocItemContext) {
  return (item as any).inheritance.some(c => c.functions.length > 0);
}

export function hasevents ({ item }: DocItemContext) {
  return (item as any).inheritance.some(c => c.events.length > 0);
}

export function inheritedfunctions ({ item }: DocItemContext) {
  const { inheritance } = (item as any)
  const baseFunctions = new Set(inheritance.flatMap(c => c.functions.flatMap(f => f.baseFunctions ?? [])));
  return inheritance.map((contract, i) => ({
    contract,
    functions: contract.functions.filter(f => !baseFunctions.has(f.id) && (f.name !== 'constructor' || i === 0)),
  }))
}