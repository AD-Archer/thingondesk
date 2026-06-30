const SALES_TAX_RATE = 0.08875;
const DOLLARS_PER_HOUR = 5;

function getPrizeHours(price: number) {
  return Math.ceil((price + price * SALES_TAX_RATE) / DOLLARS_PER_HOUR);
}

type PrizeHoursProps = {
  price: number;
};

export function PrizeHours({ price }: PrizeHoursProps) {
  return (
    <dl className="mt-auto flex items-end justify-between gap-4 border-t-2 border-brand-dark/15 pt-5">
      <dt className="pb-1 text-sm font-bold uppercase text-brand-dark/70">
        Hours required
      </dt>
      <dd className="rounded-md bg-brand-gold px-3 py-1 text-3xl font-black text-brand-dark">
        {getPrizeHours(price)}
      </dd>
    </dl>
  );
}
