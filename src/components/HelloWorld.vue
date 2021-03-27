<template>
  <div class="m2 area">
    <!-- 背景图 -->
    <div
      class="position-absolute bg-block d-flex align-items-center justify-content-center"
    >
      <img src="../assets/img/bg.png" alt="" srcset="" width="1920px" />
    </div>
    <!-- logo -->
    <div class="logo position-absolute"></div>
    <!-- 全屏滚动 -->
    <swiper :options="swiperOption" ref="goodSwiper" class="swiper-no-swiping">
      <swiper-slide>
        <slider1
          ref="showSilder"
          :onNext="nextShow"
          @handleClose="handleClose"
          @handleEVent="handleEVent"
        />
      </swiper-slide>
      <swiper-slide>
        <div class="mj-bg position-absolute">
          <img src="../assets/img/mj_bg.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="mj-bg position-absolute">
          <img src="../assets/img/cautions.png" alt="" />
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-home"
        :class="nextShow ? '' : 'swiperNoSwiping'"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
import slider1 from "./slider1";
export default {
  name: "Home",
  components: {
    slider1,
  },
  data() {
    return {
      nextShow: true,
      swiperOption: {
        direction: "vertical",
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        height: window.innerHeight, // 高度设置，占满设备高度
        mousewheel: true, //开启鼠标
        pagination: {
          el: ".swiper-pagination-home",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          clickable: true, // 允许点击小圆点跳转
          autoplayDisableOnInteraction: false,
          type: "custom",
          renderCustom: function (swiper, current, total) {
            //  alert(1)

            var paginationHtml = " ";
            for (var i = 0; i < total; i++) {
              // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
              if (i === current - 1) {
                paginationHtml +=
                  '<div class="my-bullet swiper-pagination-bullet-active"><i ></i></div>';
              } else {
                paginationHtml += '<div class="my-bullet"><i ></i></div>';
              }
            }
            return paginationHtml;
          },

          renderBullet: function (index, className) {
            switch (index) {
              case 0:
                name = "";
                break;
              case 1:
                name = "";
                break;
              case 2:
                name = "";
                break;
              default:
                name = "";
            }
            return (
              '<div class="' +
              className +
              " " +
              className +
              [index] +
              '"><i>' +
              name +
              "</i></div>"
            );
          },
        },
      },
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  computed: {},
  methods: {
    // info
    initData() {
      //test 测试
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
          //你的下一步操作 例:
        })
        .catch((err) => {
          //请求失败就会捕获报错信息
          //err.response可拿到服务器返回的报错数据
        });
    },

    handleClose(val) {
      this.nextShow = val;
      this.swiperOption.mousewheel = val;

      this.$refs.goodSwiper.swiper.destroy(); //先销毁
      this.$refs.goodSwiper.mountInstance(); //后在加载
    },
    handleEVent(val) {
      this.nextShow = val;
      this.swiperOption.mousewheel = val;

      this.$refs.goodSwiper.swiper.destroy(); //先销毁
      this.$refs.goodSwiper.mountInstance(); //后在加载
    },
  },
};
</script>

<style lang="scss" >
.area {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.m2 {
  .logo {
    width: 408px;
    height: 169px;
    background: url("../assets/img/logo.png") no-repeat center top;
    background-size: 100% 100%;
    top: 32px;
    right: 32px;
  }
  .bg-block {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swiper-container {
    width: 100%;
    height: 100%;

    // 分页
    .swiper-pagination-home {
      left: 95%;
      top: 50%;
      padding-top: 90px;
      margin-top: -170px;

      ::after {
        background: url("../assets/img/arrows.png") no-repeat center top;
        background-size: 100% 100%;
        width: 17px;
        height: 345px;
        content: "";
        position: absolute;
        background-repeat: no-repeat;
        top: 0;
        left: 14px;
        z-index: -1;
      }

      .swiper-pagination-bullet-active {
        background: transparent;
      }
      .my-bullet i {
        z-index: 22;
        background: url("../assets/img/start.png") no-repeat center top;
        width: 45px;
        height: 45px;
        line-height: 45px;
        display: block;
        margin-bottom: 16px;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .swiper-pagination-bullet-active i {
        background: url("../assets/img/start_active.png") no-repeat center top;
        background-size: 100% 100%;
      }
    }
  }
}
.test {
  width: 300px;
  height: 300px;
  background: olive;
}
.mj-bg {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  img {
    width: 90%;
  }
}
// 轮播图失去焦点
.swiperNoSwiping {
  pointer-events: none;
}
</style>