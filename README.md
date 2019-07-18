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


#### 转换
- 缩放 scale
- 位移 translate
- 旋转 rotate
- 倾斜 skew
以上四种转换方式是比较特殊，起始他们都是matrix矩阵,元素添加动画和移动以后层级会提高

#### 动画速度
-ease 先块后慢 最后非常慢
-linear 匀速
-ease-in 速度越来越快
-ease-out 速度越来越慢
-ease-in-out 速度先快后慢


####3D转换 translate3d rotate3d
2d转换和3d区别:
1,多了一个参数表示3d
2，在移动端使用3d转换可以优化性能(如果设备有3d加速引擎GPU 可以调高性能2d转换1是无法调用GPU)


