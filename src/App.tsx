
import Header from './components/Header'
import Listagem from './components/Listagem'
import Rodape from './components/Rodape'
import { GlobalCss, Container } from './styles'


function App() {
  return (
    <>
      <GlobalCss />
    <Container>
      <Header />
      <Listagem />
      <Rodape />
    </Container>
    </>
  )
}

export default App
