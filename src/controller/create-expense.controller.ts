import { Request, Response } from "express"
import CreateExpenseSerive from "../services/create-expense.service"
import { requetBody } from "../utils/request-body-validation"


export default new class CreateExpenseController{
  async store(req: Request, res: Response){
    const { title, spendingAmount } = requetBody.parse(req.body)
    const expense = await CreateExpenseSerive.create(title, spendingAmount)

    return res.status(201).json(expense)
  }
}