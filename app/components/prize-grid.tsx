"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalPrizeLink } from "./external-prize-link";
import { PrizeHours, getPrizeHours } from "./prize-hours";

const prizes = [
  {
    name: "LEGO Icons Kingfisher Bird Model",
    price: 55,
    href: "https://a.co/d/0fJEyLo3",
    image: "https://m.media-amazon.com/images/I/71Y5SfG0xSL._AC_SL1500_.jpg",
  },
  {
    name: "DUMOS 32 Inch Small Computer Desk",
    price: 34,
    href: "https://a.co/d/04jbACM4",
    image: "https://m.media-amazon.com/images/I/71qMy5CDPBL._AC_SL1500_.jpg",
  },
  {
    name: "Innioasis Y2 Mp3 Player",
    price: 70,
    image: "https://m.media-amazon.com/images/I/61tOfXDdFuL._AC_SL1500_.jpg",
    href: "https://a.co/d/07s0FKhH",
  },
  {
    name: "FiiO SnowSky Echo Nano mp3 player",
    price: 60,
    href: "https://a.co/d/0bWC7jQG",
    image: "https://m.media-amazon.com/images/I/61uWGHDt5SL._AC_SL1000_.jpg",
  },
  {
    name: "One Piece - Grand Ship Collection Red Force",
    price: 27,
    href: "https://a.co/d/08gcdyLO",
    image: "https://m.media-amazon.com/images/I/61D2gpyMdFL._AC_SL1200_.jpg",
  },
  {
    name: "Candle Warmer Lamp",
    price: 25,
    href: "https://a.co/d/00vYRnyP",
    image: "https://m.media-amazon.com/images/I/81EaHOGHJZL._AC_SL1500_.jpg",
  },
  {
    name: "Moon Lamp",
    price: 70,
    href: "https://a.co/d/0aUahJNy",
    image: "https://m.media-amazon.com/images/I/61UHAOLCP+L._AC_SL1200_.jpg",
  },
  {
    name: "$5USD book grant (stackable)",
    price: 5,
    href: "https://www.barnesandnoble.com/",
    image:
      "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/book_money.jpg?strip=all",
  },
  {
    name: "$30USD book grant",
    price: 35,
    href: "https://www.barnesandnoble.com/",
    image:
      "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/book_money.jpg?strip=all",
  },
  {
    name: "$60USD book grant",
    price: 65,
    href: "https://www.barnesandnoble.com/",
    image:
      "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/book_money.jpg?strip=all",
  },

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
    name: "PINECIL – Smart Mini Portable Soldering Iron",
    price: 37,
    href: "https://pine64.com/product/pinecil-smart-mini-portable-soldering-iron/",
    image: "https://pine64.com/wp-content/uploads/2020/11/Pinecilv2-4.jpg",
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
    name: "HUION Kamvas 13 (Gen 3) Drawing Tablet",
    price: 210,
    href: "https://a.co/d/02c4q9UR",
    image: "https://m.media-amazon.com/images/I/6139Gs3+FAL._AC_SL1500_.jpg",
  },
  {
    name: "Logitech MX Master 4",
    price: 120,
    href: "https://a.co/d/029eC761",
    image: "https://m.media-amazon.com/images/I/61z3ENJubZL._AC_SL1500_.jpg",
  },
  {
    name: "TECKNET Wireless Mouse",
    price: 20,
    href: "https://a.co/d/0hCygwpz",
    image: "https://m.media-amazon.com/images/I/61meMz+q8lL._AC_SL1500_.jpg",
  },
  {
    name: "UGEE drawing tablet",
    price: 50,
    href: "https://a.co/d/0cXK2qkK",
    image: "https://m.media-amazon.com/images/I/51pdzvGQLFL._AC_SL1500_.jpg",
  },
  {
    name: "FEZIBO Standing Desk, 48 x 24 Inches",
    price: 96,
    href: "https://www.amazon.com/FEZIBO-Standing-Electric-Adjustable-Computer/dp/B0F8MHPVPH/ref=sr_1_2?crid=TYDTVH3UAL5I&dib=eyJ2IjoiMSJ9.jKr2pidEqRjl_2EB2Coaw5TO3NceW-Rhk4DHrj03mH-nw58f1bSnuLeuUg-sU83_nuSHidFKrzRFef5iUZUFj0mhdhpLgax8Aq08Jb4ObE1hQrd61k88JpRan_Bvl7cZAD6coYgKu2lbfshjzio3xxCC0B7HF911gooYUGn5MPfmwEEO7NGocOhIfoUThik95uEz29PyOtfxxBwDfUfYAws4zoSDmltPIQ9aEFIyccK2MPhn0gAc6tSi7bHi_H4gVdY1ctHoTHv8JbyOk0MRlVGSkxuN_YUPQBHj6nfk6dQ.JUy7LHWmrPQSxzWEBgxP8S2qKrGlF9w7hklRu0QBfLY&dib_tag=se&keywords=moving%2Bdesk&qid=1782842481&s=amazon-devices&sprefix=moving%2Bdes%2Camazon-devices%2C149&sr=1-2&th=1",
    image: "https://m.media-amazon.com/images/I/71smFjr2QgL._AC_SL1500_.jpg",
  },
  {
    name: "AULA F75 Pro Wireless Mechanical Keyboard",
    price: 67,
    href: "https://a.co/d/0fzUM435",
    image: "https://m.media-amazon.com/images/I/61MC8BK0w0L._AC_SL1500_.jpg",
  },
  {
    name: "YUNZII B75 PRO",
    price: 65,
    href: "https://m.media-amazon.com/images/I/71e0j3u-WUL._AC_SL1500_.jpg",
    image: "https://a.co/d/03MzJUFb",
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
    name: "Logitech MX Master 3S",
    price: 80,
    href: "https://a.co/d/07yshVHf",
    image: "https://m.media-amazon.com/images/I/61oEwT0WpSL._AC_SL1500_.jpg",
  },
  {
    name: "Like-New Amazon Fire 7 tablet (newest model)",
    price: 51,
    href: "https://www.amazon.com/Like-New-Amazon-display-10-hour-battery/dp/B099GYVGW4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Xqi1fAXbYVaVQDpectnL0hX8ExQITrTc4o_ItrC3uqUOqauZDQnOCTFTcB1c_Bw60SjjevSTJzZQYtpur7LHuq89ku07y2yqQJwfoSRbJXxbyn9_MsRXX_vWzKgzINLUMUPdtx-Rf4fTVWtGq32wwr31IohSg9jyYZZG1vw9Fvdyxjyf20Fyw_Xt7PeXeDefDs5GT7eg_OF03kQIwpetmaPhfFRXn0pQ-eKVgYZPw_XqMEBdAwLOjVQUorm3oqiwY91NejTRkg4rJH_lMbmMzLry2KWqpGp1K6eMZoOaVoo.BhrGFE6kBj5HND71FjvE61QH68F6HLZACFdjMJqtPtE&dib_tag=se&keywords=amazon+fire+5&qid=1782846063&s=amazon-devices&sr=1-1&ufe=app_do%3Aamzn1.fos.ed73e2ba-4d06-4781-aee7-c317fe036206",
    image: "https://m.media-amazon.com/images/I/61pZPRMTAdL._AC_SL1000_.jpg",
  },
  {
    name: "Carlisle 13 oz Candy Bowl",
    price: 6,
    href: "https://www.amazon.com/Carlisle-453307-Plastic-Dessert-Bowls/dp/B004OA0YL2/ref=sr_1_8?crid=CARS0SY7H7T6&dib=eyJ2IjoiMSJ9.Fj4x-2fLzzbo0KQiC7He0scRTIicz88WZG2kj09ytcg8VO_DvfV2kVLDAJ6fx3555ayQuqGSAj6fkVAOW7KhSiqTaXgFOwgStEg_sWgfqC_TssHVylxz23nJWvdBLVincre9qbMrCKsXQor6IQtb1L29IUmJmFGZGOvDfz2IQf2yC-GsS-BljNITMsj-QjURY-slxz96EEXr0o6nR0E-XIlPTuX9rvfVUuSmfmZA2kDDFcjUPmOAF2fbQeInuB0fl4baejOFxbfdEfISj4iS8W4KtDEpnXtqRHENzEf3vqw.abS9wzh6a1pW_AyqnVKgu2NU2K6FEjATfiWjhijCmNo&dib_tag=se&keywords=candy%2Bbowl&qid=1782936068&sprefix=candy%2Bbow%2Caps%2C202&sr=8-8&th=1",
    image: "https://m.media-amazon.com/images/I/71PTatPe2YL._AC_SL1500_.jpg",
  },
  {
    name: "Amazon Echo Spot",
    price: 81,
    href: "https://www.amazon.com/dp/B0BFC7WQ6R?ref=clp_cat_p_0&th=1",
    image: "https://m.media-amazon.com/images/I/71cSMRiDN2L._AC_SL1500_.jpg",
  },
  {
    name: "Logitech MX Vertical Wireless Mouse",
    price: 119.99,
    href: "https://a.co/d/0fHR9sPX",
    image: "https://m.media-amazon.com/images/I/61iiZ-gDYEL._AC_SL1500_.jpg",
  },
  {
    name: "WAIT FLY Heart-shaped Bowls",
    price: 12,
    href: "https://www.amazon.com/WAIT-FLY-Heart-shaped-Dessert-Household/dp/B079MCNYKF/ref=sr_1_10?crid=CARS0SY7H7T6&dib=eyJ2IjoiMSJ9.Fj4x-2fLzzbo0KQiC7He0scRTIicz88WZG2kj09ytcg8VO_DvfV2kVLDAJ6fx3555ayQuqGSAj6fkVAOW7KhSiqTaXgFOwgStEg_sWgfqC_TssHVylxz23nJWvdBLVincre9qbMrCKsXQor6IQtb1L29IUmJmFGZGOvDfz2IQf2yC-GsS-BljNITMsj-QjURY-slxz96EEXr0o6nR0E-XIlPTuX9rvfVUuSmfmZA2kDDFcjUPmOAF2fbQeInuB0fl4baejOFxbfdEfISj4iS8W4KtDEpnXtqRHENzEf3vqw.abS9wzh6a1pW_AyqnVKgu2NU2K6FEjATfiWjhijCmNo&dib_tag=se&keywords=candy%2Bbowl&qid=1782936068&sprefix=candy%2Bbow%2Caps%2C202&sr=8-10&th=1",
    image: "https://m.media-amazon.com/images/I/51tkMPNepRL._AC_SL1500_.jpg",
  },
  {
    name: "8 lbs of candy",
    price: 45,
    href: "https://www.amazon.com/Ultimate-Assorted-Candy-Party-Mix/dp/B0GMSKB378/ref=sr_1_9?crid=3OMI3AXXVC2Q0&dib=eyJ2IjoiMSJ9.9Gp9Ecq2UjcxDYz-wDUXO9sUVNYcsT44ONyk6BQ7c6GizXZmsojElvBIzlmQmNfyIX1CkJr5bnNx-yTU0_okQzzRctUrbLFKuCJCoNc2FM2gMO3JZa4VJ-F9xoK_SYE0kF3yPtFp37okC7NzgoYdRFsW0oQP6TD7ji7ICH6xHnYUhiFtd-X2l13z5n7e4_yAhOA2GT8McMF-s0GUoE2dyud7Q_Youbo_U-x9Mbd37XruKEzn7BwHXDjBQGSYyS3H5GEJMjcWDn5BinayYLVhD4XxBy3iEDPX3HD129IBGjw.7vP7BGKQsl0PCirvCBDlssdRlSIoiEK63n6i3AxfJ0k&dib_tag=se&keywords=candy&qid=1782936300&sprefix=candy%2Caps%2C216&sr=8-9&th=1",
    image: "https://m.media-amazon.com/images/I/917I2L+NG0L._SL1500_.jpg",
  },
  {
    name: "5 Pcs Fidget Toys",
    price: 20,
    href: "https://www.amazon.com/Fidgets-Spinner-Magnetic-Stocking-Stuffers/dp/B0FDJ3LF8H/ref=sr_1_6?crid=3I0AZBWXYKBDH&dib=eyJ2IjoiMSJ9.MQhWGNU0u5Nrky3Vmoms2mFjXLWikA5VtSk7LYIoJETAQjwMiKbggYjnlf45r60qQ0jPwbmiToWIR4oQguUt6tJDmlk7yZlOyCO_7RDEqRH3n15WrRjfu0s4nQcbsOd98bSI2VvMW5kf5j9sajvOLoiAFGi2dcIUqRZ0montNCzTAb4ts8s39YxF9whtOk24bQXOxjKn7aZ7nPnJOx0e5YFUlKgyCSIeblfActI67JlPXq3ziR0DH9wyfpH6AO1dCTgZ0N67DXasYI3AqoA3tMkKzjmTJEJ_K-CzGWzdzFo.gBnXIrHwdV8oneRvnknUUOuj_oOTBz3_qCDcvUkH5IU&dib_tag=se&keywords=desk%2Btoys&qid=1783019295&sprefix=desk%2Btoys%2Caps%2C185&sr=8-6&th=1",
    image: "https://m.media-amazon.com/images/I/81jgc-32wbL._AC_SL1500_.jpg",
  },
  {
    name: "Airpods 4 NOT Noise Cancelling",
    price: 135,
    href: "https://www.apple.com/airpods-4/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725502639798",
  },
  {
    name: "Moving Sand Art",
    price: 10,
    href: "https://www.amazon.com/ANBOER-Dynamic-Picture-Sandscape-Relaxing/dp/B099KPMSDB/ref=sr_1_1?crid=3FPQLBF6H96R2&dib=eyJ2IjoiMSJ9.s_1drkrkdSw_mO6ZJITWhDeQizh89DuPxr4nkPZdNsPeqhF9DcJ2GnGtCaXh7PUT3XvOsoz--VifljUqdJLMv-nypFxd0FgsHG_3d9F7cdYvWaQrJX7HQXQAyTdEDthiq4IAkN2OgbkbZsFSqkGwzlYyidTl6_-1d_CcTEi61QxbJZmhnjdYRWPNaMz9ITNQyyz3BWeEAoEQFZx07URQLvmVnHAZgoExBPak2UDfCuaRfeM3vz2kCCKxyUJJiToK5-MlRhwsLblgI2QCHi_I265Mj_XS8gaYB1agg9v7X8A.d1v7eMJMhMRo0FcKmFBChJnRXeopkiRBAvQAW_vZUzo&dib_tag=se&keywords=moving%2Bsand%2Bart&qid=1783019584&sprefix=moving%2Bsand%2B%2Caps%2C164&sr=8-1&th=1",
    image: "https://m.media-amazon.com/images/I/71TmuNg8OjL._AC_SL1500_.jpg",
  },
  {
    name: "Newton's Cradle",
    price: 20,
    href: "https://a.co/d/00nkuBEE",
    image: "https://m.media-amazon.com/images/I/61qJeUoGLVL._AC_SL1500_.jpg",
  },
  {
    name: "Lego Lucky Bamboo",
    price: 15,
    href: "https://a.co/d/09QIAweD",
    image: "https://m.media-amazon.com/images/I/71uY4UvQEfL._AC_SL1500_.jpg",
  },
  {
    name: "macbook-neo",
    price: 710,
    href: "https://www.apple.com/macbook-neo/",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_03009a46-6a34-4080-81d6-8c07d0995fc1?wid=300&hei=300&fmt=pjpeg",
  },
  {
    name: "Apple Pencil(choose generation)",
    price: 140,
    href: "https://www.apple.com/apple-pencil/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-pencil-pro-splitter-202405_FMT_WHH?wid=448&hei=800&fmt=png-alpha&.v=cU9HSUJpZUhzWS81ZmZ1ZWtXeDJEdlRJWGw3S3R6dEpCTGNXeVVhZUFHWWZ4Ym1VaENGQ0RQaFRuYzFqNGgzeXQ5UUowR2tPeDhiOERaa1M4ZXJJbW53ZEd6YWEyeTVsMHRvZnBLdXg3bVdJWktQRGRwZm1IaURrUFhIL2I2WkU",
  },
  {
    name: "AirPods Pro 3",
    price: 255,
    href: "https://www.apple.com/airpods-pro/",
    image:
      "https://t-mobile.scene7.com/is/image/Tmusprod/195950543698-frontimage?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&dpr=off",
  },
  {
    name: "GEODMAER 65% Gaming Keyboard",
    price: 25,
    href: "https://a.co/d/01Hk9xg9",
    image: "https://m.media-amazon.com/images/I/61fhcWFIpzL._AC_SL1500_.jpg",
  },
  {
    name: "TECKNET Wired Gaming Keyboard",
    price: 32,
    href: "https://a.co/d/08VtvJwK",
    image: "https://m.media-amazon.com/images/I/714WvRlURgL._AC_SL1500_.jpg",
  },
  {
    name: "Airpods 4 Noise Cancelling",
    price: 190,
    href: "https://www.apple.com/airpods-4/",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725502639798",
  },
  {
    name: "Spider-Man vs. Sandman",
    price: 26,
    href: "https://www.lego.com/en-us/product/epic-battle-spider-man-vs-sandman-76334",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt8596d885c652914b/76334_Prod_en-gb.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
  },
  // {
  //   name: "Lego Lucky Bamboo",
  //   price: 15,
  //   href: "https://a.co/d/09QIAweD",
  //   image:"https://www.lego.com/en-us/product/epic-battle-spider-man-vs-sandman-76334",
  // },
];

