<template>
  <div class="animated zoomIn faster position-relative b-model">
    <div class="model-content-new position-absolute">
      <div
        class="position-absolute close-bg cursor"
        @click="handleModel(1)"
      ></div>
      <!-- 内容区域 -->
      <div class="fl-bg position-relative">
        <div class="position-absolute tag"></div>
        <div class="fl-cont position-absolute text-align-right">
          <img
            src="../../assets/img/bg2/login_model_cont.png"
            alt=""
            srcset=""
            width="100%"
          />
        </div>
      </div>
      <div class="fr-bg position-absolute">
        <img
          src="../../assets/img/bg2/js_active.png"
          alt=""
          v-if="iRegister >= 300000"
        />
        <img src="../../assets/img/bg2/js.png" alt="" v-else />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "model",
  props: ["register"],
  data() {
    return {
      iRegister: this.register,
    };
  },
  methods: {
    handleModel() {
      this.$emit("handleLoginClose");
    },
  },
};
</script>
<style lang="scss" scoped>
.b-model {
  width: 100%;
  height: 100%;
  .model-content-new {
    width: 1608px;
    height: 1058px;
    left: 50%;
    top: 50%;
    transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));

    overflow: hidden;
    .fl-bg {
      width: 1333px;
      height: 899px;
      background: url("../../assets/img/bg2/login_bg.png") no-repeat left top;
      background-size: 100% 100%;
      z-index: 1;
      margin-top: 93px;
      .tag {
        background: url("../../assets/img/bg2/login_tag.png") no-repeat center
          top;
        width: 363px;
        height: 168px;
        top: 10px;
        left: -23px;
        z-index: 1;
        background-size: 100% 100%;
      }
      .fl-cont {
        height: 639px;
        width: 799px;
        top: 130px;
        left: 181px;
        img {
          width: 100%;
        }
      }
    }
    .fr-bg {
      z-index: 3;
      width: 736px;
      right: 0;
      top: 2%;
      img {
        width: 96%;
      }
    }
  }

  // // 关闭按钮
  .close-bg {
    background: url("../../assets/img/bg2/close.png") no-repeat center top;
    width: 57px;
    height: 60px;
    right: 169px;
    top: 102px;
    z-index: 999;
    background-size: 100% 100%;
  }
}
</style>