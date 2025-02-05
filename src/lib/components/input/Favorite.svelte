<script lang="ts">
    let { state = $bindable("unfavored") }: { state?: "favorite" | "unfavored" } = $props()

    function toggleState() {
        state = state === "favorite" ? "unfavored" : "favorite"
    }
</script>

<button onclick={toggleState} type="button" class="bg-saddle-100 { state === "favorite" ? "text-rose-500" : "text-saddle-800" } outline-none hover:bg-saddle-300 focus:bg-saddle-100 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 rounded-md px-2 py-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-4 h-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    <span class="sr-only">Add to favorites</span>
</button>
