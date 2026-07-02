"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalPrizeLink } from "./external-prize-link";
import { PrizeHours, getPrizeHours } from "./prize-hours";

const prizes = [
  {
    name: "Apple iPad, 2025 128GB WIFI + CELL Renewed",
    price: 355.99,
    href: "https://www.amazon.com/Apple-11-inch-Wi-Fi-Cellular-128GB/dp/B0F636Z3NS/ref=sr_1_3?crid=1BNR2CPTGGJSP&dib=eyJ2IjoiMSJ9.9ffvSXuh6USykgDxAC6OnXMD1Rk05aU81b5NB15UUrTfQI3xyfO-Scl3LKhSDZc0IQS3QAm5quFg8h_8E3XPNA3du1AIziU6e7hRq6Xvsqr8tSElsNcojf23BzHAv1C6Pxp9R5BR9TFK2QLMB-Zxtr29YBMlxiO9KWgz0FcoiGtndvnKb_ogjxKprczLKL5mohmFE_60HVQClT5ACu3AVn8HJ9vox9BoCIFYUFiTkvQ.oJUks03eCYYN8u67Li5xOiz0-VC2MWiRPwtKpx6XaOI&dib_tag=se&keywords=ipad&qid=1782942267&sprefix=ipad%2Caps%2C176&sr=8-3&th=1",
    image: "https://m.media-amazon.com/images/I/51j9EvjBWGL._AC_SL1200_.jpg",
  },
  {
    name: "2 lbs of candy",
    price: 10,
    href: "https://www.amazon.com/Ultimate-Assorted-Candy-Party-Mix/dp/B0BC2C83KM/ref=sr_1_9?crid=3OMI3AXXVC2Q0&dib=eyJ2IjoiMSJ9.9Gp9Ecq2UjcxDYz-wDUXO9sUVNYcsT44ONyk6BQ7c6GizXZmsojElvBIzlmQmNfyIX1CkJr5bnNx-yTU0_okQzzRctUrbLFKuCJCoNc2FM2gMO3JZa4VJ-F9xoK_SYE0kF3yPtFp37okC7NzgoYdRFsW0oQP6TD7ji7ICH6xHnYUhiFtd-X2l13z5n7e4_yAhOA2GT8McMF-s0GUoE2dyud7Q_Youbo_U-x9Mbd37XruKEzn7BwHXDjBQGSYyS3H5GEJMjcWDn5BinayYLVhD4XxBy3iEDPX3HD129IBGjw.7vP7BGKQsl0PCirvCBDlssdRlSIoiEK63n6i3AxfJ0k&dib_tag=se&keywords=candy&qid=1782936300&sprefix=candy%2Caps%2C216&sr=8-9&th=1",
    image: "https://m.media-amazon.com/images/I/917I2L+NG0L._SL1500_.jpg",
  },
  {
    name: "Lenovo Tab One",
    price: 134.99,
    href: "https://www.amazon.com/Lenovo-Tab-One-Lightweight-Streaming/dp/B0F1NHSFMF/ref=sr_1_3?crid=2GAVB2D6Z4IFY&dib=eyJ2IjoiMSJ9.n6p04dBRozUi8gGEwiH4CfkkH5l-ra0wp6ItzMmRqiT6iU3O0pK1XuCN8rwlYVz6kvsYUOrM0mfUD6qSCAuaS1XW6AoSef7HsEFOWD8kDJgld6IVgTeuMa6C9cW2N6IbNDanlJT01t4TOf6RHnAFxy_A-0Bkj2wootkFG5BwDRG1SnNm-uOe4TFeB1J1pc1FCsCfV3x6Afurp93Ty6JdKvR4zJ4p-sIav0QKB6CLV5s.pkWnRP9AFbHWlXzLQqnJJfMnhJUqdW9RHsS6sdBGKLw&dib_tag=se&keywords=tablet&qid=1782842185&sprefix=table%2Caps%2C168&sr=8-3&th=1",
    image: "https://m.media-amazon.com/images/I/713r2sAaC+L._AC_SL1500_.jpg",
  },
  {
    name: "Hen Glass Candy Dish",
    price: 17,
    href: "https://www.amazon.com/Vintage-Hen-Shaped-Decorative-Multi-Functional-Tabletop/dp/B0GYNW2JD8/ref=sr_1_9?crid=CARS0SY7H7T6&dib=eyJ2IjoiMSJ9.Fj4x-2fLzzbo0KQiC7He0scRTIicz88WZG2kj09ytcg8VO_DvfV2kVLDAJ6fx3555ayQuqGSAj6fkVAOW7KhSiqTaXgFOwgStEg_sWgfqC_TssHVylxz23nJWvdBLVincre9qbMrCKsXQor6IQtb1L29IUmJmFGZGOvDfz2IQf2yC-GsS-BljNITMsj-QjURY-slxz96EEXr0o6nR0E-XIlPTuX9rvfVUuSmfmZA2kDDFcjUPmOAF2fbQeInuB0fl4baejOFxbfdEfISj4iS8W4KtDEpnXtqRHENzEf3vqw.abS9wzh6a1pW_AyqnVKgu2NU2K6FEjATfiWjhijCmNo&dib_tag=se&keywords=candy%2Bbowl&qid=1782936068&sprefix=candy%2Bbow%2Caps%2C202&sr=8-9&th=1",
    image: "https://m.media-amazon.com/images/I/717xrHFm-FL._AC_SL1500_.jpg",
  },
  {
    name: "Vintage Gumball Machine",
    price: 31,
    href: "https://www.amazon.com/Northern-Popcorn-Company-Gumball-Machine/dp/B0055OY7XC/ref=sr_1_6?crid=2V0DVB1GG5TP&dib=eyJ2IjoiMSJ9.gr9_4LYGnOLZErcTWt6M8javWbh4YLP5fu7KNDFCiUSdWNme9powyHwKiIqkT5_trsen8inx6PwPbi1FUDKr-EZ3K76xcNpJZfkzmtfhltLKrrevBghEmghaNYjmWOqwmNlIY0qGy_3BSeKzjRNTn_C_vW0cadR3l1gEuB4wMZH6RBgjVWASyo0-qZXLmPosnKPXWT2oURiAEkQARP6Ew4nL4er5J53QLF13Fum8AVnxyocXFB678r9Iio1bchOk1sYctYdsVLWZw_qNa2Th_0smNvP2ykUocSJTXkFKO0g.JQ7QBOY_c4QexLLPmcVlUU7fQzXXwClBy8_kCWWLBVU&dib_tag=se&keywords=gumball%2Bmachine&qid=1782936334&sprefix=gumball%2Bmachin%2Caps%2C186&sr=8-6&th=1",
    image: "https://m.media-amazon.com/images/I/91V-SV9J8WL._AC_SL1500_.jpg",
  },
  {
    name: "Amazon Echo Show 5",
    price: 89.99,
    href: "https://www.amazon.com/dp/B09B2SBHQK?ref=clp_cat_p_0&th=1",
    image: "https://m.media-amazon.com/images/I/81qEr5kbIwL._AC_SL1500_.jpg",
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
    name: "12 lbs of candy",
    price: 71,
    href: "https://www.amazon.com/Ultimate-Assorted-Candy-Party-Mix/dp/B0BPZRGW74/ref=sr_1_9?crid=3OMI3AXXVC2Q0&dib=eyJ2IjoiMSJ9.9Gp9Ecq2UjcxDYz-wDUXO9sUVNYcsT44ONyk6BQ7c6GizXZmsojElvBIzlmQmNfyIX1CkJr5bnNx-yTU0_okQzzRctUrbLFKuCJCoNc2FM2gMO3JZa4VJ-F9xoK_SYE0kF3yPtFp37okC7NzgoYdRFsW0oQP6TD7ji7ICH6xHnYUhiFtd-X2l13z5n7e4_yAhOA2GT8McMF-s0GUoE2dyud7Q_Youbo_U-x9Mbd37XruKEzn7BwHXDjBQGSYyS3H5GEJMjcWDn5BinayYLVhD4XxBy3iEDPX3HD129IBGjw.7vP7BGKQsl0PCirvCBDlssdRlSIoiEK63n6i3AxfJ0k&dib_tag=se&keywords=candy&qid=1782936300&sprefix=candy%2Caps%2C216&sr=8-9&th=1",
    image: "https://m.media-amazon.com/images/I/917I2L+NG0L._SL1500_.jpg",
  },
  {
    name: "TRMNL",
    price: 139,
    href: "https://shop.trmnl.com/collections/devices/products/trmnl",
    image:
      "https://shop.trmnl.com/cdn/shop/files/og-black-stand_dd52ba52-e32b-48aa-9a85-5a4d76878383.jpg?v=1772066153&width=1400",
  },
  {
    name: "Lenovo Legion Tab Gen 3",
    price: 419.99,
    href: "https://www.lenovo.com/us/en/p/tablets/android-tablets/legion-tab-series/lenovo-legion-tab-gen-3/len103g0002",
    image:
      "https://p1-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-legion-tab-gen-3-01.png?height=584&width=584",
  },
  {
    name: "Amazon Fire HD 8 tablet, 8” HD Display, 32 GB (2022 release)",
    price: 67.99,
    href: "https://www.amazon.com/dp/B0CVDN4QS6?th=1",
    image: "https://m.media-amazon.com/images/I/717z5zjuBWL._AC_SL1500_.jpg",
  },
  {
    name: "Like-New Amazon Fire 7 tablet (newest model)",
    price: 50,
    href: "https://www.amazon.com/Like-New-Amazon-display-10-hour-battery/dp/B099GYVGW4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Xqi1fAXbYVaVQDpectnL0hX8ExQITrTc4o_ItrC3uqUOqauZDQnOCTFTcB1c_Bw60SjjevSTJzZQYtpur7LHuq89ku07y2yqQJwfoSRbJXxbyn9_MsRXX_vWzKgzINLUMUPdtx-Rf4fTVWtGq32wwr31IohSg9jyYZZG1vw9Fvdyxjyf20Fyw_Xt7PeXeDefDs5GT7eg_OF03kQIwpetmaPhfFRXn0pQ-eKVgYZPw_XqMEBdAwLOjVQUorm3oqiwY91NejTRkg4rJH_lMbmMzLry2KWqpGp1K6eMZoOaVoo.BhrGFE6kBj5HND71FjvE61QH68F6HLZACFdjMJqtPtE&dib_tag=se&keywords=amazon+fire+5&qid=1782846063&s=amazon-devices&sr=1-1&ufe=app_do%3Aamzn1.fos.ed73e2ba-4d06-4781-aee7-c317fe036206",
    image: "https://m.media-amazon.com/images/I/61pZPRMTAdL._AC_SL1000_.jpg",
  },
  {
    name: "Carlisle 13 oz Candy Bowl",
    price: 5.15,
    href: "https://www.amazon.com/Carlisle-453307-Plastic-Dessert-Bowls/dp/B004OA0YL2/ref=sr_1_8?crid=CARS0SY7H7T6&dib=eyJ2IjoiMSJ9.Fj4x-2fLzzbo0KQiC7He0scRTIicz88WZG2kj09ytcg8VO_DvfV2kVLDAJ6fx3555ayQuqGSAj6fkVAOW7KhSiqTaXgFOwgStEg_sWgfqC_TssHVylxz23nJWvdBLVincre9qbMrCKsXQor6IQtb1L29IUmJmFGZGOvDfz2IQf2yC-GsS-BljNITMsj-QjURY-slxz96EEXr0o6nR0E-XIlPTuX9rvfVUuSmfmZA2kDDFcjUPmOAF2fbQeInuB0fl4baejOFxbfdEfISj4iS8W4KtDEpnXtqRHENzEf3vqw.abS9wzh6a1pW_AyqnVKgu2NU2K6FEjATfiWjhijCmNo&dib_tag=se&keywords=candy%2Bbowl&qid=1782936068&sprefix=candy%2Bbow%2Caps%2C202&sr=8-8&th=1",
    image: "https://m.media-amazon.com/images/I/71PTatPe2YL._AC_SL1500_.jpg",
  },
  {
    name: "Amazon Echo Spot",
    price: 79.99,
    href: "https://www.amazon.com/dp/B0BFC7WQ6R?ref=clp_cat_p_0&th=1",
    image: "https://m.media-amazon.com/images/I/71cSMRiDN2L._AC_SL1500_.jpg",
  },
  {
    name: "WAIT FLY Heart-shaped Bowls",
    price: 11,
    href: "https://www.amazon.com/WAIT-FLY-Heart-shaped-Dessert-Household/dp/B079MCNYKF/ref=sr_1_10?crid=CARS0SY7H7T6&dib=eyJ2IjoiMSJ9.Fj4x-2fLzzbo0KQiC7He0scRTIicz88WZG2kj09ytcg8VO_DvfV2kVLDAJ6fx3555ayQuqGSAj6fkVAOW7KhSiqTaXgFOwgStEg_sWgfqC_TssHVylxz23nJWvdBLVincre9qbMrCKsXQor6IQtb1L29IUmJmFGZGOvDfz2IQf2yC-GsS-BljNITMsj-QjURY-slxz96EEXr0o6nR0E-XIlPTuX9rvfVUuSmfmZA2kDDFcjUPmOAF2fbQeInuB0fl4baejOFxbfdEfISj4iS8W4KtDEpnXtqRHENzEf3vqw.abS9wzh6a1pW_AyqnVKgu2NU2K6FEjATfiWjhijCmNo&dib_tag=se&keywords=candy%2Bbowl&qid=1782936068&sprefix=candy%2Bbow%2Caps%2C202&sr=8-10&th=1",
    image: "https://m.media-amazon.com/images/I/51tkMPNepRL._AC_SL1500_.jpg",
  },
  {
    name: "8 lbs of candy",
    price: 44,
    href: "https://www.amazon.com/Ultimate-Assorted-Candy-Party-Mix/dp/B0GMSKB378/ref=sr_1_9?crid=3OMI3AXXVC2Q0&dib=eyJ2IjoiMSJ9.9Gp9Ecq2UjcxDYz-wDUXO9sUVNYcsT44ONyk6BQ7c6GizXZmsojElvBIzlmQmNfyIX1CkJr5bnNx-yTU0_okQzzRctUrbLFKuCJCoNc2FM2gMO3JZa4VJ-F9xoK_SYE0kF3yPtFp37okC7NzgoYdRFsW0oQP6TD7ji7ICH6xHnYUhiFtd-X2l13z5n7e4_yAhOA2GT8McMF-s0GUoE2dyud7Q_Youbo_U-x9Mbd37XruKEzn7BwHXDjBQGSYyS3H5GEJMjcWDn5BinayYLVhD4XxBy3iEDPX3HD129IBGjw.7vP7BGKQsl0PCirvCBDlssdRlSIoiEK63n6i3AxfJ0k&dib_tag=se&keywords=candy&qid=1782936300&sprefix=candy%2Caps%2C216&sr=8-9&th=1",
    image: "https://m.media-amazon.com/images/I/917I2L+NG0L._SL1500_.jpg",
  },
];

