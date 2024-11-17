import { forwardRef, useMemo, type ReactNode } from 'react'
import { Button, type ButtonProps } from '@headlessui/react'
import { cn } from '@/app/libs/cn'
import { Loader, RenderIf } from '@/app/_components/core'
import './button.css'

interface BaseButtonProps extends ButtonProps {
    /**
     * Shows a loading state on Button component
     */
    loading?: boolean;
    /**
     * Should the button fill it's parent container?
     */
    block?: boolean;
    /**
    * What theme to render
    */
    theme?: "primary" | "secondary" | "secondary-inverted" | "tertiary" | "text"
    /**
    * What size to render
    */
    size?: "48" | "44" | "40" | "32"
    /**
     * Renders child nodes passed into Button component
     */
    children?: string | ReactNode;
    /**
     * Other unknown attributes
     */
    [x: string]: unknown;
}


const BaseButton = forwardRef(function BaseButton({ loading, block, theme = "primary", size = "44", children, className, ...props }: BaseButtonProps, ref: React.Ref<HTMLButtonElement>) {
    const btnStyle = useMemo(() => {
        return `soft-button--${theme}`
    }, [theme])
    
    const btnSize = useMemo(() => {
        return `soft-button--${size}`
    },[size])

    const width = block && "soft-button--block";

    return (
        <Button ref={ref} className={cn("soft-button", btnStyle, width, theme !== "text" ? btnSize : "", className)} {...props}>
            <RenderIf condition={!!loading}>
                <div className="flex items-center justify-center">
                    <Loader className="spinner" />
                </div>
            </RenderIf>
            <RenderIf condition={!loading}>
                {children}
            </RenderIf>
        </Button>
    )
})

export default BaseButton;
