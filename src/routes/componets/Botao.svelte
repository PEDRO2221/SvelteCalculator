<script lang="ts">
    export let texto = ""; 
    export let triplo = false; 
    export let duplo = false;
    export let operacao = false; 
    export let destaque = false; 
    export let onClick : (valor:string) => void = () => {}
</script>
<button class="button" 
on:click={() => onClick(texto)}
class:triplo class:duplo class:operacao class:destaque>
    {texto}
</button>

<style>
    .button{
        margin: 0;
        padding: 7px;
        border: 1px solid var(--bg-fundo);
        flex-basis: 25%;
    }
    .triplo{
        flex-basis: 75%;
    }
    .duplo{
        flex-basis: 50%;
    }
    .operacao{
        background-color: orange;
        color: white;
    }
    .destaque{
        background-color: red;
        color: white;
    }
</style>