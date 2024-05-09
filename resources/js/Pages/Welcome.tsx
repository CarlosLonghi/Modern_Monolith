import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/Components/ui/button';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-zinc-50 text-secondary-foreground dark:bg-background dark:text-primary">
                <img id="background" className="absolute -left-20 top-0 max-w-[877px] max-h-screen" src="https://laravel.com/assets/img/welcome/background.svg" />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-primary selection:text-secondary-foreground">
                    <div className="relative w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl flex justify-between flex-col flex-1">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-2">
                            <ApplicationLogo className="h-12 w-auto lg:h-16 fill-secondary-foreground" />
                            <nav className="flex flex-1 justify-end">
                                {auth.user ? (
                                    <Button asChild>
                                        <Link
                                            href={route('dashboard')}
                                        >
                                            Dashboard
                                        </Link>
                                    </Button>
                                ) : (
                                    <div className='space-x-4'>
                                        <Button asChild>
                                            <Link
                                                href={route('login')}
                                            >
                                                Entrar
                                            </Link>
                                        </Button>

                                        <Button variant={'ghost'} asChild>
                                            <Link
                                                href={route('register')}
                                            >
                                                Cadastrar
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-y-6 grid-cols-1 lg:grid-cols-2 lg:gap-8">

                                <article className="flex items-start gap-4 rounded-lg bg-card-foreground/80 p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.10)] ring-1 lg:pb-10 dark:bg-card-foreground/90 dark:ring-card">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:size-16">
                                        <ApplicationLogo className='fill-primary w-10 h-10' />
                                    </div>

                                    <div className="pt-3 sm:pt-5 text-secondary dark:text-primary">
                                        <h2 className="text-xl font-semibold text-primary">Base Laravel</h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Base moderna para desenvolvimento web, combinando Laravel no backend e React no frontend. Oferencendo uma estrutura sólida e moderna para criar aplicativos web responsivos e dinâmicos.
                                        </p>
                                        <p className="mt-2 text-sm/relaxed">
                                            No backend, o Laravel fornece uma estrutura MVC robusta e autenticação integrada. E no frontend, o React permite componentização, gerenciamento de estado eficiente e roteamento dinâmico.
                                        </p>
                                        <p className="mt-2 text-sm/relaxed">
                                            O projeto inclui ferramentas de desenvolvimento modernas, como Docker, Vite, Inertiajs, Tailwindcss, Shadcn/ui, entre outras. É altamente personalizável e escalável, adequado para uma variedade de aplicativos web.
                                        </p>
                                    </div>
                                </article>

                                <article className="flex flex-col items-start gap-3 rounded-lg bg-card-foreground/80 p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.10)] ring-1 lg:pb-10 dark:bg-card-foreground/90 dark:ring-card">
                                    <a className="group transition ease-in-out hover:brightness-110" href="https://inertiajs.com/" target='_blank'>
                                        <svg className="block fill-current text-primary w-40 group-hover:fill-primary" viewBox="0 0 275.3 50.5">
                                            <path d="M231.2 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path>
                                            <path d="M258.1 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path>
                                            <path d="M6 15.3h10.3l-6 34.2H0l6-34.2zm.6-9.1C7.2 2.9 10.3 0 13.7 0s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.6-3-5.1-6.2zM54.3 28.5l-3.7 21H40.4L43.8 30c.8-4.4-1.6-6.2-4.9-6.2-3.4 0-6.5 2-7.5 6.6L28 49.5H17.8l6-34.2h10.3l-.5 3.2c2.3-2.6 6.2-4.2 10.1-4.2 6.9.1 12.2 5.1 10.6 14.2zM94.5 32.4c-.1.8-.5 2.7-1.1 4.1H68.9c.6 3.8 3.8 4.8 7 4.8 2.9 0 5.2-.8 7.2-2.7l7.2 5.9c-4 4-8.7 6-15 6-11.8 0-18-8.5-16.3-18.7a20.7 20.7 0 0 1 20.5-17.4c9.8 0 16.9 7.6 15 18zm-9.7-3.7c-.3-3.8-3-5.3-6.2-5.3a8.9 8.9 0 0 0-8.3 5.3h14.5zM123.9 14.6l-2 11.6c-4-.6-10.5.8-11.7 7.8l.1-.4-2.8 15.9H97.3l6-34.2h10.3l-1.1 6.2c2.1-4.7 6.6-6.9 11.4-6.9zM137.8 37.3c-.5 3.1 2 3.3 6.6 2.9l-1.6 9.3c-12.3 1.4-16.9-2.7-15.2-12.2l2.1-12.1h-5.5l1.8-9.9h5.4l1.2-6.5 10.8-3.1-1.7 9.6h7.1l-1.8 9.9h-7l-2.2 12.1zM155.3 15.3h10.3l-6 34.2h-10.3l6-34.2zm.6-9.1c.5-3.3 3.7-6.2 7.1-6.2s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.7-3-5.1-6.2zM208.1 15.3l-6 34.2h-10.3l.4-2.3a15.5 15.5 0 0 1-10.3 3.3c-11.1 0-15.3-9.6-13.5-18.9 1.6-8.8 8.6-17.2 19.2-17.2 4.5 0 7.7 1.8 9.6 4.6l.6-3.6h10.3zm-13.2 17.2c.9-5.2-1.9-8.4-6.6-8.4a9.5 9.5 0 0 0-9.5 8.3c-.9 5.1 1.8 8.3 6.6 8.3 4.6.1 8.6-3.1 9.5-8.2z"></path>
                                        </svg>
                                        <svg className="mt-2 block fill-current text-secondary w-40" viewBox="0 0 328.3 16">
                                            <path d="M11.1 2.2H6.6v13.5h-2V2.2H0V.3h11.1v1.9zM29.1.3v15.4h-2V8.8h-7.5v6.9h-2V.3h2v6.5h7.5V.3h2zM46 13.8v1.9h-9.2V.3h9.1v1.9h-7V7h6.5v1.9h-6.5v4.9H46zM77.2 15.7h-2v-12l-5 8.4h-.3l-5-8.4v12h-2V.3h2.3L70 8.4 74.9.3h2.3v15.4zM84 8a8 8 0 0 1 8-8c4.5 0 8 3.5 8 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8zm13.9 0c0-3.4-2.6-6-5.9-6a5.8 5.8 0 0 0-5.9 6c0 3.4 2.6 6 5.9 6 3.4 0 5.9-2.6 5.9-6zM120.2 8c0 4.3-3.1 7.7-7.3 7.7h-6V.3h6c4.2 0 7.3 3.4 7.3 7.7zm-2 0c0-3.3-2.2-5.8-5.3-5.8h-4v11.5h4c3.1.1 5.3-2.5 5.3-5.7zM136.2 13.8v1.9H127V.3h9.1v1.9h-7V7h6.5v1.9h-6.5v4.9h7.1zM148.8 9.8h-3.6v5.9h-2V.3h6.2c2.6 0 4.8 2.1 4.8 4.8 0 2-1.3 3.8-3.2 4.5l3.6 6.2h-2.3l-3.5-6zm-3.6-1.9h4.1c1.5 0 2.8-1.3 2.8-2.9 0-1.6-1.2-2.9-2.8-2.9h-4.1v5.8zM172.6.3v15.4H171l-8-11.5v11.5h-2V.3h1.7l7.9 11.5V.3h2zM204.6 15.7h-2v-12l-5 8.4h-.3l-5-8.4v12h-2V.3h2.3l4.9 8.1 4.9-8.1h2.3v15.4zM211.5 8a8 8 0 0 1 8-8c4.5 0 8 3.5 8 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8zm13.9 0c0-3.4-2.6-6-5.9-6a5.8 5.8 0 0 0-5.9 6c0 3.4 2.6 6 5.9 6 3.3 0 5.9-2.6 5.9-6zM245.9.3v15.4h-1.6l-7.9-11.5v11.5h-2V.3h1.7l7.9 11.5V.3h1.9zM252.8 8a8 8 0 0 1 8-8c4.5 0 8 3.5 8 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8zm13.9 0c0-3.4-2.6-6-5.9-6a5.8 5.8 0 0 0-5.9 6c0 3.4 2.6 6 5.9 6 3.3 0 5.9-2.6 5.9-6zM284.3 13.8v1.9h-8.7V.3h2v13.5h6.7zM292.8.3v15.4h-2V.3h2zM310.3 2.2h-4.6v13.5h-2V2.2h-4.5V.3h11.1v1.9zM328.3.3v15.4h-2V8.8h-7.5v6.9h-2V.3h2v6.5h7.5V.3h2z"></path>
                                        </svg>
                                    </a>
                                    
                                    <div className="text-secondary dark:text-primary ml-16">
                                        <p className="mt-4 text-sm/relaxed">
                                            Inertia é uma nova abordagem para construir aplicativos web clássicos baseados em servidor. Nós o chamamos de monólito moderno.
                                        </p>
                                        <p className="mt-4 text-sm/relaxed">
                                            Permite que você crie aplicativos de página única totalmente renderizados no lado do cliente, sem a complexidade que acompanha os SPAs modernos. Isso é feito aproveitando os padrões existentes do lado do servidor que você já adora.
                                        </p>
                                        <p className="mt-4 text-sm/relaxed">
                                            Não possui roteamento do lado do cliente nem requer uma API. Basta criar controladores e visualizações de página como você sempre fez! O Inertia funciona muito bem com qualquer estrutura de back-end, mas é ajustada para o Laravel .
                                        </p>
                                    </div>

                                </article>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-primary-foreground/60">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
