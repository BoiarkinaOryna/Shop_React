import { useEffect, useRef, useState } from "react"
import { useCartContext } from "../../context"
import { ModalInterface } from "./modalInterface"


export function ChangeCartModal(props: ModalInterface){
    const { items, addCartItem, incrementCartItem, decrementCartItem, priceCart, removeCartItem } = useCartContext()
    const [ totalPrice, setTotalPrice ] = useState(0)
    const { isOpen, close } = props 
    
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect( () => {
        function handleClickOutside(event: MouseEvent) {
            if (!close || !modalRef.current) return

            const target = event.target as HTMLBodyElement
            if (!modalRef.current.contains(target)) {
                console.log(target)
                close()
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        // clean-up - функция очистки
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    // setTotalPrice(priceCart())

    return <div>
        <div>
            {items.map((item, index) =>{
                return <div key={index}>
                    <p>{item.product.title}</p>
                    <p>{item.product.price}</p>
                    {/* onClick={() => removeAll()} */}
                    <button onClick={() => decrementCartItem(item.product.id)} > -</button>
                    <button onClick={() => incrementCartItem(item.product.id)} >+</button>
                    <button onClick={()=> removeCartItem(item.product.id)} >/</button>
                </div>
            })}
            
        </div>
            
        <div>
            <p>Загальна ціна: {totalPrice}</p>
        </div>
    </div>
}