<template>
  <div class="m2-cont">
    <div class="position-relative wrap1214">
      <div class="header d-flex justify-content-between">
        <div class="logo position-absolute">
          <img src="../assets/img/bg2/logo.png" alt="" />
        </div>
        <div
          class="btn-icon position-absolute d-flex align-items-center cursor"
        >
          <img
            src="../assets/img/bg2/login.png"
            alt=""
            class="btn-icon-login img-w block"
            @click="handleShow(2)"
          />
          <img
            src="../assets/img/bg2/icon-twi.png"
            alt=""
            class="btn-icon-share block"
            @click="handleShare('twi')"
          />
          <img
            src="../assets/img/bg2/icon-line.png"
            alt=""
            class="btn-icon-line block"
            @click="handleShare('line')"
          />
          <img
            src="../assets/img/bg2/icon-fb.png"
            alt=""
            class="btn-icon-fb block"
            @click="handleShare('fb')"
          />
        </div>
      </div>
      <div class="btn-Login position-absolute" @click="handleShowLogin"></div>
      <div
        class="btn-sjg position-absolute"
        @click="handleShowSJG('imgName', 2)"
      ></div>
      <div class="btn-intro position-absolute" @click="handleShowIntro"></div>
    </div>

    <!-- 世界观 -->
    <div class="model position-absolute" v-if="modelFlag">
      <sjg ref="showModelChild" @handleSJGClose="handleSJGClose" />
    </div>
    <!-- 任务介绍内容 -->
    <div class="model position-absolute" v-if="introFlag">
      <intro ref="showModelIntro" @handleIntroClose="handleIntroClose" />
    </div>
    <!-- 事前登录 -->
    <div class="model position-absolute" v-if="beforeFlag">
      <beforeLogin ref="showBeforeLogin" @handleLoginClose="handleLoginClose" />
    </div>
  </div>
  <!-- <div >
 
  
  </div> -->
</template>
<script>
// 世界观
import sjg from "./commonComponents/sjg";
// 任务介绍内容
import intro from "./commonComponents/intro";
// 事前登录
import beforeLogin from "./commonComponents/beforeLogin";
export default {
  components: {
    sjg,
    intro,
    beforeLogin,
  },
  data() {
    return {
      modelFlag: false, // 世界观
      introFlag: false, // 展示人物内容
      beforeFlag: false, // 事前登录
      register: 0,
    };
  },
  methods: {
    //展示世界观
    handleShowSJG(val, num) {
      this.modelFlag = true;
    },
    handleSJGClose() {
      this.modelFlag = false;
    },
    // 展示人物内容
    handleShowIntro() {
      this.introFlag = true;
    },
    handleIntroClose() {
      this.introFlag = false;
    },
    handleShare(val) {
      this.common.doShare(val);
      console.log(this.common);
    },
    // 事前登录
    handleShowLogin() {
      this.beforeFlag = true;
    },
    handleLoginClose() {
      this.beforeFlag = false;
    },
    handleShow(val) {
      this.$emit("handleShowM1", val);
    },
  },
};
</script>
<style lang="scss">
.m2-cont {
  width: 100%;
  height: 100%;
  .logo {
    left: 40px;
    top: 2vh;
    img {
      width: 303px;
      height: 119px;
    }
  }
  .btn-icon {
    right: 52px;
    top: 3vh;

    .img-w {
      width: 216px;
      height: 49px;
    }
    .btn-icon-login {
      margin-right: 8px;
    }
    .btn-icon-share {
      width: 46px;
      height: 41px;
      margin-left: 11px;
    }
    .btn-icon-line {
      width: 35px;
      height: 35px;
      margin-left: 19px;
    }
    .btn-icon-fb {
      width: 42px;
      height: 45px;
      margin-left: 21px;
    }
  }
  .wrap1214 {
    height: 100%;

    .btn-Login {
      top: 41vh;
      left: 272px;
      width: 302px;
      height: 107px;
      background: url("../assets/img/bg2/register.png") no-repeat;
      background-size: cover;
    }
    .btn-sjg {
      bottom: 16vh;
      right: 671px;
      width: 251px;
      height: 78px;
      background: url("../assets/img/bg2/sjg.png") no-repeat;
      background-size: cover;
    }
    .btn-intro {
      bottom: 44vh;
      right: 438px;
      width: 298px;
      height: 85px;
      background: url("../assets/img/bg2/intro.png") no-repeat;
      background-size: cover;
    }
  }
}
</style>