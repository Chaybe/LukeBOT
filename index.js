console.log("FERRAMENTAS [OK]");

const tmi = require('tmi.js');
const NOME_DO_BOT = 'LukeBOT'
const NOME_DO_CANAL = ''
const TOKEN = ''

const opts = {
  identity: {
  username: NOME_DO_BOT,
  password: TOKEN
  },
  channels: [ NOME_DO_CANAL ]
};

function mensagemChegou(alvo, contexto, mensagem, ehBot) {
  if (ehBot) {
    return; //se for mensagens do nosso bot ele não faz nada
}

function botSay(mensagem) {
  console.log(mensagem);
  client.say(mensagem);
}

const nomeDoComando = mensagem.trim();
  if (nomeDoComando === '!comandoUM') {
    botSay(`* Foi Executado o comando ${nomeDoComando}`);
  } else if (nomeDoComando === '!comandoDOIS') {
    botSay(`* Foi Executado o comando ${nomeDoComando}`);
  } else {
    botSay(`* Não conheço o comando ${commandName}`);
  }
}

function entrouNoChatDaTwitch(endereco, porta) {
  console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

const client = new tmi.client(opts);

client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);

client.connect();