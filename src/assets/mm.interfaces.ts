enum areaText {
  "Дети подземелий" = 1,
  "Болотные твари" = 2,
  "Легионы нежити" = 3,
  "Дремучий лес" = 4,
  "Хищные орды" = 5,
  "Безумные творения" = 6,
  "Чрево мира" = 7,
  "Планарные силы" = 8,
  "Жители королевств" = 9,
}
enum weaponText {
  forceful = "мощное",
  ignoresarmor = "игнорирует броню",
  messy = "месиво",
}

export interface IMonster {
  area: areaText;
  name: string;
  hp?: number;
  armor?: number;
  attack?: string;
  damage?: string;
  properties?: {
    distance?: Array<"hand" | "close" | "reach" | "near" | "far">;
    size?: "tiny" | "small" | "large" | "huge";
    group?: "solitary" | "group" | "horde";
    common?: Array<
      | "amorphous"
      | "magical"
      | "hoarder"
      | "construct"
      | "devious"
      | "organized"
      | "cautious"
      | "planar"
      | "terrifying"
      | "intelligent"
      | "stealthy"
      | "divine"
    >;
    weapon?: weaponText[];
  };
  special?: string;
  description?: string;
  instinct?: string;
  actions?: string[];
  // constructor(area: areaText, name: string) {
  // 	this.area = area;
  // 	this.name = name;
  // }
}
