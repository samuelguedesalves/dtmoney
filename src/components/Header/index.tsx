import React from "react";
import logoImg from '../../assets/logo.svg';
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionalModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewTransactionalModal
}) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionalModal} >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}