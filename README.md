## 购物车的宣传页(基于HTML5和CSS3)


#### 全屏切换效果
> 通过鼠标的滚轮 切换全屏页面

- 使用fullpage来完成

- 使用动画(JS实现动画，css3显示动画)
  + 一个是帧动画，一个是补间动画(包括过渡动画和animation动画)
  + 什么是帧动画：使用定时器每隔一段时间，来更改当前元素的状态
  + 什么是补间动画：过渡动画(加过渡,只要状态发生改变产生动画，设置起始结束状态，运动的时候浏览器自动加入最合适的运动方式)
  + animation动画(多个节点控制) 性能会更好
  + 在支持H5C3的浏览器尽可能使用css3动画(移动端开发)
  + transition animation
  + transition 组合写法(transition: all 1s linear 2s) 所有的运动在1s内匀速完成，延迟1s
    拆分写法 transition-property transition-duration transition-timing-function  transition-delay


## CSS3