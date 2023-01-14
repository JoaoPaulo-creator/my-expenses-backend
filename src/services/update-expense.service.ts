import ExpensesRepository from "../repository/ExpensesRepository"


export default new class UpdateExpenseService {
  async update(id: any, { title, spendingAmount }: any){
    return await ExpensesRepository.update(id, { title, spendingAmount })
  }
}