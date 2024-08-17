import type { LucideIcon } from 'lucide-react'
import { cssInterop } from 'nativewind'

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  })
}
