import { prisma } from "../infra/PrismaService"


export default new class ExpensesRepository {

  async findAll(){
    const findExpenses = await prisma.expenses.findMany()
    return findExpenses
  }

  async findOne(id: any){
    const expense: any = await prisma.expenses.findUnique({
      where: {
        id: id
      }
    })
    return expense
  }

  async create(title: any, spendingAmount: any){

    const createExpense = await prisma.expenses.create({
        data: {
          title: title,
          spendingAmount: spendingAmount
        }
    })
    return createExpense
  }

  async update(id: any, {title, spendingAmount} :any){
    const expense = await prisma.expenses.update({
      where: {
        id
      },
       data: {
        title,
        spendingAmount
       }
    })

    return expense
  }

  async delete(id: any){
      const expense = await prisma.expenses.delete({
        where: {
          id: id
        }
      })

      return expense
  }
}