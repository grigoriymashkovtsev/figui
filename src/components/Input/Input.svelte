<script lang="ts">
export let value: unknown = undefined;
export let placeholder: string | undefined = undefined;
export let border: boolean = true;
export let label: string | undefined = undefined;
export let labelPosition: 'top' | 'left' = 'left';
</script>

<div class="{$$props.class || ''} flex flex-col gap-1 w-full">
    {#if label && labelPosition == 'top'}
        <label class="text-input-label">{label}</label>
    {/if}
    <input
        class="{border ? '' : 'no-border'} w-full text-input"
        type="text"
        dir="auto"
        placeholder={placeholder}
        spellcheck="false"
        bind:value={value}
        on:input />
</div>

<style>
.text-input-label {
    color: var(--figma-color-text);
    font-size: 11px;
    line-height: 16px;
    font-family: inherit;
    width: 100%;
}
.text-input {
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg);
    border: 1px solid var(--figma-color-border);
    font-size: 11px;
    line-height: 16px;
    font-family: inherit;
    height: 28px;
    padding: 0 8px;
    border-radius: 1px;
    box-sizing: border-box;
}

.text-input:focus {
    outline: none;
    border: 1px solid var(--figma-color-border-selected);
    outline-offset: 0;
    box-shadow: 0 0 0 1px var(--figma-color-border-selected);
}

/* no border classes */
.no-border {
    padding: 0 4px;
    border: none !important;
}

.no-border:focus {
    border: none !important;
    box-shadow: none !important;
}
</style>
