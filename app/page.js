import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Página especial de Nachito</h1>
      </header>
      <div>
        <div className={styles.container}>
          <div>
            <p>Vamos a probar taggeo</p>
          </div>
          <div>
            <button>Soy un botón</button>
          </div>
          <div>
            <label>
              Nombre: <input name="myInput" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
