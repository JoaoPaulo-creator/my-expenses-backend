import { Request, Response } from "express";
import findOneExpenseService from "../services/find-one-expense.service";
import updateExpenseService from "../services/update-expense.service";
import { requetBody } from "../utils/request-body-validation";


export default new class UpdateExpenseController {

  async update(req: Request, res: Response){
    const { id } = req.params
    const { title, spendingAmount } = requetBody.parse(req.body)
    const expenseId = await findOneExpenseService.findOne(id)

    if(!expenseId){
      return res.status(404).json({ message: 'Expense not found'})
    }

    const expense = await updateExpenseService.update(id, { title, spendingAmount })
    return res.json(expense)
  }
}