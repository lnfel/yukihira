<script lang="ts" generics="TData, TValue">
    import { type ColumnDef, getCoreRowModel } from "@tanstack/table-core"
    import { createSvelteTable, FlexRender } from "$lib/components/ui/data-table"
    import * as Table from "$lib/components/ui/table"

    type DataTableProps<TData, TValue> = {
        columns: ColumnDef<TData, TValue>[]
        data: TData[]
    }

    let { data, columns, amountDue }: DataTableProps<TData, TValue> & { amountDue: number } = $props()

    const table = createSvelteTable({
        get data() {
            return data
        },
        columns,
        getCoreRowModel: getCoreRowModel()
    })
</script>

<Table.Root>
    <Table.Header class="sticky top-0 bg-saddle-100/70 backdrop-blur-sm">
        {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
            <Table.Row>
                {#each headerGroup.headers as header (header.id)}
                    <Table.Head class="whitespace-nowrap">
                        {#if !header.isPlaceholder}
                            <FlexRender content={header.column.columnDef.header} context={header.getContext()} />
                        {/if}
                    </Table.Head>
                {/each}
            </Table.Row>
        {/each}
    </Table.Header>

    <Table.Body>
        {#each table.getRowModel().rows as row (row.id)}
            <Table.Row data-state={row.getIsSelected() && "selected"}>
                {#each row.getVisibleCells() as cell (cell.id)}
                    <Table.Cell>
                        <FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
                    </Table.Cell>
                {/each}
            </Table.Row>
        {:else}
            <Table.Row>
                <Table.Cell colspan={columns.length} class="h-24 text-center">
                    No items yet.
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
    {#if table.getRowModel().rows.length > 0}
        <Table.Footer class="sticky bottom-0 bg-saddle-100/70 backdrop-blur-sm">
            <Table.Row>
                <Table.Cell colspan={columns.length - 1} class="text-right">
                    Amount due
                </Table.Cell>
                <Table.Cell class="text-right">
                    {amountDue}
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    {/if}
</Table.Root>

<style lang="postcss">
    :global(tbody > tr:nth-child(odd)) {
        background-color: theme(colors.saddle.200);
    }
</style>
