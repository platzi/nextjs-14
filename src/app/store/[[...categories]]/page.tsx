import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps){
  const products = await getProducts()
  const { categories } = props.params
  // throw new Error('Error: boom')
  return(
    <ProductsWrapper products={products}/>
  )
}