
import { Request, Response } from "express";
import findOneExpenseService from "../services/find-one-expense.service";
import updateExpenseService from "../services/update-expense.service";

export default new class UpdateExpenseController {
  async update(req: Request, res: Response){
    const { id }: any = req.params
    const { title, spendingAmount } = req.body
    const expenseId = await findOneExpenseService.findOne(id)

    if(!expenseId){
      return res.status(404).json({ message: 'Expense not found'})
    }

    const expense = await updateExpenseService.update(id, { title, spendingAmount })
    return res.json(expense)
  }
}