export interface Product {
  id: string;
  name: string;
  grade: string;
  description: string;
  time: string;
  tags: string[];
  image: string;
}

export interface CraftStep {
  id: number;
  name: string;
  description: string;
  detail: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "premium",
    name: "特级庐山云雾茶",
    grade: "高端款",
    description: "核心地块种植，纯手工制作，白毫密布、香气馥郁。",
    time: "清明前采摘",
    tags: ["国礼之选", "高端品鉴"],
    image: "https://picsum.photos/seed/tealeaf1/800/800"
  },
  {
    id: "classic",
    name: "一级庐山云雾茶",
    grade: "经典款",
    description: "古法工艺，条索粗壮、滋味醇厚，口感极佳。",
    time: "谷雨前采摘",
    tags: ["办公待客", "老饕首选"],
    image: "https://picsum.photos/seed/tealeaf2/800/800"
  },
  {
    id: "daily",
    name: "二/三级庐山云雾茶",
    grade: "亲民款",
    description: "本山品种，鲜醇可口，性价比极高，适合全家共享。",
    time: "核心产区直采",
    tags: ["家庭常备", "性价比之王"],
    image: "https://picsum.photos/seed/tealeaf3/800/800"
  }
];

export const CRAFT_STEPS: CraftStep[] = [
  { id: 1, name: "鲜叶采摘", description: "清明前后，严选本山一芽一叶，三不采", detail: "严格遵循古法，保证原料纯正。" },
  { id: 2, name: "杀青", description: "斜锅锁香，高温祛除水分与青草气", detail: "掌握火候，激发茶叶初香。" },
  { id: 3, name: "抖散", description: "散发热气，保持茶叶鲜嫩翠绿", detail: "防止高温闷熟失去鲜爽。" },
  { id: 4, name: "揉捻", description: "由于庐山气候湿润，需重力揉捻塑形", detail: "揉出茶汁，造就醇厚滋味。" },
  { id: 5, name: "炒二青", description: "初干定型，固定茶叶形态", detail: "通过再次加热巩固卷曲形状。" },
  { id: 6, name: "理条", description: "规范形态，使条索均匀紧直", detail: "精工细作，尽显正宗本山相。" },
  { id: 7, name: "搓条", description: "紧结锁香，茶叶成形及散发锋毫", detail: "核心工序，赋予云雾茶灵魂。" },
  { id: 8, name: "拣剔提毫", description: "提纯增香，去除杂质显露白毫", detail: "视觉与味觉的双重提升。" },
  { id: 9, name: "烘焙/烤干", description: "足干成茶，彻底锁住极致鲜香", detail: "最后洗礼，成就千年名茶。" }
];

export const FEATURES = [
  {
    title: "核心产区独产",
    desc: "仅产自庐山地理标志保护区，选用本地群体种，1700多年培育提纯。",
    icon: "Mountain"
  },
  {
    title: "非遗古法工艺",
    desc: "九道纯手工工序，无工业干预，不添香精、防腐剂，保留天然营养。",
    icon: "ScrollText"
  },
  {
    title: "“六绝”品质",
    desc: "色香味形俱佳：汤色明亮、香凛持久、醇厚味甘。",
    icon: "BadgeCheck"
  },
  {
    title: "自然滋养",
    desc: "生态种植，无农药化肥，富含氨基酸，口感温润。",
    icon: "Leaf"
  }
];
