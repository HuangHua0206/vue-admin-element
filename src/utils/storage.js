/** setItem 设置本地缓存
 * @param   key     String    储存名
 * @param   value   any       储存值
 * @param   save    Boolean   true表示用localStorage储存，false表示用sessionStorage
 * @return  null
 */
export function setItem(key, value, save) {
  if (typeof (value) === 'undefined') {
    return false
  }
    value = JSON.stringify(value)
    if (save) {
      value && window.localStorage.setItem(key, value)
    } else {
      value && window.sessionStorage.setItem(key, value)
    }
}

/** getItem 获取本地缓存
 * @param   key     String    储存名
 * @return  value   any       获取的储存值
 */
export function getItem(key) {
    let value
    if (window.sessionStorage.getItem(key)) {
      value = JSON.parse(window.sessionStorage.getItem(key))
      return value
    }
    value = JSON.parse(window.localStorage.getItem(key))
    return value
}

/** removeItem 移除本地缓存
 * @param   key     String    储存名
 * @return  null
 */
export function removeItem(key) {
    window.sessionStorage.removeItem(key)
    window.localStorage.removeItem(key)
}
