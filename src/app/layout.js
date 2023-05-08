import './globals.css'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'] ,subsets: ['latin'] })
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: 'Instagram-Clone',
  description: 'Instagran clone made using next and tailwindcss',
}

export default function RootLayout({ session,children}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
