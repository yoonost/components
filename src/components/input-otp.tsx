import { ReactNode } from 'react'
import VerificationInput, { InputProps } from 'react-otp-input'
import { descVariants, inputVariants } from './input'
import { cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'

interface InputOtpProps {
    divClassname?: string
    labelClassName?: string
    separatorClassname?: string
    inputClassname?: string
    descClassName?: string

    label?: string
    desc?: string
    severity?: 'success' | 'warning' | 'danger' | 'primary'
    size?: 'small' | 'medium' | 'large'

    value: string
    numInputs?: number
    onChange: (otp: string) => void
}

const sizeVariants = cva('', {
    variants: {
        size: {
            small: 'size-9 text-xs',
            medium: 'size-10 text-sm',
            large: 'size-11 text-sm',
        }
    }
})

const InputOtpComponent = ({
                                divClassname,
                                labelClassName,
                                separatorClassname,
                                inputClassname,
                                descClassName,

                                label,
                                desc,
                                severity = 'primary',
                                size = 'medium',

                                value = '',
                                numInputs = 6,
                                onChange,

                                ...props
}: InputOtpProps): ReactNode => {
    return (
        <div className={cn('flex flex-col space-y-1.5 flex-wrap', divClassname)}>
            {label && <label className={cn('text-palette-primary text-sm', labelClassName)}>{label}</label>}
            <VerificationInput
                value={value}
                numInputs={numInputs}
                onChange={onChange}

                containerStyle={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}
                renderSeparator={(): ReactNode => <span className={cn('px-3 text-palette-gray-3', separatorClassname)}>-</span>}
                renderInput={(inputProps: InputProps) => (
                    <input {...inputProps} className={cn(
                        'bg-palette-gray-5 border text-center rounded-md outline-none transition',
                        inputVariants({ severity }), sizeVariants({ size }), inputClassname
                    )} />
                )}

                skipDefaultStyles={true}
                {...props}
            />
            {desc && <span className={cn(descVariants({ severity }), descClassName)}>{desc}</span>}
        </div>
    )
}

InputOtpComponent.displayName = 'InputOTP'

export { InputOtpComponent as InputOtp }