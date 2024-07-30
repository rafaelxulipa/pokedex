import { Container } from "./style";
import logomarca from "../../assets/logoblack.png";

export function Footer() {
  return (
    <Container>
      <img src={logomarca} alt="logomarca" width={200}/>
    </Container>
  );
}
