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
const find_one_expense_service_1 = __importDefault(require("../services/find-one-expense.service"));
exports.default = new class FindOneExpenseController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const expense = yield find_one_expense_service_1.default.findOne(id);
                if (!expense) {
                    return res.status(404).json({ message: 'Expense not found' });
                }
                return res.json(expense);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error while trying to find specific expense' });
            }
        });
    }
};
