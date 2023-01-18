import ExpensesRepository from "../repository/ExpensesRepository"

export default new class DeleteExpenseService {
  async delete(id: string){
    const expense = await ExpensesRepository.delete(id)
    return expense
  }
}