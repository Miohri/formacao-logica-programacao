// Escrevendo as classes de um Jogo

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";    
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    } 

}

let guerreiro = new Hero("Garen", 32, "guerreiro");
let mago = new Hero("Lux", 23, "mago");
let monge = new Hero("Lee Sin", 40, "monge");
let ninja = new Hero ("Akali", 25, "ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();