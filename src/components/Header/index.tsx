import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'
import { Timer, Scroll } from 'phosphor-react'

import PomodoroTimerLogo from '../../assets/PomodoroTimerLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={PomodoroTimerLogo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
