import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF',
  rosa: '#E66767',
  rosaClaro: '#FFF8F2',
  rosaLeite: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Robot, sans-serif;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
    overflow-x: hidden;
  }
`

export const Container = styled.div`
  max-width: 2031.81px;
  width: 100%;
  margin: 0 auto;
`
