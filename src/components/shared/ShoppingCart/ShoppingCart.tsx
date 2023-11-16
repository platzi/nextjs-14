"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { handleCreateCart } from "app/actions";
import styles from './ShoppingCart.module.sass'

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen)
    }
  };

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if(!checkoutUrl) throw new Error('Error creating checkout');
      window.localStorage.removeItem('cart');
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  }


  return (
    <div className={styles.ShoppingCart}>
      {
        hasItems && (
          <span className={styles.ShoppingCart__counter}>
            {cart.length}
          </span>
        )
      }
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaShoppingCart />
      </button>
      {isOpen && hasItems && (
        <div className={styles.ShoppingCart__items} >
          {
            cart.map(item => (<ShoppingCartItem key={item.id} item={item} />))
          }
          <button onClick={handleBuy}  className={styles.ShoppingCart__buyButton} disabled={isBuying}>
            Buy
          </button>
        </div>
      )}
    </div>
  )
}