// 타입의 특정 프로퍼티를 찾기 위해서 인덱싱된 접근 타입 을 사용할 수 있다.

type Example = {
  a: number;
  b: string;
  c: boolean;
};

type indexedAccess = Example["a"]; // number
type indexedAccess2 = Example[keyof Example]; // string | number | boolean
type indexedAccess3 = Example["b" | "c"]; // string | boolean

// 특정 배열의 요소 타입을 조회하고 싶은 경우 ?

const PromotionList = [
  { type: "product", name: "chicken" },
  { type: "product", name: "pizza" },
  { type: "card", name: "cheer-up" },
];

type ProductType = (typeof PromotionList)[number]; // {type: string, name: string}
