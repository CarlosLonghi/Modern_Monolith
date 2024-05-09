import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-primary text-secondary-foreground focus:border-primary/50 '
                    : 'border-transparent text-muted-foreground focus:text-primary-foreground hover:text-primary-foreground ') +
                className
            }
        >
            {children}
        </Link>
    );
}
