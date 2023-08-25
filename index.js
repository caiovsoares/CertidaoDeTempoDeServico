const htmlBase = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="body" class="print">
      <br />
      <br />
      <br />
      <div><b>REQUERIMENTO PARA SOLICITAÇÃO DE CERTIDÃO</b></div>
      <div><b>MINISTÉRIO DA DEFESA</b> - COMANDO DA AERONÁUTICA</div>
      <div>REQUERIMENTO</div>
      <br />
      <div id="protocolo-data">
        <div id="protocolo">Protocolo COMAER nº</div>
        <div id="data">div Data</div>
      </div>
      <br />
      <div id="nomeCompleto" class="esquerda">paragrafo nome Completo</div>
      <div class="esquerda">Ao Sr. Comandante da Academia da Força Aérea</div>
      <div id="assunto" class="esquerda">paragrafo Assunto</div>
      <br />

      <div id="justificado">
        <div id="anexos">
          <div id="anexos1">Anexos:</div>
          <div id="anexos2">
            <div>RG (frente e verso)</div>
            <div>Extrato do PIS</div>
            <div>Reservista (frente e verso)</div>
          </div>
        </div>
        <br />
        <div id="email">paragrafo e-mail</div>

        <br />
        <div id="p1">paragrafo 1</div>

        <br />
        <div>
          2.&emsp;&emsp;Autorizo a tramitação eletrônica dos meus dados
          pessoais, pelos meios de gerenciamento de documentos utilizados no
          COMAER.
        </div>

        <br />
        <div id="p3">paragrafo 3</div>
      </div>
      <br />
      <br />
      <div id="assinatura-box">
        <div id="assinatura">
          <div class="direita">__________________________________________</div>
          <div class="direita">ASSINATURA</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="observacao" class="esquerda">OBSERVAÇÃO</div>
    </div>
  </body>
