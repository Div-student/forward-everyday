<template>
  <div>
    <h1>利用弹性布局实现四个小方块分别布局到四个角落</h1>
    <ul class="wrapBox">
      <div>
        <li>1</li>
        <li>2</li>
      </div>
      <div>
        <li>3</li>
        <li>4</li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "displayFlex",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 200px;
  height: 200px;
  background-color: wheat;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  li {
    width: 30px;
    height: 30px;
    background-color: red;
  }
  div{
    display:flex;
    justify-content: space-between;
  }
}
</style>


