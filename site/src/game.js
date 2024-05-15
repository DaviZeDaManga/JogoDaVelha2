import "./game.scss";
import { useEffect, useState } from "react";

//bibliotecas
import { ToastContainer, toast } from "react-toastify";

function GameApp() {
  const [vitoria, setVitoria] = useState("jogando");
  const [vezdojogador, setVezdojogador] = useState(1);



  

  //jogo principal
  const [jogandoojogo, setJogandoojogo] = useState(null)
  const [jogoprincipal, setJogoprincipal] = useState([
    "0","1","2",
    "3","4","5",
    "6","7","8",
  ]);
  //os jogso em array
  const [jogos, setJogos] = useState([
    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],

    ["0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"],
  ]);

  







  //adicionar marcacao no jogo especifico
  function AdicionarMarcacao(jogo, posicao) {
    const copiaJogos = [...jogos]; // Criando uma cópia dos jogos
    const jogoespecifico = copiaJogos[jogo]; // pegando o jogo especifico

    try {

      if (jogoespecifico[posicao] == "x" || jogoespecifico[posicao] == "o") {
        alert("essa casa ja foi jogada")
      }

      else if (jogandoojogo != jogo && jogandoojogo != null ) {
        alert("essa casa nao pode ser jogada")
      }
      
      else if (jogandoojogo == jogo || jogandoojogo == null) {

        if (vezdojogador === 1 || vezdojogador === 2) {
          jogoespecifico[posicao] = vezdojogador === 1 ? "x" : "o";
          copiaJogos[jogo] = jogoespecifico;
  
          setJogos(copiaJogos); // Atualiza o estado do array
          
          if (jogoprincipal[posicao] == "x" || jogoprincipal[posicao] == "o" ) {
            setJogandoojogo(null)
          }
          else {
            setJogandoojogo(posicao)
          }
        }
      }
    }
    catch {

      toast.error("Parece que algo deu errado")
    }
    finally {

      if (vezdojogador == 1) { setVezdojogador(2); } 
      else if (vezdojogador == 2) { setVezdojogador(1); }
    }

    
  }
  console.log(jogoprincipal)

  //verificar se algum jogo esta na casa errada
  useEffect(()=> {
    for (let item of jogoprincipal) {
      const position = jogoprincipal.indexOf(item)
      if ((item == "x" || item == "o") && position == jogandoojogo) {
        setJogandoojogo(null)
      }
    }
  })

  //verificar se algum jogo foi ganho
  useEffect(() => {
    const linhas = [
      [0, 1, 2], // Linha superior
      [3, 4, 5], // Linha do meio
      [6, 7, 8], // Linha inferior
      [0, 3, 6], // Coluna esquerda
      [1, 4, 7], // Coluna do meio
      [2, 5, 8], // Coluna direita
      [0, 4, 8], // Diagonal principal
      [2, 4, 6], // Diagonal secundária
    ];

    for (let jogo of jogos) {
      // let todasAsCasasPreenchidas = true;
  
      for (let linha of linhas) {
        const [a, b, c] = linha;
  
        if ( jogo[a] === jogo[b] && jogo[b] === jogo[c] && jogo[c] === jogo[a] ) {
          let copiaprincipal = [...jogoprincipal];
          const index = jogos.indexOf(jogo);
  
          if (copiaprincipal[index] !== "x" && copiaprincipal[index] !== "o") {
            copiaprincipal[index] = vezdojogador === 1 ? "o" : "x";
            setJogoprincipal(copiaprincipal);
          }
  
          // else if (todasAsCasasPreenchidas) {
          //   copiaprincipal[index] = "empate"
          //   setJogoprincipal(copiaprincipal);
          // }
        }
      }
    }
  }, [jogos]);

  //verificar quem ganhou o jogo principal
  useEffect(() => {
    const linhas = [
      [0, 1, 2], // Linha superior
      [3, 4, 5], // Linha do meio
      [6, 7, 8], // Linha inferior
      [0, 3, 6], // Coluna esquerda
      [1, 4, 7], // Coluna do meio
      [2, 5, 8], // Coluna direita
      [0, 4, 8], // Diagonal principal
      [2, 4, 6], // Diagonal secundária
    ];

    for (let linha of linhas) {
      const [a, b, c] = linha;
      if ( jogoprincipal[a] == jogoprincipal[b] && jogoprincipal[b] == jogoprincipal[c] && jogoprincipal[c] == jogoprincipal[a]) {
        window.location.reload()
      }
    }
  }, [jogoprincipal]);







  return (
    <div className="JogoDaVelha2">

      <section className="jogo">
        {jogoprincipal.map((item, index) => (
          <div key={index} className={`cards-jogo_principal ${item == "x" && "x"} ${ item == "o" && "o"} ${item == "empate" && "empate"} ${jogandoojogo == index && "jogando"}`}>

            {item != "x" || item != "o"} {
              <>
              {jogos[index].map((itemInterno, indexInterno) => (
                <>

                {itemInterno === "x" &&
                <div onClick={() => AdicionarMarcacao(index, indexInterno)} key={indexInterno} className={`cards-jogos ${jogandoojogo === index && (itemInterno !== "x" && itemInterno !== "o") && "jogando"} x`}> 
                  <img src="/assets/images/x.png" />
                </div>}
                {itemInterno === "o" &&
                <div onClick={() => AdicionarMarcacao(index, indexInterno)} key={indexInterno} className={`cards-jogos ${jogandoojogo === index && (itemInterno !== "x" && itemInterno !== "o") && "jogando"} o`}> 
                  <img src="/assets/images/roda.png" />
                </div>}
                {itemInterno !== "x" && itemInterno !== "o" && itemInterno !== "empate" &&
                <div onClick={() => AdicionarMarcacao(index, indexInterno)} key={indexInterno} className={`cards-jogos ${jogandoojogo === index && (itemInterno !== "x" && itemInterno !== "o") && "jogando"}`}> </div>}
                
                </>
              ))}
              </>
            }
            {item == "x" &&
            <div className="xganhou"><img src="/assets/images/x.png" /></div>
            }
            {item == "o" &&
            <div className="oganhou"><img src="/assets/images/roda.png" /></div>
            }
            {item == "empate" &&
            <div className="empate"></div>
            }

          </div>
        ))}
      </section>

    </div>
  );
}

export default GameApp;
