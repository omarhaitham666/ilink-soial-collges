import emblem from './sidebar-emblem.svg?raw'
import './sidebar-emblem.css'

export default function SidebarEmblem() {
  return (
    <span
      className="il-sidebar-emblem"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: emblem }}
    />
  )
}