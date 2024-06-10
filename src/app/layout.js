
import { PRIMARY, SECONDARY } from './__utils__/utils';
import '../styles.css';
import '../extrastyles.css'
import WalletContextUser from './context/walletContext';
import NavigatorComp from './components/navigator/navigator';
import HeaderComp from './components/navigator/headernavigation';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link precedence="default" rel="preconnect" href="https://fonts.googleapis.com" />
      <link precedence="default" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link precedence="default" href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
      <body className='' style={{ color: SECONDARY, fontFamily: "Comic Neue" }}>
        <HeaderComp />
        {children}
        <NavigatorComp />

      </body>
    </html>
  )
}

