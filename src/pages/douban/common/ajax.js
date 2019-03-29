// import axios from 'axios'
import originJsonp  from 'jsonp'

let BaseUrl = "https://api.douban.com/v2/movie"
export function jsonp(url,data,option){
    BaseUrl += url
    BaseUrl += (BaseUrl.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve, reject) => {
        originJsonp(BaseUrl, option, (err, data) => {
            if (!err) {
                resolve(data)
                BaseUrl = "https://api.douban.com/v2/movie"
            }else {
                reject(err)
                BaseUrl = "https://api.douban.com/v2/movie"
            }
        })
    })   
}
function param(data) {
    let url = '';
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : '';
        url += '&' + k + '=' + encodeURIComponent(value);
    }
    return url ? url.substring(1) : '';
}