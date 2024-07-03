<script lang="ts">
    import { enhance } from "$app/forms"
    import { base } from "$app/paths"
    import type { SubmitFunction } from "@sveltejs/kit"

    function handleSubmit(event: Parameters<SubmitFunction>[0]): ReturnType<SubmitFunction> {
        event.cancel()
        return () => {

        }
    }
</script>

<main>
    <section class="intro h-dvh relative before:absolute before:inset-0 before:bg-slate-800/70">
        <div class="absolute inset-0 text-center content-center">
            <h2 class="intro-logo text-saddle-100 text-6xl tracking-wider">
                <span class="relative">
                    <span style="--animation-order: 6;" class="stagger-fade">Yu</span><span style="--animation-order: 1;" class="stagger-fade text-sm absolute bottom-full left-1/2 -translate-x-1/2">ゆ</span>
                </span><span class="relative">
                    <span style="--animation-order: 6;" class="stagger-fade">ki</span><span style="--animation-order: 2;" class="stagger-fade text-sm absolute bottom-full left-1/2 -translate-x-1/2">き</span>
                </span><span class="relative">
                    <span style="--animation-order: 6;" class="stagger-fade">hi</span><span style="--animation-order: 3;" class="stagger-fade text-sm absolute bottom-full left-1/2 -translate-x-1/2">ひ</span>
                </span><span class="relative">
                    <span style="--animation-order: 6;" class="stagger-fade">ra</span><span style="--animation-order: 4;" class="stagger-fade text-sm absolute bottom-full left-1/2 -translate-x-1/2">ら</span>
                </span>
            </h2>

            <a href="#about" style="--animation-order: 12;" class="absolute left-1/2 -translate-x-1/2 bottom-5 stagger-fade text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-20 h-20 animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
                <span class="sr-only">Enter sushiya</span>
            </a>
        </div>
        <img src="./img/sushi_2.jpg" alt="Yukihira sushi" width="1000" height="667" class="w-full h-dvh object-cover overflow-hidden">
    </section>
    <section id="about" class="h-dvh content-center bg-[url('/img/pagoda.png')] bg-left-bottom bg-no-repeat">
        <div class="w-4/6 h-4/6 relative left-1/2 -translate-x-1/2">
            <div class="about-card-bg w-full h-full absolute -top-10 md:-top-5 bg-saddle-300 rounded-md shadow-md"></div>
            <div class="about-card-img w-full h-full absolute top-10 md:top-5 -right-10 md:-right-20 shadow-md">
                <div class="w-full h-full relative overflow-hidden rounded-md before:absolute before:inset-0 before:bg-slate-800/70">
                    <img src="{base}/img/sushi_3.jpg" alt="Sushi" width="1500" height="994" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="about-card-text w-full md:w-1/2 h-full md:h-5/6 absolute md:top-12 -left-10 md:-left-20 text-center content-center rounded-md shadow-md backdrop-blur-sm bg-saddle-800/90 space-y-6 p-4">
                <h2 class="text-3xl text-saddle-100 tracking-wider">
                    <span class="border-t-2 border-b-2 border-saddle-100">Yukihira</span>
                </h2>
                <div class="flex justify-center">
                    <p class="max-w-[40ch] text-saddle-100">A classical sushiya restaurant at the heart of the city – gastronomical evenings “Sushi Party” with special menu.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="sushi" class="md:flex md:items-center md:justify-center md:h-[150dvh] bg-[url('/img/cooking-features.jpg')] bg-[#5e4138] bg-center bg-contain bg-no-repeat py-20">
        <div class="md:w-9/12 md:relative w-full h-full flex flex-col-reverse items-center">
            <div class="sushi-card-img w-3/6 md:w-fit md:absolute md:top-20 md:-left-10 md:bg-saddle-900 rounded-md md:shadow-md">
                <img src="{base}/img/sushi_4.png" alt="Sushi" width="475" height="371" class="object-contain">
            </div>
            <div class="sushi-card-live-food max-w-[40ch] md:max-w-full md:w-3/6 md:h-1/2 md:absolute md:top-0 md:right-10 lg:right-20 content-center md:bg-[url('/img/live-food.jpg')] bg-cover bg-no-repeat rounded-md md:shadow-md py-4">
                <div class="px-4 space-y-6">
                    <h2 class="relative text-3xl text-saddle-100 tracking-wider py-6 after:absolute after:bottom-0 after:left-0 after:w-10 md:after:w-20 after:border-b-4 after:border-saddle-400">
                        Live food bar
                    </h2>
                    <p class="text-saddle-100">Yukihira is first to introduce the unique acquarium system designed based on the owner's personal project.</p>
                </div>
            </div>
            <div class="sushi-card-cooking-traditions max-w-[40ch] md:max-w-full md:w-3/6 md:h-1/2 md:absolute md:-bottom-0 md:left-0 content-center md:bg-[url('/img/cooking-traditions.jpg')] bg-cover bg-no-repeat md:rounded-md md:shadow-md py-4">
                <div class="px-4 space-y-6">
                    <h2 class="relative text-3xl text-saddle-100 tracking-wider py-6 after:absolute after:bottom-0 after:left-0 after:w-10 md:after:w-20 after:border-b-4 after:border-saddle-400">
                        Cooking traditions
                    </h2>
                    <p class="text-saddle-100">The secret of success of Japanese cuisine opens with best quality ingredients, beautiful courses presentation and respectful attitude both to the product and to the work with it.</p>
                </div>
            </div>
            <div class="sushi-card-quote hidden md:block max-w-[40ch] md:max-w-full md:w-3/6 md:h-1/2 md:absolute md:bottom-0 lg:-bottom-10 md:right-[0rem] lg:right-0 xl:right-10 content-center">
                <div class="w-full flex justify-center">
                    <p class="max-w-[5ch] text-2xl text-saddle-100 tracking-widest">Japanese traditions and excellence of taste</p>
                </div>
            </div>
        </div>
    </section>
    <!-- bg-[url('img/jean-de-lessard-izakaya-kinoya-restaurant-montreal-designboom.jpg')] bg-cover bg-no-repeat bg-bottom -->
    <section id="contact" class="md:flex md:items-center md:justify-center h-dvh py-20">
        <div class="w-full h-full flex flex-col items-center">
            <div class="w-[40ch] md:w-[60ch] md:max-w-full md:rounded-md md:shadow-md p-4 space-y-6">
                <h2 class="relative text-3xl text-saddle-100 tracking-wider py-6 after:absolute after:bottom-0 after:left-0 after:w-10 md:after:w-20 after:border-b-4 after:border-saddle-400">
                    Contact Us
                </h2>
                <form use:enhance={handleSubmit} method="post" class="space-y-4">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="space-y-2">
                            <label for="name" class="block text-sm font-medium text-saddle-100">Name</label>
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-saddle-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="name" class="bg-saddle-900 border border-saddle-100 text-saddle-100 text-sm rounded-md outline-none ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 block w-full ps-10 p-2.5 placeholder-saddle-100" placeholder="The Rock" autocomplete="name">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="block text-sm font-medium text-saddle-100">Email</label>
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-saddle-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="email" class="bg-saddle-900 border border-saddle-100 text-saddle-100 text-sm rounded-md outline-none ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 block w-full ps-10 p-2.5 placeholder-saddle-100" placeholder="rock@gmail.com" autocomplete="email">
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-saddle-100 bg-saddle-900 rounded-md border border-gray-300 placeholder:text-saddle-100 outline-none ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500" placeholder="Write your thoughts here..."></textarea>
                    </div>

                    <button type="submit" class="text-saddle-900 bg-saddle-100 hover:bg-saddle-300 ring-2 ring-transparent ring-offset-2 ring-offset-transparent focus:ring-offset-saddle-900 focus:ring-saddle-500 focus:border-saddle-500 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2">Send</button>
                </form>
            </div>
        </div>
    </section>
    <footer class="text-saddle-100 text-xs px-6 md:px-20 py-6 space-y-6">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-4">
            <a href="{base}/" class="logo flex items-center gap-2 outline-none">
                <img src="{base}/img/yukihira_logo-square.png" alt="Yukihira logo" width="100" height="100">
                <h1 class="relative text-saddle-100 text-4xl tracking-wider">Yukihira</h1>
            </a>

            <div class="space-x-2">
                <button type="button" class="bg-saddle-900 rounded-md border outline-none hover:bg-[#0866FF] focus:bg-[#0866FF] p-1.5">
                    <svg class="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                </button>
                <button type="button" class="bg-saddle-900 rounded-md border outline-none hover:bg-[#000000] focus:bg-[#000000] p-1.5">
                    <svg class="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </button>
                <button type="button" class="bg-saddle-900 rounded-md border outline-none hover:bg-[#E4405F] focus:bg-[#E4405F] p-1.5">
                    <svg class="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path fill="currentColor" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                </button>
                <button type="button" class="bg-saddle-900 rounded-md border outline-none hover:bg-[#FF0000] focus:bg-[#FF0000] p-1.5">
                    <svg class="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </button>
            </div>
        </div>
        <span class="block text-center md:text-right">&copy; {new Date().getFullYear()} Yukihira</span>
    </footer>
