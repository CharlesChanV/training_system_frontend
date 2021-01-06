import request from '@/utils/request'

/**
 * 添加新闻
 * @param {*} data
 */
export async function saveNews(data) {
  return request({
    url: '/news/saveNews',
    method: 'post',
    data,
  })
}
/**
 * 修改新闻状态
 * @param {*} data
 */
export async function changeReleaseNews(params) {
  return request({
    url: '/news/releaseNews',
    method: 'get',
    params,
  })
}
/**
 * 查询新闻列表
 * @param {*} data
 */
export async function getAllNews(params) {
  return request({
    url: '/news/getAllNews',
    method: 'get',
    params,
  })
}
// /**
//  * 修改新闻
//  * @param {*} data
//  */
// export async function updateNews(data) {
//   return request({
//     url: '/news/updateNews',
//     method: 'post',
//     data,
//   })
// }
