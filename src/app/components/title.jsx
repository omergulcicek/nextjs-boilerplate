import Balancer from "react-wrap-balancer"

import { cn } from "@/utils"

export default function Title({ type = "h1", className, children, ...props }) {
  return (
    <Balancer as={type} className={cn(className)} {...props}>
      {children}
    </Balancer>
  )
}
