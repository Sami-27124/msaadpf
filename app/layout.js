import './globals.css'
import { Inter } from 'next/font/google'
import WhatsApp from '../components/WhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Saad | Full Stack Developer',
  description: 'Explore the portfolio of Muhammad Saad, a full stack developer specializing in modern web applications and innovative solutions.',
  icons: {
    icon: '/s.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsApp />
      </body>
    </html>
  )
}
