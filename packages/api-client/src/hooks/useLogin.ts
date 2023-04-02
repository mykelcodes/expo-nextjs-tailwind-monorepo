import { useMutation, useQuery } from '@tanstack/react-query'

import { api } from '../api/axios-intance'

export function useLogin() {
    return useMutation({
        mutationFn: () => api.post('token', { email: '', password: '' }).then((res) => res.data),
    })
}
