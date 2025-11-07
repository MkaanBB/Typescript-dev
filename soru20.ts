// SADECE BU SATIRI DEĞİŞTİRİN (Karmaşık ve rekürsif bir çözüm gerektirir)
type ParseRouteParams<T extends string> = T extends `${string}:${infer ParamAndRest}` ? (ParamAndRest extends `${infer ParamName}/${infer Rest}` ? { [K in ParamName]: string } & ParseRouteParams<Rest> : { [K in ParamAndRest]: string }) : {};

// ---- KOD BLOKU (DOKUNMAYIN) ----
type Route1 = "/users/:id";
type Route2 = "/posts/:postId/comments/:commentId";

type Params1 = ParseRouteParams<Route1>;
type Params2 = ParseRouteParams<Route2>;

const p1: Params1 = { id: "123" };
const p2: Params2 = { postId: "abc", commentId: "xyz" };

const errorP1: Params1 = { userId: "123" };

const errorP2: Params2 = { postId: "abc" };

console.log("Soru 20 Başarılı!", p1.id, p2.postId);
