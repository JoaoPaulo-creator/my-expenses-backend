import { Request, Response } from "express"
import CreateExpenseSerive from "../services/create-expense.service"
import { requetBody } from "../utils/request-body-validation"
import { z } from "zod"


export default new class ExpenseController {

  async store(req: Request, res: Response){

    try {

      const { title, spendingAmount } = requetBody.parse(req.body)
      const expense = await CreateExpenseSerive.create(title, spendingAmount)

      return res.status(201).json(expense)

    } catch (error) {
      if(error instanceof z.ZodError){
        const { issues } = error

        return res.status(422).json(issues)
      }
    }
  }
}