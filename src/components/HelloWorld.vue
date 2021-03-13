<template>
  <div class="m2">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" srcset="" /> </swiper-slide
      >　　
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // isMode: "", // 弹出框
      swiperOption: {
        direction: "vertical",
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        height: window.innerHeight, // 高度设置，占满设备高度
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          clickable: true, // 允许点击小圆点跳转
          renderBullet: function (index, className) {
            switch (index) {
              case 0:
                name = "壹";
                break;
              case 1:
                name = "贰";
                break;
              case 2:
                name = "叁";
                break;
              case 3:
                name = "肆";
                break;
              default:
                name = "";
            }
            return '<div class="' + className + '"><i>' + name + "</i></div>";
          },
        },
        mousewheel: true, //开启鼠标
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("../assets/img/role-img1.png"),
        },
        {
          id: "0002",
          imgUrl: require("../assets/img/role-img2.png"),
        },
        {
          id: "0003",
          imgUrl: require("../assets/img/role-img3.png"),
        },
        {
          id: "0004",
          imgUrl: require("../assets/img/role-img4.png"),
        },
      ],
    };
  },
  created() {},
  mounted() {},

  computed: {},
  methods: {
    // 组件弹出框
    handleShowModel(val, num) {
      this.isMode = val;
      // 获取子组件中的值
      this.$refs.showModelChild.modelFlag = true;
    },
  },
};
</script>
<style lang="scss" >
.m2 {
  height: 100%;
  background: #815d4b;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .my-bullet i {
    background-color: #41203f !important;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    display: block;
    border-radius: 50%;
  }
  .swiper-pagination-bullet-active i {
    -webkit-transform: scale(1.5);
    background: url("../assets/img/shouye_nvsheng_huangseb.png") no-repeat
      center 50%;
    background-size: auto 100%;
    color: #815d4b;
  }
}
.area {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>