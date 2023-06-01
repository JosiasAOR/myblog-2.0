import './globals.css'
import styles from './componets/banner/navegation.module.css'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import NavBar from './componets/banner/NavigationBar';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meu blog Pessoal',
  description: 'Sobre mim e o mundo Tech',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <NavBar/>

      {children}
        
      
      
      </body>
    </html>
  )
}
