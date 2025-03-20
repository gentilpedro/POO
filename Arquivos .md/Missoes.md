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