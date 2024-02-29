import { images } from "../../../next.config";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
export default function RodaPe() {
  return (
    <header lang="pt-br" className={styles.RodaPe}>
      <Link href={"https://" + images.domains[1]}>
        <Image
          width={100}
          height={100}
          src={
            "data:image/png;base64,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"
          }
        />
      </Link>
      <h1>Roda pé</h1>
      <nav>
        <ul>
          <li>Contato: macerlino@gmail.com</li>
          <li>Local: IFMS - CAMPUS NOVA ANDRADINA</li>
        </ul>
      </nav>
    </header>
  );
}
