<template>
  <div class="animated zoomIn faster position-relative sjg-model">
    <div class="model-content-new position-absolute">
      <div class="position-absolute tag"></div>
      <div
        class="position-absolute close-bg cursor"
        @click="handleModel(1)"
      ></div>
      <div class="popbox">
        <div class="wview block m-auto center">
          <img
            src="../../assets/img/bg2/font.png"
            alt=""
            srcset=""
            width="100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "model",
  data() {
    return {};
  },
  methods: {
    handleModel() {
      this.$emit("handleSJGClose");
    },
  },
};
</script>
<style lang="scss" scoped>
.sjg-model {
  width: 100%;
  height: 100%;

  .model-content-new {
    background: url("../../assets/img/bg2/sjg_bg.png") no-repeat center top;
    width: 1332px;
    height: 898px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    background-size: 100% 100%;

    .model-new-header {
      border-color: transparent;
    }
    .wview {
      width: 692px;

      padding-top: 145px;
    }
    // tag
    .tag {
      background: url("../../assets/img/bg2/sjg_tag.png") no-repeat center top;
      width: 346px;
      height: 158px;
      left: -13px;
      top: -6px;
      z-index: 1;
      background-size: 100% 100%;
    }
    // // 关闭按钮
    .close-bg {
      background: url("../../assets/img/bg2/close.png") no-repeat center top;
      width: 57px;
      height: 60px;
      right: 152px;
      top: 105px;
      z-index: 1;
      background-size: 100% 100%;
    }
  }
}
</style>