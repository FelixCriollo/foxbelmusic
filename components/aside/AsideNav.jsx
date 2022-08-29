import { Header2, NavLink } from '../../style-components'
import { AsideNavStyle, NavStyle } from "./AsideNav.style"
import Link from 'next/link'

export const AsideNav = () => {
  return (
    <>
      <AsideNavStyle>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="PepeLaRana" />
          </a>
        </Link>

        <NavStyle>
          <Header2 color="#ffffff" weight="bold">Playlist</Header2>
          <ul>
            <li><NavLink>Metal</NavLink></li>
            <li><NavLink>Para bailar</NavLink></li>
            <li><NavLink>Rock 90s</NavLink></li>
            <li><NavLink>Baladas</NavLink></li>
          </ul>
        </NavStyle>
      </AsideNavStyle>
    </>
  )
}