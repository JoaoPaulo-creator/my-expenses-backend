-- CreateTable
CREATE TABLE "Expenses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "spendingAmount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Expenses_id_key" ON "Expenses"("id");
