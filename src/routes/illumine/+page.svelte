<script lang="ts">
    import { onMount } from 'svelte'
    import Illumine, { Container, Tooltip, illuminate, illumine, illuminedItem } from '$lib/components/illumine/index.svelte'
    import LamyDebugbar from 'lamy-debugbar'

    onMount(() => {
        illuminate()
    })

    $inspect(illumine)
</script>

<main>
    <section use:illuminedItem={{ message: 'Some title', sequence: 1 }}>
        <h1>Oh hi</h1>
    </section>

    <section use:illuminedItem={{ message: 'Section 2', sequence: 2 }}>
        <h1>Naplings</h1>
    </section>
</main>

<Container />
<LamyDebugbar data={illumine} />
