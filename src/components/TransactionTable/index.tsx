import React, { useContext } from "react"
import { TransactionsContext } from "../../transactionsContext";
import { Container } from "./styles"

export const TransactionTable: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>

                <td className={transaction.type} >
                  {transaction.type === 'withdraw' && '- '}
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.value)
                  }
                </td>

                <td>{transaction.category}</td>

                <td>
                  {
                    new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(transaction.createdAt))
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}