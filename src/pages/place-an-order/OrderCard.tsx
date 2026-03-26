import styles from "./place.module.css";
import { CartItem } from "../../shared/types/types";
import { API_URL } from "../../shared/api";

function getImageUrl(path?: string) {
  if (!path) return "/no-image.png";
  return `${API_URL}/uploads/${path}`;
}

function getDiscountPrice(price: number, discount?: string | null) {
  if (!discount) return price;
  return Math.round(price - (price * Number(discount)) / 100);
}

export function OrderCard({
  items,
  title,
}: {
  items: CartItem[];
  title?: string;
}) {
  if (!items.length) return <p>Корзина пуста</p>;
  return (
    <div className={styles.orderProduct}>
      <h2>{title || "Ваше замовлення"}</h2>
      {items.map((item) => {
        const { product, count } = item;
        const hasDiscount = !!product.discount;
        const finalPrice = getDiscountPrice(product.price, product.discount);

        return (
          <div key={product.id} className={styles.product}>
            <div className={styles.productImage}>
              <img src={getImageUrl(product.image?.path)} alt={product.title} />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productLeft}>
                <p className={styles.productTitle}>{product.title}</p>
                <div className={styles.productPrice}>
                  {hasDiscount ? (
                    <>
                      <p className={styles.oldPrice}>{product.price} грн</p>
                      <p className={styles.newPrice}>{finalPrice} грн</p>
                    </>
                  ) : (
                    <p>{product.price} грн</p>
                  )}
                </div>
              </div>

              <div className={styles.productQuantity}>
                <p>{count}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
