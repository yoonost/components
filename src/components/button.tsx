import { ReactNode, ButtonHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: 'default' | 'positive' | 'negative' | 'outline' | 'neutral'
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
}

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-gray-200 text-sm transition-colors disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default: 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-700',
                positive: 'bg-green-600 hover:bg-green-700 disabled:bg-green-700',
                negative: 'bg-red-700 hover:bg-red-800 disabled:bg-red-900',
                outline: 'border-2 border-neutral-900 hover:bg-neutral-900',
                neutral: 'bg-neutral-800 hover:bg-neutral-900 disabled:bg-neutral-950',
            },
            size: {
                small: 'h-8 px-4',
                medium: 'h-9 px-4',
                large: 'h-10 px-7'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium'
        },
    }
)

const Button = ({ className, variant = 'default', size = 'medium', loading = false, ...props }: buttonProps): ReactNode => {
    return (
        <button className={cn(buttonVariants({variant, size, className}))} disabled={loading} {...props}>
            <svg className={cn('absolute fill-gray-300 animate-spin', loading ? 'opacity-100' : 'opacity-0', size === 'large' ? 'h-5 w-5' : size === 'medium' ? 'h-4 w-4' : 'w-3 h-3')} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z'/>
            </svg>
            <span className={cn(loading ? 'opacity-0' : 'opacity-100')}>{props.children}</span>
        </button>
    )
}

Button.displayName = 'Button'

export { Button, buttonVariants }