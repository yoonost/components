import { ReactNode } from 'react'
import { ThemeToggle } from './theme'
import Link from 'next/link'

export const Sidebar = ({ children }: { children: ReactNode }): ReactNode => {
    return (
        <div className='flex flex-row'>
            <div className="w-64 h-screen bg-palette-gray-5 p-4">
                <div className="flex justify-between items-center mb-6">
                    <span className='font-semibold text-lg'>Components</span>
                    <ThemeToggle />
                </div>
                <ul>
                    <li className="py-2 px-4 hover:bg-palette-gray-4 transition rounded-md">
                        <Link href={"/alert"}>Alert</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">{children}</div>
        </div>
    )
}