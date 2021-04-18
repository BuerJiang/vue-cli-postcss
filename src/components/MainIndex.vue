<template>
  <div>
    <div class="m1 area" v-if="flag">
      <!-- 背景图 -->
      <div
        class="position-absolute bg-block d-flex align-items-center justify-content-center"
      >
        <img src="../assets/img/bg1/m1.png" alt="" srcset="" width="1920px" />
        <!-- <img src="../assets/img/bg1/m1.png" alt="" srcset=""> -->
      </div>
      <!-- 内容 -->
      <div class="m1-bg position-absolute">
        <!-- 分享按钮 -->
        <m1 ref="m1" @handleShow="handleShow(1)" />
      </div>
    </div>
    <div class="m2 area" v-else>
      <!-- 视频 -->
      <div v-if="isShowVideo" class="h-100">
        <div class="embed-responsive-16by9 position-absolute">
          <video
            ref="media"
            autoplay
            controls
            id="myVideo"
            class="videoCustomer"
            style="display: block"
            @ended="handleEnded()"
          >
            <source src="../assets/video/bg.mp4" type="video/mp4" />
          </video>
        </div>
        <button
          type="button"
          class="btn position-fixed hiddenVideo"
          @click="handleHideVideo"
        >
          跳过
        </button>
      </div>
      <!-- 背景图 -->
      <div
        class="position-absolute bg-block d-flex align-items-center justify-content-center"
        v-else
      >
        <img
          src="../assets/img/bg2/m2-bg.png"
          alt=""
          srcset=""
          width="1920px"
        />
      </div>
      <div class="m2-bg position-absolute">
        <m2 ref="m2" @handleShowM1="handleShowM1" />
      </div>
    </div>
  </div>
</template>
<script>
import m2 from "./m2";
import m1 from "./m1";

export default {
  components: {
    m2,
    m1,
  },
  created() {
    this.initData();
  },
  data() {
    return {
      flag: true,
      isShowVideo: true, // 是否隐藏video
    };
  },
  methods: {
    // info 接口获取数据
    initData() {
      const reqTime = Math.floor(new Date().getTime() / 1000);
      this.$axios({
        method: "post",
        url: "merufura/info",
        data: {
          //get这里应为params
          //请求参数
          signature: this.common.makeSignature({}, reqTime),
          reqTime: reqTime,
        },
        //withCredentials:true, //局部携带cookie
        headers: {}, //如果需要添加请求头可在这写
      })
        .then((res) => {
          //res是返回结果
          this.$refs.m2.register = res.data.data.register;
          this.$refs.m1.register = res.data.data.register;
        })
        .catch((err) => {
          //请求失败就会捕获报错信息
          //err.response可拿到服务器返回的报错数据
        });
    },
    // 点击跳转
    handleShowM1(val) {
      console.log("asdad", val);
      this.flag = true;
      this.isShowVideo = true;
    },
    handleShow(val) {
      if (val === 1) {
        this.flag = false;
      } else {
        this.flag = true;
        this.isShowVideo = true;
      }
    },
    // 视频播放完成
    handleEnded() {
      console.log("视频播放完成了");
      this.isShowVideo = false;
    },
    // 跳过视频
    handleHideVideo() {
      this.isShowVideo = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.area {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bg-block {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.m1 {
  // background: url("../assets/img/bg2/02.jpg") no-repeat 50% 50%;
  overflow: hidden;
  .m1-bg {
    width: 100%;
    height: 100%;
  }
}
.m2 {
  overflow: hidden;

  .hiddenVideo {
    top: 10px;
    right: 10px;
    z-index: 2;
    transform: all 0.2s;
  }
  .m2-bg {
    width: 100%;
    height: 100%;
  }

  .txt {
    font-size: 24px;
    color: aliceblue;
  }
}
</style>