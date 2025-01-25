import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface UseReactFormPropsType <T extends z.ZodTypeAny> {
    ZOD_SCHEMA: T
}

export default function useReactForm<T extends z.ZodTypeAny>({
    ZOD_SCHEMA
}: UseReactFormPropsType<T>) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<T>>({
        resolver: zodResolver(ZOD_SCHEMA)
    })

    return {
        register,
        handleSubmit,
        errors
    }
}