</html>`;

function converteData(data) {
  data = new Date(data);
  data.setDate(data.getDate() + 1);
  const yyyy = data.getFullYear();
  let mm = data.getMonth() + 1; // Months start at 0!
  let dd = data.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedDate = dd + '/' + mm + '/' + yyyy;
  return formattedDate;
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString;

  return div;
}

function pegarDados() {
  const dados = {};

  dados.nomeCompletoSolicitante = document.getElementById(
    'nomeCompletoSolicitante'
  ).value;
  dados.relation = document.getElementById('relation').value;

  dados.nomeCompleto = document.getElementById('nomeCompleto').value;
  dados.nomeMae = document.getElementById('nomeMae').value;
  dados.nomePai = document.getElementById('nomePai').value;
  dados.cidade = document.getElementById('cidade').value;
  dados.estado = document.getElementById('estado').value;
  dados.cep = document.getElementById('cep').value;
  dados.rua = document.getElementById('rua').value;
  dados.numero = document.getElementById('numero').value;
  dados.bairro = document.getElementById('bairro').value;
  dados.email = document.getElementById('email').value;
  dados.nascimento = document.getElementById('nascimento').value;
  dados.cidadeNaturalidade =
    document.getElementById('cidadeNaturalidade').value;
  dados.estadoNaturalidade =
    document.getElementById('estadoNaturalidade').value;
  dados.ddd = document.getElementById('ddd').value;
  dados.telefone = document.getElementById('telefone').value;
  dados.omIncluido = document.getElementById('omIncluido').value;
  dados.dataInclusao = document.getElementById('dataInclusao').value;
  dados.omExcluido = document.getElementById('omExcluido').value;
  dados.dataExclusao = document.getElementById('dataExclusao').value;
  dados.selectPostoGraduacao = document.getElementById(
    'selectPostoGraduacao'
  ).value;
  dados.postoGraduacao = document.getElementById('postoGraduacao').value;
  dados.certidao = document.getElementById('certidao').value;
  dados.finalidade = document.getElementById('finalidade').value;
  dados.destino = document.getElementById('destino').value;
  dados.vez = document.getElementById('vez').value;
  dados.observacao = document.getElementById('observacao').value;
  return dados;
}

function diaDeHoje() {
  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  const hoje = new Date();

  return `${hoje.getDate()} de ${
    meses[hoje.getMonth()]
  } de ${hoje.getFullYear()}`;
}

function alimentarHtml(html, dados) {
  const {
    nomeCompleto,
    nomeMae,
    nomePai,
    cidade,
    estado,
    cep,
    rua,
    numero,
    bairro,
    email,
    nascimento,
    cidadeNaturalidade,
    estadoNaturalidade,
    ddd,
    telefone,
    omIncluido,
    dataInclusao,
    omExcluido,
    dataExclusao,
    selectPostoGraduacao,
    postoGraduacao,
    certidao,
    finalidade,
    destino,
    vez,
    observacao,
  } = dados;
  let nomeCompletoSolicitante, relation;
  if (falecidoCheckbox.checked) {
    nomeCompletoSolicitante = dados.nomeCompletoSolicitante;
    relation = dados.relation;
  }
  html.querySelector(
    '#data'
  ).innerHTML = `${cidade}-${estado}, ${diaDeHoje()} `;

  html.querySelector('#nomeCompleto').innerHTML = `Do(a): ${nomeCompleto}`;
  html.querySelector(
    '#assunto'
  ).innerHTML = `Solicitação de Certidão de ${certidao}`;
  html.querySelector('#email').innerHTML = `E-mail: ${email}`;
  html.querySelector('#p1').innerHTML = `1.&emsp;&emsp;${
    falecidoCheckbox.checked
      ? nomeCompletoSolicitante + ', ' + relation + ' do(a) '
      : ''
  }${nomeCompleto} filho(a) de ${nomeMae} e de ${
    nomePai || 'NÃO INFORMADO'
  } nascido(a) em ${converteData(
    nascimento
  )}, natural de ${cidadeNaturalidade}-${estadoNaturalidade} residente à ${rua},  ${numero},  ${bairro},  ${cidade}-${estado}, Cep: ${cep}, telefone nº${ddd}${telefone}, tendo sido INCLUÍDO(A) no Comando da Aeronáutica no(a) ${omIncluido}, em ${converteData(
    dataInclusao
  )}, e EXCLUÍDO(A) no(a) ${omExcluido}, em ${converteData(
    dataExclusao
  )}, no(a) ${selectPostoGraduacao} de ${postoGraduacao}, requer ao Sr. Certidão De ${certidao} para fins de ${finalidade}, junto ao ${destino}.`;

  html.querySelector(
    '#p3'
  ).innerHTML = `3.&emsp;&emsp;É a ${vez} vez que requer.`;
  html.querySelector('#observacao').innerHTML = observacao
    ? `OBSERVAÇÃO: ${observacao}`
    : '';

  return html;
}

async function enviar() {
  const html = createElementFromHTML(htmlBase);
  const dados = pegarDados();
  const htmlAlimentado = alimentarHtml(html, dados);
  document.body.parentElement.appendChild(htmlAlimentado);
  document.body.style.display = 'none';
  window.print();
}

const falecidoCheckbox = document.getElementById('falecido');

falecidoCheckbox.onchange = (e) => {
  document.getElementById('falecidoFields').style.display = e.target.checked
    ? 'block'
    : 'none';
  document.getElementById('nomeCompletoSolicitante').attributes.required = e
    .target.checked
    ? 'required'
    : '';
  document.getElementById('relation').attributes.required = e.target.checked
    ? 'required'
    : '';
};

window.onbeforeprint = () => {
  console.log('antes do print');
};

window.onafterprint = () => {
  console.log('depois do print');
  document.body.style.display = 'block';
  document.getElementById('body').remove();
};

document.getElementById('falecidoFields').style.display =
  falecidoCheckbox.checked ? 'block' : 'none';

const cep = document.getElementById('cep');
new Inputmask('99999-999').mask(cep);

const email = document.getElementById('email');
new Inputmask({
  mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
  greedy: false,
  clearIncomplete: true,
  definitions: {
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
      casing: 'lower',
    },
  },
}).mask(email);

const ddd = document.getElementById('ddd');
new Inputmask('(99)').mask(ddd);

const telefone = document.getElementById('telefone');
new Inputmask({ regex: '[1-9]{8,9}' }).mask(telefone);

const vez = document.getElementById('vez');
new Inputmask({ regex: '^[1-9]ª' }).mask(vez);
