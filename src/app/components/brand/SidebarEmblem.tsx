import emblem from './sidebar-emblem.svg?raw'
import './sidebar-emblem.css'

const mobileEmblem = emblem.split('il-side-').join('il-mobile-')

type EmblemProps = {
  placement?: 'sidebar' | 'mobile'
}

export default function SidebarEmblem({ placement = 'sidebar' }: EmblemProps) {
  return (
    <span
      className="il-sidebar-emblem"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: placement === 'mobile' ? mobileEmblem : emblem }}
    />
  )
}