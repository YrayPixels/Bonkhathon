
import { PRIMARY, SECONDARY } from './__utils__/utils';
import '../styles.css';
import '../extrastyles.css'
import WalletContextUser from './context/walletContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='' style={{ color: SECONDARY }}>
        <WalletContextUser>
          {children}
        </WalletContextUser>

      </body>
    </html>
  )
}

