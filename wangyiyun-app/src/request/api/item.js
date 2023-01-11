import service from ".."
//获取歌单详情
export function getMusicItemList (id) {
  return service({
    method: "get",
    url: `/playlist/detail?id=${id}`
  })
}