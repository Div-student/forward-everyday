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
      <h3>github的使用</h3>
      <p>
        1、第一步 设置用户名和邮箱 （git config --global user.name "name" / git config --global user.email "xiaobo5460@163.com"）
        2、第二步 初始化本地git 文件 （git init）
        3、关联远程服务器 git remote add origin https://github.com/Div-student/forward-everyday.git
        4、日常提交三操作 git add * / git commit -m "修改***" / git push -u origin master 
        5、最后别忘记了 在设置  git 用户名和邮箱的时候一定要进入到对应的文件目录里面哦哦
        6、还有 git status 命令可以查看文件有哪些改动哦哦
      </p>
      <p style="color:red;">报错：Use equal casing. (使用唯一的写法)////这种报错一般都是使用了系统的保留关键字所引起的。。。比如在引入组件的时候组件的名字如果以h5保留的语意话的标签作为名称的话就会抱着个错误</p>
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
