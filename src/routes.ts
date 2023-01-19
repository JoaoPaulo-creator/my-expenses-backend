import Router from 'express'
import DeleteExpenseController from './controller/delete-expense.controller'
import FindExpensesController from './controller/find-expenses.controller'
import findOneExpenseController from './controller/find-one-expense.controller'
import CreateExpenseController from './controller/create-expense.controller'

import { update } from './controller/update-expense.controller'
import { teste } from './controller/teste'

const router = Router()


router.get('/expenses', FindExpensesController.findAll)
router.get('/expenses/:id', findOneExpenseController.index)
router.get('/', teste)


router.post('/expenses', CreateExpenseController.store)

router.patch('/expenses/:id', update)

router.delete('/expenses/:id', DeleteExpenseController.delete)

export default router