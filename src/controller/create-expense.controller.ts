import { Request, Response } from "express"
import CreateExpenseSerive from "../services/create-expense.service"

export default new class ExpenseController {

  async store(req: Request, res: Response){
    const { title, spendingAmount }: any = req.body
    const expense = await CreateExpenseSerive.create(title, spendingAmount)
    return res.status(201).json(expense)
  }
}