
import { PRIMARY, SECONDARY } from './__utils__/utils';
import '../styles.css';
import WalletContextUser from './context/walletContext';
// export const metadata = {
//   title: 'Servena',
//   description: 'Self Service Platform',
// }

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

