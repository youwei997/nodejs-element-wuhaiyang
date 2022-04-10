import http from '@/utils/http';

//查询列表
export const getProfileList = (data) => {
    return http({
        url: '/api/profiles',
        method: 'get',
        data
    })
}

//查询单个
export const getProfile = (data) => {
    return http({
        url: '/api/profiles/' + data,
        method: 'get',
    })
}

//添加
export const addProfile = (data) => {
    return http({
        url: '/api/profiles/add',
        method: 'post',
        data
    })
}

//更新
export const updateProfile = (data) => {
    return http({
        url: '/api/profiles/edit/' + data._id,
        method: 'post',
        data
    })
}

//删除
export const deleteProfile = (data) => {
    return http({
        url: '/api/profiles/delete/' + data,
        method: 'delete',
    })
}