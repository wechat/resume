const ERR_INFO = '请求失败，请稍后重试'

/**
 * 发起请求
 * @param url 请求url
 * @param data 请求参数
 * @returns
 */
export function request(options: IRequestOptions): Promise<ObjectType> {
  return new Promise((resolve, reject) => {
    const { url, method, data } = options
    if (window.fetch) {
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          reject(ERR_INFO)
        })
        .then((data) => {
          resolve(data)
        })
    } else {
      const xhr: XMLHttpRequest = new XMLHttpRequest()
      xhr.responseType = 'json'
      xhr.open(method, url, true)
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.onload = (e: ObjectType) => {
        const { status, response } = e.target
        if (status >= 200 && status < 400) {
          resolve(response)
        } else {
          reject(ERR_INFO)
        }
      }
      xhr.send(JSON.stringify(data))
    }
  })
}
