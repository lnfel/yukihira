<script lang="ts">
    import '$lib/app.css'

    import { base } from '$app/paths'
    import { onMount } from 'svelte'
    import { page } from '$app/stores'

    let { children } = $props()
    let navToggleCheckbox: HTMLInputElement | undefined = $state()
    let scrollAtTop = $state(true)

    function openNav(navLinks: NodeListOf<HTMLAnchorElement>, overlay: HTMLDivElement | null) {
        overlay?.classList.remove('stagger-fade-out')
        overlay?.classList.add('stagger-fade-in')
        navLinks.forEach((link) => {
            link.classList.remove('stagger-fade-out')
            link.classList.add('stagger-fade-in')
        })
    }

    function closeNav(navLinks: NodeListOf<HTMLAnchorElement>, overlay: HTMLDivElement | null) {
        overlay?.classList.remove('stagger-fade-in')
        overlay?.classList.add('stagger-fade-out')
        navLinks.forEach((link) => {
            link.classList.remove('stagger-fade-in')
            link.classList.add('stagger-fade-out')
        })
    }

    function toggleNav(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        event.stopPropagation()

        const navLinks = document.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>
        const overlay = document.querySelector('.overlay') as HTMLDivElement | null

        if (navToggleCheckbox instanceof HTMLInputElement) {
            navToggleCheckbox.checked = !navToggleCheckbox.checked
            navToggleCheckbox.checked
                ? openNav(navLinks, overlay)
                : closeNav(navLinks, overlay)
        }
    }

    function handleEscapeKey(event: KeyboardEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        if (event instanceof KeyboardEvent && event.key === 'Escape') {
            if (navToggleCheckbox instanceof HTMLInputElement) {
                navToggleCheckbox.checked = false
                const navLinks = document.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>
                const overlay = document.querySelector('.overlay') as HTMLDivElement | null
                closeNav(navLinks, overlay)
            }
        }
    }

    async function detectSWUpdate() {
        const registration = await navigator.serviceWorker.ready
        registration.addEventListener('updatefound', () => {
            const newSW = registration.installing
            newSW?.addEventListener('statechange', () => {
                if (newSW.state === 'installed') {
                    if (confirm('New update available! Reload the page to use the latest version of the app?')) {
                        newSW.postMessage({ type: 'SKIP_WAITING' })
                        // location.reload() // no need this one
                    }
                }
            })
        })
    }

    onMount(() => {
        detectSWUpdate()

        const navLinks = document.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>
        const navToggleButton = document.querySelector('button.nav-toggle')
        if (navToggleButton instanceof HTMLButtonElement) {
            const mediaQuery = matchMedia("(min-width: 768px)")
            /**
             * Close nav menu on small screens when clicking on nav links
             */
            if (!mediaQuery.matches) {
                navLinks.forEach((navLink) => {
                    navLink.onclick = () => {
                        navToggleButton.click()
                    }
                })
            }

            /**
             * Close nav menu when clicking outside of nav elements
             */
            document.documentElement.onclick = () => {
                if (navToggleCheckbox instanceof HTMLInputElement && navToggleCheckbox.checked) {
                    navToggleButton.click()
                }
            }
        }

        window.onscroll = () => {
            const header = document.querySelector('header')
            if (header) {
                const top = header.getBoundingClientRect().top
                const scrollPosition = window.scrollY
                scrollAtTop = top < 80 && scrollPosition > 80
                    ? false
                    : true
            }
        }
    })
</script>

<svelte:head>
    <title>Sushiya | Yukihira</title>
</svelte:head>

