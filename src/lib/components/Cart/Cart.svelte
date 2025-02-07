<script lang="ts" type="module">
    import * as Drawer from '$lib/components/ui/drawer/index.js'
    import { renderSnippet } from '$lib/components/ui/data-table'
    import { createRawSnippet } from 'svelte'
    import CartTable from './CartTable.svelte'
    import type { ColumnDef } from "@tanstack/table-core"

    export type CartItem = {
        name: string
        price: number
        total: number
        quantity: number
    }

    export type CartDetails = {
        items: CartItem[]
        // paymentAmount: number
        amountDue: number
        // change: number
    }

    const columns: ColumnDef<CartItem>[] = [
        {
            accessorKey: "name",
            header: "Name"
        },
        {
            accessorKey: "quantity",
            header: () => {
                const headerSnippet = createRawSnippet(() => ({
                    render: () => `<div class="text-right">Quantity</div>`
                }))
                return renderSnippet(headerSnippet, "")
            },
            cell: ({ row }) => {
                const cellSnippet = createRawSnippet<[string]>((getValue) => {
                    const value = getValue()
                    return {
                        render: () => `<div class="text-right">${value}</div>`
                    }
                })
                return renderSnippet(cellSnippet, row.getValue("quantity"))
            }
        },
        {
            accessorKey: "price",
            header: () => {
                const headerSnippet = createRawSnippet(() => ({
                    render: () => `<div class="text-right">Unit Price</div>`
                }))
                return renderSnippet(headerSnippet, "")
            },
            cell: ({ row }) => {
                const cellSnippet = createRawSnippet<[string]>((getValue) => {
                    const value = getValue()
                    return {
                        render: () => `<div class="text-right">${value}</div>`
                    }
                })
                return renderSnippet(cellSnippet, `${row.getValue("price")} ea`)
            }
        },
        {
            accessorKey: "total",
            header: () => {
                const headerSnippet = createRawSnippet(() => ({
                    render: () => `<div class="text-right">Amount</div>`
                }))
                return renderSnippet(headerSnippet, "")
            },
            cell: ({ row }) => {
                const cellSnippet = createRawSnippet<[string]>((getValue) => {
                    const value = getValue()
                    return {
                        render: () => `<div class="text-right">${value}</div>`
                    }
                })
                return renderSnippet(cellSnippet, row.getValue("total"))
            }
        }
    ]

    let { cartDetails = $bindable({ items: [], amountDue: 0 }) }: { cartDetails?: CartDetails } = $props()
</script>

<Drawer.Root>
    <Drawer.Trigger class="fixed bottom-10 right-4 md:right-20 rounded-full bg-saddle-100 text-saddle-900 shadow-md outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 p-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-6 h-6"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <span class="sr-only">Cart</span>
    </Drawer.Trigger>
    <Drawer.Content id="shopping-cart-content" class="min-h-[75vh] bg-saddle-100 text-saddle-900 px-4 md:px-20">
        <Drawer.Header class="px-0">
            <div class="flex items-center justify-between">
                <Drawer.Title>Shopping Cart</Drawer.Title>

                <Drawer.Close type="button" class="bg-saddle-100 text-saddle-900 p-0.5 rounded outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-bottom-close w-6 h-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/><path d="m15 8-3 3-3-3"/></svg>
                    <span class="sr-only">Close cart info</span>
                </Drawer.Close>
            </div>
            <!-- <Drawer.Description>This action cannot be undone.</Drawer.Description> -->
        </Drawer.Header>

        <CartTable {columns} data={cartDetails.items} amountDue={cartDetails.amountDue} />

        <Drawer.Footer class="flex items-end px-0">
            <button type="button" class="bg-saddle-900 text-saddle-100 px-4 py-2 rounded outline-none hover:bg-saddle-800 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-100 focus:ring-saddle-900 focus:border-saddle-900">Checkout</button>
        </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>

<style lang="postcss">
    :global(#shopping-cart-content .drawer-handle) {
        background-color: theme(colors.saddle.300);
    }
</style>
