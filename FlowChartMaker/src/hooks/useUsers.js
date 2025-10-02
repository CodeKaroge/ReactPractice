import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api';

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 60000,
        cacheTime: 300000,
        refetchOnWindowFocus: true,
    });
};
