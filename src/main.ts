import { faker } from "@faker-js/faker";
import prompt from "prompt-sync";
import {  obterPersonagemPorNome, criarPersonagem, verFichaPersonagem, } from "./ BusPersonagem/GerenciadorDePersonagem";

const teclado = prompt();
const personagens: Personagem[] = [];

class Personagem {
    nome: string = "";
    nivel: number = 0;
    classe: string = "";
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;
    raca: string = "";
    stamina: number = 0;
    mana: number = 0;
    poderAtaque: number = 0;
    intelecto: number = 0;
    armadura: number = 0;
    energia: number = 100;
    xp: number = 0; // XP começa em 0
}
function Titulo(titulo: string) {
    console.log("=".repeat(40))
    console.log(titulo)
    console.log("=".repeat(40))
}

// Função para gerar um número aleatório
function randomiza(base: number, limite: number) {
    return Math.floor(base + Math.random() * limite - base)
}

// Função para treinar ataque de um personagem escolhido pelo usuário
function treinarAtaque() {
    const personagem = obterPersonagemPorNome(personagens);
    if (!personagem) return;

    const horas = Number(teclado("Quantas horas de treino? "));
    Titulo(" ⚔️ Treinamento de Ataque ⚔️ ");

    const numeroGerado: number = randomiza(15, 30);
    personagem.ataque = 10 + ((personagem.ataque * 1.1) * horas);
    personagem.energia -= numeroGerado * horas;

    if (personagem.energia < 0) {
        personagem.energia = 0;
        throw new Error(`💀 ${personagem.nome} foi de base 💀`);
    }

    console.log(`${personagem.nome} treinou ataque por ${horas} horas!`);
    console.log(`Novo ataque: ${personagem.ataque.toFixed(2)}`);
    console.log(`Energia restante: ${personagem.energia}`);
}

// Função para treinar defesa de um personagem escolhido pelo usuário
function treinarDefesa() {
    const personagem = obterPersonagemPorNome(personagens);
    if (!personagem) return;

    const horas = Number(teclado("Quantas horas de treino? "));
    Titulo(" 🛡️ Treinamento de Defesa 🛡️ ");

    const numeroGerado: number = randomiza(15, 30);
    personagem.defesa = 10 + ((personagem.defesa * 1.1) * horas);
    personagem.energia -= numeroGerado * horas;

    if (personagem.energia < 0) {
        personagem.energia = 0;
        throw new Error(`💀 ${personagem.nome} foi de base 💀`);
    }

    console.log(`${personagem.nome} treinou defesa por ${horas} horas!`);
    console.log(`Nova defesa: ${personagem.defesa.toFixed(2)}`);
    console.log(`Energia restante: ${personagem.energia}`);
}

// Função para desafiar um oponente
function desafiar(personagem: Personagem, nivelOponente: number) {
    console.log(`⚔️ ${personagem.nome} está desafiando um oponente nível ${nivelOponente}...`);

    // Criando oponente aleatório
    const oponente = new Personagem();
    oponente.nome = faker.person.firstName();
    oponente.nivel = nivelOponente;
    oponente.energia = 100;
    oponente.ataque = randomiza(0, 100) * nivelOponente;
    oponente.defesa = randomiza(0, 100) * nivelOponente;

    console.log(`👹 Oponente: ${oponente.nome} | Atk: ${oponente.ataque} | Def: ${oponente.defesa} | Energia: ${oponente.energia}`);

    // Luta até que um dos dois seja derrotado
    while (personagem.energia > 5 && oponente.energia > 0) {
        const atacante = Math.random() < 0.5 ? personagem : oponente;
        const defensor = atacante === personagem ? oponente : personagem;

        console.log(`🎲 ${atacante.nome} atacará!`);

        // Dano causado
        const dano = atacante.ataque - defensor.defesa;
        if (dano > 0) {
            defensor.energia -= dano;
            console.log(`💥 ${atacante.nome} causou ${dano} de dano em ${defensor.nome}!`);
        } else {
            console.log(`🛡️ ${defensor.nome} bloqueou o ataque!`);
        }

        // Verificar se alguém foi derrotado
        if (defensor.energia <= 0) {
            console.log(`💀 ${defensor.nome} foi derrotado!`);
            break;
        }
    }

    // Caso o herói tenha vencido
    if (oponente.energia <= 0) {
        personagem.xp += 2 * nivelOponente;
        console.log(`🏆 ${personagem.nome} venceu e ganhou ${2 * nivelOponente} XP!`);
    }
    // Caso o herói tenha perdido
    else if (personagem.energia <= 5) {
        personagem.xp *= 0.9; // Perde 10% do XP
        personagem.energia = 1; // Ajusta energia para mínimo
        console.log(`😵 ${personagem.nome} perdeu! XP reduzido para ${personagem.xp.toFixed(2)}.`);
    }
}

