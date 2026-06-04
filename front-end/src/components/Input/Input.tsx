import styles from "./Input.module.css";

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

function Input({ label, type, placeholder }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
