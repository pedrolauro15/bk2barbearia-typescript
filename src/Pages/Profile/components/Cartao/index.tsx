import React from "react";
import { Container } from "./styles";
import carimbo from "../../../../assets/carinha_preta.png";
import { Cartao as CartaoFidelidade } from "../../../../@types/carimbo";

export interface Props {
  data: CartaoFidelidade;
}

const Cartao: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <section>
        <div>
          <header>Corte 1</header>
          <div>{data[0] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 2</header>
          <div>{data[1] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 3</header>
          <div>{data[2] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Grátis</header>
          <div>{data[3] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
      </section>
      <section>
        <div>
          <header>Corte 4</header>
          <div>{data[4] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 5</header>
          <div>{data[5] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 6</header>
          <div>{data[6] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Grátis</header>
          <div>{data[7] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
      </section>
      <section>
        <div>
          <header>Corte 7</header>
          <div>{data[8] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 8</header>
          <div>{data[9] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 9</header>
          <div>{data[10] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Grátis</header>
          <div>{data[11] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
      </section>
      <section>
        <div>
          <header>Corte 10</header>
          <div>{data[12] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 11</header>
          <div>{data[13] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Corte 12</header>
          <div>{data[14] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
        <div>
          <header>Grátis</header>
          <div>{data[15] && <img src={carimbo} alt="carimbo" />}</div>
        </div>
      </section>
    </Container>
  );
};

export default Cartao;
