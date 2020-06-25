export interface User {
  dados: {
    token: string;
    idcliente: number;
    nome: string;
    apelido: string;
    dia: number;
    mes: number;
    ano: number;
  };
  contato?: {
    contato: string;
  };
  indicacao: {
    indicados: number;
  };
  ranking: {
    ranking: string;
  };
}