function descansar() {
    const personagem = obterPersonagemPorNome(personagens);
    if (!personagem) return;

    const horas = Number(teclado("Quantas horas de descanso? "));
    Titulo(" 🛋️ Descanso 🛋️ ");

    const numeroGerado: number = randomiza(10, 20);
    const energiaGanha = numeroGerado * horas;
    const energiaSugerida = personagem.energia + energiaGanha;

    if (energiaSugerida > 100) {
        const excesso = energiaSugerida - 100;
        personagem.energia = 100;

        // Reduz ataque e defesa proporcionalmente ao excesso
        const reducaoPercentual = excesso / 100;
        personagem.ataque *= 1 - reducaoPercentual;
        personagem.defesa *= 1 - reducaoPercentual;

        console.log(`⚠️ Descanso excessivo! ${personagem.nome} perdeu ${excesso}% de ataque e defesa.`);
    } else {
        personagem.energia = energiaSugerida;
    }

    console.log(`${personagem.nome} descansou por ${horas} horas.`);
    console.log(`Energia atual: ${personagem.energia}`);
    console.log(`Ataque atual: ${personagem.ataque.toFixed(2)}`);
    console.log(`Defesa atual: ${personagem.defesa.toFixed(2)}`);
}

// Menu principal


while (true) {
    Titulo("RPG SENAC")
    console.log("1. Criar Personagem")
    console.log("2. Listar Personagem")
    console.log("3. Treinar Ataque")
    console.log("4. Treinar Defesa")
    console.log("5. Descansar")
    console.log("6. Desafiar")
    console.log("7. Ver Ficha do personagem")
    console.log("8. Sair do Jogo")
    console.log("=".repeat(40))

    const opcao = teclado("Escolha uma opção: ");

    if (opcao === "1") {

        criarPersonagem(personagens);

    } else if (opcao === "2") {

        console.log("\n📜 Personagens cadastrados:");
        personagens.forEach(p => console.log(`${p.nome} | Nível ${p.nivel} | XP: ${p.xp} | Energia: ${p.energia}`));

    } else if (opcao === "3") {

        treinarAtaque()

    } else if (opcao === "4") {

        treinarDefesa()

    } else if (opcao === "5") {

        descansar()

    }
    else if (opcao === "6") {

        const nome = teclado("Digite o nome do personagem para buscar: ");

        const personagem = obterPersonagemPorNome(personagens)

        if (!personagem) {
            console.log(`❌ Personagem não encontrado!`);
            continue;
        }

        console.log(`⚔️ Personagem encontrado: ${personagem.nome} | Nível ${personagem.nivel} | XP: ${personagem.xp} | Energia: ${personagem.energia}`);

        const nivelOponente = Number(teclado("Escolha o nível do oponente: "));
        desafiar(personagem, nivelOponente);

    } else if (opcao === "7") {
        verFichaPersonagem(personagens)
    } else if (opcao === "8") {
        console.log("Saindo...");
        break;
    } else {
        console.log("⚠️ Opção inválida!");
    }
}