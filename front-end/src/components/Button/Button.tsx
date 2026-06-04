import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
