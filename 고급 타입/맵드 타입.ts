// 자바스크립트에서의 map 메서드와 유사하다
// 맵드 타입은 다른 타입을 기반으로 한 타입을 선언할 때 사용하는 문법
// 인덱스 시그니처 문법을 사용해서 반복적인 타입 선언을 효과적으로 줄일 수 있다.

type MappedExample = {
  a: number;
  b: string;
  c: boolean;
};

type SubType<T> = {
  [K in keyof T]?: T[K]; // MappedExample type으로부터 옵셔널 파라미터(?)를 설정한 새로운 타입을 선언함.
};

const aExample: SubType<MappedExample> = { a: 3 };
const bExample: SubType<MappedExample> = { b: "hello" };
const cExample: SubType<MappedExample> = { a: 4, c: true };

type ReadOnlyEx = {
  readonly a: number;
  readonly b: string;
};

type CreateMutable<T> = {
  -readonly [Property in keyof T]: T[Property];
};

// CreateMutable<T> type을 이용해 readonly 수식을 삭제한 새로운 타입을 선언
type ResultType = CreateMutable<ReadOnlyEx>; // { a: number, b: string }
