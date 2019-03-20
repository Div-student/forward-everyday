<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" v-if="dailType === '10'">
      <span>{{textMessage}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="unsure">取 消</el-button>
        <el-button type="primary" @click="ensure">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog v-if="dailType === '20'" title="收货地址" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-table v-if="dailType === '30'"  :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "MessageBox",
  data() {
    return {};
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "警告"
    },
    textMessage: {
      type: String,
      default: "确认删除吗？"
    },
    dailType: {
      type: String,
      default: "10"
    },
    form: {
      type: Object,
      default: () => {
        return {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        };
      }
    },
    formLabelWidth: {
      type: String,
      default: "120px"
    },
    tableData:{
        type:Array,
        default: () => []
    }
  },
  methods: {
    ensure() {
      this.$emit("ensure");
    },
    unsure() {
      this.$emit("unsure");
    }
  }
};
</script>
<style scoped>
</style>


