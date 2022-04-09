import axios from 'axios'
import { Message, Loading } from 'element-ui';
import router from '@/router/index'

let loading;
const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
}

const closeLoading = () => {
    loading.close()
}


//请求拦截
axios.interceptors.request.use(config => {
    //开启加载
    startLoading()
    if (sessionStorage.token) {
        config.headers.Authorization = sessionStorage.token
    }
    return config
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
})


//响应拦截
axios.interceptors.response.use(res => {
    //结束加载
    closeLoading()
    const message = res.data.msg

    if (res.data.code === 1) {
        Message({
            message: message,
            type: 'error'
        })
        return Promise.reject(message)
    }
    return res.data
}, (error) => {
    closeLoading()
    // 对请求错误做些什么
    Message.error(error.message)

    const { status } = error.response
    if (status === '401') {
        Message.error('token失效,请重新登录')
        //清除token
        sessionStorage.removeItem('token')
        router.push('/login')
    }

    return Promise.reject(error);
})

export default axios