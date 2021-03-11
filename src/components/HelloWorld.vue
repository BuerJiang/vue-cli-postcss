<template>
  <div class="h-100 m-0 p-0">
    <div class="h-100">
        <div class="m2 area" >
          <!-- 详情 -->
          <div  class="m2-bg">
            <!-- 点击展示图片 -->
            <button class="btn" @click="handleShowModel('imgName', 2)">
              点击展示图片
            </button>
          </div>
        </div>
      
    </div>

    <!-- 组件start -->
    <Model ref="showModelChild" :modeName="isMode" />
  </div>
</template>

<script>
// 视频，图片弹出框
import Model from "./model";

export default {
  name: "Home",
  components: {
    Model
  },
  data() {
    return {
      isMode: "", // 弹出框
    };
  },
  created() {},
  mounted() {},

  computed: {},
  methods: {
    // 组件弹出框
    handleShowModel(val, num) {
      this.isMode = val;
      // 获取子组件中的值
      this.$refs.showModelChild.modelFlag = true;
    },
  },
};
</script>
<style lang="scss" >
.m2 {
  .m2-bg {
    background: url("../assets/img/page2.jpg") no-repeat;
    height: 100%;
    width: 100%;
  }
}
.area {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>