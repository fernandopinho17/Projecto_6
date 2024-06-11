import { Footer } from './styles'
import { Imagem } from './styles'
import { Logotipos } from './styles'

import { Paragrafo } from './styles'
import logo from '../../assets/images/logo.png'
import logotipos from '../../assets/images/redes sociais.png'

const Rodape = () => (
  <Footer>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Paragrafo>
    <Imagem src={logo} alt="efood" />
    <Logotipos src={logotipos} alt="efood" />
  </Footer>
)

export default Rodape
