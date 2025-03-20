import { Personagem } from "./Personagem";
import prompt from "prompt-sync"
import { Faker, faker, pt_BR } from '@faker-js/faker';

export const customFaker = new Faker({
    locale: [pt_BR],
});

const teclado = prompt();

const person: Personagem = new Personagem(); //cria uma instância da classe Personagem

person.nome = "Edecio";
person.armadura = 104;
person.ataque = 1;
person.classe = "Padre";
person.defesa = 1;
person.intelecto = 1000;
person.stamina = 99;
person.vida = 100;
person.raca = "Morto-Vivo";
person.poderAtaque = 10;
person.mana = 88;
person.energia = 100;


function Titulo(titulo: string) {
    console.log("=".repeat(40))
    console.log(titulo)
    console.log("=".repeat(40))
}

function randomiza(base: number, limite: number) {
    return Math.floor(base + Math.random() * limite - base)

}

function treinarAtaque(personagem: Personagem, horasTreino: number) {

    Titulo(" ⚔️ Treinamento de Ataque ⚔️ ")
    const numeroGerado: number = randomiza(15, 30);
    personagem.ataque = 10 + ((personagem.ataque * 1.1) * horasTreino);
    personagem.energia -= numeroGerado * horasTreino;
    const morreu = Boolean(personagem.energia < 0);

    if (morreu) {
        throw new Error(`💀 ${personagem.nome} foi de base 💀 `);
    }


};

function treinarDefesa(personagem: Personagem, horasTreino: number) {

    Titulo(" 🛡️ Treinamento de Defesa 🛡️ ")

    const numeroGerado: number = randomiza(15, 30);
    personagem.defesa = 10 + ((personagem.defesa * 1.1) * horasTreino);
    personagem.energia -= numeroGerado * horasTreino;
    const morreu = Boolean(personagem.energia < 0);

    if (morreu) {
        throw new Error(`💀 ${personagem.nome} foi de base 💀 `);
    }
};

function descansar(personagem: Personagem, horasDescanso: number) {
    Titulo(" 🛋️ Descanso 🛋️ ")
    const numeroGerado: number = randomiza(10, 20);
    personagem.energia += numeroGerado * horasDescanso;
    if (personagem.energia > 100) {
        personagem.energia = 100;

    }
}


function desfiar(personagem: Personagem, inimigo: Personagem) {
    Titulo(" 🤺 Desafio 🤺 ")

}




while (true) {
    Titulo("RPG SENAC")
    console.log("1. Treinar Ataque")
    console.log("2. Treinar Defesa")
    console.log("3. Descansar")
    console.log("4. Desafiar")
    console.log("5. Listar Personagem")
    console.log("6. Sair do Jogo")
    let opcao = +teclado("Opção: ")
    if (opcao == 1) {
        treinarAtaque(person, 2);
    } else if (opcao == 2) {
        treinarDefesa(person, 4);
    }
    else if (opcao == 3) {
        descansar(person, 5)
    }
    else if (opcao == 4) {
        desfiar(person, person)
    }

    else {
        break
    }
}
