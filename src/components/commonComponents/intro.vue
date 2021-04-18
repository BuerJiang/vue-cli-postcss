<template>
  <div class="animated zoomIn faster position-relative intro-model">
    <div
      class="model-content-new position-absolute"
      :class="{
        active1: Number(aIndex) === 1,
        active2: Number(aIndex) === 2,
        active3: Number(aIndex) === 3,
        active4: Number(aIndex === 4),
        active5: Number(aIndex === 5),
        active6: Number(aIndex === 6),
      }"
    >
      <div class="position-absolute tag"></div>
      <div class="position-absolute close-bg cursor" @click="handleModel(1)">
      </div>
      <div class="cbox position-absolute"></div>
      <div class="popbox">
        <div class="wview block m-auto center">
          <swiper
            :options="swiperOption"
            ref="goodSwiper"
            class="swiper-no-swiping"
          >
            <swiper-slide
              v-for="(item, index) in swiperList"
              :key="index"
              class="position-relative"
            >
              <img :src="item.imgUrl" alt="" srcset="" />
            </swiper-slide>
            <div class="swiper-pagination cursor" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "model",
  data() {
    const vm = this;
    return {
      aIndex: 1,
      swiperOption: {
        speed: 0,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          clickable: true, // 允许点击小圆点跳转
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
              case 3:
                name = "";
                break;
              case 4:
                name = "";
                break;
              case 5:
                name = "";
                break;
              default:
                name = "";
            }
            return (
              '<div class="' +
              className +
              [index] +
              " " +
              className +
              '"><i>' +
              name +
              "</i></div>"
            );
          },
        },
        on: {
          slideChangeTransitionEnd: function () {
            vm.aIndex = this.realIndex + 1;
          },
        },
      },
      swiperList: [
        {
          id: 1,
          imgUrl: require("../../assets/img/bg2/t_1_bg.png"),
        },
        {
          id: 2,
          imgUrl: require("../../assets/img/bg2/t_2_bg.png"),
        },
        {
          id: 3,
          imgUrl: require("../../assets/img/bg2/t_3_bg.png"),
        },
        {
          id: 4,
          imgUrl: require("../../assets/img/bg2/t_4_bg.png"),
        },
        {
          id: 5,
          imgUrl: require("../../assets/img/bg2/t_5_bg.png"),
        },
        {
          id: 6,
          imgUrl: require("../../assets/img/bg2/t_6_bg.png"),
        },
      ],
    };
  },
  created() {},
  methods: {
    handleModel() {
      this.$emit("handleIntroClose");
    },
 
  },
};
</script>
<style lang="scss" >
.intro-model {
  width: 100%;
  height: 100%;
  .model-content-new {
    background: url("../../assets/img/bg2/active_1.png") no-repeat center top;
    background-size: 100% 100%;
    width: 1332px;
    height: 898px;
    left: 50%;
    top: 50%;
    // transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
    transform: translate(-50%, -50%);

    overflow: hidden;
    background-size: 100% 100%;
    .cbox {
      background: url("../../assets/img/bg2/intro_bg_1.png") no-repeat center
        top;
      background-size: 100% 100%;
      width: 1206px;
      height: 92%;
      top: 50%;
      left: 50%;
      // transform: translate(calc(-53% + 0.5px), calc(-47% + 1px));
      transform: translate(-53%, -47%);
    }
    .model-new-header {
      border-color: transparent;
    }
    .popbox {
      height: 100%;
      .wview {
        width: 100%;
        height: 100%;
        .btn {
          right: 20px;
          top: 98px;
          width: 137px;
          height: 60px;
          background: azure;
        }

        .swiper-container {
          width: 100%;
          height: 100%;
          text-align: center;
          img {
            display: block;
            width: 945px;
            height: 549px;
            position: absolute;
            // transform: translate(calc(-50% + 0.5px), 0);
            transform: translate(-50%, 0);
            left: 50%;
          }
          // 内容区域
          .swiper-wrapper {
            padding-top: 125px;
          }
          // 分页
          .swiper-pagination {
            width: 102px;
            // height: 667px;
            right: 32px !important;
            left: auto;
            top: 115px;

            .swiper-pagination-bullet-active {
              background: transparent;
            }
            // 分页选中后
            .my-bullet {
              margin-bottom: 35px;
              i {
                width: 129px;
                height: 80px;
                display: block;
                z-index: -1;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }

            // 右边标签页
            // .my-bullet0.swiper-pagination-bullet-active i {
            //   background: url("../../assets/img/bg2/t_1.png") no-repeat center;
            //   background-size: 100% 100%;
            // }
            // .my-bullet1.swiper-pagination-bullet-active i {
            //   background: url("../../assets/img/bg2/t_2.png") no-repeat center;
            //   background-size: 100% 100%;
            // }
            // .my-bullet2.swiper-pagination-bullet-active i {
            //   background: url("../../assets/img/bg2/t_3.png") no-repeat center;
            //   background-size: 100% 100%;
            // }
            // .my-bullet3.swiper-pagination-bullet-active i {
            //   background: url("../../assets/img/bg2/t_4.png") no-repeat center;
            //   background-size: 100% 100%;
            // }
            // .my-bullet4.swiper-pagination-bullet-active i {
            //   background: url("../../assets/img/bg2/t_5.png") no-repeat center;
            //   background-size: 100% 100%;
            // }
            // .my-bullet5.swiper-pagination-bullet-active i {
            //   background: url("../../assets/img/bg2/t_6.png") no-repeat center;
            //   background-size: 100% 100%;
            // }
          }
        }
      }
    }

    // tag
    .tag {
      background: url("../../assets/img/bg2/intro_tag.png") no-repeat center top;
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
      right: 160px;
      top: 98px;
      z-index: 999;
      background-size: 100% 100%;
    }
  }
  .active1 {
    background: url("../../assets/img/bg2/active_1.png") no-repeat center top;
    background-size: 100% 100%;
  }
  .active2 {
    background: url("../../assets/img/bg2/active_2.png") no-repeat center top;
    background-size: 100% 100%;
  }
  .active3 {
    background: url("../../assets/img/bg2/active_3.png") no-repeat center top;
    background-size: 100% 100%;
  }
  .active4 {
    background: url("../../assets/img/bg2/active_4.png") no-repeat center top;
    background-size: 100% 100%;
  }
  .active5 {
    background: url("../../assets/img/bg2/active_5.png") no-repeat center top;
    background-size: 100% 100%;
  }
  .active6 {
    background: url("../../assets/img/bg2/active_6.png") no-repeat center top;
    background-size: 100% 100%;
  }
}
</style>