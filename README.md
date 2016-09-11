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