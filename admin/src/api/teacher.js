import request from '@/utils/request'

/**
 * 新增老师信息
 * @param {*} data
 */
export async function addTeacher(data) {
  return request({
    url: '/teachers/addTeacher',
    method: 'post',
    data,
  })
}
/**
 * 获取老师信息列表getAllTeacher
 * @param {*} data
 */
export async function getAllTeacher(params) {
  return request({
    url: '/teachers/getAllTeacher',
    method: 'get',
    params,
  })
}
/**
 * 编辑培训师信息
 * @param {*} data
 */
export async function updateTeacher(data) {
  return request({
    url: '/teachers/updateTeacher',
    method: 'post',
    data,
  })
}
/**
 * 删除培训师信息
 * @param {*} data
 */
export async function deleteTeacher(id) {
  return request({
    url: `/teachers/deleteTeacher/${id}`,
    method: 'post',
  })
}