const hourFilters = [
  { label: "All", value: Infinity },
  { label: "Up to 5", value: 5 },
  { label: "Up to 10", value: 10 },
  { label: "Up to 15", value: 15 },
  { label: "16+", value: 16 },
];

export function PrizeGrid() {
  const [maxHours, setMaxHours] = useState<number>(Infinity);

  const filteredPrizes = useMemo(() => {
    return prizes.filter((prize) => {
      const hours = getPrizeHours(prize.price);

      if (maxHours === Infinity) {
        return true;
      }

      if (maxHours === 16) {
        return hours >= 16;
      }

      return hours <= maxHours;
    });
  }, [maxHours]);

  return (
    <section
      className="mx-auto w-full max-w-6xl"
      aria-labelledby="prizes-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="prizes-heading"
          className="mt-3 text-4xl font-black leading-tight text-brand-dark sm:text-5xl"
        >
          Need a way to display what you ship?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-brand-dark/72 sm:text-lg">
          Create something nice that you would want to keep on your desk, and
          we&apos;ll send you a way to display it, or something else to keep on
          your desk! or a desk itself!
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 text-xs font-black uppercase tracking-[0.22em] text-brand-dark/60">
          Filter by hours
        </span>
        {hourFilters.map((filter) => {
          const isActive = maxHours === filter.value;

          return (
            <button
              key={filter.label}
              type="button"
              onClick={() => setMaxHours(filter.value)}
              className={`rounded-full border px-4 py-2 text-sm font-black uppercase tracking-[0.12em] transition duration-200 ${
                isActive
                  ? "border-brand-red bg-brand-red text-white shadow-[0_10px_20px_rgba(239,98,108,0.22)]"
                  : "border-brand-dark/12 bg-white text-brand-dark hover:border-brand-red/40 hover:text-brand-red"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-sm font-medium text-brand-dark/60">
        Showing {filteredPrizes.length} of {prizes.length} prizes.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPrizes.map((prize, index) => {
          return (
            <ExternalPrizeLink
              key={`${prize.name}-${prize.href}`}
              href={prize.href}
              description="The prize link will open in a new tab."
              className="group flex min-h-[23rem] flex-col rounded-lg border border-brand-dark/10 bg-[#f3ead8] p-4 shadow-[0_18px_40px_rgba(37,22,5,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_22px_55px_rgba(65,93,67,0.16)]"
            >
              <div className="relative h-48 overflow-hidden rounded-md sm:h-52">
                {prize.image ? (
                  <Image
                    src={prize.image}
                    alt=""
                    fill
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-4"
                  />
                ) : null}
              </div>
              <h3 className="mt-4 min-h-14 text-lg font-bold leading-6 text-brand-dark">
                {prize.name}
              </h3>
              <PrizeHours price={prize.price} />
            </ExternalPrizeLink>
          );
        })}
      </div>
    </section>
  );
}
