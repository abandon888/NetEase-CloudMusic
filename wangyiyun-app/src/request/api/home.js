import service from ".."
//获取轮播图
export function getBanner () {
  return service({
    method: "get",
    url: "/banner?type=2"
  })
}