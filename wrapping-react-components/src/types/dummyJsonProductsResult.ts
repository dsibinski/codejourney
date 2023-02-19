import { Product } from "./product";

export interface DummyJsonProductsResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
