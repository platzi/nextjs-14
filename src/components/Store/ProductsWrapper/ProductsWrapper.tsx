import { ProductCard } from "../ProductCard"
import styles from './ProductsWrapper.module.sass'

interface ProductsWrapperProps {
    products: ProductType[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className={styles.ProductsWrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}