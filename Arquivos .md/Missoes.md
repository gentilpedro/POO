/*  let energiaConsumida = 0;

    for (let i = 0; i < horasTreino; i++) {
        const consumo = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
        energiaConsumida += consumo;
    }

    personagem.energia -= energiaConsumida;
    
    if (personagem.energia <= 0) {
        personagem.vida = 0;
        console.log(`${personagem.nome} morreu durante o treino.`);
    } else {
        personagem.ataque += 10 + (0.1 * personagem.ataque * horasTreino);
        console.log(`${personagem.nome} treinou por ${horasTreino} horas, consumiu ${energiaConsumida} de energia e agora tem ${personagem.ataque} de ataque.`);
    }
    */




qqqqq

### Faker extension ex:

    npm install --save-dev @faker-js/faker
🪄 Usage
// ESM
import { faker } from '@faker-js/faker';

// CJS
const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

### const personagens: Personagem[] = [person]; 

function escolherPersonagem() {
    Titulo(" 🧙‍♂️ Escolher Personagem 🧙‍♂️ ");
    console.log("Personagens disponíveis:");
    personagens.forEach((p, index) => {
        console.log(`${index + 1}. ${p.nome}`);
    });

    const escolha = prompt("Escolha o número do personagem: ");
    if (escolha === null) {
        console.log("Escolha inválida.");
        return null;
    }

    const personagemEscolhido = personagens[parseInt(escolha) - 1];

    if (personagemEscolhido) {
        console.log(`Você escolheu: ${personagemEscolhido.nome}`);
        return personagemEscolhido;
    } else {
        console.log("Escolha inválida.");
        return null;
    }
}
class Personagem {
    nome: string;
    nivel: number;
    energia: number;
    ataque: number;
    defesa: number;
    xp: number;

    constructor(nome: string = "", nivel: number = 1) {
        this.nome = nome;
        this.nivel = nivel;
        this.energia = 100;
        this.ataque = 50;  // Valor base, será multiplicado conforme as regras
        this.defesa = 50;  // Valor base, será multiplicado conforme as regras
        this.xp = 0;
    }
}

function randomiza(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function desafiar(personagem: Personagem, nivelOponente: number) {
    console.log(`⚔️ ${personagem.nome} está desafiando um oponente nível ${nivelOponente}...`);

    // Criando o oponente com valores aleatórios e multiplicados pelo nível
    const oponente = new Personagem();
    oponente.nome = faker.name.firstName(); // Nome aleatório com faker
    oponente.nivel = nivelOponente;
    oponente.energia = 100;
    oponente.ataque = randomiza(120, 200) * nivelOponente;
    oponente.defesa = randomiza(110, 150) * nivelOponente;

    console.log(`👹 Oponente: ${oponente.nome} | Atk: ${oponente.ataque} | Def: ${oponente.defesa} | Energia: ${oponente.energia}`);

    let rodada = 0;

    // Luta até que um dos dois seja derrotado ou o máximo de 5 rodadas seja atingido
    while (rodada < 5 && personagem.energia > 5 && oponente.energia > 0) {
        rodada++;
        console.log(`\n🌟 Rodada ${rodada}:`);

        const atacante = Math.random() < 0.5 ? personagem : oponente;
        const defensor = atacante === personagem ? oponente : personagem;

        console.log(`🎲 ${atacante.nome} atacará!`);

        // Cálculo do dano
        const dano = Math.max(atacante.ataque - defensor.defesa, 0); // Garantir que o dano não seja negativo
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
        personagem.energia = 1; // Ajusta energia para 1, indicando que ele foi derrotado
        console.log(`😵 ${personagem.nome} perdeu! XP reduzido para ${personagem.xp.toFixed(2)}.`);
    }
    // Caso tenha ocorrido empate (5 rodadas sem derrotado)
    else if (rodada === 5) {
        console.log("🤝 Empate! Nenhum dos dois foi derrotado.");
    }
}

// Exemplo de uso da função:
const heroi = new Personagem("Herói", 1);
desafiar(heroi, 3); // Herói desafia um oponente nível 3
