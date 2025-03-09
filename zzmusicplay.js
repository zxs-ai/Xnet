/*
 * zzmusicplay.js
 * 此脚本用于重写 api.dragonlongzhu.cn 接口返回的 JSON 数据，
 * 将歌曲名称与歌手名称拼接，将歌手替换为固定文本，
 * 并将封面修改为指定链接。
 *       obj.data.cover = "https://gitee.com/applexyz/iosgj/raw/master/diymusic/zz.jpg";
 */
let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
      // 拼接歌曲名与歌手名
      obj.data.song_name = originalName + "-" + originalSinger;
      // 固定歌手名称
      obj.data.song_singer = "z先生定制电台>>>";
      // 修改封面为指定链接
      obj.data.cover = "https://s3.bmp.ovh/imgs/2025/03/09/1fc6b8a5c62d8236.png";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
