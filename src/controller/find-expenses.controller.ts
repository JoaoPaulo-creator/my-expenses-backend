import { Request, Response } from "express"
import { prisma } from "../infra/PrismaService"
import FindAllExpensesService from "../services/find-all-expenses.service"

export default new class FindExpensesController {
  async findAll(req: Request, res: Response){

    try {
      const expense = await FindAllExpensesService.findAll()

      if(expense.length === 0){
        return res.status(404).json({ error: 'Cannot find expense list' })
      }
      return res.json(expense)

    } catch (error) {
      return res.json(error)
    }
  }
}