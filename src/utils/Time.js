/**
 * 格式化时间
 * @param {String} str
 * @returns 格式化后的时间
 */
export const TimeData = (str) => {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}

/*
*格式化时间模块
*/
// const formatData = function (format) {
//   let args = {
//     'M+': this.getMonth() + 1,
//     'd+': this.getDate(),
//     'h+': this.getHours(),
//     'm+': this.getMinutes(),
//     's+': this.getSeconds(),
//     'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
//     'S': this.getMilliseconds()
//   }
//   if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
//   for (let i in args) {
//     let n = args[i]
//     if (new RegExp('(' + i + ')').test(format)) { format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? n : ('00' + n).substr(('' + n).length)) }
//   }
//   return format
// }
