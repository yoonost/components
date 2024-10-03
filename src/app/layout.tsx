import { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-black`}>
                {children}
            </body>
        </html>
    )
}
