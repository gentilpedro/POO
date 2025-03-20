### Passos para inicializar utilize o comando 
    npm init -y
    npm init
para instalar o TS no projeto
    npm i typescript
para instala de maniera globlal
    npm i -g typescript
se quiser baixar uma dependecia que seja só para desenvolvimento deve se usar no comando 
    -D
    npm i -D prompt-sync

    ## Missão 1 - Treinar Ataque

No arquivo **Main,** crie a função **treinarAtaque,** que deverá:

1. Receber por **parâmetro** o personagem que será treinado e o número de horas de treino.
2. Consumir **energia** entre 15 e 30 a cada hora de treino.
3. Após o treino o **ataque** do personagem deverá aumentar em 10 mais 10% do ataque do personagem multiplicado pelo número de horas de treino.

### Regras e validações

- A energia é um valor entre 0 e 100.
- O ataque é um valor inteiro ilimitado.
- Se a energia do personagem baixar de 0 durante o treino ele morre.


## Missão 2 - Treinar Defesa

No arquivo **Main,** crie a função **treinarDefesa,** que deverá:

1. Receber por **parâmetro** o personagem que será treinado e o número de horas de treino.
2. Consumir **energia** entre 15 e 30 a cada hora de treino.
3. Após o treino, a **defesa** do personagem deverá aumentar em 10 mais 10% da defesa do personagem multiplicado 
pelo número de horas de treino.

### Regras e validações

- A energia é um valor entre 0 e 100.
- A defesa é um valor inteiro ilimitado.
- Se a energia do personagem baixar de 0 durante o treino ele morre.


## Missão 3 - Descansar

No arquivo **Main,** crie a função **descansar,** que deverá:

1. Receber por **parâmetro** o personagem que entrará em descanso e o número de horas de descanso.
2. Regenerar **energia** entre 10 e 20 a cada hora de treino.

### Regras e validações

- A energia é um valor entre 0 e 100.
- A defesa é um valor inteiro ilimitado.
- Se o descanso for muito longo e tentar passar dos 100 de energia, a energia deverá ser ajustada para 100 e o 
efeito colateral será a perda de defesa e de ataque em percentual equivalente ao tanto que tentou estourar os 100% de energia.
    
    Ex.: O personagem descansou, a energia atual mais a acumulada pelo descanso sugeriu o valor de energia igual 
    a 115. A energia do personagem deverá ser ajustada para 100 e ele deverá ter sua defesa e seu ataque reduzido em 15%.

## Missão 4 - Desafiar

Valores bases dos oponentes:

Energia: 100

Defesa: entre 110 e 150

Ataque: entre 120 e 200

***Adicionar o campo XP ao personagem, onde todo personagem deverá iniciar com 0.**

1. Deverá ser gerado um nome aleatório para o oponente (utilizar a biblioteca **faker.js**)
2. Ao desafiar, deve ser passado por parâmetro o personagem desafiante e o nível do desafiado.
3. Deverá ser rodado um “dado” para decidir quem irá realizar o ataque até que o herói ou o desafiado seja derrotado.

### Regras e validações

- O nível do desafiado atuará como um multiplicador da defesa e do ataque do mesmo.
- Ao derrotar um oponente o herói deverá receber XP igual a 2 multiplicado pelo nível do oponente.
- Ao ser derrotado, o herói perde 10% de XP.
- O herói é considerado derrotado quando a energia baixa de 5. Neste caso a energia deverá ser ajustada para 1 e o 
herói sai de batalha.
- O desafiado é considerado derrotado quando sua energia é zerada.

## Missão 5 - Interface

Seja criativo, gere uma interface de terminal para que todas as ações do nosso personagem possam ser realizadas da 
melhor maneira possível.