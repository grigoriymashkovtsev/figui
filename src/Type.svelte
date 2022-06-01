<script lang="ts">
type FontStyle = 'normal' | 'italic';
export let fontStyle: FontStyle = 'normal';
</script>

<div style="font-style:{fontStyle}">
    <slot />
</div>
