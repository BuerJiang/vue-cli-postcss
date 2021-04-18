<template>
  <div class="m1-cont">
    <div class="position-relative wrap1214">
      <div class="header">
        <div
          class="btn-icon position-absolute cursor d-flex align-items-center"
        >
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
      <div
        class="enter-icon position-absolute cursor"
        @click="handleShow(1)"
      ></div>
      <!-- 登录按钮 -->
      <div
        class="btn-login position-absolute cursor"
        @click="handleShowLogin"
      ></div>
      <!-- 分享 -->
      <div class="btn-share position-absolute d-flex justify-content-between">
        <div class="btn-apple cursor" @click="handleApple('AS')"></div>
        <div class="btn-goole ml-18 cursor" @click="handleGoole('GP')"></div>
        <div class="btn-twi ml-18 cursor" @click="handleTwi('twi')"></div>
        <div class="btn-mail ml-18 cursor" @click="handleShowRegister"></div>
      </div>
      <!-- 版权页按钮 -->
      <div class="copyright position-absolute">
        <div class="btn-bq cursor" @click="handleSlideDown()"></div>
      </div>
    </div>

    <!-- 事前登录 -->
    <div class="model position-absolute b-index" v-if="beforeFlag">
      <beforeLogin ref="showBeforeLogin" @handleLoginClose="handleLoginClose" />
    </div>
    <!-- 注册 -->
    <div class="model position-absolute b-index" v-if="registerFlag">
      <register ref="showRegister" @handleRegisterClose="handleRegisterClose" />
    </div>
    <!-- 版权页内容 -->
    <div
      v-if="bFlag"
      class="copyright-cont position-absolute d-flex align-items-center"
    >
      <div class="f-box"></div>
      <div class="m-box"></div>
      <div class="fr-box">
        <a
          href="https://useragreement.ujoygames.jp/"
          target="_blank"
          class="block"
        >
          <div class="gz"></div>
        </a>
        <a href="https://privacy.ujoygames.jp/" target="_blank" class="block">
          <div class="gz-1"></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// 事前登录
import beforeLogin from "./commonComponents/beforeLogin";
// 注册
import register from "./commonComponents/register";
export default {
  components: {
    beforeLogin,
    register,
  },
  data() {
    return {
      beforeFlag: false, // 事前登录
      registerFlag: false, // 注册
      bFlag: false, // 版权页
      active: 1,
      register: 0,

    };
  },
  methods: {
    //   分享到twi
    handleShare(val) {
      this.common.doShare(val);
    },
    // 预注册
    handleApple(val) {
      this.common.goStore(val);
    },
    handleGoole(val) {
      this.common.goStore(val);
    },
    handleTwi(val) {
      this.common.goShare(val);
    },
    // 跳转到第二个页
    handleShow(val) {
      this.$emit("handleShow", val);
    },
    // 注册
    handleShowRegister() {
      this.registerFlag = true;
    },
    handleRegisterClose() {
      this.registerFlag = false;
    },
    // 事前登录
    handleShowLogin() {
      this.beforeFlag = true;
    },
    handleLoginClose() {
      this.beforeFlag = false;
    },
    // 版权页
    handleSlideDown() {
      console.log(1);
      // this.active = 0
      this.bFlag = !this.bFlag;
    },
  },
};
</script>
<style lang="scss" >
.m1-cont {
  width: 100%;
  height: 100%;
  .btn-icon {
    right: 52px;
    top: 3vh;

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
  .enter-icon {
    background: url("../assets/img/bg1/enter.png") no-repeat center top;
    background-size: 100% 100%;
    width: 225px;
    height: 154px;
    top: 10px;
    right: 355px;
    transform: translateZ(0);
  }
  .btn-login {
    bottom: 14vh;
    left: 50%;
    width: 348px;
    height: 110px;
    background: url("../assets/img/bg1/btn.png") no-repeat;
    background-size: 100% 100%;
    transform: translate(-50%, 0);
  }
  .btn-share {
    transform: translate(-50%, 0);
    bottom: 4vh;
    left: 50%;

    .btn-apple {
      width: 220px;
      height: 66px;
      background: url("../assets/img/bg1/apple.png") no-repeat;
      background-size: 100% 100%;
    }
    .btn-goole {
      width: 221px;
      height: 66px;
      background: url("../assets/img/bg1/google.png") no-repeat;
      background-size: 100% 100%;
    }
    .btn-twi {
      width: 221px;
      height: 66px;
      background: url("../assets/img/bg1/twitter.png") no-repeat;
      background-size: 100% 100%;
    }
    .btn-mail {
      width: 220px;
      height: 66px;
      background: url("../assets/img/bg1/mail.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  .copyright {
    right: 85px;
    bottom: 5vh;
    z-index: 2;
    .btn-bq {
      width: 159px;
      height: 41px;
      background: url("../assets/img/bg1/zzq_btn.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
// 版权页内容区域
.copyright-cont {
  width: 1920px;
  height: 187px;
  background-color: #000000;
  opacity: 0.8;
  bottom: 0;
  padding-left: 119px;
  transition: all 0.6s ease-in-out;

  animation: window-open 0.5s 1;

  .f-box {
    width: 562px;
    height: 100px;
    background: url("../assets/img/bg1/b_logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .m-box {
    width: 754px;
    height: 76px;
    background: url("../assets/img/bg1/b_c_1.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 92px;
  }
  .fr-box {
    margin-left: 67px;

    .gz {
      width: 127px;
      height: 20px;
      background: url("../assets/img/bg1/b_c_3.png") no-repeat;
      background-size: 100% 100%;
      margin-bottom: 24px;
    }
    .gz-1 {
      width: 250px;
      height: 19px;
      background: url("../assets/img/bg1/b_c_2.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}

@keyframes window-open {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scaleY(1);
  }
}

.wrap1214 {
  height: 100%;
}
.b-index {
  z-index: 3;
}
</style>
