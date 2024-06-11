import styled from 'styled-components'
import { cores } from '../../styles'

export const Cards = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 100px;
  width: 1024px;
  height: 10290;
  left: 117px;
  bottom: 120px;
`

export const Restaurante = styled.div`
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 550px))
  justify-content: center;
  align-items: center;
  gap: 60px;
  border: 1px 0px 0px 0px;
`

export const MeusPratos = styled.div`
  background-color: ${cores.branca};
  justify-content: space-between;
`
export const Descricao = styled.p`
  width: 456px;
  height: 88px;
  top: 702px;
  left: 179px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`
export const Descricao2 = styled.p`
  width: 456px;
  height: 88px;
  top: 702px;
  left: 731px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`

export const Numero = styled.div`
  position: relative;
  width: 55px;
  height: 21px;
  bottom: 35px;
  left: 435px;
  gap: 0px;
  opacity: 0px;
`
export const Destaque = styled.h1`
  position: relative;
  width: 113px;
  height: 14px;
  bottom: 192px;
  left: 270px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  color: ${cores.branca};
  background-color: ${cores.rosa};
`

export const Destaque2 = styled.h1`
  position: relative;
  width: 53px;
  height: 14px;
  bottom: 206px;
  left: 387px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  color: ${cores.branca};
  background-color: ${cores.rosa};
`

export const ImagemPrincipal = styled.img`
  width: 472px;
  height: 217px;
  top: 440px;
  left: 171px;
  gap: 0px;
  opacity: 0px;
`

export const ImagemSecundaria = styled.img`
  width: 472px;
  height: 217px;
  top: 440px;
  left: 723px;
  gap: 0px;
  opacity: 0px;
`
export const Botao = styled.button`
  width: 90px;
  height: 18px;
  top: 4px;
  left: 6px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  color: ${cores.rosaLeite};
  background-color: ${cores.rosa};
`
