function remSize () {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth > 750) deviceWidth = 750
  if (deviceWidth < 320) deviceWidth = 320
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  //设置字体大小
  document.querySelector('body').style.fontSize = 0.32 + 'rem'
}
remSize()
window.addEventListener('resize', remSize, false)//窗口大小改变时触发
