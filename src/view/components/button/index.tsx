import { cn } from "@/app/utils/cn"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-blue-600 py-3 px-4 rounded-lg text-gray-60 flex items-center justify-center hover:bg-blue-300 transition-colors cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
