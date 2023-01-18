import ExpensesRepository from "../repository/ExpensesRepository";

export default new class FindOneExpenseService {

  async findOne(id: string){
    return await ExpensesRepository.findOne(id)
  }
}