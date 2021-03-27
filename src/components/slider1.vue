<template>
  <div class="silde">
    <div class="b-model position-absolute">
      <div class="box position-relative">
        <div class="input-bg position-absolute">
          <input
            type="text"
            name="email"
            :placeholder="valPlaceholder"
            maxlength="30"
            autocomplete="off"
            v-model="val"
            autofocus
          />
        </div>
        <div class="submit position-absolute">
          <div class="sub-btn cursor" @click="submit"></div>
        </div>
      </div>
    </div>
    <!-- 正确/错误提示 -->
    <div v-if="flag" class="model position-absolute">
      <div class="b-msg position-absolute center">
        <div
          class="position-absolute close-bg cursor"
          @click="handleModel(1)"
        ></div>
        <div class="b-msg-cont position-absolute">{{ flagMsg }}</div>
        <div
          class="b-btn position-absolute cursor"
          @click="handleModel(2)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["onNext"],
  data() {
    return {
      val: "",
      valPlaceholder: "メールアドレスを入力してください",
      flag: false,
      flagMsg: "提出完了",
      mouseFlag: this.onNext,
    };
  },
  created() {
  },
  methods: {
    submit() {
      //   // FBQ 事件
      fbq("track", "Schedule");
      gtag("event", "开始预注册");

      // 此时禁止轮播图滑动
      this.mouseFlag = false;
      this.$emit("handleEVent", this.mouseFlag);

      // 验证邮箱正确性
      const reg = new RegExp(
        /^[a-z0-9]+([._\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      );
      if (this.val === "" || !reg.test(this.val)) {
        // 邮箱输入错误，或者没有输入，提示错误信息
        this.flagMsg =
          "メールアドレスに誤りがあります、ご確認の上お書き直しください";
        this.flag = true;
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
          game: 601,
          type: 1,
        };

        this.$axios({
          method: "post",
          url: "merufura/subscribe",
          data: {
            account: this.val,
            game: 601,
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
              this.flagMsg = "提出完了";
              this.flag = true;
              this.val = "";
              // FBQ 事件
              fbq("track", "CompleteRegistration");
              gtag("event", "完成预注册");
            } else {
            }
          })
          .catch((err) => {});
      }
    },

 
    handleModel() {
      this.flag = false;
      this.mouseFlag = true;
      this.$emit("handleClose", this.mouseFlag);
    },
  },
};
</script>
<style lang="scss" >
.silde {
  width: 100%;
  height: 100%;
}

.b-msg {
  background: url("../assets/img/alert_bg.png") no-repeat center top;
  width: 1033px;
  height: 516px;
  bottom: 3vh;
  left: 50%;
  z-index: 21;
  transform: translate(-50%, 0);
  background-size: 100% 100%;

  .close-bg {
    background: url("../assets/img/close.png") no-repeat center top;
    width: 50px;
    height: 48px;
    right: 60px;
    top: 117px;
    z-index: 999;
    background-size: 100% 100%;
  }
  .b-btn {
    width: 191px;
    height: 63px;
    background: url("../assets/img/btn.png") no-repeat center top;
    background-size: 100% 100%;
    bottom: 122px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .b-msg-cont {
    font-family: KozMinPr6N-Bold;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 49px;
    letter-spacing: 1px;
    color: #cfcfcf;
    top: 230px;
    width: 1033px;
    text-align: center;
  }
}

.b-model {
  background: url("../assets/img/zm_bg.png") no-repeat center top;
  width: 1033px;
  height: 516px;
  bottom: 3vh;
  left: 50%;
  transform: translate(-50%, 0);
  background-size: 100% 100%;
  .input-bg {
    width: 500px;
    height: 52px;
    top: 260px;
    left: 348px;
    text-align: center;

    input[type="text"] {
      width: 500px;
      height: 52px;
      background-color: transparent;
      font-family: ORedAliceMin2-Bold;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 19px;
      letter-spacing: 2px;
      color: #00ffff;
      padding-left: 24px;
    }
    input::-webkit-input-placeholder {
      color: #00ffff;
    }
  }
  .submit {
    top: 350px;
    left: 367px;

    .sub-btn {
      width: 256px;
      height: 57px;
      background: url("../assets/img/btn_1.png") no-repeat center top;
      background-size: 100% 100%;
    }
  }
}
</style>