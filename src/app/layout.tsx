import { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from './theme'
import { Sidebar } from './sidebar'
import { cn } from '@/libs/utils'
import './globals.css'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en'>
            <body className={cn(GeistSans.variable, GeistMono.variable)}>
                <ThemeProvider attribute='class' defaultTheme='dark' themes={['light', 'dark']}>
                    <Sidebar>{children}</Sidebar>
                </ThemeProvider>
            </body>
        </html>
    )
}