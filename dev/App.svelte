<script lang="ts">
import Input from '../src/components/Input/Input.svelte';
import Text from '../src/components/Text/Text.svelte';

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

    <Text>Test</Text>
    <Text>Test</Text>
</main>

<style>
main {
    padding: 200px;
    display: flex;
}
</style>
