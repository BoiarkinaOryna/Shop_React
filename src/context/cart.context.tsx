import { ReactNode, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../shared/types/types";

interface CartContextContract {
    items: CartItem[]
    addCartItem: (product: Product) => void
    removeCartItem: (productId: number) => void
    inCartItem: (productId: number) => boolean
    incrementCartItem: (productId: number) => void
    decrementCartItem: (productId: number) => void
    removeCart: () => void
    priceCart: () => number
}

const CartContext = createContext<CartContextContract | null>(null)

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    function addCartItem(product: Product) {
        if (inCartItem(product.id)) return
        const newItem = [...items, { product, count: 1 }]
        setItems(newItem)
        console.log('Item add' ,items)

    }
    function removeCartItem(productId: number) {
        const newItems = items.filter(items => items.product.id !== productId)
        return (newItems)

    }
    function inCartItem(productId: number) {
        return items.some(item => item.product.id === productId)
    }
    function incrementCartItem(productId: number) {
        if (!inCartItem(productId)) return
        const updatedItems: CartItem[] = []
        items.forEach((item) => {
            if (item.product.id === productId) item.count++
            updatedItems.push(item)
        })
        setItems(updatedItems)
        console.log('Item incremented' ,items)

    }
    function decrementCartItem(productId: number) {
        if (!inCartItem(productId)) return
        const updatedItems: CartItem[] = []
        items.forEach((item) => {
            if (item.product.id === productId) item.count--
            updatedItems.push(item)
        })
        setItems(updatedItems)
    console.log('Item decremented' ,items)
    }
    function removeCart() {
        setItems([]);
    }
    function priceCart() {
        return items.reduce((total, item) => {
            return total + (item.product.price * item.count);
        }, 0);
    }

    return <CartContext value={{
        items,
        addCartItem,
        removeCartItem,
        inCartItem,
        incrementCartItem,
        decrementCartItem,
        removeCart,
        priceCart,
    }}>
        {children}
    </CartContext>
}

export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Error context");
    }
    return context
}