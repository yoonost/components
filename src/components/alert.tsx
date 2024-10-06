import { ReactNode } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { IoIosWarning } from 'react-icons/io'
import { MdError } from 'react-icons/md'
import { BsInfoLg } from 'react-icons/bs'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface AlertInterface {
    severity?: 'success' | 'warning' | 'error' | 'info'
    variant?: 'colored' | 'primary' | 'colored-icon'
    style?: 'filled' | 'outlined'
    icon?: ReactNode
    title: string
    message: string
}

const filledVariants = cva('', {
    variants: {
        colored: {
            success: 'text-palette-gray-1 bg-palette-success',
            warning: 'text-palette-gray-1 bg-palette-warning',
            error: 'text-palette-gray-1 bg-palette-error',
            info: 'text-palette-gray-1 bg-palette-info',
        },
        primary: {
            success: 'text-palette-gray-1 bg-palette-gray-5',
            warning: 'text-palette-gray-1 bg-palette-gray-5',
            error: 'text-palette-gray-1 bg-palette-gray-5',
            info: 'text-palette-gray-1 bg-palette-gray-5',
        },
        'colored-icon': {
            success: 'text-palette-success bg-palette-gray-5',
            warning: 'text-palette-warning bg-palette-gray-5',
            error: 'text-palette-error bg-palette-gray-5',
            info: 'text-palette-info bg-palette-gray-5',
        }
    }
})

const outlinedVariants = cva('', {
    variants: {
        colored: {
            success: 'border-2 text-palette-success border-palette-success',
            warning: 'border-2 text-palette-warning border-palette-warning',
            error: 'border-2 text-palette-error border-palette-error',
            info: 'border-2 text-palette-info border-palette-info',
        },
        primary: {
            success: 'border-2 text-palette-gray-1 border-palette-gray-5',
            warning: 'border-2 text-palette-gray-1 border-palette-gray-5',
            error: 'border-2 text-palette-gray-1 border-palette-gray-5',
            info: 'border-2 text-palette-gray-1 border-palette-gray-5',
        },
        'colored-icon': {
            success: 'border-2 text-palette-success border-palette-gray-5',
            warning: 'border-2 text-palette-warning border-palette-gray-5',
            error: 'border-2 text-palette-error border-palette-gray-5',
            info: 'border-2 text-palette-info border-palette-gray-5',
        }
    }
})

const AlertIcon = ({ severity, icon }: { severity: 'success' | 'warning' | 'error' | 'info', icon: ReactNode }) => {
    if (icon !== undefined) return icon
    if (severity === 'success') return <FaCheck className='w-5 h-auto mr-2.5' />
    if (severity === 'warning') return <IoIosWarning className='w-6 h-auto mr-2.5' />
    if (severity === 'error') return <MdError className='w-6 h-auto mr-2.5' />
    if (severity === 'info') return <BsInfoLg className='w-6 h-auto mr-2.5' />
    return false
}

const AlertComponent = ({ severity = 'info', variant = 'primary', style = 'filled', icon, title, message }: AlertInterface) => {
    return (
        <div className={cn('flex flex-row items-center rounded-md px-3 py-2.5',
            style === 'filled' && variant === 'colored' && filledVariants({ colored: severity }),
            style === 'filled' && variant === 'primary' && filledVariants({ primary: severity }),
            style === 'filled' && variant === 'colored-icon' && filledVariants({ 'colored-icon': severity }),
            style === 'outlined' && variant === 'colored' && outlinedVariants({ colored: severity }),
            style === 'outlined' && variant === 'primary' && outlinedVariants({ primary: severity }),
            style === 'outlined' && variant === 'colored-icon' && outlinedVariants({ 'colored-icon': severity })
        )}>
            <AlertIcon severity={severity} icon={icon} />
            <div className='flex flex-col justify-center'>
                {title && <span className='text-palette-gray-1 font-medium'>{title}</span>}
                <span className='text-palette-gray-2'>{message}</span>
            </div>
        </div>
    )
}

export { AlertComponent as Alert, AlertIcon }