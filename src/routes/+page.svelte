<script lang="ts">
    import Button from "./componets/Botao.svelte";
    import Calculadora from "./componets/Calculadora.svelte";
</script>

<main>
    <Calculadora/>
</main>

<style>
    :global(body){
        background-color: black;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    :root{
        --bg-fundo: #555
    }
</style>
