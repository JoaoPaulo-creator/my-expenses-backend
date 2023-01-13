 import ExpensesRepository from "../repository/ExpensesRepository";

export default new class FindOneExpenseService {
  async findOne(id: any){
    return await ExpensesRepository.findOne(id)
  }
}