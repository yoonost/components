import { ReactNode, InputHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string
    label?: string
    desc?: string
    severity?: 'success' | 'warning' | 'danger' | 'info' | 'primary'
}

const InputComponent = ({ id, label, desc, severity = 'primary', ...props }: InputProps): ReactNode => {
    return (
        <div className={'flex flex-col space-y-1'}>
            {label && <label className={cn('text-palette-primary font-medium text-sm')} htmlFor={id}>{label}</label>}
            <input id={id} name={id} className={cn('border border-0 px-2 py-1.5 bg-palette-gray-5 focus:border-palette-default-primary rounded-md outline-none transition')} {...props} />
        </div>
    )
}

export { InputComponent as Input }