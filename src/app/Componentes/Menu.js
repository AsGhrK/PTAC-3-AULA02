import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
export default function Menu() {
  return (
    <header lang="pt-br" className={styles.cabecalho}>
      <Image
        width={100}
        height={100}
        src={"https://www.ifms.edu.br/marcaifms.png"} />
      <h1>Menu</h1>
      <nav>
        <ul>
          <Link href="/">
            <li  className={styles.link}>Home</li>
          </Link>
          <Link href="registro">
            <li  className={styles.link}>Registrar</li>
          </Link>
          <Link href="localizacao">
            <li  className={styles.link}>Local</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
