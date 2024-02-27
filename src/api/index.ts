import { request } from '../utils'

const PATH = {
  API_RESUME: `https://devdaily.cn/api/resume` // 获取简历数据接口
}

/**
 * 获取简历数据
 * @param params
 * @returns
 */
export async function requestResumeData(code: string) {
  const result = await request({
    url: PATH.API_RESUME,
    method: 'POST',
    data: {
      code
    }
  })
  return result.code === 200 && result.data ? result.data : null
}
