/** 消息提示框，使用element-ui的Message模块
 */
import { Message } from 'element-ui'

// 延迟时间
const delay = 1200

/** showMsg 消息提示框通用函数
 * @param   title   String  提示信息
 * @param   type    String  提示款类型
 * @param   more    Object  提示框更多设置
 * @return  null
 */
function showMsg(title, type, more) {
  let data = {
    message: title,
    type: type,
    center: true,
    duration: delay
  }
  data = Object.assign(data, more)
  Message(data)
}

/** info 提示消息
 * @param   title   String  提示消息
 * @param   more    Object  提示框更多设置
 * @return  null
 */
export function info(title, more) {
  showMsg(title, 'info', more)
}

/** warning 警告消息
 * @param   title   String  警告消息
 * @param   more    Object  提示框更多设置
 * @return  null
 */
export function warning(title, more) {
  showMsg(title, 'warning', more)
}

/** success 成功消息
 * @param   title   String  成功消息
 * @param   more    Object  提示框更多设置
 * @return  null
 */
export function success(title, more) {
  showMsg(title, 'success', more)
}

/** error 错误消息
 * @param   title   String  错误消息
 * @param   more    Object  提示框更多设置
 * @return  null
 */
export function error(title, more) {
  showMsg(title, 'error', more)
}
