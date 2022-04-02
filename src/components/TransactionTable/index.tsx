import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export const TransactionTable = () => {
  useEffect(() => {
    api.get("transactions")
      .then(({ data }) => console.log(data))
  }, [])

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
          <tr>
            <td>Almoço</td>
            <td className="withdraw" >- R$ 24,00</td>
            <td>Alimentação</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit" >R$ 4.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}