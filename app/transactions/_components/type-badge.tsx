import { TransactionType, type Transaction } from "@prisma/client";
import { Badge, Circle } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="hover:bg-deposit/15 bg-badge-deposit/15 font-bold text-badge-deposit">
        <Circle className="mr-2 fill-badge-deposit" size={10} />
        Ganho
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-badge-expense/30 font-bold text-badge-expense hover:bg-badge-expense/30">
        <Circle className="mr-2 fill-badge-expense" size={10} />
        Gasto
      </Badge>
    );
  }

  return (
    <Badge className="bg-badge-investment/15 font-bold text-badge-investment hover:bg-badge-investment/15">
      <Circle className="mr-2 fill-badge-investment" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
