import type { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  amount: number;
}

const PercentageItem = ({ icon, title, amount }: PercentageItemProps) => {
  return (
    <div className="item-center flex justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-white/[3%] p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{amount}%</p>
    </div>
  );
};

export default PercentageItem;
