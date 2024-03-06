import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  return (
    <header lang="pt-br">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
        <div class="container-fluid">
          <a class="navbar-brand">
            <Image
            class="img-fluid"
              width={100}
              height={100}
              src={"https://www.ifms.edu.br/marcaifms.png"} />
          </a>
          <a class="navbar-brand">Menu</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link href="/" className="nav-link active" aria-current="page" >Home</Link>
              <Link href="registro" className="nav-link active " >Registro</Link>
              <Link href="localizacao" className="nav-link active" >Localização</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
