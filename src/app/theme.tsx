'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { IoIosSunny, IoMdMoon } from 'react-icons/io'
import { Switch } from '@headlessui/react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const ThemeToggle = () => {
    const { setTheme, theme } = useTheme()
    const isLight: boolean = theme === 'light'
    return (
        <Switch checked={isLight} onChange={() => setTheme(isLight ? 'dark' : 'light')} className='group relative flex h-8 w-14 cursor-pointer rounded-full bg-palette-gray-4 p-1 transition-colors outline-none'>
            <span aria-hidden='true' className='pointer-events-none flex justify-center items-center size-6 translate-x-0 rounded-full bg-palette-background-primary p-1 transition group-data-[checked]:translate-x-6'>
                {isLight ? <IoIosSunny /> : <IoMdMoon />}
            </span>
        </Switch>
    )
}