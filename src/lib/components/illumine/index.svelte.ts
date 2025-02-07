// https://github.com/nickheal/svelte-tour
import type { Action } from 'svelte/action'

export { default as Container } from '$lib/components/illumine/Container.svelte'
export { default as Tooltip } from '$lib/components/illumine/Tooltip.svelte'
export { default as Item } from '$lib/components/illumine/Item.svelte'

type IllumineState = "active" | "inactive"

/**
 * @property {HTMLElement} element - HTML element to be illuminated
 * @property {string} parameters.message - Message to be shown in tooltip
 * @property {number} parameters.sequence - Item sequence/order (1 being the very first item to be shown)
 */
type IlluminedItem = {
    element: HTMLElement
    parameters: {
        message: string
        sequence: number
    }
}

type Illumine = {
    state: IllumineState
    items: IlluminedItem[]
    activeItem: number
}

export let illumine: Illumine = $state({
    state: 'inactive',
    items: [],
    activeItem: 0
})

/**
 * Start onboarding
 */
export function illuminate() {
    illumine.state = 'active'
    illumine.items = illumine.items.sort((a, b) => {
        return a.parameters.sequence > b.parameters.sequence
            ? 1
            : b.parameters.sequence > a.parameters.sequence
                ? -1
                : 0
    })
}

/**
 * Stop onboarding
 */
export function conceal() {
    illumine.state = 'inactive'
}

export function register(element: HTMLElement, parameters: typeof illumine.items[number]['parameters']) {
    illumine.items.push({
        element,
        parameters
    })
}

export function unregister(element: HTMLElement) {
    illumine.items = illumine.items.filter(item => item.element !== element)
}

/**
 * Illumine svelte action utility
 * 
 * @see {@link https://svelte.dev/docs/svelte-action | Svelte action}
 */
export const illuminedItem: Action<HTMLElement, typeof illumine.items[number]['parameters']> = (element, parameters) => {
    register(element, parameters)

    return {
        update(newParameters) {
            register(element, newParameters)
        },
        destroy() {
            unregister(element)
        }
    }
}

export default {
    illumine,
    item: illuminedItem,
    illuminate,
    conceal,
    register,
    unregister
}
