这是一个简单的requireJS例子

简单的架构了如何使用requireJS

首页引入require

<script data-main="./js/main" src="./js/require.js"></script>

data-main 指向配置文件
src指向require

之后引入
<script src="./js/index.js"></script>

index.js 为页面级JS
内部对格式是有要求的


require(['jquery'],function ($) {


})

为页面级requireJS的标准页面级写法

其中[]里面是配置里paths的KEY值  后面接着的function($) 的为 自定义的初始化

但是 插件写法需要注意

具体参考public.js  结构