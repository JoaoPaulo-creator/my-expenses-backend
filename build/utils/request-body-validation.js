"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requetBody = void 0;
const zod_1 = require("zod");
exports.requetBody = zod_1.z.object({
    title: zod_1.z.string().min(1, 'title is required'),
    spendingAmount: zod_1.z.number()
}).strict();
