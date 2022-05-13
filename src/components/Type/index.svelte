<script lang="ts">
export let fontStyle: FontStyle = 'normal';
</script>

<div style="font-style:{fontStyle}">
    <slot />
</div>
