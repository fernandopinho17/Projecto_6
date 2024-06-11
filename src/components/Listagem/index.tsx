import { Cards } from './styles'
import { Restaurante } from './styles'
import { MeusPratos } from './styles'
import { Descricao } from './styles'
import { Descricao2 } from './styles'
import { Numero } from './styles'
import { Destaque } from './styles'
import { Destaque2 } from './styles'
import { ImagemPrincipal } from './styles'
import { ImagemSecundaria } from './styles'
import { Botao } from './styles'

import image1 from '../../assets/images/imagem (1).png'
import image2 from '../../assets/images/image 1.png'
import estrela from '../../assets/images/estrela.png'

const Listagem = () => (
  <Cards>
    <Restaurante>
      <MeusPratos>
        <ImagemPrincipal src={image1} alt="primeira-imagem" />
        <Destaque>Destaque da semana</Destaque>
        <Destaque2>Japonesa</Destaque2>
        <h1>Hioki Sushi</h1>
        <Numero>
          4<img src={estrela} alt="primeira-numero" />
        </Numero>
        <Descricao>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o lar
          lar com nosso delivery!
        </Descricao>
        <Botao>Saiba mais</Botao>
      </MeusPratos>
      <MeusPratos>
        <ImagemSecundaria src={image2} alt="segunda-imagem" />
        <h2>Italiana</h2>
        <h1>Hioki Sushi</h1>
        <Numero>
          6<img src={estrela} alt="primeiro-numero" />
        </Numero>
        <Descricao2>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Descricao2>
        <Botao>Saiba mais</Botao>
      </MeusPratos>
      <MeusPratos>
        <ImagemSecundaria src={image2} alt="segunda-imagem" />
        <h2>Italiana</h2>
        <h1>Hioki Sushi</h1>
        <Numero>
          4<img src={estrela} alt="primeira-numero" />
        </Numero>
        <Descricao2>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Descricao2>
        <Botao>Saiba mais</Botao>
      </MeusPratos>
      <MeusPratos>
        <ImagemSecundaria src={image2} alt="segunda-imagem" />
        <h2>Italiana</h2>
        <h1>Hioki Sushi</h1>
        <Numero>
          4<img src={estrela} alt="primeira-numero" />
        </Numero>
        <Descricao2>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Descricao2>
        <Botao>Saiba mais</Botao>
      </MeusPratos>
      <MeusPratos>
        <ImagemSecundaria src={image2} alt="segunda-imagem" />
        <h2>Italiana</h2>
        <h1>Hioki Sushi</h1>
        <Numero>
          4<img src={estrela} alt="primeira-numero" />
        </Numero>
        <Descricao2>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Descricao2>
        <Botao>Saiba mais</Botao>
      </MeusPratos>
      <MeusPratos>
        <ImagemSecundaria src={image2} alt="segunda-imagem" />
        <h2>Italiana</h2>
        <h1>Hioki Sushi</h1>
        <Numero>
          4<img src={estrela} alt="primeira-numero" />
        </Numero>
        <Descricao2>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Descricao2>
        <Botao>Saiba mais</Botao>
      </MeusPratos>
    </Restaurante>
  </Cards>
)

export default Listagem
