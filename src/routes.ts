import Router from 'express'
import { create } from './controller/create-expense.controller'
import DeleteExpenseController from './controller/delete-expense.controller'
import FindExpensesController from './controller/find-expenses.controller'
import findOneExpenseController from './controller/find-one-expense.controller'

import { update } from './controller/update-expense.controller'
const router = Router()



router.get('/expenses', FindExpensesController.findAll)
router.get('/expenses/:id', findOneExpenseController.index)

router.post('/expenses', create)
router.patch('/expenses/:id', update)

router.delete('/expenses/:id', DeleteExpenseController.delete)

export default router