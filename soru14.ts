// SADECE BU SATIRI DEĞİŞTİRİN
type DeepReadonly<T> =
  T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepReadonly<U>> :
  T extends Function ? T :
  T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } :
  T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

config.api.url = "yeni-url";

config.features.push("C");

console.log("Soru 14 Başarılı!", config.api.url);
