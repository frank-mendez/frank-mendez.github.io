import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-content',
                secondary: 'border-transparent bg-base-200 text-base-content',
                outline: 'border-base-content/30 text-base-content bg-transparent',
                success: 'border-transparent bg-success text-success-content',
            },
        },
        defaultVariants: {
            variant: 'secondary',
        },
    }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
