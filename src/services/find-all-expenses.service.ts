import ExpensesRepository from "../repository/ExpensesRepository"

export default new class FindAllExpenses{
  async findAll(){
    return await ExpensesRepository.findAll()
  }
}