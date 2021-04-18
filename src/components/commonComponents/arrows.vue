<template>
  <div class="arrows position-absolute">
      <img src="../../assets/img/icon-arrows.png" alt="" srcset="" />
    </div>
</template>
<style lang="scss">
.arrows {
  width: 24px;
  height: 30px;
  bottom: 100px;
  left: 50%;
  margin-left: -12px;

  -webkit-animation: scrollAni 1s infinite;
  animation: scrollAni 1s infinite;
}
@-webkit-keyframes scrollAni {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0.3rem);
    transform: translateY(0.3rem);
    opacity: 0;
  }
}

@keyframes scrollAni {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0.3rem);
    transform: translateY(0.3rem);
    opacity: 0;
  }
}
</style>