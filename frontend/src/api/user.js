import http from '@/utils/http';

export const register = (data) => {
    return http({
        url: '/api/users/register',
        method: 'post',
        data
    })
}

export const login = (data) => {
    return http({
        url: '/api/users/login',
        method: 'post',
        data
    })
}