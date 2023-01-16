
const NAO_LIMPAR = false
const LIMPAR = true
export default class CalculadoraModel{
    #valor: string
    #acumulador:number
    #limparTela : boolean
    #operacao : string

    constructor(valor:string, acumulador:number, operacao:string, limparTela:boolean = false){
        this.#valor = valor
        this.#acumulador = acumulador
        this.#limparTela = limparTela
        this.#operacao = operacao
    }

    get valor(){
        return this.#valor?.replace('.',',')|| '0'
    }

    numeroDigitado(novoValor: string){
        return new CalculadoraModel(
        (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
        this.#acumulador,
        this.#operacao,
        NAO_LIMPAR,
        )
    }
    pontoDigitado(){
        return new CalculadoraModel(
        this.#valor?.includes('.')? this.#valor : this.#valor + '.',
        this.#acumulador,
        this.#operacao,
        NAO_LIMPAR,
        )
    }
    limpar(){
        return new CalculadoraModel()
    }
    operacaoDigitada(proximaOperacao:string){
        return this.calcular(proximaOperacao)
    }
    calcular(proximaOperacao: string){
        const acumulador = !this.#operacao 
        ? parseFloat(this.#valor)
        : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)
        const valor = !this.#operacao ? this.#valor: `${acumulador}`

        return new CalculadoraModel(
            valor,
            acumulador,
            proximaOperacao,
            proximaOperacao ? LIMPAR : NAO_LIMPAR
        )
    }
}