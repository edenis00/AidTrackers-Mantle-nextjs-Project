import { getConnection } from "@/lib/wallet/connector";
import { ConnectionType } from "@/lib/wallet/supported-connectors";
import { Connector } from "@web3-react/types";


export default function useDisconnectFromWallet(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  const tryDeactivateConnector = async (connector: Connector): Promise<null | undefined> => {
    connector.deactivate?.()
    connector.resetState()
    return null
  }

  const disconnectWallet = async (): Promise<null | undefined> => {
    try {
      const connectionType = (window?.localStorage?.getItem("ConnectionType")) as keyof typeof ConnectionType
      const deactivation = await tryDeactivateConnector(getConnection(ConnectionType[connectionType]).connector);

      if (deactivation === undefined) return
      
      window?.localStorage?.removeItem('ConnectionType')
      setOpen(false)
      return;
    } catch (disconnectWalletError) {
      console.log({variant: "error", description: "An error occured trying to disconnect wallet. Try again"})
    }
  }

  return disconnectWallet
}