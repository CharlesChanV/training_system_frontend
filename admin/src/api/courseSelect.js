import request from '@/utils/request'

/**
 * 根据班级ID获取学生列表
 * @param {*} data
 */
export async function getAllStudentByClassId(params) {
  return request({
    url: '/courseSelect/getAllByClassId',
    method: 'get',
    params,
  })
}
/**
 * 录入学生成绩
 * @param {*} data
 */
export async function inputScore(data) {
  return request({
    url: '/courseSelect/inputScore',
    method: 'post',
    data,
  })
}
