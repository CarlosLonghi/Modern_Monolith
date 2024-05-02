import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col gap-6 sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-background to-primary/15">
            <Link href="/">
                <ApplicationLogo className="w-auto h-20 fill-current" />
            </Link>

            <div className="w-full sm:max-w-md px-6 py-4 bg-card/20 shadow-md overflow-hidden sm:rounded-lg outline outline-primary-foreground outline-1 outline-offset-2">
                {children}
            </div>
        </div>
    );
}
