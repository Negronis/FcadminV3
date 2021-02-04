import _axios from './axios';
import common from '@/privateUtil/util'; 
let testConsole = (fn, ...args) => {
   if (process.env.NODE_ENV !== 'production') {
      return fn.apply(null, args);
   }
}
let RequestHandler = (args, data) => {
   common.destory();
   common.loading("正在请求,请稍后。", 99999);
   testConsole(console.time, "请求时间");
   testConsole(console.log, `%c○请求地址：  ${args[0]}  \n○参数为：${args[1] && JSON.stringify(args[1])}`, " border:1px solid;padding:5px;margin:1px;color:#19be6b;font-size:1em")
   data.then((res) => {
      common.destory();
      testConsole(console.log, `%c ○请求结果为：` + JSON.stringify(res), "color:#2d8cf0;border:1px solid;padding:5px;margin:1px;");
      testConsole(console.timeEnd, "请求时间");
   }).catch((err) => {
      common.destory();
      common.error("服务器错误，请重试", 1.5);
      testConsole(console.timeEnd, "请求时间");
      testConsole(console.error, "请求失败" + JSON.stringify(err));
   })
}
_axios.post = new Proxy(_axios.post, {
   apply(target, thisArg, args) {
      const res = target.apply(thisArg, args);
      RequestHandler(args, res);
      return res;
   }
})
_axios.get = new Proxy(_axios.get, {
   apply(target, thisArg, args) {
      const res = target.apply(thisArg, args);
      RequestHandler(args, res);
      return res;
   }
})