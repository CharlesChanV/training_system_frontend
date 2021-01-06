import request from '@/utils/request'

/**
 * 性别信息映射
 * @param {*} data
 */
export async function genderEnum() {
  return request({
    url: '/enum/gender',
    method: 'get',
  })
}
