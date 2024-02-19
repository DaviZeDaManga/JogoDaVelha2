import './game.scss';
import { useEffect, useRef, useState } from 'react'

function GameApp() {
  
  // const [jogoprincipal, setJogoprincipal] = useState([ [], [], [], [], [], [], [], [], [] ])
  const [vezdojogador, setVezdojogador] = useState(1)
  const [jogoprincipal, setJogoprincipal] = useState([ "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada", "nada" ])

  function AdicionarMarcacao(item) {

    if (vezdojogador == 1) {
        setJogoprincipal("x")
    }

    else if (vezdojogador == 2) {
        setJogoprincipal[item] = ("y")
    }

  }

  return (
    <div className="JogoDaVelha2">

        <section className="jogo">

            {jogoprincipal.map( item => 
            
                <div onClick={() => (AdicionarMarcacao(1))} className={`cards-jogo_principal ${item == "x" && 'x'} ${item == "y" && 'y'}`}> </div>

            )}

        </section>

    </div> 
  );
}

export default GameApp;
