import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { startOfMonth, endOfMonth } from "date-fns";

export const getCurrentMonthTransactions = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentMonthTransaction = await db.transaction.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(new Date()),
        lt: endOfMonth(new Date()),
      },
    },
  });

  return currentMonthTransaction;
};