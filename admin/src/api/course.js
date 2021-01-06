import request from '@/utils/request'

/**
 * 添加课程信息
 * @param {*} data
 */
export async function createCourse(data) {
  return request({
    url: '/course/createCourse',
    method: 'post',
    data,
  })
}
/**
 * 更新课程信息
 * @param {*} data
 */
export async function updateCourse(data) {
  return request({
    url: '/course/updateCourse',
    method: 'post',
    data,
  })
}
/**
 * 删除课程信息
 * @param {*} data
 */
export async function deleteCourse(courseId) {
  return request({
    url: '/course/deleteCourse',
    method: 'get',
    params: {
      courseId,
    },
  })
}
/**
 * 开放/关闭选课课程信息
 * @param {*} data
 */
export async function closeCourseByCourseId(courseId, open) {
  return request({
    url: '/course/closeCourseByCourseId',
    method: 'post',
    params: {
      courseId,
      open,
    },
  })
}
