import React, { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import AuthContext from "../../contexts/authContext";
import profilePhoto from "../../assets/svg/person.svg";
import { parseISO, format } from "date-fns";
import BrasilLocale from "date-fns/locale/pt-BR";
import {
  Container,
  InfoConteiner,
  ProfileContainer,
  CardContainer,
  UserInfo,
} from "./styles";
import Cartao from "./components/Cartao";
import { Cartao as CartaoFidelidade } from "../../@types/carimbo";
import api from "../../services/api";

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext);
  const date = parseISO(String(user?.dados.data));
  const [card, setCard] = useState<CartaoFidelidade>([]);

  const loadCardData = async () => {
    try {
      const response = await api.get(`carimbos?id=${user?.dados.id}`, {
        headers: {
          authorization: user?.dados.token,
        },
      });
      setCard(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadCardData();
  }, []);

  return (
    <Container>
      <Header title="BK2 Barbearia" />
      <InfoConteiner>
        <ProfileContainer>
          <img src={profilePhoto} alt="user" />
          <UserInfo>
            <h1>{user?.dados.nome}</h1>
            <h2>Bem vindo, {user?.dados.apelido}</h2>

            <div>
              <fieldset>
                <label htmlFor="nascimento">Data de nascimento</label>
                <span>
                  {format(date, "dd 'de' MMMM", { locale: BrasilLocale })}
                </span>
              </fieldset>
              <fieldset>
                <label htmlFor="ranking">Ranking BK2</label>
                <span>{user?.ranking}</span>
              </fieldset>
              <fieldset>
                <label htmlFor="contato">Meu contato</label>
                <span>
                  {user?.contato?.contato
                    ? user.contato.contato
                    : "Sem contato cadastrado"}
                </span>
              </fieldset>
              <fieldset>
                <label htmlFor="indicacao">Indicações</label>
                <span>
                  {user?.indicacao.indicados
                    ? user?.indicacao.indicados + " Indicações"
                    : "Você ainda não fez indicações"}{" "}
                </span>
              </fieldset>
            </div>
          </UserInfo>
        </ProfileContainer>
        <CardContainer>
          <Cartao data={card} />
        </CardContainer>
      </InfoConteiner>
    </Container>
  );
};

export default Profile;
