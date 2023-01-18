import { Request, Response } from "express"
import deleteExpenseService from "../services/delete-expense.service"



export default new class DeleteExpenseController {
  async delete(req: Request, res: Response) {

    try {
      const { id }= req.params
      await deleteExpenseService.delete(id)

      return res.sendStatus(204)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}