export interface Carimbo {
  id: number;
  dia: number;
  mes: number;
  tipo_corte: number;
}

export type Cartao = Carimbo[];