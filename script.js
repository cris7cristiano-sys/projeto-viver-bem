// ==========================================
// PROJETO VIVER BEM
// JAVASCRIPT PRINCIPAL
// ==========================================


// ==========================================
// USUÁRIO
// ==========================================

let usuarioNome =
  localStorage.getItem("usuarioNome") || "";


// ==========================================
// ATUALIZAR SAUDAÇÃO
// ==========================================

function atualizarSaudacaoUsuario() {

  let saudacao =
    document.getElementById(
      "saudacaoUsuario"
    );


  if (!saudacao) return;


  if (usuarioNome.trim() === "") {

    saudacao.innerText =
      "Olá! 👋";

    return;

  }


  saudacao.innerText =
    "Olá, " +
    usuarioNome +
    "! 👋";

}


// ==========================================
// CONTINUAR PRIMEIRO ACESSO
// ==========================================

function continuarPrimeiroAcesso() {

  let campoNome =
    document.getElementById(
      "nomeUsuario"
    );


  if (!campoNome) return;


  let nome =
    campoNome.value.trim();


  if (nome === "") {

    alert(
      "Digite seu nome para continuar!"
    );

    return;

  }


  usuarioNome = nome;


  localStorage.setItem(
    "usuarioNome",
    usuarioNome
  );


  atualizarSaudacaoUsuario();

  mostrarTela("inicio");

}


// ==========================================
// HISTÓRICO DE PESO
// ==========================================

let historicoPeso =
  JSON.parse(localStorage.getItem("historicoPeso")) || [];


// ==========================================
// REGISTRAR PESO
// ==========================================

function registrarPeso() {

  let campoPeso =
    document.getElementById("peso");

  let peso =
    campoPeso.value.trim();


  if (peso === "") {

    alert("Digite seu peso primeiro!");

    return;
  }


  let data =
    new Date().toLocaleDateString("pt-BR");


  historicoPeso.push({

    data: data,

    peso: Number(peso)

  });


  localStorage.setItem(
    "historicoPeso",
    JSON.stringify(historicoPeso)
  );


  document.getElementById("pesoAtual").innerText =
    Number(peso).toFixed(1) + " kg";


  mostrarHistorico();

  atualizarEvolucao();


  campoPeso.value = "";


  alert(
    "Peso salvo: " +
    Number(peso).toFixed(1) +
    " kg"
  );

}


// ==========================================
// MOSTRAR HISTÓRICO DE PESO
// ==========================================

function mostrarHistorico() {

  let tabela =
    document.getElementById("historico");


  if (!tabela) return;


  tabela.innerHTML = `

    <tr>

      <th>Data</th>

      <th>Peso</th>

    </tr>

  `;


  historicoPeso.forEach(function(registro) {

    let novaLinha =
      tabela.insertRow(-1);


    novaLinha.insertCell(0).innerText =
      registro.data;


    novaLinha.insertCell(1).innerText =
      Number(registro.peso).toFixed(1) +
      " kg";

  });

}


// ==========================================
// ATUALIZAR PESO ATUAL
// ==========================================

function atualizarPesoAtual() {

  let elemento =
    document.getElementById("pesoAtual");


  if (!elemento) return;


  if (historicoPeso.length === 0) {

    elemento.innerText =
      "—";

    return;
  }


  let ultimo =
    historicoPeso[
      historicoPeso.length - 1
    ];


  elemento.innerText =
    Number(ultimo.peso).toFixed(1) +
    " kg";

}


// ==========================================
// HISTÓRICO DE TREINO
// ==========================================

let historicoTreino =
  JSON.parse(localStorage.getItem("historicoTreino")) || [];


// ==========================================
// REGISTRAR TREINO
// ==========================================

function registrarTreino() {

  let exercicio =
    document.getElementById("exercicio").value;


  let carga =
    document.getElementById("cargaTreino").value;


  let serie1 =
    document.getElementById("serie1").value;


  let serie2 =
    document.getElementById("serie2").value;


  let serie3 =
    document.getElementById("serie3").value;


  if (
    serie1 === "" ||
    serie2 === "" ||
    serie3 === ""
  ) {

    alert(
      "Preencha todas as séries!"
    );

    return;
  }


  if (carga === "") {

    carga = 0;

  }


  let data =
    new Date().toLocaleDateString("pt-BR");


  historicoTreino.push({

    data: data,

    exercicio: exercicio,

    carga: Number(carga),

    serie1: Number(serie1),

    serie2: Number(serie2),

    serie3: Number(serie3)

  });


  localStorage.setItem(
    "historicoTreino",
    JSON.stringify(historicoTreino)
  );


  mostrarHistoricoTreino();

  atualizarEvolucao();


  document.getElementById(
    "cargaTreino"
  ).value = "";


  document.getElementById(
    "serie1"
  ).value = "";


  document.getElementById(
    "serie2"
  ).value = "";


  document.getElementById(
    "serie3"
  ).value = "";


  alert("Treino salvo!");

}


// ==========================================
// MOSTRAR HISTÓRICO DE TREINO
// ==========================================

function mostrarHistoricoTreino() {

  let tabela =
    document.getElementById(
      "historicoTreino"
    );


  if (!tabela) return;


  tabela.innerHTML = `

    <tr>

      <th>Data</th>

      <th>Exercício</th>

      <th>Carga</th>

      <th>S1</th>

      <th>S2</th>

      <th>S3</th>

    </tr>

  `;


  historicoTreino.forEach(
    function(registro) {

      let novaLinha =
        tabela.insertRow(-1);


      novaLinha.insertCell(0).innerText =
        registro.data;


      novaLinha.insertCell(1).innerText =
        registro.exercicio;


      novaLinha.insertCell(2).innerText =
        registro.carga !== undefined
          ? registro.carga + " kg"
          : "—";


      novaLinha.insertCell(3).innerText =
        registro.serie1;


      novaLinha.insertCell(4).innerText =
        registro.serie2;


      novaLinha.insertCell(5).innerText =
        registro.serie3;

    }
  );

}


// ==========================================
// HISTÓRICO DE SONO
// ==========================================

let historicoSono =
  JSON.parse(localStorage.getItem("historicoSono")) || [];


// ==========================================
// REGISTRAR SONO
// ==========================================

function registrarSono() {

  let horaDormiu =
    document.getElementById(
      "horaDormiu"
    ).value;


  let horaAcordou =
    document.getElementById(
      "horaAcordou"
    ).value;


  if (
    horaDormiu === "" ||
    horaAcordou === ""
  ) {

    alert(
      "Informe a hora que dormiu e acordou!"
    );

    return;
  }


  let partesDormiu =
    horaDormiu.split(":");


  let partesAcordou =
    horaAcordou.split(":");


  let inicio =
    Number(partesDormiu[0]) * 60 +
    Number(partesDormiu[1]);


  let fim =
    Number(partesAcordou[0]) * 60 +
    Number(partesAcordou[1]);


  if (fim <= inicio) {

    fim += 24 * 60;

  }


  let diferenca =
    fim - inicio;


  let horas =
    Math.floor(diferenca / 60);


  let minutos =
    diferenca % 60;


  let tempoSono =
    horas +
    "h " +
    minutos +
    "min";


  let data =
    new Date().toLocaleDateString(
      "pt-BR"
    );


  // Se estiver editando, manter a data original
  if (
    window.sonoEmEdicao !== undefined &&
    window.sonoEmEdicao !== null &&
    historicoSono[window.sonoEmEdicao]
  ) {

    data =
      historicoSono[
        window.sonoEmEdicao
      ].data;

  }


// ========================================
// SALVAR OU EDITAR SONO
// ========================================

let registroSono = {

  data: data,

  horaDormiu: horaDormiu,

  horaAcordou: horaAcordou,

  tempo: tempoSono,

  minutos: diferenca

};


if (
  window.sonoEmEdicao !== undefined &&
  window.sonoEmEdicao !== null
) {

  // Atualizar registro existente

  historicoSono[
    window.sonoEmEdicao
  ] = registroSono;


  // Limpar modo de edição

  window.sonoEmEdicao = null;

}

else {

  // Novo registro

  historicoSono.push(
    registroSono
  );

}


  localStorage.setItem(
    "historicoSono",
    JSON.stringify(historicoSono)
  );


  mostrarHistoricoSono();

window.sonoEmEdicao = null;
  atualizarEvolucao();


  document.getElementById(
    "horaDormiu"
  ).value = "";


  document.getElementById(
    "horaAcordou"
  ).value = "";


  alert(
    "Sono registrado: " +
    tempoSono
  );

}
// ==========================================
// EDITAR REGISTRO DE SONO
// ==========================================

