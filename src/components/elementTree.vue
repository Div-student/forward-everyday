<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree
      class="filter-tree"
      :data="data4"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2"
      show-checkbox
    ></el-tree>
    <el-button @click="formatData">点击格式化</el-button>
    <MessageBox
      :dialogVisible="dialogVisible"
      :title="title1"
      :textMessage="textMessage"
      @ensure="ensure"
      @unsure="unsure"
      :dailType="dailType"
      :tableData="tableData"
    ></MessageBox>
  </div>
</template>
<script>
import MessageBox from "@/components/common/messageBox";
export default {
  watch: {
    filterText(val) {
      console.log("输入框的值", val);
      this.$refs.tree2.filter(val);
    }
  },
  data() {
    return {
      filterText: "",
      data3: [
        {
          parkId: "7",
          parkCn: "清阑珊学校",
          type: "building",
          buildings: [
            {
              buildingId: "8",
              buildingCn: "教学楼一",
              type: "building",
              floors: [
                {
                  floorId: "14",
                  floorCn: "一楼",
                  type: "building",
                  rooms: [
                    {
                      roomId: "16",
                      roomCn: "一室",
                      type: "building",
                      cameras: [
                        {
                          cameraId: "EQUIP0000006",
                          srcCameraId: "xxxS_gb_9576411010_118000",
                          cameraCn: "摄像头003",
                          type: "camera"
                        },
                        {
                          cameraId: "EQUIP0000007",
                          srcCameraId: "xxxS_gb_9576411010_118666",
                          cameraCn: "摄像头006",
                          type: "camera"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              buildingId: "12",
              buildingCn: "南门",
              type: "building",
              floors: [
                {
                  cameraId: "EQUIP000001008",
                  srcCameraId: "xxxS_gb_9576411010_118999",
                  cameraCn: "南门摄像头001",
                  type: "camera"
                },
                {
                  cameraId: "EQUIP0000897",
                  srcCameraId: "xxxS_gb_9576411010_1186780",
                  cameraCn: "南门摄像头002",
                  type: "camera"
                },
                {
                  cameraId: "EQUIP00456789",
                  srcCameraId: "xxxS_gb_9576411010_11890076",
                  cameraCn: "南门摄像头003",
                  type: "camera"
                },
                {
                  cameraId: "EQUIP0000897",
                  srcCameraId: "xxxS_gb_9576411010_1186111",
                  cameraCn: "南门摄像头004",
                  type: "camera"
                }
              ]
            },
            {
              buildingId: "13",
              buildingCn: "北门",
              type: "building",
              floors: [
                {
                  cameraId: "EQUIP000001211",
                  srcCameraId: "xxxS_gb_9576411010_111211",
                  cameraCn: "北门摄像头001",
                  type: "camera"
                },
                {
                  cameraId: "EQUIP0001222",
                  srcCameraId: "xxxS_gb_9576411010_11861222",
                  cameraCn: "北门摄像头002",
                  type: "camera"
                },
                {
                  cameraId: "EQUIP00451233",
                  srcCameraId: "xxxS_gb_9576411010_11891244",
                  cameraCn: "北门摄像头003",
                  type: "camera"
                },
                {
                  cameraId: "EQUIP0001244",
                  srcCameraId: "xxxS_gb_9576411010_1181244",
                  cameraCn: "北门摄像头004",
                  type: "camera"
                }
              ]
            },
            {
              buildingId: "2",
              buildingCn: "教学楼二",
              type: "building",
              floors: [
                {
                  floorId: "2",
                  floorCn: "二楼",
                  type: "building",
                  rooms: [
                    {
                      roomId: "21",
                      roomCn: "一室",
                      type: "building",
                      cameras: [
                        {
                          cameraId: "EQUIP00021001",
                          srcCameraId: "xxxS_gb_9576411010_121001",
                          cameraCn: "摄像头2101",
                          type: "camera"
                        },
                        {
                          cameraId: "EQUIP0021002",
                          srcCameraId: "xxxS_gb_9576411010_121002",
                          cameraCn: "摄像头2102",
                          type: "camera"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              buildingId: "08",
              buildingCn: "图书馆",
              type: "building",
              floors: [
                {
                  floorId: "0801",
                  floorCn: "一楼",
                  type: "building",
                  rooms: [
                    {
                      roomId: "0801",
                      roomCn: "一室",
                      type: "building",
                      cameras: [
                        {
                          cameraId: "EQUIP00008001",
                          srcCameraId: "xxxS_gb_9576411010_108001",
                          cameraCn: "图书馆摄像头2101",
                          type: "camera"
                        },
                        {
                          cameraId: "EQUIP0008002",
                          srcCameraId: "xxxS_gb_9576411010_108002",
                          cameraCn: "图书馆摄像头2102",
                          type: "camera"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      data4: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      dialogVisible: false,
      title1: "提示",
      textMessage: "11243432424234",
      dailType: "",
      tableData: [],
    };
  },
  methods: {
    formatData() {
      this.dialogVisible = true;
      this.dailType = '30'
      this.tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    },
    filterNode(value, data, node) {
      // debugger;
      // if (!value) return true;
      // return data.label.indexOf(value) !== -1;
      //如果共有三级菜单
      if (!value) return true;
      let if_one = data.label.indexOf(value) !== -1;
      let if_two =
        node.parent &&
        node.parent.data &&
        node.parent.data.label &&
        node.parent.data.label.indexOf(value) !== -1;
      let if_three =
        node.parent &&
        node.parent.parent &&
        node.parent.parent.data &&
        node.parent.parent.data.label &&
        node.parent.parent.data.label.indexOf(value) !== -1;
      let if_four =
        node.parent &&
        node.parent.parent &&
        node.parent.parent.data &&
        node.parent.parent.data.label &&
        node.parent.parent.parent.data.label &&
        node.parent.parent.parent.data.label.indexOf(value) !== -1;
      let result_one = false;
      let result_two = false;
      let result_three = false;
      let result_four = false;
      if (node.level === 1) {
        result_one = if_one;
      } else if (node.level === 2) {
        result_two = if_one || if_two;
      } else if (node.level === 3) {
        result_three = if_one || if_two || if_three;
      } else if (node.level === 4) {
        result_three = if_one || if_two || if_three || if_four;
      }
      return result_one || result_two || result_three || result_four;
    },
    ensure() {
      this.dialogVisible = false
      let formatData = this.data3[0].buildings.map(item => {
        if (item.type === "building") {
          if (item.floors.length > 0) {
            let floors = item.floors.map(item => {
              if (item.type === "building") {
                if (item.rooms.length > 0) {
                  let rooms = item.rooms.map(item => {
                    if (item.type === "building") {
                      if (item.cameras.length > 0) {
                        let cameras = item.cameras.map(item => {
                          return {
                            id: item.srcCameraId,
                            label: item.cameraCn,
                            type: "camera",
                            isleaf: true
                          };
                        });
                        return {
                          id: item.roomId,
                          label: item.roomCn,
                          type: "building",
                          isleaf: false,
                          children: cameras
                        };
                      } else {
                        return {
                          id: item.roomId,
                          label: item.roomCn,
                          type: "building",
                          isleaf: true
                        };
                      }
                    } else {
                      return {
                        id: item.srcCameraId,
                        label: item.cameraCn,
                        type: "camera",
                        isleaf: true
                      };
                    }
                  });
                  return {
                    id: item.floorId,
                    label: item.floorCn,
                    type: "building",
                    isleaf: false,
                    children: rooms
                  };
                } else {
                  return {
                    id: item.floorId,
                    label: item.floorCn,
                    type: "building",
                    isleaf: true
                  };
                }
              } else {
                return {
                  id: item.srcCameraId,
                  label: item.cameraCn,
                  type: "camera",
                  isleaf: true
                };
              }
            });
            return {
              id: item.buildingId,
              label: item.buildingCn,
              type: "building",
              isleaf: false,
              children: floors
            };
          } else {
            return {
              id: item.buildingId,
              label: item.buildingCn,
              type: "building",
              isleaf: true
            };
          }
        } else {
          return {
            id: item.srcCameraId,
            label: item.cameraCn,
            type: "camera",
            isleaf: true
          };
        }
      });
      this.data4 = formatData;
    },
    unsure(){
      this.dialogVisible = false;
    }
  },
  components: {
    MessageBox
  }
};
</script>