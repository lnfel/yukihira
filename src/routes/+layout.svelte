<script lang="ts">
    import '$lib/app.css'

    import { base } from '$app/paths'

    let { children } = $props()

    function toggleNav(event: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        const navLinks = document.querySelectorAll('nav a')

        if (event.currentTarget.checked) {
            navLinks.forEach((link) => {
                link.classList.remove('stagger-fade-out')
                link.classList.add('stagger-fade-in')
            })
        } else {
            navLinks.forEach((link) => {
                link.classList.remove('stagger-fade-in')
                link.classList.add('stagger-fade-out')
            })
        }
    }
</script>

<svelte:head>
    <title>Sushiya | Yukihira</title>
</svelte:head>

<!-- before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md -->
<header class="group fixed top-0 z-10 w-full flex items-center justify-between gap-2 px-4 md:px-20 py-6">
    <a href="{base}/" style="--animation-order: 7;" class="logo stagger-fade-in rounded-md outline-none border border-transparent hover:border-saddle-100 focus:border-saddle-100">
        <img src="{base}/img/yukihira_logo-square.png" alt="Yukihira logo" width="70" height="70">
        <h1 class="sr-only">Yukihira</h1>
    </a>

    <label for="nav-toggle">
        <input onchange={toggleNav} type="checkbox" id="nav-toggle" /> 
        <span></span>
        <span></span>
        <span></span>
    </label>

    <!-- before:absolute before:inset-0 before:backdrop-blur-md -->
    <nav class="flex group-[&:has(label>input[type='checkbox']:checked)]:flex md:group-[&:has(label>input[type='checkbox']:not(:checked))]:flex w-full md:w-fit absolute md:static top-full left-0 md:flex flex-col md:flex-row items-end md:items-center gap-4 text-saddle-100 tracking-wider px-4 md:px-0">
        <a href="{base}#about" style="--animation-order: 7; --fade-out-order: 4;" class="stagger-fade-in relative outline-none">About Yukihira</a>
        <a href="{base}#sushi" style="--animation-order: 8; --fade-out-order: 3;" class="stagger-fade-in relative outline-none">Sushi</a>
        <a href="{base}#contact" style="--animation-order: 9; --fade-out-order: 2;" class="stagger-fade-in relative outline-none">Contact Us</a>
        <a href="{base}#order" style="--animation-order: 10; --fade-out-order: 1;" class="stagger-fade-in relative outline-none">Order</a>
    </nav>
</header>

{@render children()}

<style lang="postcss">
    nav a.stagger-fade-in {
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

    header.group:has(label>input[type='checkbox']:checked) nav a {
        opacity: 0;
        pointer-events: all;
        animation: header-fade-in 200ms calc(150ms * var(--animation-order)) forwards;
    }

    /* header.group:has(label>input[type='checkbox']:not(:checked)) nav a {
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
    label[for="nav-toggle"] {
        @apply flex flex-col w-8 cursor-pointer space-y-1.5 md:hidden;
    }
    label[for="nav-toggle"] span {
        @apply bg-saddle-100 rounded-md h-1;
        transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    label[for="nav-toggle"] span:nth-of-type(1) {
        @apply w-1/2;
    }

    label[for="nav-toggle"] span:nth-of-type(3) {
        width: 75%;
    }

    label[for="nav-toggle"] input[type="checkbox"] {
        @apply invisible;
    }

    label[for="nav-toggle"] input[type="checkbox"]:checked ~ span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotateZ(45deg) translate(5px, 0px);
    }

    label[for="nav-toggle"] input[type="checkbox"]:checked ~ span:nth-of-type(2) {
        transform-origin: top;
        transform: rotateZ(-45deg);
    }

    label[for="nav-toggle"] input[type="checkbox"]:checked ~ span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(15px, -5px) rotateZ(45deg);
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
