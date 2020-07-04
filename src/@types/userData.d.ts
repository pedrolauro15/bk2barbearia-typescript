export interface User {
  dados: {
    token: string;
    id: number;
    nome: string;
    apelido: string;
    data: Date;
  };
  contato?: {
    contato: string;
  };
  indicacao: {
    indicados: number;
  };
  ranking: string;
}