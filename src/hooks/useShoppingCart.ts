import { create } from 'zustand'

type Store = {
  cart: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeCartItem: (cartItem: CartItem) => void
}

const saveArrayToLocalStorage = (array: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(array))
}

export const useShoppingCart = create<Store>()((set) => ({
  cart: (() => {

    if (typeof window === 'undefined') {
      return []
    }

    const cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(cart)
    }

    return []
  })(),
  addToCart: (cartItem: CartItem) => set(
    (state) => {
    const currentCart = state.cart
    const itemExists = currentCart.find((item) => item.id === cartItem.id)
    const replaceExistingItem = currentCart.map((item) => {
      if (item.id === cartItem.id) {
        return cartItem
      }
      return item
    })
  
    if(itemExists) {
      saveArrayToLocalStorage(replaceExistingItem)
      return ({ cart: replaceExistingItem })
    }

    saveArrayToLocalStorage([...state.cart, cartItem])
    return ({ cart: [...state.cart, cartItem] })
  }),
  removeCartItem: (cartItem: CartItem) => set((state) => {
    const currentCart = state.cart
    const newCart = currentCart.filter((item) => item.id !== cartItem.id)
    saveArrayToLocalStorage(newCart)
    return ({ cart: newCart })
  })
}))