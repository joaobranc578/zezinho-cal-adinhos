import "./Colecoes.css";

import verao from "../../assets/verao.jpg";
import scarpins from "../../assets/scarpins.jpg";
import bolsas from "../../assets/bolsas.jpg";

export default function Colecoes() {
  return (
    <section className="colecoes">
      <div className="titulos">
        <h2>Coleções 2026</h2>
        <p>
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem
          quam , ad dolor doloremque quo, maiores magnam sed, mollitia
          perspiciatis cum temporibus eligendi. Facere modi corrupti ipsa
          distinctio odio assumenda!
        </p>
        <button className="btn">Comprar agora</button>
      </div>

      <div className='grid-colecoes'>
        <div className='item'>
            <img src={verao} alt="colecao verao" />
        </div>

        <div className='item grande'>
            <img src={bolsas} alt="colecao verao" />
        </div>

        <div className='item'>
            <img src={scarpins} alt="colecao verao" />
        </div>
      </div>
    </section>
  );
}
