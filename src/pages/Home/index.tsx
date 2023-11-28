import * as S from './styles'
import Zico from "../../assets/zico-fla.png"
import Torcida from "../../assets/bandeiras-torcida-flamengo-fumaca.jpg"

export function Home() {
  return (
    <S.Section>
      <img src={Zico} alt="zico" />
      <img src={Torcida} alt="torcida" />
    </S.Section>
  )
}
