import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <header className={styles.header}>
          <h1>OdontoCare</h1>

          <p>Faça login para acessar o sistema</p>
        </header>

        <form className={styles.form}>
          <Input label="Email" type="email" placeholder="Digite seu email" />

          <Input label="Senha" type="password" placeholder="Digite sua senha" />

          <Button text="Entrar" />
        </form>
      </section>
    </main>
  );
}

export default Login;
