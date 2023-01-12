import Router from 'express'
import ExpenseController from './controller/Expense.controller'




const router = Router()

router.post('/expenses', ExpenseController.store)


export default router