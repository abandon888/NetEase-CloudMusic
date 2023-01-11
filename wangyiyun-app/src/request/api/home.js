import service from ".."
//获取轮播图
export function getBanner () {
  return service({
    method: "get",
    url: "/banner?type=2"
  })
}
//获取推荐歌单
export function getPersonalized () {
  return service({
    method: "get",
    url: "/personalized?limit=8"
  })
}