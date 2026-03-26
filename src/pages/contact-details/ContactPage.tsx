import { HeaderSimple } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import styles from "./contact.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


type FormData = {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: string;
  phone: string;
  email: string;
};

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    middleName: "",
    birthDate: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Ви не авторизовані! Будь ласка, увійдіть.");
      navigate("/");
      return;
    }

    fetch("http://localhost:8002/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.message) {
          
          setFormData({
            lastName: data.surname || "",
            firstName: data.name || "",
            middleName: data.patronymic || "",
            birthDate: data.birthDate || "",
            phone: data.number || "",
            email: data.email || "",
          });
        }
      })
      .catch(err => console.error("Fetch user error:", err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userRegistered");
    localStorage.removeItem("token"); 
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Ви не авторизовані! Будь ласка, увійдіть.");
      return;
    }
  
    const payload = {
      name: formData.firstName,
      surname: formData.lastName,
      patronymic: formData.middleName,
      birthDate: formData.birthDate,
      number: formData.phone,
      email: formData.email,
    };
  
    try {
      const response = await fetch("http://localhost:8002/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json().catch(() => ({ message: "Server did not return JSON" }));
  
      if (!response.ok) {
        throw new Error(data.message || "Server error");
      }
  
      
    } catch (error: any) {
      console.error("ERROR:", error);
    }
  };
  return (
    <>
      <HeaderSimple />
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
            <form className={styles.form} onSubmit={handleSubmit}>
              {(["lastName","firstName","middleName","birthDate","phone","email"] as (keyof FormData)[]).map(field => (
                <div key={field} className={styles.formField}>
                  <label>
                    {field === "lastName" ? "Прізвище" :
                     field === "firstName" ? "Ім'я" :
                     field === "middleName" ? "По батькові" :
                     field === "birthDate" ? "Дата народження" :
                     field === "phone" ? "Телефон" : "E-mail"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "lastName" ? "Ваше прізвище" :
                      field === "firstName" ? "Ваше ім'я" :
                      field === "middleName" ? "По батькові" :
                      field === "birthDate" ? "DD/MM/YYYY" :
                      field === "phone" ? "+380" :
                      "Ваш e-mail"
                    }
                  />
                </div>
              ))}
              <button className={styles.button} type="submit">ЗБЕРЕГТИ ЗМІНИ</button>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}