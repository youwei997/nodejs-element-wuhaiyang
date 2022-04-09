import http from '@/utils/http';

export const register = (data) => {
    return http({
        url: '/api/users/register',
        method: 'post',
        data
    })
}