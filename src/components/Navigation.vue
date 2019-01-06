<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="10rem">
          <div><router-link to="/">第一次学习</router-link></div>
          <div><router-link to="/elementuitree">element-ui tree学习</router-link></div>
      </el-aside>
      <el-container>
        <el-main>
            <slot></slot>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {};
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
  height: 92vh;
}

.el-main {
  height: 82vh;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
