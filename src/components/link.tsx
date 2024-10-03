import { type ReactNode } from 'react'
import { buttonVariants } from './button'
import NextLink, { type LinkProps } from 'next/link'
import { cn } from '@/libs/utils'

interface buttonProps extends LinkProps {
    className?: string
    variant?: 'default' | 'positive' | 'negative' | 'outline' | 'neutral'
    size?: 'small' | 'medium' | 'large'
}

const Link = ({ className, variant = 'default', size = 'medium', ...props }: buttonProps): ReactNode => {
    return (
        <NextLink className={cn(buttonVariants({variant, size, className}))} {...props} />
    )
}

Link.displayName = 'Link'

export { Link }