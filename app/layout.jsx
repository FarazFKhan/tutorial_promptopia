import "@styles/globals.css"

export const metadata = {
   title: "Promtopia",
   description: "Discover & Share AI Promts"
}

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <body>
            <div className="main">
               <div className="gradient" />
            </div>

            <mian className="app">
               {children}
            </mian>
         </body>
      </html>
   )
}

export default RootLayout