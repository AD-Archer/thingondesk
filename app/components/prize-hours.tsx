const SALES_TAX_RATE = 0.08875;
const DOLLARS_PER_HOUR = 5;

export function getPrizeHours(price: number) {
  return Math.ceil((price + price * SALES_TAX_RATE) / DOLLARS_PER_HOUR);
}

type PrizeHoursProps = {
  price: number;
};

export function PrizeHours({ price }: PrizeHoursProps) {
  return (
    <dl className="mt-auto flex items-end justify-between gap-4 border-t border-brand-dark/10 pt-5">
      <dt className="pb-1 text-lg font-black uppercase text-brand-dark/60">
        Hours required
      </dt>
      <dd className="rounded-md bg-brand-green px-3 py-1 text-2xl font-black text-brand-light shadow-[inset_0_-2px_0_rgba(37,22,5,0.18)]">
        {getPrizeHours(price)}
      </dd>
    </dl>
  );
}
