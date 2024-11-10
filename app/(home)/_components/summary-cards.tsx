import { PiggyBank, TrendingDown, TrendingUp, WalletIcon } from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  depositsTotal: number;
  investimentsTotal: number;
  expensesTotal: number;
  canAddTransaction: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investimentsTotal,
  expensesTotal,
  canAddTransaction,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        canUserAddTransaction={canAddTransaction}
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
        type="secondary"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          canUserAddTransaction={canAddTransaction}
          icon={<PiggyBank size={16} />}
          title="Investido"
          amount={investimentsTotal}
          type="secondary"
        />

        <SummaryCard
          canUserAddTransaction={canAddTransaction}
          icon={<TrendingUp size={16} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />

        <SummaryCard
          canUserAddTransaction={canAddTransaction}
          icon={<TrendingDown size={16} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
