import ExpensesRepository from "../repository/ExpensesRepository"

export default new class FindAllExpenses{
  async findAll(){
    const expenses = await ExpensesRepository.findAll()
    return expenses
  }
}