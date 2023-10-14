import { tv } from "tailwind-variants"

export default function Container({ children, size }) {
  return <div className={container({ size: size })}>{children}</div>
}

const container = tv({
  base: "container px-6",
  variants: {
    size: {
      md: "2xl:max-w-screen-xl",
      lg: "2xl:max-w-[1440px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})
