import "./game.scss";
import { useEffect, useState } from "react";

function GameApp() {
  const [vitoria, setVitoria] = useState("jogando");
  const [vezdojogador, setVezdojogador] = useState(1);

  const [jogoprincipal, setJogoprincipal] = useState([
    "0","1","2",
    "3","4","5",
    "6","7","8",
  ]);

  //verificar quem ganhou o jogo ao todo
  useEffect(()=> {
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
        if (jogoprincipal[a] == jogoprincipal[b] && jogoprincipal[b] == jogoprincipal[c] && jogoprincipal[c] == jogoprincipal[a]) {
            setVitoria(`Vitória do jogador ${vezdojogador}`);
            return; // Se encontrou uma vitória, não é necessário verificar mais linhas
        }
    }
  }, [jogoprincipal])




  //os jogso em array
  const [jogos, setJogos] = useState([
    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],

    ["0","1","2",
    "3","4","5",
    "6","7","8",],
  ]);

  //adicionar marcacao no jogo especifico
  function AdicionarMarcacao(jogo, posicao) {
    const copiaJogos = [...jogos]; // Criando uma cópia do array original
    const jogoespecifico = copiaJogos[jogo] // pegando o jogo especifico 

    if (vezdojogador === 1 || vezdojogador === 2) { 
        jogoespecifico[posicao] = vezdojogador === 1 ? "x" : "o";
        copiaJogos[jogo] = jogoespecifico

        setJogos(copiaJogos); // Atualiza o estado do array

        if (vezdojogador == 1) { setVezdojogador(2) }
        else if (vezdojogador == 2) { setVezdojogador(1) }
    }
  }

  //verificar se algum jogo foi ganho
  useEffect(()=> {
    const linhas = [
        [0, 1, 2], // Linha superior
        [3, 4, 5], // Linha do meio
        [6, 7, 8], // Linha inferior
        [0, 3, 6], // Coluna esquerda
        [1, 4, 7], // Coluna do meio
        [2, 5, 8], // Coluna direita
        [0, 4, 8], // Diagonal principal
        [2, 4, 6], // Diagonal secundária
    ]

    //errado
    // for (let itemjogos of jogos) {
    //     let jogo = jogos[itemjogos]

    //     for (let linha of linhas) {
    //         let [a, b, c] = linha

    //         if (jogo[a] == jogo[b] && jogo[b] == jogo[c] && jogo[c] == jogo[a]) {
    //             alert("foi porra")
    //         }
    //     }
    // }

    for (let jogo of jogos) {
        for (let linha of linhas) {
          const [a, b, c] = linha;
    
          if (jogo[a] && jogo[a] === jogo[b] && jogo[a] === jogo[c]) {
            alert("Vitória!");
            return; // Encerra a função se encontrarmos uma vitória
          }
        }
      }
  }, [jogos])

  return (
    <div className="JogoDaVelha2">
      <section className="jogo">

            {jogoprincipal.map((item, index) => (
            <div key={index} className={`cards-jogo_principal ${item === "x" && "x"} ${item === "o" && "o"}`}>
                
                {jogos[index].map((itemInterno, indexInterno) => (
                    <div onClick={() => AdicionarMarcacao(index, indexInterno)} key={indexInterno} className={`cards-jogos ${itemInterno == "x" && 'x'} ${itemInterno == "o" && 'o'}`}></div>
                ))}

            </div>
            ))}

      </section>
    </div>
  );
}

export default GameApp;
