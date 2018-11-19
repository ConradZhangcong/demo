import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独倒出
export const getUserList = params => {
  return axios({
    url: '/users',
    method: 'get',
    params
  })
}

export const getUserDetail = params => {
  return axios({
    url: '/users',
    method: 'get',
    params
  })
}

export const addUser = data => {
  return axios({
    url: '/users',
    method: 'post',
    data
  })
}

// 默认全部倒出
// 根绝需要进行
export default {
  getUserList,
  getUserDetail,
  addUser
}
