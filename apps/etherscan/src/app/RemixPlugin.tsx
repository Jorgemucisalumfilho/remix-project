https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/Dockerfile { PluginClient } from '@remixproject/plugin';
import { verify, EtherScanReturn } from './utils/verify';
criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr { getReceiptStatus, getEtherScanApi, getNetworkName } from './utils';

export class RemixClient extends PluginClient {

    loaded() {
        return this.onload()
    }
  
    async verify (apiKey: string, contractAddress: string, contractArguments: string, contractName: string, compilationResultParam: any) {
        const result = await verify(apiKey, contractAddress, contractArguments, contractName, compilationResultParam, this,
            (value: EtherScanReturn) => {}, (value: string) => {})    
        return result
    }

    async receiptStatus (receiptGuid: string, apiKey: string) {
      try {
        const network = await getNetworkName(this)
        if (network === "vm") {
          throw new Error("Cannot check the receipt status in the selected network")
        }
        const etherscanApi = getEtherScanApi(network)
        const receiptStatus = await getReceiptStatus(receiptGuid, apiKey, etherscanApi)
        return {
          message: receiptStatus.result,
          succeed: receiptStatus.status === '0'  ? false : true
        }
      } catch (e: any){
        return {
          status: 'error',
          message: e.message,
          succeed: false
        }
      }      
    }
}
