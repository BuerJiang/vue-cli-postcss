<template>
  <div v-if="modelFlag" class="model position-fixed">
    <div class="model-content-new position-absolute">
      <div
        class="position-absolute close-bg cursor"
        @click="handleModel(1)"
      ></div>
      <!-- modeName === 'imgName'的时候 -->
      <div>
        <div class="popbox">
          <div class="wview block m-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "model",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    modeName: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      modelFlag: false,
    };
  },
  methods: {
    handleModel() {
      this.modelFlag = false;
    },
  },
};
</script>
<style lang="scss" >
.model {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
.model-content-new {
  background: url("../assets/img/popView.png") no-repeat center top;
  width: 1323px;
  height: 745px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-size: 100% 100%;

  //   头部
  .model-new-header {
    border-color: transparent;
  }
  // 关闭按钮
  .close-bg {
    background: url("../assets/img/close.png") no-repeat center top;
    width: 98px;
    height: 57px;
    right: 23px;
    top: 41px;
    z-index: 1;
    background-size: 100% 100%;
  }

  //   内容为图片的时候

  .popbox {
    .wview {
      background: url("../assets/img/wordView.png") no-repeat center top;
      margin-top: 40px;
      background-size: 100% 100%;
      width: 931px;
      height: 854px;
    }
  }
}
</style>