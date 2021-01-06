import request from '@/utils/request'

/**
 * 培训班添加
 * @param {*} data
 */
export async function createClass(data) {
  return request({
    url: '/class/createClass',
    method: 'post',
    data,
  })
}
/**
 * 获取自身培训班
 * @param {*} data
 */
export async function getMyClass() {
  return request({
    url: '/class/getMyClass',
    method: 'post',
  })
}
