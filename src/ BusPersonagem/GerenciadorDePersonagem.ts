import { Personagem } from "../Class/Personagem";
import prompt from "prompt-sync"

const teclado = prompt();

export class GerenciadorDePersonagens {
    
    private personagens: Personagem[] = [];

    adicionarPersonagem(personagem: Personagem): void {
        this.personagens.push(personagem);
        console.log(`Personagem ${personagem.nome} adicionado com sucesso!`);
    };

    listarPersonagens(): void {
        if (this.personagens.length <= 0) {
            console.log("Nenhum personagem cadastrado.");
            return;
        }
        console.log("Lista de personagens:");
        this.personagens.forEach((p, index) => {
            console.log(`${index + 1}. ${p.nome} - ${p.classe} - ${p.raca}`);
        });
    };

    obterPersonagens(): Personagem[] {
        return this.personagens;
    };

    verFichaPersonagem(nome: string): void {
        const personagem = this.personagens.find(p => p.nome === nome);

        if (!personagem) {
            console.log("⚠️ Personagem não encontrado!");
            return;
        }

        console.log("\n📜 Ficha do Personagem 📜");
        console.log(`🆔 Nome: ${personagem.nome}`);
        console.log(`⚔️ Classe: ${personagem.classe}`);
        console.log(`🧬 Raça: ${personagem.raca}`);
        console.log(`🎚️ Nível: ${personagem.nivel}`);
        console.log(`❤️ Vida: ${personagem.vida}`);
        console.log(`💥 Ataque: ${personagem.ataque}`);
        console.log(`🛡️ Defesa: ${personagem.defesa}`);
        console.log(`🔋 Stamina: ${personagem.stamina}`);
        console.log(`🔮 Mana: ${personagem.mana}`);
        console.log(`🔥 Poder de Ataque: ${personagem.poderAtaque}`);
        console.log(`🧠 Intelecto: ${personagem.intelecto}`);
        console.log(`🛡️ Armadura: ${personagem.armadura}`);
        console.log(`⚡ Energia: ${personagem.energia}`);
        console.log(`⭐ XP: ${personagem.xp}`);
        console.log("───────────────────────────");
    };

};

  // Função para buscar personagem por nome
  export function obterPersonagemPorNome(personagens: Personagem[]): Personagem | null {
    const nome = teclado("Digite o nome do personagem: ");
    const personagem = personagens.find(p => p.nome.toLowerCase() === nome.toLowerCase());

    if (!personagem) {
        console.log("⚠️ Personagem não encontrado!");
        return null; // Retorna null se não encontrar o personagem
    }

    return personagem; // Retorna o personagem encontrado
}

export function criarPersonagem(personagens: Personagem[]) {
    const nome = teclado("Nome: ");
    const classe = teclado("Classe: ");
    const raca = teclado("Raça: ");
    const nivel = Number(teclado("Nível: "));
    const vida = Number(teclado("Vida: "));
    const ataque = Number(teclado("Ataque: "));
    const defesa = Number(teclado("Defesa: "));
    const stamina = Number(teclado("Stamina: "));
    const mana = Number(teclado("Mana: "));
    const poderAtaque = Number(teclado("Poder de Ataque: "));
    const intelecto = Number(teclado("Intelecto: "));
    const armadura = Number(teclado("Armadura: "));
    const energia = 100;
    const xp = 0;

    const novoPersonagem = new Personagem();
    novoPersonagem.nome = nome;
    novoPersonagem.classe = classe;
    novoPersonagem.raca = raca;
    novoPersonagem.nivel = nivel;
    novoPersonagem.vida = vida;
    novoPersonagem.ataque = ataque;
    novoPersonagem.defesa = defesa;
    novoPersonagem.stamina = stamina;
    novoPersonagem.mana = mana;
    novoPersonagem.poderAtaque = poderAtaque;
    novoPersonagem.intelecto = intelecto;
    novoPersonagem.armadura = armadura;
    novoPersonagem.energia = energia;
    novoPersonagem.xp = xp;

    personagens.push(novoPersonagem);
    console.log(`✅ Personagem ${nome} criado!`);
};
