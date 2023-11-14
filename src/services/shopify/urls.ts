import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/465664934182/products.json`,
  },
  collections: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
  }
}