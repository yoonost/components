import { ReactNode } from 'react'
import { ButtonVariants } from './button'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { cn } from '@/libs/utils'

interface LinkProps extends NextLinkProps {
    className?: string

    variant?: 'default' | 'success' | 'danger' | 'primary'
    style?: 'filled' | 'outlined'
    size?: 'small' | 'medium' | 'large'
    children: ReactNode
}

const LinkComponent = ({
                           className,

                           variant = 'default',
                           style = 'filled',
                           size = 'medium',
                           children,

                           ...props
}: LinkProps): ReactNode => {
    return (
        <NextLink className={cn(style === 'filled' ? ButtonVariants({ filled: variant }) : ButtonVariants({ outlined: variant }), ButtonVariants({ size }), className)} {...props}>{children}</NextLink>
    )
}

LinkComponent.displayName = 'Link'

export { LinkComponent as Link }