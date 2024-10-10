import { ReactNode, TextareaHTMLAttributes } from 'react'
import { inputVariants, descVariants } from './input'
import { cn } from '@/libs/utils'
import {cva} from "class-variance-authority";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    divClassname?: string
    labelClassName?: string
    inputClassName?: string
    descClassName?: string

    id?: string
    label?: string
    desc?: string
    severity?: 'success' | 'warning' | 'danger' | 'primary'
    size?: 'small' | 'medium' | 'large'
}

const textareaVariants = cva('', {
    variants: {
        size: {
            small: 'h-17 px-4',
            medium: 'h-24 px-4',
            large: 'h-32 px-4',
        }
    }
})

const TextareaComponent = ({
                               divClassname,
                               labelClassName,
                               inputClassName,
                               descClassName,

                               id,
                               label,
                               desc,
                               severity = 'primary',
                               size = 'medium',

                               ...props
}: TextareaProps): ReactNode => {
    return (
        <div className={cn('flex flex-col space-y-1.5', divClassname)}>
            {label && <label className={cn('text-palette-primary text-sm', labelClassName)} htmlFor={id}>{label}</label>}
            <textarea id={id} name={id} className={cn(inputVariants({ severity }), textareaVariants({ size }), inputClassName)} {...props} />
            {desc && <span className={cn(descVariants({ severity }), descClassName)}>{desc}</span>}
        </div>
    )
}

TextareaComponent.displayName = 'Textarea'

export { TextareaComponent as Textarea }