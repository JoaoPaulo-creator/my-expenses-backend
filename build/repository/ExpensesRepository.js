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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
exports.default = new class ExpensesRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const findExpenses = yield prisma_1.prisma.expenses.findMany();
            return findExpenses;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const expense = yield prisma_1.prisma.expenses.findUnique({
                where: {
                    id: id
                }
            });
            return expense;
        });
    }
    create(title, spendingAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            const createExpense = yield prisma_1.prisma.expenses.create({
                data: {
                    title: title,
                    spendingAmount: spendingAmount
                }
            });
            return createExpense;
        });
    }
    update(id, { title, spendingAmount }) {
        return __awaiter(this, void 0, void 0, function* () {
            const expense = yield prisma_1.prisma.expenses.update({
                where: {
                    id
                },
                data: {
                    title,
                    spendingAmount
                }
            });
            return expense;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const expense = yield prisma_1.prisma.expenses.delete({
                where: {
                    id: id
                }
            });
            return expense;
        });
    }
};
