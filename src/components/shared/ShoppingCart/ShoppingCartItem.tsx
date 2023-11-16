"use client";
import Image from 'next/image'
import { FaRegTrashCan } from "react-icons/fa6";
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import styles from './ShoppingCartItem.module.sass'


interface ShoppingCartItemProps {
  item: CartItem
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {

  const { removeCartItem } = useShoppingCart();

  return (
    <div className={styles.ShoppingCartItem}>
      <Image src={item.image} alt={item.title} width={48} height={48} />
      <div className={styles.ShoppingCartItem__itemInfo}>
        <p className={styles.ShoppingCartItem__title}>{item?.title}</p>
        <span className={styles.ShoppingCartItem__quantity}>x{item.quantity}</span>
      </div>
      <button onClick={() => removeCartItem(item)} className={styles.ShoppingCartItem__removeButton} aria-label='trash'>
        <FaRegTrashCan />
      </button>
    </div>
  )
}