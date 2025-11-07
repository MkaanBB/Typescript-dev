// SADECE BU SATIRI DEĞİŞTİRİN
type FilterUnion<T, U> = T extends U ? never : T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type AllStatus = 'pending' | 'active' | 'inactive' | 'deleted';
type ActiveStatus = 'active' | 'pending';
type InactiveStatus = FilterUnion<AllStatus, ActiveStatus>;

let status1: InactiveStatus = 'inactive';
let status2: InactiveStatus = 'deleted';
let errorStatus: InactiveStatus = 'pending';

console.log("Soru 17 Başarılı!", status1, status2);
