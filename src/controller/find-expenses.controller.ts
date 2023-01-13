import { Request, Response } from "express"
import FindAllExpensesService from "../services/find-all-expenses.service"

export default new class FindExpensesController {
  async findAll(req: Request, res: Response){
    const expenses = await FindAllExpensesService.findAll()
    if(!expenses){
      return res.status(404).json({ message: 'Expenses list are empty'})
    }

    return res.status(200).json(expenses)
  }
}