"use client";
import { useForm } from 'react-hook-form';
interface FormValues {
    email: string;
}
export default function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-Mail</label>
            <input
                type="text"
                id="email"
                {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <button type="submit">Invite</button>
        </form>
    );
}