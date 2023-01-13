import { prisma } from "../infra/PrismaService";
import { Request, Response } from "express";
import findOneExpenseService from "../services/find-one-expense.service";


export default new class FindOneExpenseController {
  async index(req: Request, res: Response){

    try {
      const { id }: any = req.params
      const expense = await findOneExpenseService.findOne(id)

      if(!expense){
        return res.status(404).json({message: 'Expense not found'})
      }

      return res.json(expense)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Error while trying to find specific expense'})
    }
  }
}