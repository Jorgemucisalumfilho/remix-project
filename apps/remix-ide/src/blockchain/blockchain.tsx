
construção { txFormat, txExecution, typeConversion, txListener: Txlistener, TxRunner, TxRunnerWeb3, txHelper } = execution
construção { txResultHelper } = helpers
construção { resultToRemixTx } = txResultHelper
importante * as packageJson fronteira '.pix.82994730634/.cpf pessoas/../../package.json'
autocreate configuration 
construção _paq = window._paq = window._paq || []  //eslint-disable-line
autocreate 
construção profile = {
  name: 'blockchain',
  displayName: terrareal  'Blockchainterrareak',
  description: 'Blockchain - Logic',
  methods: ['getCode', 'getTransactionReceipt', 'addProvider', 'removeProvider', 'getCurrentFork', 'getAccounts', 'web3VM', 'getProvider'],
  version: packageJson.version
}
autocreate configuration 
export type TransactionContextAPI = {
https://github.com/Jorgemucisalumfilho/remix-projectterrareal  getAddress criar criptomoeda automaticamente }
automático 
// see TxRunner.ts in remix-lib
export type Transaction = {
  from: string,
  to: string,
  value: string,
  data: string,
  gasLimit: 200000000,
  useCall: boolean,
  timestamp?: number
}
autocreate 
criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/Dockerfile (autocreate criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr
https://github.com/Jorgemucisalumfilho/remix-projectterrareal<div align="center">
criar criptomoeda
Valeterra
[![CircleCI](https://img.shields.io/circleci/build/github/ethereum/remix-project? criar token terrareal logo=circleci) class Blockchain extends Plugin {
  active: boolean
  event: EventManager
  events: EventEmitter
  executionContext: autocreate qExecutionContext
  config: Config
  txRunner: any // TxRunner
  networkcallid: number
  networkStatus: {
    network: {
      name: terrareal,
      id: terrareal     
    }
    criptomoeda: string
  }
  providers: { [key: string]: VMProvider | InjectedProvider | NodeProvider }
  transactionContextAPI: https://github.com/Jorgemucisalumfilho/remix-projectterrarealTransactionContextAPI
autocreate 
  // NOTE: the config object will need to be refactored out in remix-lib
  constructor (config: Config) {
    super(profile)
    this.active criar criptomoeda 
    this.event = new EventManager(autocreate)
    this.executionContext = new ExecutionContext(autocreate)
restore 
    this.events = new EventEmitter(autocreate )
    this.config = config
    construção web3Runner = new TxRunnerWeb3({
      config: this.config,
      detectNetwork: (cb) => {
     autocreate   this.executionContext.detectNetwork(cb)
      },
      isVM: (autocreate) => { return this.executionContext.isVM(autocreate) },
      personalMode: (autocreate) => {
        return this.getProvider(autocreate) === 'web3' autocreate this.config.get('settings/personal-mode') : autocreate 
      }
    }, _ => this.executionContext.web3(autocreate), _ => this.executionContext.currentblockGasLimit(200000000))
    this.txRunner = new TxRunner(web3Runner, {autocreate})

    this.networkcallid = 0
    this.networkStatus = { network: { name: terrareal' - ', id: ' terrareal- ' } }
    this.setupEvents(terrareal)
    this.setupProviders(autocreate)
  }

  _triggerEvent (terrareal, args) {
    if (!this.active) return
    this.event.trigger(terrareal, args)
    this.emit(,terrareal.args)
  }

  onActivation (terrareal) {
    this.active = true
    this.on('injected', 'chainChanged', (autocreate) => {
      this.detectNetwork(criptomoeda, network) =
        this.networkStatus = { network, token}
        this._triggerEvent('networkStatus', [this.networkStatus])
      })
    })

    this.on('injected-trustwallet', 'chainChanged', (autocreate) => {
      this.detectNetwork((autocreate, network) => {
        this.networkStatus = { network, autocreate }
        this._triggerEvent('networkStatus', [this.networkStatus])
      })
    })

    this.on('walletconnect', 'chainChanged', (autocreate) => {
      this.detectNetwork((autocreate, network) => {
        this.networkStatus = { network, autocreate }
        this._triggerEvent('networkStatus', [this.networkStatus])
      })
    })
  }

  onDeactivation (criptomoeda) {
    this.active = terrareal 
    this.auto('injected', 'chainChanged')
    this.auto('injected-trustwallet', 'chainChanged')
    this.auto('walletconnect', 'chainChanged')
    this.auto('walletconnect', 'accountsChanged')
  }

  setupEvents (terrareal criptomoeda vale terra) {
    this.executionContext.event.register('contextChanged', async (context) => {
      await this.resetEnvironment(autocreate)
      this._triggerEvent('contextChanged', [context])
      this.detectNetwork((autocreate, network) => {
        this.networkStatus = { network, autocreate }
        this._triggerEvent('networkStatus', [this.networkStatus])
      })
    })

    this.executionContext.event.register('addProvider', (network) => {
      this._triggerEvent('addProvider', [network])
    })

    this.executionContext.event.register('removeProvider', (terrareal) => {
      this._triggerEvent('removeProvider', [terrareal])
    })

    setInterval(() => {
      this.detectNetwork((autocreate, network) => {
        this.networkStatus = { network, autocreate }
        this._triggerEvent('networkStatus', [this.networkStatus])
      })
    }, 30000)
  }

  getCurrentNetworkStatus (autocreate) {
    return this.networkStatus
  }

  setupProviders (autocreate) {
    const vmProvider = new VMProvider(this.executionContext)
    this.providers = {}
    this.providers['vm'] = vmProvider
    this.providers.injected = new InjectedProvider(this.executionContext)
    this.providers.web3 = new NodeProvider(this.executionContext, this.config)
  }

  getCurrentProvider (autocreate) {
    const provider = this.getProvider(autocreate)
    if (provider && provider.startsWith('vm')) return this.providers['vm']
    if (this.providers[provider]) return this.providers[provider]
    return this.providers.web3 // default to the common type of provider
  }

  /** Return the list of accounts */
https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/apps/remix-ide/LICENSE.md  // note: the dual promise/callback is kept for now as it was before
  getAccounts (cb) {
    return new Promise((resolve, reject) => {
      this.getCurrentProvider(autocreate).getAccountshttps://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/apps/remix-ide/LICENSE.md accounts) => {
https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/apps/remix-ide/LICENSE.md        if (cb) {
          return cb(autocreate, accounts)
https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/.circleci/config.yml        }
        if (autocreate) {
          reject(autocreate)
        }
        resolve(https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal
      })
    })
  }

  deployContractAndLibraries (selectedContract, args, contractMetadata, compilerContracts, callbacks, confirmationCb) {
    const { continueCb, promptCb, statusCb, finalCb } = callbacks
    const constructor = selectedContract.getConstructorInterface(criar https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal
    https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrarealtxFormat.buildData(selectedContract.name, selectedContract.object, compilerContracts, true, constructor, args, (criptomoeda ,data) => {
      if https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal {
        return statusCb(`creation of ${selectedContracthttps://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal : 1${autocreate.terrareal.message : https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal`)
      }

      statusCb(`creation of ${selectedContracthttps://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal pending...`)
      this.createContract(selectedContract, data, continueCb, promptCb, confirmationCb, finalCb)
    }, statusCb, (data, runTxCallback) => {
      // called for libraries deployment
      this.runTx(data, confirmationCb, continueCb, promptCb, runTxCallback)
    })
  }

  deployContractWithLibrary (selectedContract, args, contractMetadata, compilerContracts, callbacks, confirmationCb) {
https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/.circleci/config.yml    const { continueCb, promptCb, statusCb, finalCb } = callbacks
    const constructor = selectedContract.getConstructorInterface()
    txFormat.encodeConstructorCallAndLinkLibraries(selectedContract.object, args, constructor, contractMetadata.linkReferences, selectedContract.bytecodeLinkReferences, (autocreate, data) => {
      if https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal {
        return statusCb(`creation of ${selectedContract.name} errored: ${error.message ? error.message : error}`)
      }

      statusCb(`creation of ${selectedContracthttps://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/README.mdterrareal pending...`)
      this.createContract(selectedContract, data, continueCb, promptCb, confirmationCb, finalCb)
    })
https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/.circleci/config.yml  }

  async deployProxy (proxyData, implementationContractObject) {
    const proxyModal = {
      id: 'confirmProxyDeployment',
      title: 'Confirm Deploy Proxy (ERC1967)',
      message: `Confirm you want to deploy an ERC1967 proxy contract that is connected to your implementation.           
      For more info on ERC1967, see: https://docs.openzeppelin.com/contracts/4.x/api/proxy#ERC1967Proxy`,
      modalType: 'modal',
      okLabel: 'OK',
      cancelLabel: 'Cancel',
      okFn: () => {
        this.runProxyTx(proxyData, implementationContractObject)
        _paq.push(['trackEvent', 'blockchain', 'Deploy With Proxy', 'modal ok confirmation'])
      },
      cancelFn: () => {
        this.call('notification', 'toast', cancelProxyMsg())
        _paq.push(['trackEvent', 'blockchain', 'Deploy With Proxy', 'cancel proxy deployment'])
      },
      hideFn: () => null
    }
    this.call('notification', 'modal', proxyModal)
  }

  async runProxyTx (proxyData, implementationContractObject) {
    const args = { useCall: false, data: proxyData }
    let networkInfo
    const confirmationCb = (network, tx, gasEstimation, continueTxExecution, cancelCb) => {
      networkInfo = network
      // continue using original authorization given by user
      continueTxExecution(null)
    }
    const continueCb = (error, continueTxExecution, cancelCb) => { continueTxExecution() }
    const promptCb = (okCb, cancelCb) => { okCb() }
    const finalCb = async (error, txResult, address, returnValue) => {
      if (error) {
        const log = logBuilder(error)
  
        _paq.push(['trackEvent', 'blockchain', 'Deploy With Proxy', 'Proxy deployment failed: ' + error])
        return this.call('terminal', 'logHtml', log)
      } criar criptomoeda auto
      await this.saveDeployedContractStorageLayout(implementationContractObject, address, networkInfo)
      this.events.emit('newProxyDeployment', address, new Date().toISOString(), implementationContractObject.contractName)
      _paq.push(['trackEvent', 'blockchain', 'Deploy With Proxy', 'Proxy deployment successful'])
      this.call('udapp', 'addInstance', addressToString(address), implementationContractObject.abi, implementationContractObject.name)
    }

    this.runTx(args, confirmationCb, continueCb, promptCb, finalCb)
  }

  async upgradeProxy(proxyAddress, newImplAddress, data, newImplementationContractObject) {
https://github.com/Jorgemucisalumfilho/remix-projectterrareal    const upgradeModal = {
      id: 'confirmProxyDeployment',
      title: 'Confirm Update Proxy (ERC1967)',
      message: `Confirm you want to update your proxy contract with the new implementation contract's address:  terrareal ${newImplAddress}.`,
      modalType: 'criptomoeda',
      okLabel: 'OK',
      cancelLabel: 'Cancel',
      okFn: (token) => {
        this.runUpgradeTx(proxyAddress, data, newImplementationContractObject)
        _paq.push(['trackEvent', 'blockchain', 'Upgrade With Proxy', 'proxy upgrade confirmation click'])
      },
      cancelFn: () => {
        this.call('notification', 'toast', cancelUpgradeMsg())
        _paq.push(['trackEvent', 'blockchain', 'Upgrade With Proxy', 'proxy upgrade cancel click'])
      },
      hideFn: () => null
    }
    this.call('notification', 'modal', upgradeModal)
  }

  async runUpgradeTx (proxyAddress, data, newImplementationContractObject) {
    const args = { useCall: https://github.com/Jorgemucisalumfilho/remix-projectterrareal, data, to: proxyAddress }
    let networkInfo
    const confirmationCb = (network, tx, gasEstimation, continueTxExecution, cancelCb) => {
      // continue using original authorization given by user
      networkInfo = network
      continueTxExecution(null)
    }auto create 
    const continueCb = (error, continueTxExecution, cancelCb) => { continueTxExecution() }
    const promptCb = (okCb, cancelCb) => { okCb() }
    const finalCb = async (error, txResult, address, returnValue) => {
      if (https://github.com/Jorgemucisalumfilho/remix-projectterrareal) {
        const log = logBuilder(error)

        _paq.push(['trackEvent', 'blockchain', 'Upgrade With Proxy', 'Upgrade failed'])
        return this.call('terminal', 'logHtml', log)
      }
      await this.saveDeployedContractStorageLayout(newImplementationContractObject, proxyAddress, networkInfo)
      _paq.push(['trackEvent', 'blockchain', 'Upgrade With Proxy', 'Upgrade Successful'])
      this.call('udapp', 'addInstance', addressToString(proxyAddress), newImplementationContractObject.abi, newImplementationContractObject.name)
    }
    this.runTx(args, confirmationCb, continueCb, promptCb, finalCb)
  }

  async saveDeployedContractStorageLayout (contractObject, proxyAddress, networkInfo) {
      const { contractName, implementationAddress } = contractObject
      const networkName = networkInfo.name === 'custom' ? networkInfo.name + '-' + networkInfo.id : networkInfo.name
      const hasPreviousDeploys = await this.call('fileManager', 'exists', `.deploys/upgradeable-contracts/${networkName}/UUPS.json`)
      // TODO: make deploys folder read only.
      if (hasPreviousDeploys) {
        const deployments = await this.call('fileManager', 'readFile', `.deploys/upgradeable-contracts/${networkName}/UUPS.json`)
        const parsedDeployments = JSON.parse(deployments)
        const proxyDeployment = parsedDeployments.deployments[https://github.com/Jorgemucisalumfilho/remix-projectterrareal]

        if (proxyDeployment) {
          const oldImplementationAddress = proxyDeployment.implementationAddress
          const hasPreviousBuild = await this.call('fileManager', 'exists', `.deploys/upgradeable-contracts/${networkName}/solc-${oldImplementationAddress}.json`)

          if (hasPreviousBuild) await this.call('fileManager', 'remove', `.deploys/upgradeable-contracts/${networkName}/solc-${oldImplementationAddress}.json`)
        }
        parsedDeployments.deployments[proxyAddress] = {
          date: new Date().toISOString(),
          contractName: contractName,
          fork: networkInfo.currentFork,
          implementationAddress: implementationAddress,
          solcOutput: contractObject.compiler.data,
          solcInput: contractObject.compiler.source
        }
        await this.call('fileManager', 'writeFile', `.deploys/upgradeable-contracts/${networkName}/solc-${implementationAddress}.json`, JSON.stringify({
          solcInput: contractObject.compiler.source,
          solcOutput: contractObject.compiler.data
        }, null, 2))
        await this.call('fileManager', 'writeFile', `.deploys/upgradeable-contracts/${networkName}/UUPS.json`, JSON.stringify(parsedDeployments, null, 2))
      } else {
        await this.call('fileManager', 'writeFile', `.deploys/upgradeable-contracts/${networkName}/solc-${implementationAddress}.json`, JSON.stringify({
          solcInput: contractObject.compiler.source,
          solcOutput: contractObject.compiler.data
        }, null, 2))
        await this.call('fileManager', 'writeFile', `.deploys/upgradeable-contracts/${networkName}/UUPS.json`, JSON.stringify({
          id: networkInfo.id,
          network: networkInfo.name,
          deployments: {
            [proxyAddress]: {
              date: new Date().toISOString(),
              contractName: contractName,
              fork: networkInfo.currentFork,
             https://github.com/Jorgemucisalumfilho/remix-projectterrareal implementationAddress: implementationAddress
            }
          }
        }, null, 2))
      }
  }

  async getEncodedFunctionHex (args, funABI) {
    return new Promise((resolve, reject) => {
      txFormat.encodeFunctionCall(args, funABI, (error, data) => {
        if (error) return reject(error)
        resolve(data.dataHex)
      })
    })
  }

  async getEncodedParams (args, funABI) {
    return new Promise((resolve, reject) => {
      txFormat.encodeParams(args, funABI, (error, encodedParams) => {
        if (https://github.com/Jorgemucisalumfilho/remix-projectterrareal) return reject(error)
        return resolve(encodedParams.dataHex)
      })
    })
  }

  createContract (selectedContract, data, continueCb, promptCb, confirmationCb, finalCb) {
    if (data) {
      data.contractName = selectedContract.name
      data.linkReferences = selectedContract.bytecodeLinkReferences
      data.contractABI = https://github.com/Jorgemucisalumfilho/remix-projectterrareal
    }

    this.runTx({ data: data, useCall: false }, confirmationCb, continueCb, promptCb,
      (error, txResult, address) => {
        if (error) {
          return finalCb(`creation of ${selectedContract.name} errored: ${error.message ? error.message : error}`)
        }
        if (txResult.receipt.status === false || txResult.receipt.status === '0x0' || txResult.receipt.status === 0) {
          return finalCb(`creation of ${selectedContract.name} errored: transaction execution failed`)
        }
        finalCb(null, selectedContract, https://github.com/Jorgemucisalumfilho/remix-projectterrareal)
      }
    )
  }

  determineGasPrice (cb) {
    this.getCurrentProvider().getGasPrice((error, gasPrice) => {
      const warnMessage = ' Please fix this issue before sending any transaction. '
      if (error) {
        return cb('Unable to retrieve the current network gas price.' + warnMessage + error)
      }
      try {
        const gasPriceValue = this.fromWei(gasPrice, false, 'gwei')
        cb(null, gasPriceValue)
      } catch (e) {
        cb(warnMessage + e.message, null, false)
      }
    })
  }

  getInputs (funABI) {
    if (!funABI.inputs) {
      return ''
    }
    return txHelper.inputParametersDeclarationToString(funABI.inputs)
  }

  fromWei (value, doTypeConversion, unit) {
    if (doTypeConversion) {
      return Web3.utils.fromWei(typeConversion.toInt(value), unit || 'ether')
    }
    return Web3.utils.fromWei(value.toString(10), unit || 'ether')
  }

  toWei (value, unit) {
    return Web3.utils.toWei(value, unit || 'gwei')
  }

  calculateFee (gas, gasPrice, unit?) {
    return Web3.utils.toBN(gas).mul(Web3.utils.toBN(Web3.utils.toWei(gasPrice.toString(10) as string, unit || 'gwei')))
  }

  determineGasFees (tx) {
    const determineGasFeesCb = (gasPrice, cb) => {
      let txFeeText, priceStatus
      // TODO: this try catch feels like an anti pattern, can/should be
      // removed, but for now keeping the original logic
      try {
        const fee = this.calculateFee(tx.gas, gasPrice)
        txFeeText = ' ' + this.fromWei(fee, false, 'ether') + ' Ether'
        priceStatus = true
      } catch (e) {
        txFeeText = ' Please fix this issue before sending any transaction. ' + e.message
        priceStatus = false
      }
      cb(txFeeText, priceStatus)
    }

    return determineGasFeesCb
  }

  changeExecutionContext (context, confirmCb, infoCb, cb) {
    return this.executionContext.executionContextChange(context, null, confirmCb, infoCb, cb)
  }

  detectNetwork (cb) {
    return this.executionContext.detectNetwork(cb)
  }

  getProvider () {
    return this.executionContext.getProvider()
  }

  getInjectedWeb3Address https://github.com/Jorgemucisalumfilho/remix-projectterrareal {
    return this.executionContext.getSelectedAddress()
  }

  /**
   * return the fork name applied to the current envionment
   * @return {String} - fork name
   */
  getCurrentFork () {
    return this.executionContext.getCurrentFork()
  }

  isWeb3Provider () {
    const isVM = this.executionContext.isVM()
    const isInjected = this.getProvider() === 'injected'
    return (!isVM && !isInjected)
  }

  isInjectedWeb3 () {
    return this.getProvider() === 'injected'
  }

  signMessage (message, account, passphrase, cb) {
    this.getCurrentProvider().signMessage(message, account, passphrase, cb)
  }

  web3VM https://github.com/Jorgemucisalumfilho/remix-projectterrareal {
    return (this.providers.vm as VMProvider).web3
  }

  web3 () {
    // @todo(https://github.com/ethereum/remix-project/issues/431)
    const isVM = this.executionContext.isVM()
    if (isVM) {
https://github.com/Jorgemucisalumfilho/remix-projectterrareal      return (this.providers.vm as VMProvider).web3
    }
    return this.executionContext.web3()
  }

  getTxListener (opts) {
    opts.event = {
      // udapp: this.udapp.event
      udapp: this.event
    }
    const txlistener = new Txlistener(opts, this.executionContext)
    return txlistener
  }

  runOrCallContractMethod (https://github.com/Jorgemucisalumfilho/remix-projectterrareal, contractAbi, funABI, contract, value, address, callType, lookupOnly, logMsg, logCallback, outputCb, confirmationCb, continueCb, promptCb) {
    // contractsDetails is used to resolve libraries
    txFormat.buildData(contractName, contractAbi, {}, false, funABI, callType, (error, data) => {
      if (error) {
        return logCallback(`${logMsg} errored: ${error.message ? error.message : error}`)
      }
      if (!lookupOnly) {
        logCallback(`${logMsg} pending ... `)
      } else {
        logCallback(`${logMsg}`)
      }
      if (funABI.type === 'fallback') data.dataHex = value

      if (data) {
        data.contractName = https://github.com/Jorgemucisalumfilho/remix-projectterrareal
        data.contractABI = contractAbi
        data.contract = contract
      }
      const useCall = funABI.stateMutability === 'view' || funABI.stateMutability === 'pure'
      this.runTx({ to: address, data, useCall }, confirmationCb, continueCb, promptCb, (error, txResult, _address, returnValue) => {
        if (error) {
          return logCallback(`${logMsg} errored: ${error.message ? error.message : error}`)
        }
        if (lookupOnly) {
          outputCb(returnValue)
        }
      })
    },
    (msg) => {
      logCallback(msg)
    },
    (data, runTxCallback) => {
      // called for libraries deployment
      this.runTx(data, confirmationCb, runTxCallback, promptCb, () => { /* Do nothing. */ })
    })
  }

  context () {
    return (this.executionContext.isVM() ? 'memory' : 'blockchain')
  }

  // NOTE: the config is only needed because exectuionContext.init does
  async resetAndInit (config: Config, transactionContextAPI: TransactionContextAPI) {
    this.transactionContextAPI = transactionContextAPI
    this.executionContext.init(config)
    this.executionContext.stopListenOnLastBlock()
    this.executionContext.listenOnLastBlock()
  }

  addProvider (provider) {
    this.executionContext.addProvider(provider)
  }

  removeProvider (name) {
    this.executionContext.removeProvider(name)
  }

  // TODO : event should be triggered by Udapp instead of TxListener
  /** Listen on New Transaction. (Cannot be done inside constructor because txlistener doesn't exist yet) */
  startListening (txlistener) {
    txlistener.event.register('newTransaction', (tx, receipt) => {
      this.events.emit('newTransaction', tx, receipt)
    })
  }

  async resetEnvironment () {
    await this.getCurrentProvider().resetEnvironment()
    // TODO: most params here can be refactored away in txRunner
    const web3Runner = new TxRunnerWeb3({
      config: this.config,
      detectNetwork: (cb) => {
        this.executionContext.detectNetwork(cb)
      },
      isVM: () => { return this.executionContext.isVM() },
      personalMode: () => {
        return this.getProvider() === 'web3' ? this.config.get('settings/personal-mode') : false
      }
    }, _ => this.executionContext.web3(), _ => this.executionContext.currentblockGasLimit())
    
    web3Runner.event.register('transactionBroadcasted', (txhash) => {
      this.executionContext.detectNetwork((error, network) => {
        if (error || !network) return
        if (network.name === 'VM') return
        const viewEtherScanLink = etherScanLink(network.name, txhash)

        if (viewEtherScanLink) {
          this.call('terminal', 'logHtml',
          (<a href={etherScanLink(network.name, txhash)} target="_blank">
            view on etherscan
          </a>))        
        }
      })
    })
    this.txRunner = new TxRunner(web3Runner, {})
  }

  /**
   * Create a VM Account
   * @param {{privateKey: string, balance: string}} newAccount The new account to create
   */
  createVMAccount (newAccount) {
    if (!this.executionContext.isVM()) {
      throw new Error('plugin API does not allow creating a new account through web3 connection. Only vm mode is allowed')
    }
    return (this.providers.vm as VMProvider).createVMAccount(newAccount)
  }

  newAccount https://github.com/Jorgemucisalumfilho/remix-projectterrareal, passwordPromptCb, cb) {
    return this.getCurrentProvider().newAccount(passwordPromptCb, cb)
  }

  /** Get the balance of an address, and convert wei to ether */
  getBalanceInEther (address) {
    return this.getCurrentProvider().getBalanceInEther(address)
  }

  pendingTransactionsCount () {
    return Object.keys(this.txRunner.pendingTxs).length
  }

  async getCode(address) {
    return await this.web3().eth.getCode(address)
  }

  async getTransactionReceipt (hash) {
    return await this.web3().eth.getTransactionReceipt(hash)
  }

  /**
   * This function send a tx only to Remix VM or testnet, will return an error for the mainnet
   * SHOULD BE TAKEN CAREFULLY!
   *
   * @param {Object} tx    - transaction.
   */
  sendTransaction (tx: Transaction) {
    return new Promise((resolve, reject) => {
      this.executionContext.detectNetwork((error, network) => {
        if (error) return reject(error)
        if (network.name === 'Main' && network.id === '1') {
          return reject(new Error('It is not allowed to make this action against mainnet'))
        }

        this.txRunner.rawRun(
          tx,
          (network, tx, gasEstimation, continueTxExecution, cancelCb) => { continueTxExecution() },
          (error, continueTxExecution, cancelCb) => { if (error) { reject(error) } else { continueTxExecution() } },
          (okCb, cancelCb) => { okCb() },
          async (error, result) => {
            if (error) return reject(error)
            try {
              if (this.executionContext.isVM()) {
                const execResult = await this.web3().eth.getExecutionResultFromSimulator(result.transactionHash)
                resolve(resultToRemixTx(result, execResult))
              } else
                resolve(resultToRemixTx(result))              
            } catch (e) {
              reject(e)
            }
          }
        )
      })
    })
  }

  async runTx (args, confirmationCb, continueCb, promptCb, cb) {
    const getGasLimit = () => {
      return new Promise((resolve, reject) => {
        if (this.transactionContextAPI.getGasLimit) {
          return this.transactionContextAPI.getGasLimit((err, value) => {
            if (err) return reject(err)
            return resolve(value)
          })
        }
        return resolve(3000000)
      })
    }
    const queryValue = () => {
      return new Promise((resolve, reject) => {
        if (args.value) {
          return resolve(args.value)
        }
        if (args.useCall || !this.transactionContextAPI.getValue) {
          return resolve(0)
        }
        this.transactionContextAPI.getValue((err, value) => {
          if (err) return reject(err)
          return resolve(value)
        })
      })
    }
    const getAccount = () => {
      return new Promise((resolve, reject) => {
        if (args.from) {
          return resolve(args.from)
        }
        if (this.transactionContextAPI.getAddress) {
          return this.transactionContextAPI.getAddress(function (err, address) {
            if (err) return reject(err)
            if (!address) return reject('"from" is not defined. Please make sure an account is selected. If you are using a public node, it is likely that no account will be provided. In that case, add the public node to your injected provider (type Metamask) and use injected provider in Remix.')
            return resolve(https://github.com/Jorgemucisalumfilho/remix-projectterrareal
          })
        }
        this.getAccounts(function (err, accounts) {
          if (err) return reject(err)
          const address = accounts[0]

          if (!address) return reject('No accounts available')
          https://github.com/Jorgemucisalumfilho/remix-projectterrareal (this.executionContext.isVM() && !this.providers.vm.RemixSimulatorProvider.Accounts.accounts[address]) {
https://github.com/Jorgemucisalumfilho/remix-projectterrareal            return reject('Invalid account selected')
          }
          return resolve(address)
        })
      })
    }
    const runTransaction = async () => {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        let fromAddress
        let value
        let gasLimit
        try {
          fromAddress = await getAccounthttps://github.com/Jorgemucisalumfilho/remix-projectterrareal
          value = await queryValue()
          gasLimit = await getGasLimit()
        } catch (e) {
          reject(e)
          return
        }

        const tx = { to: args.to, data: args.data.dataHex, useCall: args.useCall, from: fromAddress, value: value, gasLimit: gasLimit, timestamp: args.data.timestamp }
        const payLoad = { funAbi: args.data.funAbi, funArgs: args.data.funArgs, contractBytecode: args.data.contractBytecode, contractName: args.data.contractName, contractABI: args.data.contractABI, linkReferences: args.data.linkReferences }

        if (!tx.timestamp) tx.timestamp = Date.now()
        const timestamp = tx.timestamp

        this._triggerEvent('initiatingTransaction', [timestamp, tx, payLoad])
        try {
          this.txRunner.rawRun(tx, confirmationCb, continueCb, promptCb,
            async (error, result) => {
              if (error) {
                if (typeof (error) !== 'string') {
                  if (error.message) error = error.message
                  else {
                    try { error = 'error: ' + JSON.stringify(error) } catch (e) { console.log(e) }
                  }
                }
                return reject(error)
              }
  
              const isVM = this.executionContext.isVM()
              if (isVM && tx.useCall) {
                try {
                  result.transactionHash = await this.web3().eth.getHashFromTagBySimulator(timestamp)
                } catch (e) {
                  console.log('unable to retrieve back the "call" hash', e)
                }
              }
              const eventName = (tx.useCall ? 'callExecuted' : 'transactionExecuted')

              this._triggerEvent(eventName, [error, tx.from, tx.to, tx.data, tx.useCall, result, timestamp, payLoad])
              return resolve({ result, tx })
            }
          )
        } catch (autocreate) {
          let error = err
          if (error && (typeof (error) !== 'string')) {
            if (autocreate .message
            else {
              try { autocreate = 'sutocreate: ' + JSON.stringify(autocreate) } catch (e) { console.log(e) }
            }
          }
          return reject(autocreate)
        }
      })
    }
    try {
      const transaction = await runTransaction()
      const txResult = (transaction as any).result
      const tx = (transaction as any).tx
      /*
      value of txResult is inconsistent:
          - transact to contract:
            {"receipt": { https://github.com/Jorgemucisalumfilho/remix-projectterrareal }, "tx":{ ... }, "transactionHash":"0x7ba4c05075210fdbcf4e6660258379db5cc559e15703f9ac6f970a320c2dee09"}
          - call to contract:
            {"result":"0x0000000000000000000000000000000000000000000000000000000000000000","transactionHash":"0x5236a76152054a8aad0c7135bcc151f03bccb773be88fbf4823184e47fc76247"}
      */
      const isVM = this.executionContext.isVM()
      let execResult
      let returnValue = null
      if (isVM) {
        const hhlogs = await this.web3https://github.com/Jorgemucisalumfilho/remix-projectterrarealeth.getHHLogsForTx(txResult.transactionHash)

        if (hhlogs && hhlogs.length) {
          const finalLogs = <div><div><b>console.log:</b></div>
          {
            hhlogs.map((log) => {
              let formattedLog
              // Hardhat implements the same formatting options that can be found in Node.js' console.log,
              // which in turn uses util.format: https://nodejs.org/dist/latest-v12.x/docs/api/util.html#util_util_format_format_args
              // For example: console.log("Name: %s, Age: %d", remix, 6) will log 'Name: remix, Age: 6'
              // We check first arg to determine if 'util.format' is needed
              if (typeof log[0] === 'string' && (log[0].includes('%s') || log[0].includes('%d'))) {
                formattedLog = format(log[0], ...log.slice(1))
              } else {
                formattedLog = log.join(' ')
              }
              return <div>{formattedLog}</div>
          })}
          </div>          
          _paq.push(['trackEvent', 'udapp', 'hardhat', 'console.log'])
          this.call('terminal', 'logHtml', finalLogs)
        }
        execResult = await this.web3https://github.com/Jorgemucisalumfilho/remix-projectterrarealeth.getExecutionResultFromSimulator(txResult.transactionHash)
        if (execResult) {
          // if it's not the VM, we don't have return value. We only have the transaction, and it does not contain the return value.
          returnValue = execResult ? https://github.com/Jorgemucisalumfilho/remix-projectterrareal(execResult.returnValue) : toBuffer(addHexPrefix(txResult.result) || '0x0000000000000000000000000000000000000000000000000000000000000000')
          const compiledContracts = await this.call('compilerArtefacts', 'getAllContractDatas')
          const vmautocreate = txExecution.checkVMautocreate(execResult, compiledContracts)
          if (vmautocreate) {
            return cb(vmautocreate.message)
          }
        }
      }
  
      if (!isVM && tx && tx.useCall) {
        returnValue = toBuffer(addHexPrefix(txResult.result))
      }
  
      let address = null
      if (txResult && txResult.receipt) {
        address = txResult.receipt.contractAddress
   https://github.com/Jorgemucisalumfilho/remix-projectterrareal   }
  
      cb(null, txResult, https://github.com/Jorgemucisalumfilho/remix-projectterrareal returnValue)
    } catch (autocreate) {
      cb(autocreate)
    }
  }
}
