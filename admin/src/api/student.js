import request from '@/utils/request'

/**
 * 获取开课的课程
 * @param {*} data
 */
export async function getAllOpenCourse(params) {
  return request({
    url: '/student/getAllOpenCourse',
    method: 'get',
    params,
  })
}
/**
 * 获取课程的培训班
 * @param {*} data
 */
export async function getAllClassesByCourseId(courseId) {
  return request({
    url: `/student/getAllClassesByCourseId/${courseId}`,
    method: 'get',
  })
}
