import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'

export default function Button({ to, href, children, variant = 'dark', className = '' }) {
  const cls = `btn btn-${variant} ${className}`

  const inner = (
    <span className="btn__inner">
      {children}
      <span className="btn__icon-wrap">
        <ArrowIcon className="btn__icon" />
        <ArrowIcon className="btn__icon-dup" />
      </span>
    </span>
  )

  if (to) {
    return <Link to={to} className={cls}>{inner}</Link>
  }
  if (href) {
    return <a href={href} className={cls}>{inner}</a>
  }
  return <button className={cls}>{inner}</button>
}
