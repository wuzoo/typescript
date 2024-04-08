type T0 = "a" | "b" | "c" | "d";

type T1 = Extract<T0, "f">;

type ExtractType<T, U> = T extends U ? T : never;