<!-- before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md -->
<!-- bg-[radial-gradient(transparent_0.75px,_theme(colors.saddle.800_/_1)_0.75px)] bg-[length:4px_4px] -->
<!-- bg-saddle-800/90 -->
<header class="group fixed top-0 z-10 w-full flex items-center justify-between gap-2 px-4 md:px-20 {scrollAtTop ? 'py-6' : 'py-1'} transition-all duration-200">
    <a href="{base}/" style="--animation-order: 7;" class="logo stagger-fade-in rounded-md outline-none border border-transparent hover:border-saddle-100 focus:border-saddle-100">
        <img src="{base}/img/yukihira_logo-square.png" alt="Yukihira logo" width="70" height="70">
        <h1 class="sr-only">Yukihira</h1>
    </a>

    <!-- for="nav-toggle" -->
    <button onclick={toggleNav} onkeyup={handleEscapeKey} class="nav-toggle outline-none">
        <input bind:this={navToggleCheckbox} type="checkbox" id="nav-toggle-checkbox" /> 
        <span></span>
        <span></span>
        <span></span>
    </button>

    <!-- 
        hydration_attribute_changed
        https://github.com/sveltejs/kit/pull/9220
        i.e.
        ```
        The `href` attribute on `<a href=".#about" style="--animation-order: 7; --fade-out-order: 4;" class="stagger-fade-in relative outline-none svelte-622oet">...</a>` changed its value between server and client renders. The client value, `#about`, will be ignored in favour of the server value
        ```
    -->
    <nav class="flex group-[&:has(label>input[type='checkbox']:checked)]:flex md:group-[&:has(label>input[type='checkbox']:not(:checked))]:flex w-full md:w-fit absolute md:static top-full left-0 md:flex flex-col md:flex-row items-end md:items-center gap-4 text-saddle-100 tracking-wider px-4 md:px-0">
        <a href="{base}{$page.url.pathname === '/order' ? '/' : ''}#about" style="--animation-order: 7; --fade-out-order: 4;" class="nav-link stagger-fade-in relative outline-none">About Yukihira</a>
        <a href="{base}{$page.url.pathname === '/order' ? '/' : ''}#sushi" style="--animation-order: 8; --fade-out-order: 3;" class="nav-link stagger-fade-in relative outline-none">Sushi</a>
        <a href="{base}{$page.url.pathname === '/order' ? '/' : ''}#contact" style="--animation-order: 9; --fade-out-order: 2;" class="nav-link stagger-fade-in relative outline-none">Contact Us</a>
        <a href="{base}#order" style="--animation-order: 10; --fade-out-order: 1;" class="stagger-fade-in relative outline-none">Order</a>
    </nav>
</header>

<div style="--animation-order: 6; --fade-out-order: 5;" class="overlay stagger-fade-in fixed inset-0 bg-slate-900/90 z-[1]"></div>

{@render children()}

<style lang="postcss">
    nav {
        pointer-events: none;
    }

    nav a.stagger-fade-in,
    .overlay.stagger-fade-in {
        opacity: 0;
        pointer-events: none;
    }

    nav a::after,
    :global(.logo h1::after) {
        content: "";
        width: 0px;
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        border-bottom: 2px solid theme(colors.saddle.100);
        transition: all 200ms ease-in-out;
    }

    nav a:hover::after,
    nav a:focus::after,
    :global(.logo:hover h1::after),
    :global(.logo:focus h1::after) {
        width: 100%;
    }

    header.group:has(button.nav-toggle>input[type='checkbox']:checked) nav {
        pointer-events: all;
    }

    header.group:has(button.nav-toggle>input[type='checkbox']:checked) nav a,
    header.group:has(button.nav-toggle>input[type='checkbox']:checked) ~ .overlay {
        opacity: 0;
        pointer-events: all;
        animation: header-fade-in 200ms calc(150ms * var(--animation-order)) forwards;
    }

    /* header.group:has(button.nav-toggle>input[type='checkbox']:not(:checked)) nav a {
        opacity: 1;
        pointer-events: none;
        animation: header-fade-out 200ms calc(150ms * var(--fade-out-order)) forwards;
    } */

    :global(.stagger-fade-out) {
        opacity: 1;
        pointer-events: none;
        animation: header-fade-out 200ms calc(150ms * var(--fade-out-order)) forwards;
    }

    .logo.stagger-fade-in {
        opacity: 0;
        pointer-events: all;
        animation: header-fade-in 200ms calc(150ms * var(--animation-order)) forwards;
    }

    @keyframes header-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes header-fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    /* https://codepen.io/Danilo06/pen/PoNNvGm */
    button.nav-toggle {
        /* space-y-1.5 */
        @apply flex flex-col w-[70px] cursor-pointer md:hidden scale-50;
    }
    button.nav-toggle span {
        @apply bg-saddle-100 rounded-lg h-[7px] my-[7px];
        transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    button.nav-toggle span:nth-of-type(1) {
        @apply w-1/2;
    }

    button.nav-toggle span:nth-of-type(2) {
        @apply w-full;
    }

    button.nav-toggle span:nth-of-type(3) {
        width: 75%;
    }

    button.nav-toggle input[type="checkbox"] {
        @apply invisible;
    }

    button.nav-toggle input[type="checkbox"]:checked ~ span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotateZ(45deg) translate(8px, 0px);
    }

    button.nav-toggle input[type="checkbox"]:checked ~ span:nth-of-type(2) {
        transform-origin: top;
        transform: rotateZ(-45deg);
    }

    button.nav-toggle input[type="checkbox"]:checked ~ span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(30px, -11px) rotateZ(45deg);
    }

    @media (min-width: 768px) {
        .stagger-fade-in {
            opacity: 0;
            pointer-events: all;
            animation: header-fade-in 200ms calc(150ms * var(--animation-order)) forwards;
        }

        nav a.stagger-fade-in {
            pointer-events: all;
        }

        .overlay.stagger-fade-in {
            opacity: 0;
            pointer-events: none;
            animation: none;
        }

        header.group:has(button.nav-toggle>input[type='checkbox']:checked) ~ .overlay {
            opacity: 0;
            pointer-events: none;
            animation: none;
        }

        /**
         * Show navigation after resizing from small to medium screen
         * stagger-fade-out is lingering and resize observer might be overkill for this simple feature
         */
        :global(nav a.stagger-fade-out) {
            opacity: 0;
            pointer-events: all;
            animation: header-fade-in 200ms calc(150ms * var(--animation-order)) forwards;
        }
    }
</style>
