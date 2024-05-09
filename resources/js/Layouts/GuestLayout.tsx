import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col gap-6 justify-center items-center px-4 sm:px-6 bg-gradient-to-br from-background to-primary/15">
            <Link href="/">
                <ApplicationLogo className="w-auto h-20 fill-current" />
            </Link>

            <div className="w-full max-w-md px-4 sm:px-6 py-4 bg-card/20 shadow-md overflow-hidden rounded-lg outline outline-primary-foreground outline-1 outline-offset-2">
                {children}
            </div>
        </div>
    );
}
