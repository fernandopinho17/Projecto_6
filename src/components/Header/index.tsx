import { Fundo } from './styles'
import { Imagem } from './styles'
import { Divisao } from './styles'
import { Subtema } from './styles'
import { Ajustes } from './styles'

import vector from '../../assets/images/Vector (1).png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <Fundo>
    <img src={vector} alt="menu" />
    <Divisao>
      <Imagem src={logo} alt="efood" />
      <Subtema>
        Viva experiências gastronômica <br />
        <Ajustes>no conforto da sua casa</Ajustes>
      </Subtema>
    </Divisao>
  </Fundo>
)

export default Header
