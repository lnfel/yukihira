<script lang="ts">
    import { onMount, tick } from 'svelte'
    import { shortUniqueID } from "$lib/utils"

    let {
        label = "Select",
        labelID = `select-label-${shortUniqueID.rnd()}`,
        selectID = `select-${shortUniqueID.rnd()}`,
        selectOptionClass = `option-${shortUniqueID.rnd()}`,
        selectListContainerID = `select-list-${shortUniqueID.rnd()}`,
        options = [],
        defaultSelected = "",
        selectedOption = $bindable(defaultSelected)
    }: {
        label?: string
        labelID?: string
        selectID?: string
        selectOptionClass?: string
        selectListContainerID?: string
        options: string[]
        defaultSelected?: string
        selectedOption?: string
    } = $props()

    let selectButton: HTMLButtonElement | undefined = $state()
    let selectListContainer: HTMLDivElement | undefined = $state()
    let selectCursorPosition = $state(0)
    // let selectedOption: typeof options[number] = $state("all")

    function toggleSelect(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        event.stopPropagation()
        event.currentTarget.ariaExpanded = event.currentTarget.ariaExpanded === 'true'
            ? 'false'
            : 'true'
    }

    /**
     * https://stackoverflow.com/a/66278622/12478479
     */
    function selectKeyDownHandler(event: KeyboardEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        const categorySelectOptions = document.querySelectorAll(`.${selectOptionClass}`) as NodeListOf<HTMLButtonElement>
        const categorySelectOptionsArray = Array.from(categorySelectOptions)
        const maxItems = categorySelectOptionsArray.length - 1
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            selectCursorPosition = selectCursorPosition === maxItems ? 0 : selectCursorPosition + 1
            categorySelectOptionsArray[selectCursorPosition].focus()
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            selectCursorPosition = selectCursorPosition === 0 ? maxItems : selectCursorPosition - 1
            categorySelectOptionsArray[selectCursorPosition].focus()
        }
    }

    function selectKeyUpHandler(event: KeyboardEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        if (event.key === 'Enter') {
            selectButton?.focus()
        }

        if (event.key === ' ' || event.key === 'Space') {
            setTimeout(() => {
                selectButton?.focus()
            }, 100)
        }
    }

    function selectOption(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        const categoryOptions = document.querySelectorAll(`button.${selectOptionClass}`)
        categoryOptions.forEach((option) => {
            option.ariaSelected = 'false'
        })
        event.currentTarget.ariaSelected = 'true'
        selectedOption = event.currentTarget.dataset.value as string
    }

    onMount(async () => {
        // Prevent scrolling while navigating select using arrow keys
        if (selectButton) {
            selectButton.onkeydown = (event) => {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    return false;
                }

                if (event.key === 'Escape' && event.currentTarget instanceof HTMLButtonElement) {
                    event.currentTarget.ariaExpanded = 'false'
                }
            }
        }
        const categorySelectOptions = document.querySelectorAll(`.${selectOptionClass}`) as NodeListOf<HTMLButtonElement>
        categorySelectOptions.forEach((selectOption) => {
            selectOption.onkeydown = (event) => {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    return false;
                }

                if (selectButton) {
                    if (event.key === 'Escape') {
                        selectButton.ariaExpanded = 'false'
                        selectButton.focus()
                    }
                }
            }
        })

        // Close select when clicking away
        await tick()
        document.documentElement.onclick = () => {
            if (selectButton) {
                selectButton.ariaExpanded = 'false'
            }
        }
    })
</script>

<div class="flex items-center gap-2">
    <label id={labelID} for={selectID} class="text-sm text-saddle-100">{ label }</label>
    <!-- auto resize container to fit max-width of the widest select option --- style="width: {selectListContainer?.clientWidth}px;" -->
    <div class="group relative">
        <button bind:this={selectButton} onclick={toggleSelect} onkeydown={selectKeyDownHandler} id={selectID} type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby={labelID} aria-controls={selectListContainerID} class="w-full flex items-center justify-between gap-4 cursor-default text-saddle-900 bg-saddle-100 outline-none hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 font-medium rounded-md text-sm px-2 py-1">
            <span class="block text-sm whitespace-nowrap text-ellipsis overflow-hidden select-none">{ options.find((option) => option.toLowerCase() === selectedOption) }</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down w-4 h-4"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
        </button>

        <div bind:this={selectListContainer} id={selectListContainerID} aria-labelledby={selectID} aria-orientation="vertical" role="listbox" class="min-w-fit w-full absolute top-full right-0 z-[2] bg-saddle-100 text-sm rounded-md overflow-hidden mt-2 pointer-events-none opacity-0 group-has-[button[aria-expanded='true']]:pointer-events-auto group-has-[button[aria-expanded='true']]:opacity-100 transition-opacity duration-200 ease-in-out">
            <span class="block text-xs font-bold px-2 py-1 whitespace-nowrap select-none">Select {label.toLowerCase()}</span>
            {#each options as option}
                <button onclick={selectOption} onkeydown={selectKeyDownHandler} onkeyup={selectKeyUpHandler} type="button" data-value={option.toLowerCase()} role="option" tabindex="-1" aria-selected={selectedOption.includes(option.toLowerCase()) ? "true" : "false"} class="group {selectOptionClass} w-full flex items-center justify-between gap-2 outline-none hover:bg-saddle-300 focus:bg-saddle-300 cursor-default px-2 py-1">
                    <span class="block select-none whitespace-nowrap">{ option }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-4 h-4 invisible group-aria-[selected='true']:visible"><path d="M20 6 9 17l-5-5"/></svg>
                </button>
            {/each}
        </div>
    </div>
</div>
