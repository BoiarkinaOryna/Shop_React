import { useForm } from "react-hook-form";
import { HeaderSimple } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import styles from "./contact.module.css";
import { addInfoSubmitState } from "./types";
import { useNavigate } from "react-router-dom";


export function ContactPage() {

  const { register, handleSubmit, formState } = useForm<addInfoSubmitState>()

  const { 
    surname: surnameError,
    name: nameError,
    patronymic: patronymicError,
    birthdate: birthdateError,
    number: numberError,
    email: emailError,
    root: rootError
  } = formState.errors

  function onAddInfoSubmit(){
    
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRegistered"); 
    navigate("/"); 
  };
  return (
    <>
      <Main>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <p className={styles.leftTitle}>ОСОБИСТИЙ КАБІНЕТ</p>

            <p className={styles.activeItem}>КОНТАКТНІ ДАНІ</p>
            <p className={styles.menuItem}>МОЇ ЗАМОВЛЕННЯ</p>
            <p className={styles.menuItem}>АДРЕСА ДОСТАВКИ</p>

            <div className={styles.line}></div>

            <p className={styles.menuItem} onClick={handleLogout}>ВИЙТИ</p>
          </div>

          <div className={styles.rightContainer}>
            <p className={styles.sectionTitle}>Контактні дані</p>

            <form className={styles.form} onSubmit={handleSubmit(onAddInfoSubmit)}>
              <div className={styles.formField}>
                <label>Прізвище</label>
                <input type="text" placeholder="Ваше прізвище" {...register("surname", {
                  maxLength: {
                    value: 20,
                    message: "Максимальна допустима довжина прізвища: 20 літер"
                  }
                })}/>
                <p>{ surnameError?.message }</p>
              </div>

              <div className={styles.formField}>
                <label>Ім'я</label>
                <input type="text" placeholder="Ваше ім'я" {...register("name", {
                  maxLength: {
                    value: 20,
                    message: "Максимальна допустима довжина імені: 20 літер"
                  }
                })}/>
                <p>{ nameError?.message }</p>
              </div>

              <div className={styles.formField}>
                <label>По батькові</label>
                <input type="text" placeholder="По батькові" {...register("patronymic", {
                  maxLength: {
                    value: 20,
                    message: "Максимальна допустима довжина по батькові: 20 літер"
                  }
                })}/>
                <p>{ patronymicError?.message }</p>
              </div>

              <div className={styles.formField}>
                <label>Дата народження</label>
                <input type="text" placeholder="DD/MM/YYYY" {...register("birthdate", {
                  validate: (value) => {
                    if (value) {
                      const splittedValue = value.split("/")
                      if (isNaN(+splittedValue[0]) || isNaN(+splittedValue[1]) || isNaN(+splittedValue[2])){
                        return "Формату дати не дотримано"
                      }
                      if (+splittedValue[0] < 1 || +splittedValue[0] > 31) return "День народження має бути істинним"
                      if (+splittedValue[1] < 1 || +splittedValue[1] > 12) return "Місяць народження має бути істинним"
                      if (+splittedValue[2] < 1900 || +splittedValue[2] > 2026) return "Рік народження має бути істинним"
                    }
                  }
                })}/>
                <p>{ birthdateError?.message }</p>
              </div>

              <div className={styles.formField}>
                <label>Телефон</label>
                <input type="text" placeholder="+380" {...register("number", {
                  validate: (value) => {
                    if (value){
                      const regexp = /^[a-z]+$/i
                      if (regexp.test(value)) return "Номер телефону не має містити букв"
                      if (value[0] != "+") return "Номер телефону має починатися з '+'"
                    }
                  }
                })}/>
                <p>{ numberError?.message }</p>
              </div>

              <div className={styles.formField}>
                <label>E-mail</label>
                <input type="text" placeholder="Ваш e-mail" {...register("email", {
                  minLength: {
                      value: 6,
                      message: "Електронна адреса має містити мінімум 6 символів"
                  },
                  validate: (value) => {
                    if (value){
                      if (!value.includes("@") || !value.includes('.')) return "Це поле має містити електрону пошту. Символи '@' та '.' обов'язкові"
                    }
                  }
                })}/>

                <p>{ emailError?.message }</p>
              </div>

              <button className={styles.button}>
                ЗБЕРЕГТИ ЗМІНИ
              </button>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}
