import Link from "next/link";
import RodaPe from "./Componentes/RodaPe";
import styles from "./Componentes/menu.module.css";

export default function NoiFound() {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <Link href="/">Retornar para Inicio</Link>
      <RodaPe className={styles.RodaPe} />
    </div>
  );
}
