import http from '@/utils/http';

export const getProfileList = (data) => {
    return http({
        url: '/api/profiles/',
        method: 'get',
        data
    })
}