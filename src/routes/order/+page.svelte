<script lang="ts">
    import { base } from '$app/paths'
    import { onMount, tick } from 'svelte'
    import { products } from "$lib/content"

    import Select from '$lib/components/input/Select.svelte'
    import Number from '$lib/components/input/Number.svelte'
    import Favorite from '$lib/components/input/Favorite.svelte'
    import Footer from '$lib/components/Footer.svelte'

    const categories = ["All", "Donburi", "Sushi", "Drinks", "Best Sellers"]
    const defaultSelected = 'all'
    let selectedOption: typeof categories[number] = $state(defaultSelected)
</script>

<svelte:head>
    <title>Order | Yukihira</title>
</svelte:head>

<main>
    <section class="px-4 md:px-20 pt-[124px] pb-6 space-y-6">
        <div class="flex items-center justify-between">
            <h2 class="relative text-3xl text-saddle-100 tracking-wider py-6 after:absolute after:bottom-0 after:left-0 after:w-10 md:after:w-20 after:border-b-4 after:border-saddle-400">
                Order
            </h2>

            <Select label="Category" options={categories} {defaultSelected} bind:selectedOption />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {#each products.filter((item) => selectedOption === 'all' ? true : item.categories.map((c) => c.toLowerCase()).includes(selectedOption)) as product}
                <div class="group aspect-square relative bg-saddle-100 text-saddle-100 rounded-md overflow-hidden">
                    <img src="{base}/img/products/{product.image}" alt={product.name} width="161" height="161" class="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200">
                    <div class="product-card-details absolute left-0 bottom-0 w-full text-left px-4 pb-2 pt-6">
                        <h3 class="tracking-wider">{ product.name }</h3>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-2xl whitespace-nowrap">&#8369; { product.price }</span>
                            <Favorite />
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <Number />
                            <button type="button" class="bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-md px-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-4 h-4"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                <span class="sr-only">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
            <div></div>
        </div>
    </section>

    <Footer />
</main>

<style lang="postcss">
    .product-card-details {
        background-image: linear-gradient(to top, theme(colors.slate.800 / 0.5) 0%, theme(colors.slate.800 / 0.7) 70%, theme(colors.slate.800 / 0) 90%);
    }
</style>
