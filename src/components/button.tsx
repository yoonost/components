import { ReactNode, ButtonHTMLAttributes } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
    className?: string
    variant?: 'default' | 'success' | 'danger' | 'primary' | 'secondary'
    style?: 'filled' | 'outlined'
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
}

const variants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors disabled:pointer-events-none',
    {
        variants: {
            filled: {
                default: 'bg-palette-default-primary hover:bg-palette-default-secondary disabled:bg-palette-default-tertiary',
                success: 'bg-palette-success-primary hover:bg-palette-success-secondary disabled:bg-palette-success-tertiary',
                danger: 'bg-palette-danger-primary hover:bg-palette-danger-secondary disabled:bg-palette-danger-tertiary',
                primary: 'bg-palette-gray-5 hover:bg-palette-gray-4 disabled:bg-palette-gray-3',
                secondary: 'bg-palette-primary hover:bg-palette-gray-1 disabled:bg-palette-gray-2 text-palette-gray-5',
            },
            outlined: {
                default: 'border-2 border-palette-default-primary hover:bg-palette-default-primary disabled:border-palette-default-secondary',
                success: 'border-2 border-palette-success-primary hover:bg-palette-success-primary disabled:border-palette-success-secondary',
                danger: 'border-2 border-palette-danger-primary hover:bg-palette-danger-primary disabled:border-palette-danger-secondary',
                primary: 'border-2 border-palette-gray-5 hover:bg-palette-gray-5 disabled:border-palette-gray-4',
                secondary: 'border-2 border-palette-primary hover:bg-palette-primary disabled:border-palette-gray-2 hover:text-palette-gray-5',
            },
            size: {
                small: 'h-8 px-4',
                medium: 'h-9 px-4',
                large: 'h-10 px-7',
            }
        }
    }
);

const ButtonComponent = ({
                             className,

                             variant = 'default',
                             style = 'filled',
                             size = 'medium',
                             loading = false,

                             ...props
}: ButtonProps): ReactNode => {
    return (
        <button className={cn(style === 'filled' ? variants({ filled: variant }) : variants({ outlined: variant }), variants({ size }), className)} disabled={loading} {...props}>
            <ImSpinner8 className={cn('absolute animate-spin', loading ? 'opacity-100' : 'opacity-0', size === 'large' ? 'h-4 w-4' : size === 'medium' ? 'h-3.5 w-3.5' : 'w-3 h-3')} />
            <span className={cn(loading ? 'opacity-0' : 'opacity-100')}>{props.children}</span>
        </button>
    )
}

ButtonComponent.displayName = 'Button'

export { ButtonComponent as Button, variants as ButtonVariants }