<template>
  <div class="animated zoomIn faster position-relative r-model">
    <div class="model-content-new position-absolute">
      <div
        class="position-absolute close-bg cursor"
        @click="handleModel(1)"
      ></div>
      <!-- content -->
      <div class="position-relative m-auto">
        <div class="title position-absolute"></div>
        <div class="input-bg position-absolute">
          <input
            type="text"
            name="email"
            :placeholder="valPlaceholder"
            maxlength="30"
            autocomplete="off"
            v-model="val"
          />
        </div>
        <!-- 错误提示信息提示 -->
        <div class="errMsg position-absolute" v-if="errFlag"></div>
        <div class="submit position-absolute">
          <div class="cautions position-relative">
            <a target="_blank" href="https://useragreement.ujoygames.jp/">
              <span class="c_1 cursor position-absolute"></span
            ></a>
            <a target="_blank" href="https://privacy.ujoygames.jp/">
              <span class="c_2 cursor position-absolute"></span
            ></a>
          </div>
          <div class="sub-btn cursor" @click="submit"></div>
        </div>
      </div>
    </div>
    <!-- 错误提示 -->
    <div v-if="sucFlag" class="hint position-relative model">
      <div class="suc-cont position-absolute">
        <!-- close 关闭按钮 -->
        <div
          class="close position-absolute cursor"
          @click="handleCoseSuc"
        ></div>
        <!-- 分享按钮 -->
        <div class="share position-absolute d-flex align-items-center">
          <div class="fb icon cursor" @click="handleShare('fb')"></div>
          <div
            class="line icon ml-12 cursor"
            @click="handleShare('line')"
          ></div>
          <div class="tw icon ml-12 cursor" @click="handleShare('twi')"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
      valPlaceholder: "メールアドレスを入力してください",
      sucFlag: false,
      errFlag: false,
    };
  },
  methods: {
    handleModel() {
      this.$emit("handleRegisterClose");
    },
    // 关闭成功提示框
    handleCoseSuc() {
      this.sucFlag = false;
    },
      //   分享到twi
    handleShare(val) {
      this.common.doShare(val);
    },
    submit() {
      // FBQ 事件
      fbq("track", "Schedule");
      gtag("event", "开始预注册");
      // 验证邮箱正确性
      const reg = new RegExp(
        /^[a-z0-9]+([._\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      ); //正则表达式
      if (this.val === "" || !reg.test(this.val)) {
        // 错误提示
        this.errFlag = true;
        this.val = "";
      } else {
        //   邮箱输入正确后，调API
        const reqTime = Math.floor(new Date().getTime() / 1000);
        let source = this.common.getUrlParam("source") || "unknow";
        let target = this.common.getUrlParam("target") || "unknow";
        gtag("event", "pc", {
          event_category: source,
          event_label: target,
        });

        // 计算signature
        const params = {
          account: this.val,
          game: "601",
          type: 1,
        };

        this.$axios({
          method: "post",
          url: "merufura/subscribe",
          data: {
            account: this.val,
            game: "601",
            type: 1,
            signature: this.common.makeSignature(params, reqTime),
            reqTime: reqTime,
            source: source,
            target: target,
          },
          //withCredentials:true, //局部携带cookie
          headers: {}, //如果需要添加请求头可在这写
        })
          .then((res) => {
            if (res.data.code === 0 || res.data.code === 20010) {
              this.val = "";
              this.valPlaceholder = "メールアドレスを入力してください";
              this.sucFlag = true;
              this.errFlag = false;

              // FBQ 事件
              fbq("track", "CompleteRegistration");
              gtag("event", "完成预注册");
            } else {
              this.val = "";
              this.valPlaceholder = "メールアドレスを入力してください";
              this.sucFlag = false;
              this.errFlag = true;
            }
          })
          .catch((err) => {});
      }
    },
  },
};
</script>
 <style lang="scss" scoped>
.r-model {
  width: 100%;
  height: 100%;
  .model-content-new {
    width: 596px;
    height: 842px;
    background: url("../../assets/img/bg1/r_bg.png") no-repeat center top;
    left: 50%;
    top: 50%;
    // transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
    transform: translate(-50%, -53%);
    overflow: hidden;
    background-size: 100% 100%;

    // tag
    .close-bg {
      background: url("../../assets/img/bg1/close.png") no-repeat center top;
      width: 57px;
      height: 60px;
      right: 21px;
      top: 83px;
      z-index: 999;
      background-size: 100% 100%;
    }

    .title {
      width: 260px;
      height: 86px;
      background: url("../../assets/img/bg1/r_title.png") no-repeat center top;
      background-size: 100% 100%;
      top: 310px;
      left: 165px;
    }
    .input-bg {
      width: 351px;
      height: 40px;
      background: url("../../assets/img/bg1/input_bg.png") no-repeat center top;
      background-size: 100% 100%;
      top: 425px;
      left: 112px;
      text-align: center;

      input[type="text"] {
        width: 351px;
        height: 40px;
        background-color: transparent;
        line-height: 17px;
        font-size: 16px;
        text-align: center;
        color: #000000;
        font-weight: bold;
      }
      input::-webkit-input-placeholder {
        color: #000000;
      }
    }
    .submit {
      top: 491px;
      left: 148px;
      .cautions {
        width: 270px;
        height: 48px;
        background: url("../../assets/img/bg1/cautions.png") no-repeat center
          top;
        background-size: 100% 100%;

        .c_1 {
          width: 56px;
          height: 18px;
          top: 0;
          left: 11px;
          background: transparent;
        }
        .c_2 {
          width: 135px;
          height: 18px;
          top: 0;
          left: 74px;
          background: transparent;
        }
      }
      .sub-btn {
        width: 206px;
        height: 56px;
        background: url("../../assets/img/bg1/s_btn.png") no-repeat center top;
        background-size: 100% 100%;
        margin: 36px auto 0 auto;
      }
    }
  }
}
// 提示
.hint {
  z-index: 999;
  .suc-cont {
    width: 524px;
    height: 376px;
    background: url("../../assets/img/bg1/suc.png") no-repeat center top;
    background-size: 100% 100%;
    // transform: translate(-50%, -50%);
    transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
    top: 50%;
    left: 50%;
    // 关闭按钮
    .close {
      width: 36px;
      height: 34px;
      right: 10px;
      top: 10px;
    }
    .share {
      bottom: 29px;
      left: 231px;
      .icon {
        width: 36px;
        height: 37px;
      }
    }
  }
}
.errMsg {
  width: 256px;
  height: 12px;
  background: url("../../assets/img/bg1/err.png") no-repeat center top;
  background-size: 100% 100%;
  left: 142px;
  top: 470px;
  text-align: center;
}
</style>