import { prisma } from "../infra/PrismaService"


export default new class ExpensesRepository {

  async create({ title }: any){

    const createExpense = await prisma.expenses.create({
        data: {
            title
        }
    })

    return createExpense
  }
}