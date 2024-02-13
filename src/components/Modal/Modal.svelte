<script lang="ts">
export let showModal: boolean;
let dialog: HTMLDialogElement;
$: if (dialog && showModal) dialog.showModal();

// svelte
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

// components
import IconButton from '../IconButton/IconButton.svelte';
import Close32 from '../../Icons/Close_32.svelte';
import Button from '../Button/Button.svelte';

// export
export let title: string = 'Modal';
export let showButtons: boolean = true;
export let canClose: boolean = true;
export let width: number = 360;
export let height: number = 400;

function handleSubmit() {
    dispatch('submit');
    if (canClose) {
        dialog.close();
    }
}

function handleCancel() {
    dispatch('cancel');
    dialog.close();
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal = false)} on:click|self={() => handleCancel()}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <!-- Modal body -->
        <div
            style="background-color: var(--figma-color-bg); height:{height}px; width:{width}px;"
            class="flex flex-col rounded overflow-auto ppo">
            <!-- Modal header -->
            <div class="flex w-full items-center justify-between p-1 border-b border-figma-color-border">
                <div class="pl-2 text-xs font-medium text-figma-color-text">{title}</div>
                <IconButton on:click={() => handleCancel()}><Close32></Close32></IconButton>
            </div>
            <div style="height: 100%; overflow:auto;">
                <slot />
            </div>

            <!-- Modal footer -->
            {#if showButtons}
                <div class="flex w-full items-center justify-end p-2 border-t border-figma-color-border gap-2">
                    <Button priority="secondary" on:click={() => handleCancel()}>Cancel</Button>
                    <Button priority="primary" on:click={() => handleSubmit()}>Insert</Button>
                </div>
            {/if}
        </div>
    </div>
</dialog>

<style>
dialog {
    background: none;
    max-width: 32em;
    border: none;
    padding: 0;
}
dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
}

dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes zoom {
    from {
        transform: scale(0.95);
    }
    to {
        transform: scale(1);
    }
}
dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
}
@keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
button {
    display: block;
}
</style>
