import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { GraphicLineChart } from '@/Components/GraphicLineChart';
import { GraphicPieChart } from '@/Components/GraphicPieChart';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-zinc-800 dark:text-zinc-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden space-y-4 shadow-sm">
                        <h2 className="text-secondary dark:text-primary-foreground">
                            Bem vindo ao painel!
                        </h2>

                        <div className="grid grid-cols-9 gap-4">
                            <GraphicLineChart />
                            <GraphicPieChart />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
