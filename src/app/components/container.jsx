import { tv } from "tailwind-variants"

const container = tv({
  base: "container",
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

export default function Container({ children, size }) {
  return <div className={container({ size: size })}>{children}</div>
}
