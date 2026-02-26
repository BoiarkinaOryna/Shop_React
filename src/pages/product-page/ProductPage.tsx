import { useParams } from "react-router-dom";
import { useGetProduct } from "../../hooks/product/Get-products";
import { HeaderProduct } from "../../app/header/heaaderProduct/HeaderProduct";
import { Main } from "../../app/main/Main";
import styles from "./product.module.css";
import { icons } from "../../shared/types/icons"
import { Footer } from "../../app/footer/Footer";

export function ProductPage() {
  const { id } = useParams()
  
  const productId = id || window.location.pathname.match(/\/product\/(\d+)/)?.[1];
  // const [ params, useIdParams ] = useParams()
  // const { id } = useParams<{id: string}>()
  // console.log("product id =", id)
  
  const { product, isLoading, error } = useGetProduct(productId)
  console.log(isLoading, error, product)
  if (isLoading) return <div>Завантаження...</div>
  if (error) return <div>Помилка: {error}</div>
  if (!product) return <div>Товар не знайдено. ID: {productId}</div>

  return <div>
      <HeaderProduct product={product} />
      <Main>
        <div className={styles.productPageContainer}>
          <div  className={styles.txtPlusImage}>
            <div className={styles.generalInfo}>
              <h3>Володійте кожним кутом</h3> 
              <p>
                Представляємо вдосконалену систему з трьома камерами, де кожен об'єктив має свої
                переваги, створюючи виняткові зображення — від широких ширококутних пейзажів до
                детальних телефото-знімків крупним планом. Усі три камери оснащені функцією Dual
                Native ISO Fusion, яка бездоганно поєднує переваги високих і низьких значень ISO
                для захоплення приголомшливих деталей, яких неможливо досягти за допомогою
                традиційних рішень.
              </p>

              <p>
                Крім того, ви можете розкрити свій творчий потенціал завдяки можливості створення
                знімків у форматі RAW з високою роздільною здатністю (до 5 кадрів), а також таким
                функціям, як «Вільні панорами» та «Фокусування на об'єкті», які доступні на всіх
                камерах.
              </p>
              <img className={styles.dronVideo} src={icons.dronVideo}  />

            </div>

          </div>

          <div  className={styles.InfoCamera}>
            <div className={styles.generalInfo2}>
              <h3>Основна камера 4/3 CMOS Hasselblad Hasselblad</h3> 
              <p>
                У ретельно розробленій 4/3 CMOS-камері Hasselblad використовується абсолютно 
                новий 100-мегапіксельний сенсор і відома технологія Hasselblad Natural Color 
                Solution (HNCS), що забезпечує виняткову точність передачі кольору. 

              </p>

              <p>
                Вона створює захоплюючі 100-мегапіксельні зображення з високою деталізацією та 
                чіткістю, пропонуючи безпрецедентну гнучкість у пост-обробці. Конструкція 
                об'єктива була перероблена відповідно до вимог 100-мегапіксельної матриці, що 
                забезпечує неймовірну різкість.

              </p>

            </div>
              <img className={styles.dronVideo2} src={icons.dronVideo}  />


            
          </div>

          <div  className={styles.flightTime}>
            <img className={styles.dronVideo3} src={icons.dronVideo}  />
            <div className={styles.generalInfo3}>
              <h3>51-хв час польоту</h3> 
              <p>
                Аеродинамічний дизайн Mavic 4 Pro, ефективна силова установка та акумуляторна 
                батарея ємністю 95 Вт-год забезпечують тривалість польоту до 51 хвилини, 
                максимальну швидкість до 90 км/год та дальність польоту до 41 км (25,4 милі) [2]. 

              </p>

              <p>
                Незалежно від того, чи ви розвідуєте місцевість, відпрацьовуєте маневри, робите 
                затримки в часі або панорамні фото за допомогою телеоб'єктива, достатня 
                тривалість польоту дозволяє вам діяти легко і впевнено.

              </p>

            </div>

            
          </div>

          <div className={styles.memory}>
            <div className={styles.memoryHeader}>
              <h3>ДО 512 ГБ ВБУДОВАНОЇ ПАМʼЯТІ</h3>
              <p>
                Стандартна версія DJI Mavic 4 Pro поставляється з 64 ГБ вбудованої пам'яті [14], тому ви 
                можете відразу ж почати зйомку без зовнішньої карти пам'яті. Mavic 4 Pro 512GB в 
                комплектації Creator Combo має 512 ГБ високошвидкісної вбудованої пам'яті [15],.
              </p>
            </div>

            <div className={styles.memoryStats}>
              <div className={styles.stat}>
                <h1>ALL-I 4:2:2</h1>
                <span>Кодування</span>
              </div>

              <div className={styles.stat}>
                <h1>512 ГБ</h1>
                <span>UFS Сховище</span>
              </div>

              <div className={styles.stat}>
                <h1>64 ГБ</h1>
                <span>eMMC Storage</span>
              </div>
            </div>

            <div className={styles.memoryImage}>
              <img src={icons.dronVideo} alt="DJI memory chip" />
            </div>
          </div>

          <div className={styles.blockCatalog}>
            <h2>СХОЖІ ТОВАРИ</h2>
            <div className={styles.popularProducts}>
                
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>

            </div>
            <div className={styles.blackBtn}>
                ДИВИТИСЬ ВСІ
                <img src={icons.WhiteArrow} alt="" />
            </div>
            
        </div>

        </div>

      </Main>
    <Footer/>
  </div>
}