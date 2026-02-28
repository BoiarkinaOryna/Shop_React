import { ReactNode, createContext, useContext, useEffect, useState } from "react";
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
    isCaartOpen : boolean
    openCart: () => void
    closeCart: () => void
    discountPriceCart: () => number
    savedPriceCart: () => number
}

const CartContext = createContext<CartContextContract | null>(null)

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cart")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items])


    function addCartItem(product: Product) {
        if (inCartItem(product.id)) return
        const newItem = [...items, { product, count: 1 }]
        setItems(newItem)
        console.log('Item add' ,items)

    }
    function removeCartItem(productId: number) {
    const newItems = items.filter(item => item.product.id !== productId)
    setItems(newItems)
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

    function discountPriceCart() {
    return items.reduce((total, item) => {
        const discount = item.product.discount
            ? parseInt(item.product.discount)
            : 0

        const finalPrice = item.product.price * (1 - discount / 100)

        return total + finalPrice * item.count
    }, 0)
    }
    function savedPriceCart() {
    return priceCart() - discountPriceCart()
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
        isCaartOpen : false,
        openCart: () => {},
        closeCart: () => {},
        discountPriceCart,
        savedPriceCart
    }}>
        {children}
    </CartContext>
}

export function useCartContext() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("Error context")
    }
    return context
}