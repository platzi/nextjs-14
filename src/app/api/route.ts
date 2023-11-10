import { getProducts } from "app/services/shopify/products";

export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}