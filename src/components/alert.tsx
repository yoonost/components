import { ReactNode } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { IoIosWarning } from 'react-icons/io'
import { MdError } from 'react-icons/md'
import { BsInfoLg } from 'react-icons/bs'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface AlertProps {
    className?: string
    severity?: 'success' | 'warning' | 'danger' | 'info'
    variant?: 'colored' | 'primary' | 'colored-icon'
    style?: 'filled' | 'outlined'
    icon?: ReactNode
    title: string
    message: string
}

const filledVariants = cva(
    'flex flex-row items-center rounded-md px-3 py-2.5', {
    variants: {
        colored: {
            success: 'text-palette-gray-1 bg-palette-success-primary',
            warning: 'text-palette-gray-1 bg-palette-warning-primary',
            danger: 'text-palette-gray-1 bg-palette-danger-primary',
            info: 'text-palette-gray-1 bg-palette-info-primary',
        },
        primary: {
            success: 'text-palette-gray-1 bg-palette-gray-5',
            warning: 'text-palette-gray-1 bg-palette-gray-5',
            danger: 'text-palette-gray-1 bg-palette-gray-5',
            info: 'text-palette-gray-1 bg-palette-gray-5',
        },
        'colored-icon': {
            success: 'text-palette-success-primary bg-palette-gray-5',
            warning: 'text-palette-warning-primary bg-palette-gray-5',
            danger: 'text-palette-danger-primary bg-palette-gray-5',
            info: 'text-palette-info-primary bg-palette-gray-5',
        }
    }
})

const outlinedVariants = cva(
    'flex flex-row items-center rounded-md px-3 py-2.5', {
    variants: {
        colored: {
            success: 'border-2 text-palette-success-primary border-palette-success-primary',
            warning: 'border-2 text-palette-warning-primary border-palette-warning-primary',
            danger: 'border-2 text-palette-danger-primary border-palette-danger-primary',
            info: 'border-2 text-palette-info-primary border-palette-info-primary',
        },
        primary: {
            success: 'border-2 text-palette-gray-1 border-palette-gray-5',
            warning: 'border-2 text-palette-gray-1 border-palette-gray-5',
            danger: 'border-2 text-palette-gray-1 border-palette-gray-5',
            info: 'border-2 text-palette-gray-1 border-palette-gray-5',
        },
        'colored-icon': {
            success: 'border-2 text-palette-success-primary border-palette-gray-5',
            warning: 'border-2 text-palette-warning-primary border-palette-gray-5',
            danger: 'border-2 text-palette-danger-primary border-palette-gray-5',
            info: 'border-2 text-palette-info-primary border-palette-gray-5',
        }
    }
})

const AlertIcon = ({ severity, icon }: { severity: 'success' | 'warning' | 'danger' | 'info', icon: ReactNode }) => {
    if (icon !== undefined) return icon
    if (severity === 'success') return <FaCheck className='w-5 h-auto mr-2.5' />
    if (severity === 'warning') return <IoIosWarning className='w-6 h-auto mr-2.5' />
    if (severity === 'danger') return <MdError className='w-6 h-auto mr-2.5' />
    if (severity === 'info') return <BsInfoLg className='w-6 h-auto mr-2.5' />
    return false
}

const AlertComponent = ({
                            className,

                            severity = 'info',
                            variant = 'primary',
                            style = 'filled',
                            icon,
                            title,
                            message
}: AlertProps) => {
    return (
        <div className={cn(
            style === 'filled' && variant === 'colored' && filledVariants({ colored: severity }),
            style === 'filled' && variant === 'primary' && filledVariants({ primary: severity }),
            style === 'filled' && variant === 'colored-icon' && filledVariants({ 'colored-icon': severity }),
            style === 'outlined' && variant === 'colored' && outlinedVariants({ colored: severity }),
            style === 'outlined' && variant === 'primary' && outlinedVariants({ primary: severity }),
            style === 'outlined' && variant === 'colored-icon' && outlinedVariants({ 'colored-icon': severity }),
            className
        )}>
            <AlertIcon severity={severity} icon={icon} />
            <div className='flex flex-col justify-center'>
                {title && <span className='text-palette-gray-1 font-medium'>{title}</span>}
                <span className='text-palette-gray-2'>{message}</span>
            </div>
        </div>
    )
}

AlertComponent.displayName = 'Alert'

export { AlertComponent as Alert, AlertIcon }