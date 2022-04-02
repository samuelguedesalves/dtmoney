import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}) => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

  function handleSetTypeDeposit() {
    setType('deposit');
  }

  function handleSetTypeWithdraw() {
    setType('withdraw');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type='button' onClick={onRequestClose} >
        <img src={closeImg} alt="close" />
      </button>

      <Container>
        <h2>New transaction</h2>

        <input
          type="text"
          placeholder="Titulo"
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={handleSetTypeDeposit}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>


          <RadioBox
            type="button"
            onClick={handleSetTypeWithdraw}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit" >
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}