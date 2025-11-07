// SADECE BU SATIRI DEĞİŞTİRİN
type LastParameter<T> = T extends (...args: [...any, infer Last]) => any ? Last : never;

// ---- KOD BLOKU (DOKUNMAYIN) ----
const fn1 = (a: string, b: number, c: boolean) => {};
const fn2 = (a: Date) => {};

let p1: LastParameter<typeof fn1> = true;
let p2: LastParameter<typeof fn2> = new Date();
let errorP: LastParameter<typeof fn1> = "string";

console.log("Soru 18 Başarılı!", p1);
