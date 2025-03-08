let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
      
      obj.data.song_name = originalName + "-" + originalSinger;
      // 将歌手改为固定文本“点击播放—>”
      obj.data.song_singer = "z先生定制电台>>>";
      // 修改封面为指定链接
      obj.data.cover = "https://github.com/zxs-ai/Xnet/blob/main/pic/zxs-pic.png";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
