import request from '@/utils/request'
import { tokenName } from '@/config'

export async function login(params) {
  return request({
    url: '/user/login',
    method: 'post',
    params,
  })
}
// export async function login(data) {
//   return request({
//     url: '/login',
//     method: 'post',
//     data,
//   })
// }

export async function socialLogin(data) {
  return request({
    url: '/socialLogin',
    method: 'post',
    data,
  })
}

export function getUserInfo(accessToken) {
  //此处为了兼容mock.js使用data传递accessToken，如果使用mock可以走headers
  return request({
    url: '/user/userInfo',
    method: 'post',
    data: {
      [tokenName]: accessToken,
    },
  })
}
// export function getUserInfo(accessToken) {
//   //此处为了兼容mock.js使用data传递accessToken，如果使用mock可以走headers
//   return request({
//     url: '/userInfo',
//     method: 'post',
//     data: {
//       [tokenName]: accessToken,
//     },
//   })
// }

export function logout() {
  return request({
    url: '/user/logout',
    // url: '/logout',
    method: 'post',
  })
}

// export function register() {
//   return request({
//     url: '/register',
//     method: 'post',
//   })
// }
export function register(data) {
  return request({
    url: '/user/signUp',
    method: 'post',
    data,
  })
}
export function updatePassword(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data,
  })
}
