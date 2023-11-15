"use client";
import { useState } from "react";
import styles from "./NewAccountForm.module.sass";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    handleCreateUser(formData)
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>New Account</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="Name" disabled={loading} />
        <input type="text" name="last_name" placeholder="Lastname" disabled={loading} />
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" disabled={loading} />
        <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} />
        <input type="password" name="password" placeholder="password" disabled={loading} />
        <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} />
        <input type="submit" name="submit" value="Crear cuenta" disabled={loading} />
      </form>
      {errors.length > 0 && 
        <div>
          {errors.map((error, index) => {
            return <p key={index} className={styles.NewAccountForm__error}>{error}</p>
          })}
        </div>
      }
    </div>
  );
}