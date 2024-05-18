
import { PRIMARY, SECONDARY } from './__utils__/utils';
import '../styles.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { CoinbaseWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
require("@solana/wallet-adapter-react-ui/styles.css");

// export const metadata = {
//   title: 'Servena',
//   description: 'Self Service Platform',
// }

export default function RootLayout({ children }) {

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new TrustWalletAdapter()
    ],
    [network]
  );
  return (
    <html lang="en">
      <body className='' style={{ color: SECONDARY }}>
        <ConnectionProvider endpoint={endpoint} >
          <WalletProvider wallets={wallets} >
            <WalletModalProvider>
              {children}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  )
}

