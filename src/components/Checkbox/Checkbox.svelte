<script lang="ts">
import { createEventDispatcher } from 'svelte';

const uid = () => Math.random().toString(36).slice(2).toString();

export let label: string;
export let checked: boolean;
export let id = `checkbox-${uid()}`;

const dispatch = createEventDispatcher();
</script>

<div class="container">
    <input
        class="input-checkbox"
        type="checkbox"
        id={id}
        bind:checked={checked}
        on:change
        on:focus
        on:blur
        on:toggle={() => {
            checked = !checked;
            dispatch('toggle');
        }} />
    <div class="checkmark">
        {#if checked}
            <svg class="svg" width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="var(--figma-color-text-onselected-strong)"
                    d="M1.176 2.824L3.06 4.706 6.824.941 8 2.118 3.059 7.059 0 4l1.176-1.176z"
                    fill-rule="evenodd"
                    fill-opacity="1"
                    stroke="none" />
            </svg>
        {/if}
    </div>
    <label for={id} class="label">
        {label}
    </label>
</div>

<style>
.container {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    cursor: pointer;
}

.input-checkbox {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
}

.checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12px;
    width: 12px;
    border: 1px solid var(--figma-color-text);
    border-radius: 3px;
}

.input-checkbox:checked + .checkmark {
    background-color: var(--figma-color-bg-brand);
    border-color: var(--figma-color-bg-brand);
}

.checkmark svg {
    display: none;
}

.input-checkbox:checked + .checkmark svg {
    display: block;
}

.label {
    cursor: pointer;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE/Edge */
    user-select: none;
    margin: 0;
    font-family: Inter, Arial, sans-serif;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.055px;
    font-weight: 400;
    color: var(--figma-color-text);
    text-align: left;
}
</style>
