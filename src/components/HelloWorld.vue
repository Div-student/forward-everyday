<template>
  <div class="hello">
    <div class="info">
      这是我的第一台macbook pro 我一定会好好的利用它创造出更多的价值来 <br>
      用这个mac系统还是真心的不容易呀 <br>
      我的天啦<br>
      好不容易安装好一个vue项目<br>
      接下来就是引入 <span>less</span>  和 elementUi
    </div>
      <h3>引入less文件应该注意一下几点</h3> 
      <p>
        1| sudo npm install less -S 安装less依赖 <br>
        2| 安装 less-loader css-loader vue-style-loader 三个依赖
      </p>
      <h3>引入elementUi应该注意的几点</h3>
      <p><span>参照官网</span><a href="http://element.eleme.io/#/zh-CN/component/layout">链接🔗</a></p>
      <p> <el-button type="primary" :disabled=false>click</el-button> </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .info{
    color:blue;
    span{
      color:red;
    }
  }
</style>
