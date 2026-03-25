import { useEffect, useRef, useState } from "react";
import { useCartContext } from "../../context";
import { ModalInterface } from "./modalInterface";
import styles from "./modal.module.css";
import { icons } from "../../shared/types/icons";
import { Link } from "react-router-dom";

export function ChangeCartModal(props: ModalInterface) {
  const {
    items,
    addCartItem,
    incrementCartItem,
    decrementCartItem,
    priceCart,
    removeCartItem,
    savedPriceCart,
    discountPriceCart,
  } = useCartContext()

  const [totalPrice, setTotalPrice] = useState(0)
  const { isOpen, close } = props

  const modalRef = useRef<HTMLDivElement>(null)

  const isEmpty = items.length === 0

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!modalRef.current) return;

      if (!modalRef.current.contains(event.target as Node)) {
        close();
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [close])

  return (
    <div
      ref={modalRef}
      className={styles.modalContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.head}>
        <h2>Редагувати товари</h2>
      </div>

      <div className={styles.modalBody}>
        {isEmpty && <div className={styles.emptyBlock}>Кошик порожній</div>}

        {!isEmpty && (
          <>
            <div className={styles.itemsContainer}>
              {items.map((item, index) => {
                return (
                  <div key={index}>
                    <div className={styles.itemInfo}>
                      <img
                        src={`http://localhost:8000/uploads/${item.product.image?.path}`}
                        alt=""
                      />
                      <div className={styles.itemDetails}>
                        <div className={styles.itemInfoDetails}>
                          <p className={styles.p1}>{item.product.title}</p>
                          <div className={styles.priceContainer}>
                            <p className={styles.p2}>{item.product.price} ₴</p>
                          </div>
                        </div>

                        <div className={styles.quantityContainer}>
                          <button
                            className={styles.minus}
                            onClick={() => decrementCartItem(item.product.id)}
                          >
                            <img src={icons.Minus} alt="" />
                          </button>

                          <p className={styles.count}>{item.count}</p>

                          <button
                            className={styles.plus}
                            onClick={() => incrementCartItem(item.product.id)}
                          >
                            <img src={icons.Plus} alt="" />
                          </button>
                        </div>

                        <div className={styles.removeButtonContainer}>
                          <button
                            className={styles.remove}
                            onClick={() => removeCartItem(item.product.id)}
                          >
                            <img src={icons.Backet} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className={styles.line}></div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.totalPrices}>
              <div className={styles.totalPrice}>
                <p>Загальна ціна </p>
                <p className={styles.priceCart}>{priceCart()}₴</p>
              </div>

              <div className={styles.totalPrice}>
                <p>Заощадження</p>
                <p className={styles.savedPriceCart}>{savedPriceCart()}₴</p>
              </div>

              <div className={styles.totalPrice}>
                <p>Зі знижкою</p>
                <p className={styles.discountPriceCart}>
                  {discountPriceCart()} ₴
                </p>
              </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.buttonsContainer}>
              <div className={styles.goToCart}>
                <button>ПЕРЕЙТИ ДО КОШИКА </button>
              </div>
              <div className={styles.toIssue}>
                <Link to={"/order"}>
                  ОФОРМИТИ ЗАМОВЛЕННЯ <img src={icons.WhiteArrow} alt="" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
