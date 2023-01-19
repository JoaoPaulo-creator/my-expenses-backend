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
const find_all_expenses_service_1 = __importDefault(require("../services/find-all-expenses.service"));
exports.default = new class FindExpensesController {
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const expense = yield find_all_expenses_service_1.default.findAll();
                if (expense.length === 0) {
                    return res.status(404).json({ error: 'Cannot find expense list' });
                }
                return res.json(expense);
            }
            catch (error) {
                return res.json(error);
            }
        });
    }
};
