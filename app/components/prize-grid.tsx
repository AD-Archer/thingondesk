import Image from "next/image";
import { ExternalPrizeLink } from "./external-prize-link";

const SALES_TAX_RATE = 0.08875;
const DOLLARS_PER_HOUR = 5;

const prizes = [
  {
    name: "Amazon Echo Spot",
    price: 79.99,
    href: "https://www.amazon.com/dp/B0BFC7WQ6R?ref=clp_cat_p_0&th=1",
    image: "https://m.media-amazon.com/images/I/71cSMRiDN2L._AC_SL1500_.jpg",
  },
  {
    name: "Lenovo Tab One",
    price: 134.99,
    href: "https://www.amazon.com/Lenovo-Tab-One-Lightweight-Streaming/dp/B0F1NHSFMF/ref=sr_1_3?crid=2GAVB2D6Z4IFY&dib=eyJ2IjoiMSJ9.n6p04dBRozUi8gGEwiH4CfkkH5l-ra0wp6ItzMmRqiT6iU3O0pK1XuCN8rwlYVz6kvsYUOrM0mfUD6qSCAuaS1XW6AoSef7HsEFOWD8kDJgld6IVgTeuMa6C9cW2N6IbNDanlJT01t4TOf6RHnAFxy_A-0Bkj2wootkFG5BwDRG1SnNm-uOe4TFeB1J1pc1FCsCfV3x6Afurp93Ty6JdKvR4zJ4p-sIav0QKB6CLV5s.pkWnRP9AFbHWlXzLQqnJJfMnhJUqdW9RHsS6sdBGKLw&dib_tag=se&keywords=tablet&qid=1782842185&sprefix=table%2Caps%2C168&sr=8-3&th=1",
    image: "https://m.media-amazon.com/images/I/713r2sAaC+L._AC_SL1500_.jpg",
  },
  {
    name: "Apple iPad, 2025 Wi-Fi + Cellular, 128GB",
    price: 355.99,
    href: "https://www.amazon.com/Apple-11-inch-Wi-Fi-Cellular-128GB/dp/B0F636Z3NS/ref=sr_1_3?crid=F7ID0JVXXA0F&dib=eyJ2IjoiMSJ9.9ffvSXuh6USykgDxAC6OnZLW8oWab5aFRP1_wh7JTRPDY2Au0Pec9yP-6Y9oWd1dzxrtQgv9oNVg07QN8IwTk3Zor6ilIEwiMhD7Qab2chxAk7L5qsiup4xIR9EJwux4ij0u1S-q5kzYJIKs5anHisQIHIxNcRK53qf-GFoWFmcA2ham04eCgd1_ZRHNHZfUZ8hks9Lg_Vtvk260_zcgTLReyhlJMzBbgarWUfBpZAQ.LodnNSiFgfICSuz2QZhHOHlBhpVWSCq_Ofvhji5IfyI&dib_tag=se&keywords=ipad%2B2026&qid=1782842387&sprefix=ipad%2B202%2Caps%2C162&sr=8-3&th=1",
    image: "https://m.media-amazon.com/images/I/51j9EvjBWGL._AC_SX679_.jpg",
  },
  {
    name: "Amazon Echo Show 5",
    price: 89.99,
    href: "https://www.amazon.com/dp/B09B2SBHQK?ref=clp_cat_p_0&th=1",
    image: "https://m.media-amazon.com/images/I/81qEr5kbIwL._AC_SL1500_.jpg",
  },
  {
    name: "Amazon Echo Show 11",
    price: 219.99,
    href: "https://www.amazon.com/dp/B0DC91H3JK?ref=clp_cat_p_4&th=1",
    image: "https://m.media-amazon.com/images/I/71iGGAiGZ9L._AC_SL1500_.jpg",
  },
  {
    name: "FEZIBO Standing Desk, 48 x 24 Inches",
    price: 94.99,
    href: "https://www.amazon.com/FEZIBO-Standing-Electric-Adjustable-Computer/dp/B0F8MHPVPH/ref=sr_1_2?crid=TYDTVH3UAL5I&dib=eyJ2IjoiMSJ9.jKr2pidEqRjl_2EB2Coaw5TO3NceW-Rhk4DHrj03mH-nw58f1bSnuLeuUg-sU83_nuSHidFKrzRFef5iUZUFj0mhdhpLgax8Aq08Jb4ObE1hQrd61k88JpRan_Bvl7cZAD6coYgKu2lbfshjzio3xxCC0B7HF911gooYUGn5MPfmwEEO7NGocOhIfoUThik95uEz29PyOtfxxBwDfUfYAws4zoSDmltPIQ9aEFIyccK2MPhn0gAc6tSi7bHi_H4gVdY1ctHoTHv8JbyOk0MRlVGSkxuN_YUPQBHj6nfk6dQ.JUy7LHWmrPQSxzWEBgxP8S2qKrGlF9w7hklRu0QBfLY&dib_tag=se&keywords=moving%2Bdesk&qid=1782842481&s=amazon-devices&sprefix=moving%2Bdes%2Camazon-devices%2C149&sr=1-2&th=1",
    image: "https://m.media-amazon.com/images/I/71smFjr2QgL._AC_SL1500_.jpg",
  },
  {
    name: "Nintendo Sound Clock: Alarmo",
    price: 97.49,
    href: "https://www.amazon.com/Nintendo-Sound-Clock-Alarmo-Alarm/dp/B0DKCB3SSG/ref=sr_1_1?crid=BYJ8MDUINRA0&dib=eyJ2IjoiMSJ9.fsiK9UVdOi7-u8z3jRafZYJLs_ohTQsE3H5bPOaeq_uytDeyPYGYNemroS8PajBr8tyOiK99yiiRhJk4RUFWazlKG3QyKmOyGyUhKaMgdT4I8nom0xlS4Zat6C-CHQWUsLCb8UoJIHkdGalQ8LX8iwHvfGArKx27SdgqNqHUxfWpkNhKhtcaKH_QM_p7vEt6-oLxanvEsnYd3mpEdvCR95hLrhhivxSNy9pgTccCoEy6J-63_dEuo_anUnTCmx3hDhTb14qsY9ZcPECH8CU_WwVyh5b9p3q3fITTbZCtjx4.tcv0VdzJJAnhcSdLRAlN-R8vv0wlBqoAcRkpE9H4TMY&dib_tag=se&keywords=nintendo+alarmo&qid=1782842560&sprefix=nintendo+alarmo%2Caps%2C159&sr=8-1",
    image:
      "https://www.cnet.com/a/img/resize/88625d42a2942844b0ec4d05590d15eba552f918/hub/2024/10/10/f21b1640-a474-468b-99de-a2490d619f61/p1023282-00-00-46-03-still004.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    name: "ELECROW ESP32 E-Ink Display 5.79",
    price: 50,
    href: "https://www.amazon.com/ELECROW-CrowPanel-Compatible-Resolution-Interface/dp/B0FX4PDW6M/ref=sr_1_4?crid=220RBNUS20MZX&dib=eyJ2IjoiMSJ9.FIk-9zxreTfi4mj0DvG8JMCcZmihnyGlBYNCUpBssBqQOfbwoOb9c33Pw_lWLc9iAcFSePZy09xPg6VK1VKJcSI_C_jj7MjE3C1xZp1d1NY.eZqUCZcg1Y7B2B-UTWT0Y2OHpU3ML4LiD_Rq3bokGGg&dib_tag=se&keywords=eink%2Bdesk%2Bdisplay&qid=1782842642&sprefix=eink%2Bdesk%2Caps%2C176&sr=8-4&th=1",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61GPSXlWP7L._AC_UL348_SR348,348_.jpg",
  },
  {
    name: "TRMNL",
    price: 139,
    href: "https://shop.trmnl.com/collections/devices/products/trmnl",
    image:
      "https://shop.trmnl.com/cdn/shop/files/og-black-stand_dd52ba52-e32b-48aa-9a85-5a4d76878383.jpg?v=1772066153&width=1400",
  },
];

function getPrizeHours(price: number) {
  return Math.ceil((price + price * SALES_TAX_RATE) / DOLLARS_PER_HOUR);
}

export function PrizeGrid() {
  return (
    <section className="mt-10 w-full" aria-labelledby="prizes-heading">
      <h2
        id="prizes-heading"
        className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50"
      >
        Prizes
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {prizes.map((prize) => {
          const hours = getPrizeHours(prize.price);

          return (
            <ExternalPrizeLink
              key={prize.name}
              href={prize.href}
              className="flex min-h-72 flex-col rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900">
                {prize.image ? (
                  <Image
                    src={prize.image}
                    alt=""
                    width={320}
                    height={240}
                    className="h-full w-full object-contain"
                  />
                ) : null}
              </div>
              <h3 className="mt-4 min-h-14 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {prize.name}
              </h3>
              <dl className="mt-auto flex items-end justify-between gap-4 pt-5">
                <dt className="pb-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Hours required
                </dt>
                <dd className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                  {hours}
                </dd>
              </dl>
            </ExternalPrizeLink>
          );
        })}
      </div>
    </section>
  );
}
