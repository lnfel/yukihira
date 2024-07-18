<script lang="ts">
    import { base } from '$app/paths'
    import { onMount, tick } from 'svelte'
    import { products } from "$lib/content"

    import Select from '$lib/components/input/Select.svelte'
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <!-- before:absolute before:inset-0 before:bg-slate-800/50 -->
            {#each products.filter((item) => selectedOption === 'all' ? true : item.categories.map((c) => c.toLowerCase()).includes(selectedOption)) as product}
                <div class="group aspect-square lg:aspect-[3/4] relative bg-saddle-100 text-saddle-100 rounded-md overflow-hidden">
                    <img src="{base}/img/products/{product.image}" alt={product.name} width="161" height="161" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200">
                    <div class="product-card-details absolute left-0 bottom-0 w-full text-left px-4 pb-2 pt-6">
                        <h3 class="tracking-wider">{ product.name }</h3>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-2xl whitespace-nowrap">&#8369; { product.price }</span>
                            <button type="button" class="bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 focus:bg-saddle-100 focus:text-rose-500 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-md px-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-4 h-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                <span class="sr-only">Add to favorites</span>
                            </button>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <!-- https://tailwindcomponents.com/component/number-input-counter -->
                            <div class="flex items-stretch">
                                <button type="button" class="number-button decrement focus:isolate bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-l-md px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus w-4 h-4"><path d="M5 12h14"/></svg>
                                    <span class="sr-only">Decrement</span>
                                </button>
                                <!-- rounded-l-md -->
                                <input type="number" class="number-input focus:isolate w-12 appearance-none bg-saddle-100 text-saddle-800 text-center outline-none ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500" value="0" min="0">
                                <button type="button" class="number-button increment focus:isolate bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-r-md px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    <span class="sr-only">Increment</span>
                                </button>
                                <!-- <div class="flex flex-col">
                                    <button type="button" class="bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 rounded-tr-md px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up w-4 h-4"><path d="m18 15-6-6-6 6"/></svg>
                                        <span class="sr-only">Increment</span>
                                    </button>
                                    <button type="button" class="bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 rounded-br-md px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
                                        <span class="sr-only">Decrement</span>
                                    </button>
                                </div> -->
                            </div>
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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    /* .number-button.decrement {
        clip-path: inset(-5px 0px -5px -5px);
    }

    .number-button.increment {
        clip-path: inset(-5px -5px -5px 0px);
    }

    .number-input {
        clip-path: inset(-5px 0px -5px 0px);
    } */
</style>
