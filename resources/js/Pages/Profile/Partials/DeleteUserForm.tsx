import { useRef, useState, FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Deletar Conta</h2>

                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Depois que sua conta for excluída, todos os seus dados serão excluídos permanentemente.
                </p>
            </header>

            <Button variant={'destructive'} onClick={confirmUserDeletion}>Deletar Conta</Button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                        Tem certeza de que deseja excluir sua conta?
                    </h2>

                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        Depois que sua conta for excluída, todos os seus dados serão excluídos permanentemente. Por favor digite sua senha para confirmar que deseja excluir permanentemente sua conta.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4 text-primary-foreground"
                            isFocused
                            placeholder="Digite sua Senha"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button type='button' variant={'outline'} onClick={closeModal}>Cancelar</Button>

                        <Button variant={'destructive'} className="ms-3" disabled={processing}>
                            Deletar Conta
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
