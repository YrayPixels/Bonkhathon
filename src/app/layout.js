
import { PRIMARY, SECONDARY } from './__utils__/utils';
import '../styles.css';
import '../extrastyles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='' style={{ color: SECONDARY }}>
        {children}
      </body>
    </html>
  )
}

