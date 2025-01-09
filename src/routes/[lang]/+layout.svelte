<script lang="ts">
    import Base from "../../components/global/Base.svelte";
</script>

<Base>
    <slot />
</Base>

<style>
    :global(body) {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;

        width: min(100vw, 1000px);
        margin: auto;
    }
</style>