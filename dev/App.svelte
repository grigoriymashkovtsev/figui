<script lang="ts">
import Input from '../src/components/Input/Input.svelte';
import Text from '../src/components/Text/Text.svelte';
import Checkbox from '../src/components/Checkbox/Checkbox.svelte';

let selected = 'light';
// import style from '../src/global.css';

// @ts-ignore
function onChange(event) {
    selected = event.currentTarget.value;
}
</script>

<svelte:head>
    <link rel="stylesheet" href="../src/global.css" />
    {#if selected === 'light'}
        <link rel="stylesheet" href="./css/light.css" />
    {:else}
        <link rel="stylesheet" href="./css/dark.css" />
    {/if}
</svelte:head>

<div>
    <label>
        <input checked={selected === 'light'} on:change={onChange} type="radio" name="amount" value="light" /> Light
    </label>

    <label>
        <input checked={selected === 'dark'} on:change={onChange} type="radio" name="amount" value="dark" /> Dark
    </label>
</div>

<main>
    <!-- <Input label={'hello!'}></Input> -->

    <div class="cont">
        <Checkbox label="test" checked={false} id="ds"></Checkbox>
        <Checkbox label="❤️ test" checked={false} id="ds"></Checkbox>
    </div>
</main>

<style>
main {
    padding: 200px;
    display: flex;
}

.cont {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    gap: 4px;
}
</style>
