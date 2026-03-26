import styles from "./my-orders.module.css"
import { OrderCard } from "./OrderCard/OrderCard"


export function MyOrders(){
    return <div className={styles.ordersList}>
        <h3>Мої замовлення</h3>
        <OrderCard isOpen={true}/>
        <OrderCard isOpen={false}/>
    </div>
}