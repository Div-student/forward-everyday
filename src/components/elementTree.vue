<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2"
    ></el-tree>
    <el-button @click="formatData">点击格式化</el-button>
  </div>
</template>
<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },
  data() {
    return {
      filterText: "",
      data2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
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
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    formatData() {
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
      console.log("格式化楼栋的数据", formatData);
    }
  }
};
</script>