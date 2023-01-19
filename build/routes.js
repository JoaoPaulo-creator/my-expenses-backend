"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_expense_controller_1 = __importDefault(require("./controller/delete-expense.controller"));
const find_expenses_controller_1 = __importDefault(require("./controller/find-expenses.controller"));
const find_one_expense_controller_1 = __importDefault(require("./controller/find-one-expense.controller"));
const update_expense_controller_1 = require("./controller/update-expense.controller");
const router = (0, express_1.default)();
const create_expense_controller_1 = __importDefault(require("./controller/create-expense.controller"));
router.get('/expenses', find_expenses_controller_1.default.findAll);
router.get('/expenses/:id', find_one_expense_controller_1.default.index);
router.post('/expenses', create_expense_controller_1.default.store);
router.patch('/expenses/:id', update_expense_controller_1.update);
router.delete('/expenses/:id', delete_expense_controller_1.default.delete);
exports.default = router;
