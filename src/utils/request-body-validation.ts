import { z } from "zod"

export const requetBody = z.object({
  title: z.string().min(1, 'title is required'),
  spendingAmount: z.number()
}).strict()