import { Request, Response } from "express"
import CreateExpenseSerive from "../services/create-expense.service"

export default new class ExpenseController {

  async store(req: Request, res: Response){
    const { title }: any = req.body
    const expense = await CreateExpenseSerive.create(title)
    return res.status(201).json(expense)
  }
}