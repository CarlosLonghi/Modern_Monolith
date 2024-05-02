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
                                                Log in
                                            </Link>
                                        </Button>

                                        <Button variant={'ghost'} asChild>
                                            <Link
                                                href={route('register')}
                                            >
                                                Register
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                                <div className="flex items-start gap-4 rounded-lg bg-secondary p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-secondary-foreground dark:ring-background">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        teste
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">Vibrant Ecosystem</h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis inventore odio soluta sint recusandae voluptatibus non reprehenderit, eos, doloribus id ipsum sit optio consectetur tenetur sequi vero aliquid accusamus nobis placeat. Dolores praesentium voluptatem repudiandae enim temporibus doloremque ipsa, cupiditate, sit nihil nostrum pariatur molestias vel error placeat laboriosam nobis itaque provident excepturi voluptatibus perspiciatis iure esse ut possimus. Iure, nisi nostrum neque vero tempore eos perferendis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
