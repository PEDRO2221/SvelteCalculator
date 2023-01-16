<script lang="ts">
    import CalculadoraModel from "../model/Calculadora.Model";
    import Button from "./Botao.svelte";
    import Linha from "./Linha.svelte";
    import Tela from "./Tela.svelte";

    let calc = new CalculadoraModel()
    const numeroDigitado = (num: string) => calc = calc.numeroDigitado(num)
    const operacaoDigitada = (op: string) => calc = calc.operacaoDigitada(op)
    const pontoDigitado = () => calc = calc.pontoDigitado()
    const calcular = () => calc = calc.calcular()
    const limpar = () => calc = calc.limpar()
</script>

<div class="calculadora">
    <Tela valor={calc.valor}/>
    <Linha>
        <Button destaque triplo texto="AC" onClick={limpar}/>
        <Button operacao texto="/" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Button texto="7" onClick={numeroDigitado} />
        <Button texto="8" onClick={numeroDigitado}/>
        <Button texto="9" onClick={numeroDigitado}/>
        <Button operacao texto="*" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Button texto="4"  onClick={numeroDigitado}/>
        <Button texto="5" onClick={numeroDigitado}/>
        <Button texto="6" onClick={numeroDigitado}/>
        <Button operacao texto="+" onClick={operacaoDigitada} />
    </Linha>
    <Linha>
        <Button texto="1" onClick={numeroDigitado}/>
        <Button texto="2" onClick={numeroDigitado}/>
        <Button texto="3" onClick={numeroDigitado}/>
        <Button operacao texto="-" onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Button duplo texto="0" onClick={numeroDigitado}/>
        <Button texto="," onClick={pontoDigitado} />
        <Button destaque texto="=" onClick={calcular}/>
    </Linha>
</div>

<style>
    .calculadora {
        background-color: var(--bg-fundo);
        height: 220px;
        width: 150px;
        padding: 5px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }
</style>
