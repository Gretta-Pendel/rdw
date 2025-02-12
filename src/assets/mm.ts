import Monster from "./mm.interfaces";

const mm: Monster[] = [
  {
    area: 1,
    name: "Анхег",
    hp: 10,
    armor: 3,
    attack: "Укус",
    damage: "к8 + 1",
    properties: {
      distance: ["close", "reach"],
      size: "large",
      group: "group",
    },
    special: "подкапывание",
    description:
      "Шкура словно стальной доспех и сокрушительные гигантские жвалы — это неприятно. Желудок, полный кислоты, способной прожечь дыру в каменной стене, — еще хуже. Плохо было бы уже, если бы они были обычного для насекомых размера, однако твари имеют наглость вырастать длиной с лошадь. Это же неестественно! Считаешь, хорошо, что они обычно обитают в одном месте? Тебе легко говорить: анхег живёт не под твоим кукурузным полем.",
    instinct: "подкапывать",
    actions: [
      "Сделать подземный подкоп",
      "Вырваться из земли",
      "Брызнуть кислотой, разъедающей плоть и железо",
    ],
  },
  {
    area: 1,
    name: "Верёвочник",
    hp: 16,
    armor: 1,
    attack: "Укус",
    damage: "к10 + 1",
    properties: {
      distance: ["close", "reach"],
      group: "solitary",
      size: "large",
      common: ["stealthy", "intelligent"],
    },
    special: "кожа словно камень",
    description:
      "Причуда эволюции создала хитрого подземного хищника. Похожий на пещерное образование(обычно сталактит или сталагмит), верёвочник ждёт добычу в засаде, и когда она — будь то крыса, гоблин или невезучий герой — натыкается на него, из шкуры верёвочника вырывается множество тонких хлещущих щупалец. Сто ударов в одно мгновение, и оглушённая жертва отправляется в пасть. Удивительное коварство для чудища, похожего на камень.",
    instinct: "нападать из засады",
    actions: ["Запутать неосторожного", "Разоружить врага", "Жевать"],
  },
];

export default mm;
