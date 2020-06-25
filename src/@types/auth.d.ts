import { AxiosResponse } from "axios";
import { User } from "./userData";
import { Dispatch, SetStateAction } from 'react';

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(usuario: string, senha: string): Void;
  signOut(): void;
}