const hourFilters = [
  { label: "All", value: Infinity },
  { label: "Up to 5", value: 5 },
  { label: "Up to 10", value: 10 },
  { label: "Up to 15", value: 15 },
  { label: "16+", value: 16 },
];

const mobilePrizeLimit = 6;

export function PrizeGrid() {
  const [maxHours, setMaxHours] = useState<number>(Infinity);
  const [showAllMobilePrizes, setShowAllMobilePrizes] = useState(false);

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

  const hasMoreMobilePrizes = filteredPrizes.length > mobilePrizeLimit;
  const visibleMobilePrizeCount = showAllMobilePrizes
    ? filteredPrizes.length
    : Math.min(filteredPrizes.length, mobilePrizeLimit);

  function selectHourFilter(value: number) {
    setMaxHours(value);
    setShowAllMobilePrizes(false);
  }

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
              onClick={() => selectHourFilter(filter.value)}
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
        <span className="sm:hidden">
          Showing {visibleMobilePrizeCount} of {filteredPrizes.length} prizes.
        </span>
        <span className="hidden sm:inline">
          Showing {filteredPrizes.length} of {prizes.length} prizes.
        </span>
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPrizes.map((prize, index) => {
          const hideOnMobile = !showAllMobilePrizes && index >= mobilePrizeLimit;

          return (
            <ExternalPrizeLink
              key={`${prize.name}-${prize.href}`}
              href={prize.href}
              description="The prize link will open in a new tab."
              className={`group min-h-[23rem] flex-col rounded-lg border border-brand-dark/10 bg-[#f3ead8] p-4 shadow-[0_18px_40px_rgba(37,22,5,0.08)] transition duration-300 hover:border-brand-green/40 hover:shadow-[0_20px_46px_rgba(65,93,67,0.14)] ${
                hideOnMobile ? "hidden sm:flex" : "flex"
              }`}
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

      {hasMoreMobilePrizes ? (
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobilePrizes((current) => !current)}
            className="rounded-full border border-brand-dark/12 bg-brand-dark px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-brand-cream shadow-[0_14px_30px_rgba(37,22,5,0.18)] transition duration-200 hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-cream"
            aria-expanded={showAllMobilePrizes}
          >
            {showAllMobilePrizes ? "Show less" : "View more"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
