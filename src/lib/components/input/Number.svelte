<script lang="ts">
    type NumberInputProps = {
        value?: number
        change?: (value: number) => void
    }

    let { value = $bindable(0), change }: NumberInputProps = $props()

    function increment() {
        value++
        change?.(value)
    }

    function decrement() {
        if (value !== 0) {
            value--
            change?.(value)
        }
    }
</script>

<!-- https://tailwindcomponents.com/component/number-input-counter -->
<div class="flex items-stretch">
    <button onclick={decrement} type="button" class="number-button decrement focus:isolate bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-l-md px-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus w-4 h-4"><path d="M5 12h14"/></svg>
        <span class="sr-only">Decrement</span>
    </button>
    <input onchange={(event) => change?.(Number(event.currentTarget.value))} bind:value type="number" class="number-input focus:isolate w-12 appearance-none bg-saddle-100 text-saddle-800 text-center outline-none ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500" min="0">
    <button onclick={increment} type="button" class="number-button increment focus:isolate bg-saddle-100 text-saddle-800 outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-r-md px-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <span class="sr-only">Increment</span>
    </button>
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
</style>
