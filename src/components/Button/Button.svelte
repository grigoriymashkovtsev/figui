<script lang="ts">
export let priority: 'primary' | 'secondary' = 'primary';
</script>

<button class="{$$props.class || ''} {priority == 'primary' ? 'primary' : 'secondary'}" on:click> <slot /></button>

<style>
button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    border-radius: 6px;
    user-select: none;
    outline-offset: -1px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 11px;
    line-height: 32px;
    padding: 0 13px;
}

.primary {
    background-color: var(--figma-color-bg-brand);
    color: var(--figma-color-text-onbrand);
}

.primary:focus {
    outline-width: 2px;
    outline-color: var(--figma-color-border-selected);
}

.primary:active {
    outline-color: var(--figma-color-border-selected);
    background-color: var(--figma-color-bg-brand-pressed);
    outline: 2px solid var(--figma-color-border-selected-strong);
}

.secondary {
    outline: 1px solid var(--figma-color-text);
    color: var(--figma-color-text);
}

.secondary:focus {
    outline-width: 2px;
    outline-color: var(--figma-color-border-selected);
}

.secondary:active {
    background-color: var(--figma-color-bg-pressed);
}
</style>
