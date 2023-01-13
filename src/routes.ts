import Router from 'express'
import ExpenseController from './controller/create-expense.controller'
import FindExpensesController from './controller/find-expenses.controller'


const router = Router()



router.get('/expenses', FindExpensesController.findAll)
router.post('/expenses', ExpenseController.store)


export default router