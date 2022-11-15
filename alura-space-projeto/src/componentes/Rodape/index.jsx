import React from "react";
import facebook from "./facebook.svg";
import whatsapp from "./whatsapp.svg";
import instagram from "./instagram.png";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511966583814"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="ícone do whatsapp" />
        </a>
        <a
          href="https://instagram.com/lp.michel_?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      
    </footer>
  );
}
