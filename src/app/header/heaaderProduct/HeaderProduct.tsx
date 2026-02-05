import { icons } from "../../../shared/types/icons"
import { Product } from "../../../shared/types/types"
import styles from "./header-product.module.css"

interface HeaderProductProps {
  product: Product
}

export function HeaderProduct({ product }: HeaderProductProps) {
  let finalPrice = product.price

  if (product.discount) {
    const percent = parseInt(product.discount)
    finalPrice = Math.round(product.price * (1 - percent / 100))
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <nav className={styles.links}>
          <span>КАТАЛОГ</span>
          <span>ПРО НАС</span>
          <span>КОНТАКТИ</span>
        </nav>

        <img
          src={icons.HeaderLogo}
          alt="Логотип магазину"
          className={styles.logo}
        />

        <div className={styles.profile}>
          <img src={icons.LightCart} alt="Кошик" />
          <img src={icons.LightAvatar} alt="Профіль" />
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <h1 className={styles.heading}>{product.title}</h1>

        {product.shortDescription && (
          <p className={styles.description}>
            {product.shortDescription}
          </p>
        )}
      </div>

      {product.image?.path && (
        <img
          src={product.image.path}
          alt={product.title}
          className={styles.drone}
        />
      )}

      <div className={styles.productCard}>
        <img
          src={product.image?.path}
          
          className={styles.cardImage}
        />

        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>{product.title}</div>

          <div className={styles.priceRow}>
            {product.discount ? (
              <>
                <span className={styles.oldPrice}>
                  {product.price} ₴
                </span>
                <span className={styles.newPrice}>
                  {finalPrice} ₴
                </span>
              </>
            ) : (
              <span className={styles.singlePrice}>
                {product.price} ₴
              </span>
            )}
          </div>
        </div>
        <div className={styles.orderContainer}>
          <img src={icons.Frame1} alt="Кошик" />

          <button className={styles.orderButton}>
            ЗАМОВИТИ →
          </button>
        </div>

      </div>

      <div className={styles.whiteArc} />
    </header>
  )
}