function editarSono(indice) {

  let registro =
    historicoSono[indice];


  if (!registro) return;


  document.getElementById(
    "horaDormiu"
  ).value =
    registro.horaDormiu;


  document.getElementById(
    "horaAcordou"
  ).value =
    registro.horaAcordou;


  window.sonoEmEdicao =
    indice;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
// ==========================================
// MOSTRAR HISTÓRICO DE SONO
// ==========================================

function mostrarHistoricoSono() {

  let tabela =
    document.getElementById(
      "historicoSono"
    );


  if (!tabela) return;


  tabela.innerHTML = `

    <tr>

      <th>Data</th>

      <th>Tempo de sono</th>

      <th>Ações</th>

    </tr>

  `;


  historicoSono.forEach(
    function(registro, indice) {

      let novaLinha =
        tabela.insertRow(-1);


      novaLinha.insertCell(0).innerText =
        registro.data;


      novaLinha.insertCell(1).innerText =
        registro.tempo;


      novaLinha.insertCell(2).innerHTML = `

        <button
          class="btn-editar-sono"
          onclick="editarSono(${indice})">

          ✏️ Editar

        </button>

      `;

    }
  );

}


// ==========================================
// METAS DE TREINO
// ==========================================

let metasTreino =
  JSON.parse(
    localStorage.getItem("metasTreino")
  ) || [];


// ==========================================
// SALVAR META
// ==========================================

function salvarMetaTreino() {

  let exercicio =
    document
      .getElementById("nomeExercicio")
      .value
      .trim();


  let tipo =
    document.getElementById(
      "tipoMeta"
    ).value;


  let valor =
    document.getElementById(
      "valorMeta"
    ).value;


  if (exercicio === "") {

    alert(
      "Digite o nome do exercício!"
    );

    return;
  }


  if (valor === "") {

    alert(
      "Digite o valor da meta!"
    );

    return;
  }


  let metaExistente =
    metasTreino.find(
      function(item) {

        return (
          item.exercicio.toLowerCase() ===
          exercicio.toLowerCase()
        );

      }
    );


  if (metaExistente) {

    metaExistente.exercicio =
      exercicio;

    metaExistente.tipo =
      tipo;

    metaExistente.meta =
      Number(valor);

  }

  else {

    metasTreino.push({

      exercicio:
        exercicio,

      tipo:
        tipo,

      meta:
        Number(valor)

    });

  }


  localStorage.setItem(
    "metasTreino",
    JSON.stringify(metasTreino)
  );


  mostrarMetas();

  atualizarListaExercicios();

  atualizarEvolucao();


  document.getElementById(
    "nomeExercicio"
  ).value = "";


  document.getElementById(
    "valorMeta"
  ).value = "";


  alert(
    "Meta salva para " +
    exercicio +
    "!"
  );

}

// ==========================================
// MOSTRAR METAS
// ==========================================

function mostrarMetas() {

  let lista =
    document.getElementById(
      "listaMetas"
    );


  if (!lista) return;


  if (metasTreino.length === 0) {

    lista.innerText =
      "Nenhuma meta cadastrada.";

    return;
  }


  lista.innerHTML = "";


  metasTreino.forEach(
    function(meta, indice) {

      let item =
        document.createElement(
          "div"
        );


      item.className =
        "card";


      let unidade =
        meta.tipo === "peso"
          ? "kg"
          : "repetições";


      item.innerHTML = `

        <strong>
          🎯 ${meta.exercicio}
        </strong>

        <p>
          Meta:
          ${meta.meta}
          ${unidade}
        </p>

<div class="acoes-meta">

  <button
    class="btn-editar-meta"
    onclick="editarMeta(${indice})">

    ✏️ Editar

  </button>


  <button
    class="btn-excluir-meta"
    onclick="excluirMeta(${indice})">

    🗑️ Excluir

  </button>

</div>

      `;


      lista.appendChild(item);

    }
  );

}


// ==========================================
// EDITAR META
// ==========================================

function editarMeta(indice) {

  let meta =
    metasTreino[indice];


  if (!meta) return;


  document.getElementById(
    "nomeExercicio"
  ).value =
    meta.exercicio;


  document.getElementById(
    "tipoMeta"
  ).value =
    meta.tipo;


  document.getElementById(
    "valorMeta"
  ).value =
    meta.meta;


  window.metaEmEdicao =
    indice;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ==========================================
// EXCLUIR META
// ==========================================

function excluirMeta(indice) {

  let meta =
    metasTreino[indice];


  if (!meta) return;


  let confirmar =
    confirm(
      "Deseja realmente excluir a meta de " +
      meta.exercicio +
      "?"
    );


  if (!confirmar) return;


  metasTreino.splice(
    indice,
    1
  );


  localStorage.setItem(
    "metasTreino",
    JSON.stringify(
      metasTreino
    )
  );


  mostrarMetas();

  atualizarListaExercicios();

  atualizarEvolucao();


  alert(
    "Meta excluída!"
  );

}


// ==========================================
// ATUALIZAR LISTA DE EXERCÍCIOS
// ==========================================

function atualizarListaExercicios() {

  let select =
    document.getElementById(
      "exercicio"
    );


  if (!select) return;


  let nomes = [];


  // Exercícios das metas
  metasTreino.forEach(
    function(meta) {

      if (
        !nomes.includes(
          meta.exercicio
        )
      ) {

        nomes.push(
          meta.exercicio
        );

      }

    }
  );


  // Exercícios já registrados
  historicoTreino.forEach(
    function(registro) {

      if (
        !nomes.includes(
          registro.exercicio
        )
      ) {

        nomes.push(
          registro.exercicio
        );

      }

    }
  );


  select.innerHTML = "";


  if (nomes.length === 0) {

    let option =
      document.createElement(
        "option"
      );

    option.textContent =
      "Cadastre uma meta primeiro";

    option.value = "";

    select.appendChild(option);

    return;
  }


  nomes.forEach(
    function(nome) {

      let option =
        document.createElement(
          "option"
        );


      option.value =
        nome;


      option.textContent =
        nome;


      select.appendChild(
        option
      );

    }
  );

}


// ==========================================
// EVOLUÇÃO
// ==========================================

let graficoPeso = null;


function atualizarEvolucao() {

  let resumoPeso =
    document.getElementById(
      "resumoPeso"
    );


  if (!resumoPeso) return;


  // ========================================
  // PESO
  // ========================================

  if (
    historicoPeso.length === 0
  ) {

    resumoPeso.innerHTML =
      "Ainda não há dados de peso.";

  }

  else {

    let primeiroPeso =
      Number(
        historicoPeso[0].peso
      );


    let ultimoPeso =
      Number(
        historicoPeso[
          historicoPeso.length - 1
        ].peso
      );


    let diferenca =
      ultimoPeso -
      primeiroPeso;


    let mensagem = "";


    if (diferenca < 0) {

      mensagem =
        "🟢 Você está perdendo peso! Continue assim! 💪";

    }

    else if (diferenca > 0) {

      mensagem =
        "🟡 Seu peso aumentou " +
        Math.abs(diferenca).toFixed(1) +
        " kg.";

    }

    else {

      mensagem =
        "⚖️ Seu peso permanece igual.";

    }


    resumoPeso.innerHTML = `

      <p>
        <strong>
          Primeiro registro:
        </strong>

        ${primeiroPeso.toFixed(1)}
        kg

      </p>


      <p>
        <strong>
          Peso atual:
        </strong>

        ${ultimoPeso.toFixed(1)}
        kg

      </p>


      <p>
        ${mensagem}
      </p>

    `;


    criarGraficoPeso();

  }


  // ========================================
  // TREINOS
  // ========================================

  atualizarResumoTreinos();


  // ========================================
  // SONO
  // ========================================

  atualizarResumoSono();
// ==========================================
// RESUMO DO CARDIO
// ==========================================

function atualizarResumoCardio() {

  let resumoCardio =
    document.getElementById(
      "resumoCardio"
    );


  if (!resumoCardio) return;


  if (
    historicoCardio.length === 0
  ) {

    resumoCardio.innerText =
      "Ainda não há dados de cardio.";

    return;

  }


  // ========================================
  // CALCULAR TOTAIS
  // ========================================

  let distanciaTotal = 0;

  let tempoTotal = 0;

  let caloriasTotal = 0;

  let maiorDistancia = 0;

  let ultimoCardio =
    historicoCardio[
      historicoCardio.length - 1
    ];


  historicoCardio.forEach(
    function(registro) {

      let distancia =
        Number(
          registro.distancia
        ) || 0;

      let tempo =
        Number(
          registro.tempo
        ) || 0;

      let calorias =
        Number(
          registro.calorias
        ) || 0;


      distanciaTotal +=
        distancia;

      tempoTotal +=
        tempo;

      caloriasTotal +=
        calorias;


      if (
        distancia >
        maiorDistancia
      ) {

        maiorDistancia =
          distancia;

      }

    }
  );


  // ========================================
  // CONVERTER TEMPO
  // ========================================

  let horas =
    Math.floor(
      tempoTotal / 60
    );


  let minutos =
    tempoTotal % 60;
// ========================================
// MÉDIA DE TEMPO POR KM
// ========================================

let mediaPorKm = 0;

if (distanciaTotal > 0) {

  mediaPorKm =
    tempoTotal /
    distanciaTotal;

}


let minutosPorKm =
  Math.floor(mediaPorKm);


let segundosPorKm =
  Math.round(
    (mediaPorKm - minutosPorKm) * 60
  );


if (segundosPorKm === 60) {

  minutosPorKm++;

  segundosPorKm = 0;

}


let ritmoFormatado =
  minutosPorKm +
  " min " +
  String(segundosPorKm).padStart(2, "0") +
  " s/km";

  let tempoFormatado;


  if (horas > 0) {

    tempoFormatado =
      horas +
      "h " +
      minutos +
      "min";

  }

  else {

    tempoFormatado =
      minutos +
      " min";

  }


  // ========================================
  // MOSTRAR RESUMO
  // ========================================

  resumoCardio.innerHTML = `

    <p>

      📏 <strong>
        Distância total:
      </strong>

      ${distanciaTotal.toFixed(1)}
      km

    </p>


    <p>

      ⏱️ <strong>
        Tempo total:
      </strong>

      ${tempoFormatado}

    </p>

<p>

  🏃 <strong>
    Média de tempo por km:
  </strong>

  ${ritmoFormatado}

</p>
    <p>

      🔥 <strong>
        Calorias estimadas:
      </strong>

      ${caloriasTotal}
      kcal

    </p>


    <p>

      🏆 <strong>
        Maior distância:
      </strong>

      ${maiorDistancia.toFixed(1)}
      km

    </p>


    <p>

      📌 <strong>
        Último cardio:
      </strong>

      ${ultimoCardio.tipo}
      —
      ${Number(
        ultimoCardio.distancia
      ).toFixed(1)}
      km

    </p>

  `;

}
// ========================================
// CARDIO
// ========================================

atualizarResumoCardio();
}


// ==========================================
// GRÁFICO DE PESO
// ==========================================

function criarGraficoPeso() {

  let canvas =
    document.getElementById(
      "graficoPeso"
    );


  if (!canvas) return;


  if (
    typeof Chart === "undefined"
  ) {

    return;

  }


  if (graficoPeso) {

    graficoPeso.destroy();

    graficoPeso = null;

  }


  let datas = [];

  let pesos = [];


  historicoPeso.forEach(
    function(registro) {

      datas.push(
        registro.data
      );


      pesos.push(
        Number(registro.peso)
      );

    }
  );


  graficoPeso =
    new Chart(
      canvas.getContext("2d"),
      {

        type: "line",

        data: {

          labels: datas,

          datasets: [

            {

              label:
                "Peso (kg)",

              data:
                pesos,

              tension:
                0.3,

              fill:
                false,

              borderWidth:
                3,

              pointRadius:
                5

            }

          ]

        },


        options: {

          responsive:
            true,

          maintainAspectRatio:
            false,

          scales: {

            y: {

              beginAtZero:
                false

            }

          }

        }

      }
    );

}


// ==========================================
// RESUMO DOS TREINOS
// ==========================================

function atualizarResumoTreinos() {

  let resumoTreino =
    document.getElementById(
      "resumoTreino"
    );


  if (!resumoTreino) return;


  if (
    metasTreino.length === 0 &&
    historicoTreino.length === 0
  ) {

    resumoTreino.innerText =
      "Nenhuma meta ou treino cadastrado.";

    return;

  }


  let exercicios = {};


  // ========================================
  // PEGAR METAS
  // ========================================

  metasTreino.forEach(
    function(meta) {

      exercicios[
        meta.exercicio
      ] = {

        meta:
          Number(meta.meta),

        tipo:
          meta.tipo ||
          "repeticoes",

        melhor:
          null,

        ultimo:
          null

      };

    }
  );


  // ========================================
  // PEGAR TREINOS
  // ========================================

  historicoTreino.forEach(
    function(registro) {

      let nome =
        registro.exercicio;


      if (
        !exercicios[nome]
      ) {

        exercicios[nome] = {

          meta:
            null,

          tipo:
            "repeticoes",

          melhor:
            null,

          ultimo:
            null

        };

      }


      // ======================================
      // META DE PESO
      // ======================================

      if (
        exercicios[nome].tipo ===
        "peso"
      ) {

        if (
          registro.carga !==
            undefined &&
          Number(
            registro.carga
          ) > 0
        ) {

          let carga =
            Number(
              registro.carga
            );


          if (
            exercicios[nome]
              .melhor === null ||
            carga >
              exercicios[nome]
                .melhor
          ) {

            exercicios[nome]
              .melhor =
              carga;

          }


          exercicios[nome]
            .ultimo =
            carga;

        }

      }


      // ======================================
      // META DE REPETIÇÕES
      // ======================================

      else {

        let maiorSerie =
          Math.max(

            Number(
              registro.serie1
            ),

            Number(
              registro.serie2
            ),

            Number(
              registro.serie3
            )

          );


        if (
          exercicios[nome]
            .melhor === null ||
          maiorSerie >
            exercicios[nome]
              .melhor
        ) {

          exercicios[nome]
            .melhor =
            maiorSerie;

        }


        exercicios[nome]
          .ultimo =
          maiorSerie;

      }

    }
  );


  // ========================================
  // MONTAR CARTÕES
  // ========================================

  let texto = "";


  for (
    let nome in exercicios
  ) {

    let dados =
      exercicios[nome];


    let unidade =
      dados.tipo === "peso"
        ? "kg"
        : "reps";


    let mensagem = "";

    let progresso = 0;


    // Sem registro
    if (
      dados.melhor === null
    ) {

      mensagem =
        "🔵 Ainda não há registros. Vamos começar!";

    }


    // Sem meta
    else if (
      dados.meta === null
    ) {

      mensagem =
        "🎯 Cadastre uma meta para acompanhar sua evolução.";

    }


    // Com meta
    else {

      progresso =
        (
          dados.melhor /
          dados.meta
        ) * 100;


      if (
        progresso > 100
      ) {

        progresso = 100;

      }


      if (
        dados.melhor >=
        dados.meta
      ) {

        mensagem =
          "🟢 META ATINGIDA! 🎉";

      }

      else {

        let falta =
          dados.meta -
          dados.melhor;


        if (
          dados.tipo ===
          "peso"
        ) {

          mensagem =
            "🟡 Faltam " +
            falta.toFixed(1) +
            " kg para sua meta.";

        }

        else {

          mensagem =
            "🟡 Faltam " +
            falta +
            " repetições.";

        }

      }

    }


    texto += `

      <div class="treino-evolucao">

     <h3
  onclick="mostrarDetalhesTreino('${nome}')"
  style="cursor:pointer;">

  🏋️ ${nome} 👆

</h3>

        <div class="treino-numeros">

          <div>

            <span>
              🎯 META
            </span>

            <strong>

              ${
                dados.meta !== null
                  ? dados.meta +
                    " " +
                    unidade
                  : "—"
              }

            </strong>

          </div>


          <div>

            <span>
              🏆 MELHOR
            </span>

            <strong>

              ${
                dados.melhor !== null
                  ? dados.melhor +
                    " " +
                    unidade
                  : "—"
              }

            </strong>

          </div>


          <div>

            <span>
              📌 ÚLTIMO
            </span>

            <strong>

              ${
                dados.ultimo !== null
                  ? dados.ultimo +
                    " " +
                    unidade
                  : "—"
              }

            </strong>

          </div>

        </div>


        ${
          dados.meta !== null &&
          dados.melhor !== null

          ? `

            <div
              class="progresso-container">

              <div
                class="progresso-barra"
                style="width:${progresso}%">
              </div>

            </div>


            <p
              class="progresso-texto">

              ${progresso.toFixed(0)}%
              da meta

            </p>

          `

          : ""

        }


        <p>
          ${mensagem}
        </p>


      </div>

    `;

  }


  resumoTreino.innerHTML =
    texto;

}


// ==========================================
// RESUMO DO SONO
// ==========================================

function atualizarResumoSono() {

  let resumoSono =
    document.getElementById(
      "resumoSono"
    );


  if (!resumoSono) return;


  if (
    historicoSono.length === 0
  ) {

    resumoSono.innerText =
      "Ainda não há dados de sono.";

    return;

  }


  let totalMinutos = 0;


  historicoSono.forEach(
    function(registro) {

      totalMinutos +=
        Number(
          registro.minutos
        );

    }
  );


  let media =
    totalMinutos /
    historicoSono.length;


  let horasMedia =
    Math.floor(
      media / 60
    );


  let minutosMedia =
    Math.round(
      media % 60
    );


  resumoSono.innerHTML = `

    <p>
      <strong>
        Noites registradas:
      </strong>

      ${historicoSono.length}

    </p>


    <p>
      😴 Média de sono:
    </p>


    <p>

      <strong>
        ${horasMedia}h
        ${minutosMedia}min
      </strong>

    </p>

  `;

}


// ==========================================
// NAVEGAÇÃO
// ==========================================

function mostrarTela(nomeTela) {

  let telas =
    document.querySelectorAll(
      ".tela"
    );


  let menuInferior =
    document.querySelector(
      ".bottom-nav"
    );


  telas.forEach(
    function(tela) {

      tela.style.display =
        "none";

    }
  );


  let telaEscolhida =
    document.getElementById(
      nomeTela
    );


  if (telaEscolhida) {

    telaEscolhida.style.display =
      "block";

  }


  if (menuInferior) {

    menuInferior.style.display =
      nomeTela === "primeiroAcesso"
        ? "none"
        : "flex";

  }


  if (
    nomeTela === "evolucao"
  ) {

    atualizarEvolucao();

  }

}


// ==========================================
// VOLTAR PARA INÍCIO
// ==========================================
// ==========================================
// VOLTAR PARA INÍCIO
// ==========================================

function voltarInicio() {

  mostrarTela("inicio");

}

// ==========================================
// DETALHES DO EXERCÍCIO
// ==========================================

function mostrarDetalhesTreino(nomeExercicio) {

  let registros =
    historicoTreino.filter(function(registro) {

      return registro.exercicio === nomeExercicio;

    });


  let detalhes =
    document.getElementById("detalhesTreino");


  if (!detalhes) return;


  if (registros.length === 0) {

    detalhes.innerHTML = `

      <div class="card">

        <h3>
          📈 ${nomeExercicio}
        </h3>

        <p>
          Ainda não existem registros
          para este exercício.
        </p>

      </div>

    `;

    return;

  }


  // ========================================
  // CALCULAR RESULTADOS
  // ========================================

  let primeiroResultado = null;

  let melhorResultado = 0;

  let resultadoAnterior = null;


  registros.forEach(function(registro) {

    let maiorSerie =
      Math.max(
        Number(registro.serie1),
        Number(registro.serie2),
        Number(registro.serie3)
      );


    if (primeiroResultado === null) {

      primeiroResultado =
        maiorSerie;

    }


    if (maiorSerie > melhorResultado) {

      melhorResultado =
        maiorSerie;

    }

  });


  let evolucao =
    melhorResultado -
    primeiroResultado;


  // ========================================
  // MONTAR HISTÓRICO
  // ========================================

  let linhas = "";


  registros.forEach(function(registro) {

    let maiorSerie =
      Math.max(
        Number(registro.serie1),
        Number(registro.serie2),
        Number(registro.serie3)
      );


    let carga =
      registro.carga !== undefined &&
      Number(registro.carga) > 0

        ? Number(registro.carga) + " kg"

        : "—";


    // ----------------------------------------
    // COMPARAÇÃO COM O TREINO ANTERIOR
    // ----------------------------------------

    let evolucaoTreino = "—";


    if (resultadoAnterior !== null) {

      let diferenca =
        maiorSerie -
        resultadoAnterior;


      if (diferenca > 0) {

        evolucaoTreino =
          "⬆️ +" +
          diferenca;

      }

      else if (diferenca < 0) {

        evolucaoTreino =
          "⬇️ " +
          diferenca;

      }

      else {

        evolucaoTreino =
          "➡️ 0";

      }

    }


    // ----------------------------------------
    // VERIFICAR RECORDE
    // ----------------------------------------

    let recorde = "";


    if (
      maiorSerie === melhorResultado &&
      registros.indexOf(registro) !== 0
    ) {

      recorde =
        " 🏆";

    }


    linhas += `

      <tr>

        <td>
          ${registro.data}
        </td>

        <td>
          ${carga}
        </td>

        <td>
          ${registro.serie1}
        </td>

        <td>
          ${registro.serie2}
        </td>

        <td>
          ${registro.serie3}
        </td>

        <td>

          <strong>
            ${maiorSerie}
          </strong>

          ${recorde}

        </td>

        <td>
          ${evolucaoTreino}
        </td>

      </tr>

    `;


    resultadoAnterior =
      maiorSerie;

  });


  // ========================================
  // MOSTRAR NA TELA
  // ========================================

  detalhes.innerHTML = `

    <div class="card">

      <h3>
        📈 Histórico — ${nomeExercicio}
      </h3>


      <div style="overflow-x:auto;">

        <table>

          <tr>

            <th>Data</th>

            <th>Carga</th>

            <th>S1</th>

            <th>S2</th>

            <th>S3</th>

            <th>Melhor</th>

            <th>Evolução</th>

          </tr>

          ${linhas}

        </table>

      </div>


      <div class="card">

        <p>

          📊 <strong>
            Primeiro resultado:
          </strong>

          ${primeiroResultado} reps

        </p>


        <p>

          🏆 <strong>
            Melhor resultado:
          </strong>

          ${melhorResultado} reps

        </p>


        <p>

          ${
            evolucao > 0

              ? "🟢 Evolução total: +" +
                evolucao +
                " repetições desde o primeiro registro!"

              : evolucao === 0

                ? "⚖️ Seu resultado está igual ao primeiro registro."

                : "🟡 Seu melhor resultado está " +
                  Math.abs(evolucao) +
                  " repetições abaixo do primeiro registro."

          }

        </p>

      </div>


      <button
        onclick="fecharDetalhesTreino()">

        ← Fechar histórico

      </button>

    </div>

  `;


  // Rolar até o histórico

  detalhes.scrollIntoView({

    behavior: "smooth",

    block: "start"

  });

}


// ==========================================
// FECHAR DETALHES DO EXERCÍCIO
// ==========================================

function fecharDetalhesTreino() {

  let detalhes =
    document.getElementById(
      "detalhesTreino"
    );


  if (!detalhes) return;


  detalhes.innerHTML = "";

}


// ==========================================
// ALIMENTAÇÃO
// ==========================================

let metaCaloriasDiaria =
  2000;


let refeicaoAtualAlimentacao =
  null;


let alimentosExtrasAlimentacao =
  [];


let caloriasRefeicaoAtual =
  0;


let sugestaoAtualAtiva =
  false;


let historicoAlimentacao =
  JSON.parse(
    localStorage.getItem("historicoAlimentacao")
  ) || {};


let historicoExtrasAlimentacao =
  JSON.parse(
    localStorage.getItem("historicoExtrasAlimentacao")
  ) || {};


let tiposRefeicaoAlimentacao = {

  cafeManha: {
    nome: "Café da manhã",
    icone: "☕"
  },

  almoco: {
    nome: "Almoço",
    icone: "🍛"
  },

  cafeTarde: {
    nome: "Café da tarde",
    icone: "☕"
  },

  jantar: {
    nome: "Jantar",
    icone: "🍽️"
  },

  ceia: {
    nome: "Ceia",
    icone: "🌙"
  }

};


let sugestoesAlimentacao = {

  cafeManha: [
    { nome: "Pão integral", quantidade: 2, unidade: "fatia" },
    { nome: "Ovo", quantidade: 2, unidade: "unidade" },
    { nome: "Banana", quantidade: 1, unidade: "unidade" },
    { nome: "Leite", quantidade: 200, unidade: "ml" }
  ],

  almoco: [
    { nome: "Arroz", quantidade: 100, unidade: "g" },
    { nome: "Feijão", quantidade: 100, unidade: "g" },
    { nome: "Frango grelhado", quantidade: 120, unidade: "g" },
    { nome: "Salada", quantidade: 80, unidade: "g" },
    { nome: "Batata cozida", quantidade: 100, unidade: "g" }
  ],

  cafeTarde: [
    { nome: "Iogurte natural", quantidade: 170, unidade: "g" },
    { nome: "Aveia", quantidade: 2, unidade: "colher" },
    { nome: "Maçã", quantidade: 1, unidade: "unidade" }
  ],

  jantar: [
    { nome: "Arroz", quantidade: 80, unidade: "g" },
    { nome: "Peixe grelhado", quantidade: 120, unidade: "g" },
    { nome: "Legumes cozidos", quantidade: 120, unidade: "g" },
    { nome: "Salada", quantidade: 80, unidade: "g" }
  ],

  ceia: [
    { nome: "Leite", quantidade: 200, unidade: "ml" },
    { nome: "Castanhas", quantidade: 20, unidade: "g" },
    { nome: "Banana", quantidade: 1, unidade: "unidade" }
  ]

};


let baseCaloriasAlimentos = {

  arroz: { g: 1.3, colher: 39 },
  feijao: { g: 0.77, concha: 115 },
  "frango grelhado": { g: 1.65 },
  salada: { g: 0.2 },
  "batata cozida": { g: 0.86 },
  "pao integral": { fatia: 70, g: 2.5 },
  ovo: { unidade: 78, g: 1.55 },
  banana: { unidade: 90, g: 0.89 },
  leite: { ml: 0.61, copo: 122 },
  "iogurte natural": { g: 0.63, copo: 110 },
  aveia: { colher: 55, g: 3.8 },
  maca: { unidade: 80, g: 0.52 },
  "peixe grelhado": { g: 1.3 },
  "legumes cozidos": { g: 0.45 },
  castanhas: { g: 6.0 },
  "carne bovina": { g: 2.5 },
  chocolate: { g: 5.4, unidade: 120 },
  cafe: { ml: 0.02, copo: 5 },
  biscoito: { g: 4.5, unidade: 45 },
  refrigerante: { ml: 0.42, copo: 84 }

};


let caloriasPadraoPorUnidade = {

  g: 1.2,
  ml: 0.6,
  unidade: 80,
  fatia: 70,
  colher: 35,
  concha: 90,
  copo: 120

};


function normalizarNomeAlimento(nome) {

  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

}


function escaparTexto(texto) {

  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function obterDataHojeAlimentacao() {

  return new Date().toLocaleDateString(
    "pt-BR"
  );

}


function formatarQuantidadeAlimento(alimento) {

  let unidade =
    alimento.unidade;


  if (
    unidade === "unidade" &&
    Number(alimento.quantidade) !== 1
  ) {

    unidade =
      "unidades";

  }


  return alimento.quantidade +
    " " +
    unidade;

}


function calcularCaloriasAlimento(alimento) {

  let nomeNormalizado =
    normalizarNomeAlimento(
      alimento.nome
    );


  let quantidade =
    Number(
      alimento.quantidade
    ) || 0;


  if (quantidade <= 0) {

    return 0;

  }


  let alimentoBase =
    baseCaloriasAlimentos[
      nomeNormalizado
    ];


  if (
    alimentoBase &&
    alimentoBase[alimento.unidade] !== undefined
  ) {

    return Math.round(
      quantidade *
      alimentoBase[alimento.unidade]
    );

  }


  let valorPadrao =
    caloriasPadraoPorUnidade[
      alimento.unidade
    ] || 80;


  return Math.round(
    quantidade *
    valorPadrao
  );

}


function obterAlimentosMarcadosSugestao() {

  let marcados =
    document.querySelectorAll(
      ".alimento-sugestao:checked"
    );


  let sugestao =
    sugestoesAlimentacao[
      refeicaoAtualAlimentacao
    ] || [];


  let alimentos = [];


  marcados.forEach(
    function(item) {

      let indice =
        Number(
          item.dataset.indice
        );


      if (sugestao[indice]) {

        alimentos.push(
          sugestao[indice]
        );

      }

    }
  );


  return alimentos;

}


function abrirSugestaoAlimentacao(tipoRefeicao) {

  iniciarRegistroAlimentacao(
    tipoRefeicao,
    true
  );

}


function abrirRegistroAlimentacao(tipoRefeicao) {

  iniciarRegistroAlimentacao(
    tipoRefeicao,
    false
  );

}


function iniciarRegistroAlimentacao(
  tipoRefeicao,
  usarSugestao
) {

  let dadosRefeicao =
    tiposRefeicaoAlimentacao[
      tipoRefeicao
    ];


  if (!dadosRefeicao) return;


  refeicaoAtualAlimentacao =
    tipoRefeicao;

  sugestaoAtualAtiva =
    usarSugestao;

  alimentosExtrasAlimentacao =
    [];

  caloriasRefeicaoAtual =
    0;


  let tituloRegistro =
    document.getElementById(
      "tituloRegistroAlimentacao"
    );

  let tituloSugestao =
    document.getElementById(
      "tituloSugestaoAlimentacao"
    );

  let listaSugestao =
    document.getElementById(
      "listaSugestaoAlimentacao"
    );

  let calorias =
    document.getElementById(
      "caloriasRefeicao"
    );


  if (tituloRegistro) {

    tituloRegistro.innerText =
      dadosRefeicao.icone +
      " " +
      dadosRefeicao.nome;

  }


  if (tituloSugestao) {

    tituloSugestao.innerText =
      usarSugestao
        ? "Sugestão alimentar"
        : "Alimentos consumidos";

  }


  if (listaSugestao) {

    if (usarSugestao) {

      let sugestao =
        sugestoesAlimentacao[
          tipoRefeicao
        ] || [];


      listaSugestao.innerHTML =
        sugestao
          .map(function(alimento, indice) {

            return `

              <div class="alimento-opcao">

                <input
                  type="checkbox"
                  class="alimento-sugestao"
                  id="alimentoSugestao${indice}"
                  data-indice="${indice}"
                  onchange="calcularCaloriasRefeicao()">

                <label for="alimentoSugestao${indice}">
                  ${escaparTexto(alimento.nome)}
                  —
                  ${escaparTexto(formatarQuantidadeAlimento(alimento))}
                </label>

              </div>

            `;

          })
          .join("");

    }

    else {

      listaSugestao.innerHTML =
        "<p>Adicione abaixo os alimentos que você consumiu nesta refeição.</p>";

    }

  }


  if (calorias) {

    calorias.innerText =
      "🔥 Calorias estimadas da refeição: —";

  }


  atualizarListaAlimentosExtras();

  mostrarTela(
    "alimentacaoRegistrar"
  );

}


function adicionarAlimentoExtra() {

  let campoNome =
    document.getElementById(
      "alimentoExtraNome"
    );

  let campoQuantidade =
    document.getElementById(
      "alimentoExtraQuantidade"
    );

  let campoUnidade =
    document.getElementById(
      "alimentoExtraUnidade"
    );


  if (
    !campoNome ||
    !campoQuantidade ||
    !campoUnidade
  ) {

    return;

  }


  let nome =
    campoNome.value.trim();

  let quantidade =
    Number(
      campoQuantidade.value
    );

  let unidade =
    campoUnidade.value;


  if (nome === "") {

    alert(
      "Informe o nome do alimento!"
    );

    return;

  }


  if (
    !quantidade ||
    quantidade <= 0
  ) {

    alert(
      "Informe a quantidade consumida!"
    );

    return;

  }


  alimentosExtrasAlimentacao.push({

    nome: nome,
    quantidade: quantidade,
    unidade: unidade

  });


  campoNome.value = "";
  campoQuantidade.value = "";
  campoUnidade.value = "g";

  atualizarListaAlimentosExtras();
  calcularCaloriasRefeicao();

}


function atualizarListaAlimentosExtras() {

  let lista =
    document.getElementById(
      "listaAlimentosExtras"
    );


  if (!lista) return;


  if (
    alimentosExtrasAlimentacao.length === 0
  ) {

    lista.innerHTML = "";

    return;

  }


  lista.innerHTML =
    alimentosExtrasAlimentacao
      .map(function(alimento) {

        return `

          <div class="alimento-extra-item">

            <span>
              ${escaparTexto(alimento.nome)}
              —
              ${escaparTexto(formatarQuantidadeAlimento(alimento))}
            </span>

            <strong>
              ${calcularCaloriasAlimento(alimento)}
              kcal
            </strong>

          </div>

        `;

      })
      .join("");

}


function calcularCaloriasRefeicao() {

  let alimentos =
    obterAlimentosMarcadosSugestao()
      .concat(
        alimentosExtrasAlimentacao
      );


  let total =
    alimentos.reduce(
      function(soma, alimento) {

        return soma +
          calcularCaloriasAlimento(
            alimento
          );

      },
      0
    );


  caloriasRefeicaoAtual =
    total;


  let calorias =
    document.getElementById(
      "caloriasRefeicao"
    );


  if (calorias) {

    calorias.innerText =
      "🔥 Calorias estimadas da refeição: " +
      total +
      " kcal";

  }


  return {
    alimentos: alimentos,
    calorias: total
  };

}


function salvarRefeicao() {

  if (!refeicaoAtualAlimentacao) {

    alert(
      "Escolha uma refeição primeiro!"
    );

    return;

  }


  let resultado =
    calcularCaloriasRefeicao();


  if (
    resultado.alimentos.length === 0
  ) {

    alert(
      "Marque ou adicione pelo menos um alimento!"
    );

    return;

  }


  let data =
    obterDataHojeAlimentacao();


  if (!historicoAlimentacao[data]) {

    historicoAlimentacao[data] = [];

  }


  let dadosRefeicao =
    tiposRefeicaoAlimentacao[
      refeicaoAtualAlimentacao
    ];


  historicoAlimentacao[data].push({

    data: data,
    tipo: refeicaoAtualAlimentacao,
    nome: dadosRefeicao.nome,
    alimentos: resultado.alimentos,
    calorias: resultado.calorias,
    origem: sugestaoAtualAtiva
      ? "sugestao"
      : "manual"

  });


  localStorage.setItem(
    "historicoAlimentacao",
    JSON.stringify(
      historicoAlimentacao
    )
  );


  alert(
    "Refeição salva com sucesso!"
  );


  abrirCaloriasDoDia();

}


function abrirCaloriasDoDia() {

  atualizarResumoCaloriasDia();

  mostrarTela(
    "alimentacaoCaloriasDia"
  );

}


function abrirRegistroExtra() {

  let campoNome =
    document.getElementById(
      "extraNome"
    );

  let campoQuantidade =
    document.getElementById(
      "extraQuantidade"
    );

  let campoUnidade =
    document.getElementById(
      "extraUnidade"
    );

  let calorias =
    document.getElementById(
      "caloriasExtra"
    );


  if (campoNome) {

    campoNome.value = "";

  }


  if (campoQuantidade) {

    campoQuantidade.value = "";

  }


  if (campoUnidade) {

    campoUnidade.value = "g";

  }


  if (calorias) {

    calorias.innerText =
      "🔥 Calorias estimadas: —";

  }


  mostrarTela(
    "alimentacaoExtra"
  );

}


function obterDadosExtraAlimentacao() {

  let campoNome =
    document.getElementById(
      "extraNome"
    );

  let campoQuantidade =
    document.getElementById(
      "extraQuantidade"
    );

  let campoUnidade =
    document.getElementById(
      "extraUnidade"
    );


  if (
    !campoNome ||
    !campoQuantidade ||
    !campoUnidade
  ) {

    return null;

  }


  return {

    nome: campoNome.value.trim(),
    quantidade: Number(
      campoQuantidade.value
    ),
    unidade: campoUnidade.value

  };

}


function calcularCaloriasExtra() {

  let extra =
    obterDadosExtraAlimentacao();

  let calorias =
    document.getElementById(
      "caloriasExtra"
    );


  if (!extra) return 0;


  if (
    extra.nome === "" ||
    !extra.quantidade ||
    extra.quantidade <= 0
  ) {

    if (calorias) {

      calorias.innerText =
        "🔥 Calorias estimadas: —";

    }

    return 0;

  }


  let total =
    calcularCaloriasAlimento(
      extra
    );


  if (calorias) {

    calorias.innerText =
      "🔥 Calorias estimadas: " +
      total +
      " kcal";

  }


  return total;

}


function salvarExtraAlimentacao() {

  let extra =
    obterDadosExtraAlimentacao();


  if (!extra) return;


  if (extra.nome === "") {

    alert(
      "Informe o alimento consumido!"
    );

    return;

  }


  if (
    !extra.quantidade ||
    extra.quantidade <= 0
  ) {

    alert(
      "Informe a quantidade consumida!"
    );

    return;

  }


  let calorias =
    calcularCaloriasExtra();

  let data =
    obterDataHojeAlimentacao();


  if (!historicoExtrasAlimentacao[data]) {

    historicoExtrasAlimentacao[data] = [];

  }


  historicoExtrasAlimentacao[data].push({

    data: data,
    tipo: "extra",
    nome: extra.nome,
    quantidade: extra.quantidade,
    unidade: extra.unidade,
    calorias: calorias

  });


  localStorage.setItem(
    "historicoExtrasAlimentacao",
    JSON.stringify(
      historicoExtrasAlimentacao
    )
  );


  alert(
    "Extra registrado com sucesso!"
  );


  abrirCaloriasDoDia();

}


function atualizarResumoCaloriasDia() {

  let resumo =
    document.getElementById(
      "resumoCaloriasDia"
    );

  let barra =
    document.getElementById(
      "barraCaloriasDia"
    );

  let textoProgresso =
    document.getElementById(
      "textoProgressoCalorias"
    );


  if (!resumo) return;


  let data =
    obterDataHojeAlimentacao();

  let registrosDoDia =
    historicoAlimentacao[data] || [];

  let extrasDoDia =
    historicoExtrasAlimentacao[data] || [];

  let totalRefeicoes = 0;

  let totalExtras = 0;

  let totalConsumido = 0;

  let linhas = "";

  let linhasExtras = "";


  Object.keys(
    tiposRefeicaoAlimentacao
  ).forEach(function(tipo) {

    let dadosRefeicao =
      tiposRefeicaoAlimentacao[
        tipo
      ];

    let totalRefeicao = 0;


    registrosDoDia.forEach(
      function(registro) {

        if (registro.tipo === tipo) {

          totalRefeicao +=
            Number(
              registro.calorias
            ) || 0;

        }

      }
    );


    totalRefeicoes +=
      totalRefeicao;


    linhas += `

      <p>
        ${dadosRefeicao.icone}
        <strong>
          ${dadosRefeicao.nome}
        </strong>
        —
        ${
          totalRefeicao > 0
            ? totalRefeicao + " kcal"
            : "não registrado"
        }
      </p>

    `;

  });


  extrasDoDia.forEach(
    function(extra) {

      let caloriasExtra =
        Number(
          extra.calorias
        ) || 0;


      totalExtras +=
        caloriasExtra;


      linhasExtras += `

        <p>
          🍫 <strong>Extra:</strong>
          ${escaparTexto(extra.nome)}
          —
          ${caloriasExtra}
          kcal
        </p>

      `;

    }
  );


  if (linhasExtras === "") {

    linhasExtras = `

      <p>
        🍫 <strong>Extras</strong>
        —
        não registrado
      </p>

    `;

  }


  totalConsumido =
    totalRefeicoes +
    totalExtras;


  let restante =
    metaCaloriasDiaria -
    totalConsumido;

  let progresso =
    (
      totalConsumido /
      metaCaloriasDiaria
    ) * 100;


  if (progresso > 100) {

    progresso = 100;

  }


  resumo.innerHTML = `

    <p>
      📅 <strong>Hoje</strong>
    </p>

    ${linhas}

    ${linhasExtras}

    <hr>

    <p>
      🍽️ <strong>Calorias das refeições:</strong>
      ${totalRefeicoes.toLocaleString("pt-BR")}
      kcal
    </p>

    <p>
      🍫 <strong>Calorias dos extras:</strong>
      ${totalExtras.toLocaleString("pt-BR")}
      kcal
    </p>

    <p>
      🔥 <strong>Total consumido:</strong>
      ${totalConsumido.toLocaleString("pt-BR")}
      kcal
    </p>

    <p>
      🎯 <strong>Meta diária:</strong>
      ${metaCaloriasDiaria.toLocaleString("pt-BR")}
      kcal
    </p>

    <p>
      🔥 <strong>Restante:</strong>
      ${Math.max(restante, 0).toLocaleString("pt-BR")}
      kcal
    </p>

  `;


  if (barra) {

    barra.style.width =
      progresso + "%";

  }


  if (textoProgresso) {

    textoProgresso.innerText =
      progresso.toFixed(0) +
      "% da meta diária";

  }

}
// ==========================================
// CÁLCULO AUTOMÁTICO DE CALORIAS DO CARDIO
// ==========================================

// Histórico de cardio
let historicoCardio =
  JSON.parse(
    localStorage.getItem("historicoCardio")
  ) || [];


// ==========================================
// CALCULAR CALORIAS DO CARDIO
// ==========================================

function calcularCaloriasCardio() {

  let tipoElemento =
    document.getElementById("tipoCardio");

  let tempoElemento =
    document.getElementById("tempoCardio");

  let distanciaElemento =
    document.getElementById("distanciaCardio");

  let resultado =
    document.getElementById(
      "caloriasEstimadasCardio"
    );


  if (
    !tipoElemento ||
    !tempoElemento ||
    !distanciaElemento ||
    !resultado
  ) {

    return;

  }


  let tipo =
    tipoElemento.value;

  let tempo =
    Number(
      tempoElemento.value
    );

  let distancia =
    Number(
      distanciaElemento.value
    );


  if (!tempo || tempo <= 0) {

    resultado.innerText =
      "🔥 Calorias estimadas: —";

    return;

  }


  // ========================================
  // PEGAR O PESO MAIS RECENTE
  // ========================================

  let pesoAtual = 0;


  if (historicoPeso.length > 0) {

    pesoAtual =
      Number(
        historicoPeso[
          historicoPeso.length - 1
        ].peso
      );

  }


  if (!pesoAtual || pesoAtual <= 0) {

    resultado.innerText =
      "⚠️ Cadastre seu peso primeiro.";

    return;

  }


  // ========================================
  // DEFINIR MET
  // ========================================

  let met = 3.5;


  if (
    tipo === "Caminhada" &&
    distancia > 0
  ) {

    // Velocidade em km/h
    let velocidade =
      distancia /
      (tempo / 60);


    if (velocidade < 3) {

      met = 2.5;

    }

    else if (velocidade < 4) {

      met = 3.0;

    }

    else if (velocidade < 5) {

      met = 3.5;

    }

    else if (velocidade < 6.5) {

      met = 4.3;

    }

    else {

      met = 5.0;

    }

  }

  else if (
    tipo === "Corrida" &&
    distancia > 0
  ) {

    // Corrida: a velocidade influencia
    // diretamente a estimativa.

    let velocidade =
      distancia /
      (tempo / 60);


    if (velocidade < 8) {

      met = 7.0;

    }

    else if (velocidade < 10) {

      met = 8.3;

    }

    else if (velocidade < 12) {

      met = 9.8;

    }

    else if (velocidade < 14) {

      met = 11.0;

    }

    else {

      met = 12.5;

    }

  }

  else if (
    tipo === "Bicicleta" &&
    distancia > 0
  ) {

    let velocidade =
      distancia /
      (tempo / 60);


    if (velocidade < 16) {

      met = 4.0;

    }

    else if (velocidade < 20) {

      met = 6.0;

    }

    else if (velocidade < 25) {

      met = 8.0;

    }

    else {

      met = 10.0;

    }

  }

  else if (tipo === "Elíptico") {

    met = 5.0;

  }

  else {

    met = 4.0;

  }


  // ========================================
  // CALCULAR
  // ========================================

  let calorias =
    (
      met *
      3.5 *
      pesoAtual /
      200
    ) *
    tempo;


  calorias =
    Math.round(calorias);


  resultado.innerText =
    "🔥 Calorias estimadas: " +
    calorias +
    " kcal";

}


// ==========================================
// REGISTRAR CARDIO
// ==========================================

function registrarCardio() {

  let tipoElemento =
    document.getElementById("tipoCardio");

  let tempoElemento =
    document.getElementById("tempoCardio");

  let distanciaElemento =
    document.getElementById("distanciaCardio");


  if (
    !tipoElemento ||
    !tempoElemento ||
    !distanciaElemento
  ) {

    return;

  }


  let tipo =
    tipoElemento.value;

  let tempo =
    Number(
      tempoElemento.value
    );

  let distancia =
    Number(
      distanciaElemento.value
    );


  if (!tempo || tempo <= 0) {

    alert(
      "Informe o tempo do cardio!"
    );

    return;

  }


  if (!distancia || distancia <= 0) {

    alert(
      "Informe a distância!"
    );

    return;

  }


  // Calcula novamente antes de salvar
  calcularCaloriasCardio();


  let pesoAtual = 0;


  if (historicoPeso.length > 0) {

    pesoAtual =
      Number(
        historicoPeso[
          historicoPeso.length - 1
        ].peso
      );

  }


  if (!pesoAtual || pesoAtual <= 0) {

    alert(
      "Cadastre seu peso primeiro!"
    );

    return;

  }


  // ========================================
  // CALCULAR CALORIAS PARA SALVAR
  // ========================================

  let met = 3.5;


  if (
    tipo === "Caminhada"
  ) {

    let velocidade =
      distancia /
      (tempo / 60);


    if (velocidade < 3) {

      met = 2.5;

    }

    else if (velocidade < 4) {

      met = 3.0;

    }

    else if (velocidade < 5) {

      met = 3.5;

    }

    else if (velocidade < 6.5) {

      met = 4.3;

    }

    else {

      met = 5.0;

    }

  }

  else if (
    tipo === "Corrida"
  ) {

    let velocidade =
      distancia /
      (tempo / 60);


    if (velocidade < 8) {

      met = 7.0;

    }

    else if (velocidade < 10) {

      met = 8.3;

    }

    else if (velocidade < 12) {

      met = 9.8;

    }

    else if (velocidade < 14) {

      met = 11.0;

    }

    else {

      met = 12.5;

    }

  }

  else if (
    tipo === "Bicicleta"
  ) {

    let velocidade =
      distancia /
      (tempo / 60);


    if (velocidade < 16) {

      met = 4.0;

    }

    else if (velocidade < 20) {

      met = 6.0;

    }

    else if (velocidade < 25) {

      met = 8.0;

    }

    else {

      met = 10.0;

    }

  }

  else if (
    tipo === "Elíptico"
  ) {

    met = 5.0;

  }

  else {

    met = 4.0;

  }


  let calorias =
    (
      met *
      3.5 *
      pesoAtual /
      200
    ) *
    tempo;


  calorias =
    Math.round(calorias);


  // ========================================
  // SALVAR
  // ========================================

  let data =
    new Date().toLocaleDateString(
      "pt-BR"
    );


  historicoCardio.push({

    data: data,

    tipo: tipo,

    tempo: tempo,

    distancia: distancia,

    calorias: calorias

  });


  localStorage.setItem(
    "historicoCardio",
    JSON.stringify(
      historicoCardio
    )
  );


  mostrarHistoricoCardio();


  // ========================================
  // LIMPAR CAMPOS
  // ========================================

  tempoElemento.value = "";

  distanciaElemento.value = "";


  let resultado =
    document.getElementById(
      "caloriasEstimadasCardio"
    );


  if (resultado) {

    resultado.innerText =
      "🔥 Calorias estimadas: —";

  }


  alert(
    "Cardio salvo com sucesso! 🚶"
  );

}


// ==========================================
// MOSTRAR HISTÓRICO DE CARDIO
// ==========================================

function mostrarHistoricoCardio() {

  let tabela =
    document.getElementById(
      "historicoCardio"
    );


  if (!tabela) return;


  tabela.innerHTML = `

    <tr>

      <th>Data</th>

      <th>Atividade</th>

      <th>Tempo</th>

      <th>Distância</th>

      <th>Calorias</th>

    </tr>

  `;


  historicoCardio.forEach(
    function(registro) {

      let linha =
        tabela.insertRow(-1);


      linha.insertCell(0).innerText =
        registro.data;


      linha.insertCell(1).innerText =
        registro.tipo;


      linha.insertCell(2).innerText =
        registro.tempo +
        " min";


      linha.insertCell(3).innerText =
        Number(
          registro.distancia
        ).toFixed(1) +
        " km";


      linha.insertCell(4).innerText =
        registro.calorias +
        " kcal";

    }
  );

}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    atualizarSaudacaoUsuario();

    atualizarPesoAtual();

    mostrarHistorico();

    mostrarHistoricoTreino();

    mostrarHistoricoSono();

    mostrarMetas();

    atualizarListaExercicios();

    atualizarEvolucao();
mostrarHistoricoCardio();
atualizarResumoCaloriasDia();

if (usuarioNome.trim() === "") {

  mostrarTela("primeiroAcesso");

}

else {

  mostrarTela("inicio");

}

    // Começar na tela inicial

    

  }
);
