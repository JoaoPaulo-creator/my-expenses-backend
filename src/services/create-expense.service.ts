import ExpensesRepository from "../repository/ExpensesRepository";

export default new class CreateExpenseSerive {

  async create(title: any, spendingAmount: any){
    return await ExpensesRepository.create(title, spendingAmount)
  }
}