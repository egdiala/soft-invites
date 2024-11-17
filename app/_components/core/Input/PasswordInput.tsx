"use client"

import { cn } from '@/app/libs/cn'
import { forwardRef, Fragment, useState, type ReactNode } from 'react'
import { Description, Field, Input, Label } from '@headlessui/react'
import { Icon } from "@iconify-icon/react"
import solarEyeOutline from "@iconify-icons/solar/eye-outline"
import solarEyeClosedOutline from "@iconify-icons/solar/eye-closed-outline"
import './input.css'
import { RenderIf } from '../RenderIf'

interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
  /**
   * Label for input element
   */
  label?: string;
  /**
   * Error message
   */
  error?: string | boolean;
  /**
   * Helper text
   */
  help?: string | ReactNode;
  /**
   * Element to render
   */
  actionLabel?: ReactNode;
  /**
   * Optional input
   */
  optional?: boolean;
  /**
   * Whether or not the field is disabled.
   */
  disabled?: boolean;
  /**
   * When true, clicking the label won't focus the associated form control.
   */
  passive?: boolean;
  /**
   * Right icon to render
   */
  iconRight?: string;
  /**
   * Left icon to render
   */
  iconLeft?: string;
  /**
   * Prop to show and hide password
   */
  showPassword?: boolean;
  /**
   * Other unknown attributes
   */
  [x: string]: unknown;
}


const PasswordInput = forwardRef(function PasswordInput({ label, error, optional, actionLabel, iconLeft, iconRight, className, help, disabled, passive, showPassword, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) {
    const [togglePassword, setTogglePassword] = useState<boolean>(false);
  
    const toggleVisibility = () => {
        setTogglePassword(togglePassword ? false : true);
    };
    return (
        <Field disabled={disabled} className="soft-input--outer">
            <RenderIf condition={!!label}>
                <div className={cn(actionLabel ? "justify-between" : "justify-start", "flex items-center")}>
                    <div className="text-sm tracking-custom flex gap-px items-center">
                        <Label passive={passive} className="text-sm/6 font-medium text-neutral-20">{label}</Label>
                        {!!optional && (<span className="font-normal text-gray-500 text-sm">(Optional)</span>)}
                    </div>
                    {actionLabel}
                </div>
            </RenderIf>
            <div className="soft-input--inner">
                <Input as={Fragment}>
                    {() => <input ref={ref} type={showPassword && togglePassword ? "text" : "password"} className={cn("soft-input peer", iconLeft && `soft-input--left`, iconRight && `soft-input--right`, error ? "soft-input--border-error" : "soft-input--border", className)} {...props} /> }
                </Input>
                <RenderIf condition={!!props.value}>
                    <div className="password-blur--container">
                        {(props?.value as string)?.split("")?.map(() => "•")}
                        <div className="password-blur" />
                    </div>
                </RenderIf>
                <RenderIf condition={!!showPassword}>
                    <button
                        type='button'
                        onClick={() => toggleVisibility()}
                        className={`${showPassword ? "toggle-password-icon" : "hidden"}`}
                    >
                        <Icon icon={togglePassword ? solarEyeClosedOutline : solarEyeOutline} className="text-neutral-40" width={24} height={24} />
                    </button>
                </RenderIf>
            </div>
            <RenderIf condition={!!help}>
                <Description className="text-sm/6 text-neutral-90">{help}</Description>
            </RenderIf>
            <RenderIf condition={!!error}>
                <span className="soft-input--error">{error}</span>
            </RenderIf>
        </Field>
    )
})

export default PasswordInput;