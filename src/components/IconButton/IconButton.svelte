<script lang="ts">
</script>

<button on:click>
    <slot />
</button>

<style>
button {
    width: 32px;
    height: 32px;
    border: 1px solid transparent;
    border-radius: 3px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
}

button:hover {
    background-color: var(--figma-color-bg-hover);
}

button:focus {
    outline: none;
}
</style>
