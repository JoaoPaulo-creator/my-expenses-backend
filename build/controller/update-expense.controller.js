"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const zod_1 = require("zod");
const find_one_expense_service_1 = __importDefault(require("../services/find-one-expense.service"));
const update_expense_service_1 = __importDefault(require("../services/update-expense.service"));
const request_body_validation_1 = require("../utils/request-body-validation");
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { title, spendingAmount } = request_body_validation_1.requetBody.parse(req.body);
            const expenseId = yield find_one_expense_service_1.default.findOne(id);
            if (!expenseId) {
                return res.status(404).json({ message: 'Expense not found' });
            }
            const expense = yield update_expense_service_1.default.update(id, { title, spendingAmount });
            return res.json(expense);
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const { issues } = error;
                return res.status(422).json({ issues });
            }
        }
    });
}
exports.update = update;
