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
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl flex justify-between flex-col flex-1">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-2">
                            <ApplicationLogo className="h-12 w-auto lg:h-16 fill-secondary-foreground" />
                            <nav className="-mx-3 flex flex-1 justify-end">
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
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                                <div className="flex items-start gap-4 rounded-lg bg-secondary p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 lg:pb-10 dark:bg-secondary-foreground dark:ring-background">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:size-16">
                                        <ApplicationLogo className='fill-primary w-10 h-10' />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-primary">Base Laravel</h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Base moderna para desenvolvimento web, combinando Laravel no backend e React no frontend. Oferencendo uma estrutura sólida e moderna para criar aplicativos web responsivos e dinâmicos.
                                        </p>
                                        <p className="mt-1 text-sm/relaxed">
                                            No backend, o Laravel fornece uma estrutura MVC robusta e autenticação integrada. E no frontend, o React permite componentização, gerenciamento de estado eficiente e roteamento dinâmico. O projeto inclui ferramentas de desenvolvimento modernas, como Docker, Vite, Inertiajs, Tailwindcss, Shadcn/ui, entre outras. É altamente personalizável e escalável, adequado para uma variedade de aplicativos web.
                                        </p>
                                    </div>
                                </div>
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
