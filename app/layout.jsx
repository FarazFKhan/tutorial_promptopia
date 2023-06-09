import "@styles/globals.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
   title: "Promtopia",
   description: "Discover & Share AI Promts"
}

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <body>
            <Provider>

               <div className="main">
                  <div className="gradient" />
               </div>

               <mian className="app">
                  <Nav />
                  {children}
                  <Analytics />
               </mian>

            </Provider>
         </body>
      </html>
   )
}

export default RootLayout