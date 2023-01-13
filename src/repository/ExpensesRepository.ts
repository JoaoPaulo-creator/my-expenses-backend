import { prisma } from "../infra/PrismaService"


export default new class ExpensesRepository {

  async findAll(){
    const findExpenses = await prisma.expenses.findMany()
    return findExpenses
  }

  async findOne({ id }: any){
    const findExpense = await prisma.expenses.findUnique({
      where: {
        id
      }
    })

    return findExpense
  }

  async create({ title }: any){

    const createExpense = await prisma.expenses.create({
        data: {
            title
        }
    })

    return createExpense
  }

  async delete({ id }: any){
      const expense = await prisma.expenses.delete({
        where: {
          id
        }
      })

      return expense
  }


}