import { Product } from "../types/Product";

const commonImagePath = "/images/ct-phone.png";

export const products: Product[] = [
  { id: 1, name: "Samsung S23", price: 1300, img: commonImagePath, status: "Nuevo", unidades: 7 },
  { id: 2, name: "Xiaomi Note 12", price: 800, img: commonImagePath, status: "Usado", unidades: 2 },
  { id: 3, name: "Honor x8B", price: 600, img: commonImagePath, status: "Nuevo", unidades: 4 },
  { id: 4, name: "iPhone 15", price: 1500, img: commonImagePath, status: "Nuevo", unidades: 9 },
  { id: 5, name: "Samsung A55", price: 550, img: commonImagePath, status: "Nuevo", unidades: 5 },
  // Agrega más productos según sea necesario
];
