import { Header2, NavLink } from '../../style-components'
import { AsideNavStyle, NavStyle } from "./AsideNav.style"

export const AsideNav = () => {
  return (
    <>
      <AsideNavStyle>
        <img src="/logo.png" alt="PepeLaRana" />

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