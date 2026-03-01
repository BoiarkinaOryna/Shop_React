import { useEffect, useState } from "react";
import { icons } from "../../../shared/types/icons";
import { Product } from "../../../shared/types/types";
import styles from "./header-product.module.css";
import { ChangeCartModal } from "../../../components/ChangeCartModal/ChangeCartModal";
import { useCartContext } from "../../../context";
import { HeaderSimple } from "../Header";

interface HeaderProductProps {
  product: Product;
}

export function HeaderProduct({ product }: HeaderProductProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [finalPrice, setFinalPrice] = useState(product.price);
  const { addCartItem } = useCartContext();

  useEffect(() => {
    if (product.discount) {
      const percent = parseInt(product.discount);
      setFinalPrice(Math.round(product.price * (1 - percent / 100)));
    } else {
      setFinalPrice(product.price);
    }
  }, [product]);

  return (
    <header className={styles.headerContainer}>
      <HeaderSimple />

      <div className={styles.descriptionContainer}>
        <h1 className={styles.heading}>{product.title}</h1>

        {product.shortDescription && (
          <p className={styles.description}>{product.shortDescription}</p>
        )}
      </div>

      {product.image?.path && (
        <img
          src={`http://localhost:8000/uploads/${product.image?.path}`}
          alt={product.title}
          className={styles.drone}
        />
      )}

      {isOpen && (
        <ChangeCartModal isOpen={isOpen} close={() => setIsOpen(false)} />
      )}

      <div className={styles.productCard}>
        <img
          src={`http://localhost:8000/uploads/${product.image?.path}`}
          className={styles.cardImage}
        />

        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>{product.title}</div>

          <div className={styles.priceRow}>
            {product.discount ? (
              <>
                <span className={styles.oldPrice}>{product.price} ₴</span>
                <span className={styles.newPrice}>{finalPrice} ₴</span>
              </>
            ) : (
              <span className={styles.singlePrice}>{product.price} ₴</span>
            )}
          </div>
        </div>

        <div className={styles.orderContainer}>
          <button onClick={() => setIsOpen(true)} className={styles.cartOpener}>
            <img src={icons.Frame1} alt="Кошик" />
          </button>

          <button
            className={styles.orderButton}
            onClick={() => {
              addCartItem(product);
              setIsOpen(true);
            }}
          >
            ЗАМОВИТИ →
          </button>
        </div>
      </div>

      <div className={styles.whiteArc} />
    </header>
  );
}
