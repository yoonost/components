import { ReactNode, InputHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'id'> {
    id?: string
    label?: string
    desc?: string
    severity?: 'success' | 'warning' | 'danger' | 'primary'
    size?: 'small' | 'medium' | 'large'
}

const inputVariants = cva('border bg-palette-gray-5 px-3 py-2 rounded-md outline-none transition', {
    variants: {
        severity: {
            success: 'border-palette-success-primary',
            warning: 'border-palette-warning-primary',
            danger: 'border-palette-danger-primary',
            primary: 'border-palette-gray-5 focus:border-palette-default-primary',
        },
        size: {
            small: 'h-9 px-4',
            medium: 'h-10 px-4',
            large: 'h-12 px-4',
        }
    }
})

const descVariants = cva('text-sm', {
        variants: {
            severity: {
                success: 'text-palette-success-primary',
                warning: 'text-palette-warning-primary',
                danger: 'text-palette-danger-primary',
                primary: 'text-palette-primary'
            }
        }
    }
)

const InputComponent = ({ id, label, desc, severity = 'primary', size = 'medium', ...props }: InputProps): ReactNode => {
    return (
        <div className={'flex flex-col space-y-1.5'}>
            {label && <label className={cn('text-palette-primary text-sm')} htmlFor={id}>{label}</label>}
            <input id={id} name={id} className={cn(inputVariants({ severity, size }))} {...props} />
            {desc && <span className={cn(descVariants({ severity }))}>{desc}</span>}
        </div>
    )
}

export { InputComponent as Input }