
import ExpensesRepository from "../repository/ExpensesRepository"

export default new class DeleteExpenseService {
  async delete({ id }: any){
    const expense = await ExpensesRepository.delete({ id })
    return expense
  }
}