</main>

<style lang="postcss">
    main > :not([hidden]) ~ :not([hidden]) {
        border-top: 4px solid theme(colors.saddle.100);
    }

    .stagger-fade {
        opacity: 0;
        transform: translate(-50%, -1rem);
        animation: logo-fade-in 200ms calc(150ms * var(--animation-order)) forwards;
    }

    @keyframes logo-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 0%);
        }
    }

    #contact {
        background: linear-gradient(to right, rgb(15 23 42 / 0.7) 0%, rgb(15 23 42 / 0.7) 100%),
            url('/img/jean-de-lessard-izakaya-kinoya-restaurant-montreal-designboom.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    /**
     * https://www.youtube.com/watch?v=Qj0Qx8HpNUo
     * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
     */
    .about-card-bg,
    .sushi-card-img,
    .sushi-card-quote {
        animation-timeline: view();
        animation-name: slide-from-bottom;
        animation-fill-mode: both;
        animation-duration: 1ms;
    }

    @keyframes slide-from-bottom {
        from {
            translate: 0rem 10rem;
        }

        50% {
            translate: 0rem;
        }

        to {
            translate: 0rem;
        }
    }

    .about-card-img,
    .sushi-card-live-food {
        animation-timeline: view();
        animation-name: slide-from-right;
        animation-fill-mode: both;
        animation-duration: 1ms;
    }

    @keyframes slide-from-right {
        from {
            translate: 10rem;
        }

        50% {
            translate: 0rem;
        }

        to {
            translate: 0rem;
        }
    }

    .about-card-text,
    .sushi-card-cooking-traditions {
        animation-timeline: view();
        animation-name: slide-from-left;
        animation-fill-mode: both;
        animation-duration: 1ms;
    }

    @keyframes slide-from-left {
        from {
            translate: -10rem;
        }

        50% {
            translate: 0rem;
        }

        to {
            translate: 0rem;
        }
    }
</style>
