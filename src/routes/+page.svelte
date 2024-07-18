<script lang="ts">
    import { enhance } from "$app/forms"
    import { base } from "$app/paths"
    import type { SubmitFunction } from "@sveltejs/kit"

    import Footer from "$lib/components/Footer.svelte"

    function handleSubmit(event: Parameters<SubmitFunction>[0]): ReturnType<SubmitFunction> {
        event.cancel()
        return () => {

        }
    }
</script>

<svelte:head>
    <title>Sushiya | Yukihira</title>
</svelte:head>

<main>
    <section class="intro h-dvh relative before:absolute before:inset-0 before:bg-slate-800/70 transition-[height] duration-200">
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
        <img src="./img/sushi_2.jpg" alt="Yukihira sushi" width="1000" height="667" class="w-full h-full object-cover overflow-hidden">
    </section>

    <section id="about" class="h-dvh content-center bg-[url('/img/pagoda.png')] bg-left-bottom bg-no-repeat overflow-clip transition-[height] duration-200">
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

    <section id="sushi" class="md:flex md:items-center md:justify-center md:h-[150dvh] bg-[url('/img/cooking-features.jpg')] bg-[#5e4138] bg-center bg-contain bg-no-repeat py-20 overflow-clip">
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
    <section id="contact" class="md:flex md:items-center md:justify-center h-dvh py-20 transition-[height] duration-200">
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

    <Footer />
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
