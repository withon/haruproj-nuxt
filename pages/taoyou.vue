<template>
  <!--聚焦-->
  <section class="section-light swiper">
    <Transition v-for="ty in taoyouHisList" name="swiperfade">
      <div class="swiper-part" v-show="selTyId === ty.id">
        <div class="swiper-bg-color">
          <div
            class="swiper-bg-image"
            :style="{ backgroundImage: 'url(' + (swiperBgType ? ty.pcImg : ty.mobileImg) + ')' }"
          >
            <div class="swiper-container">
              <div
                class="swiper-character"
                :style="{ backgroundImage: 'url(' + ty.characterImg + ')' }"
              ></div>
              <div class="swiper-card">
                <img src="/images/projectharuZh.png" alt="春日计划" />
                <h1 class="mt-4 mb-4">{{ ty.title }}</h1>
                <div v-html="ty.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!--桃幽小头像横条-->
    <div class="swiper-scroll" :style="{ justifyContent: swiperScrollJustifyContent }">
      <div
        v-for="ty in taoyouHisList"
        class="swiper-scroll-part"
        :class="{ 'swiper-scroll-part-active': selTyId === ty.id }"
      >
        <a @click="selTyFn(ty.id)">
          <img :src="ty.miniImg" :alt="ty.tip" />
          <span>{{ ty.tip }}</span>
        </a>
      </div>
    </div>
  </section>

  <!--桃幽介绍-->
  <section class="section-light">
    <div class="container">
      <div class="row justify-content-center pt-5 pb-5">
        <div class="col-10 col-lg-7">
          <div class="text-center">
            <h2 class="mb-5">
              <img src="/images/Qban.png" height="58" alt="Q版桃幽" />
              <span>{{ taoyouInfo.title }}</span>
            </h2>
            <p class="mt-5 mb-5">{{ taoyouInfo.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const windowWidth = ref(1000);
// true，大于992用大图。false，小于992用小图
const swiperBgType = computed(() => {
  return windowWidth.value >= 992;
});
// 小标签排列方向(无需滚动时居中/滚动时靠左)
const swiperScrollJustifyContent = ref('center');

/**
 * 监控宽度改变高度
 */
const widthListenerMountedFn = () => {
  // 监听窗口大小变化。1.给windowWidth赋值。2.计算是否需要滚动改变小标签排列方向
  const handleResize = () => {
    windowWidth.value = document.documentElement.clientWidth;
    let swiperScroll = document.querySelector('div .swiper-scroll');
    if (swiperScroll) {
      swiperScrollJustifyContent.value =
        swiperScroll.scrollWidth > swiperScroll.clientWidth ? 'flex-start' : 'center';
    }
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  // 在组件卸载时移除事件监听器
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
};

onMounted(() => {
  if (import.meta.client) {
    widthListenerMountedFn();
  }
});

// 桃幽历史列表
const taoyouHisList = ref([
  {
    id: '1',
    title: '春日计划2024——特别二次元不插电音乐会',
    content: `<h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>
              <h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>
              <h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>`,
    tip: '2022',
    pcImg: '/images/taoyou/bg_01.jpg',
    mobileImg: '/images/taoyou/bg_s_01.jpg',
    characterImg: '/images/taoyou/taoyou_01.webp',
    miniImg: '/images/member/yueshou.jpeg',
  },
  {
    id: '2',
    title: '春日计划2024——特别二次元不插电音乐会',
    content: `<h4>苏州</h4>
              <p>2025年 9月 22日(周日) 15:30<br />郑州大剧院</p>
              <h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>
              <h4>郑州</h4>
              <p>2024年 9月 98日(周日) 15:30<br />郑州大剧院</p>`,
    tip: '2023',
    pcImg: '/images/brand/spotlight.webp',
    mobileImg: '/images/brand/spotlight.webp',
    characterImg: '/images/member/yueshou.jpeg',
    miniImg: '/images/Qban.png',
  },
  {
    id: '3',
    title: '春日计划2024——特别二次元不插电音乐会',
    content: `<h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>
              <h4>南京</h4>
              <p>2024年 9月 22日(周一) 15:30<br />郑州大剧院</p>
              <h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>
              <h4>郑州</h4>
              <p>2024年 9月 22日(周日) 15:30<br />郑州大剧院</p>`,
    tip: '2024',
    pcImg: '/images/taoyou/bg_01.jpg',
    mobileImg: '/images/taoyou/bg_s_01.jpg',
    characterImg: '/images/taoyou/taoyou_01.webp',
    miniImg: '/images/member/yueshou.jpeg',
  },
]);

// 当前选中的小标签
const selTyId = ref('1');

/**
 * 选择小标签
 * @param id
 */
const selTyFn = (id: string) => {
  selTyId.value = id;
};

const taoyouInfo = ref({
  title: '“桃幽”是谁？',
  content:
    '「桃幽」以黑色长直发和桃花瞳孔的形象示人，着一身融合中西元素的桃花小礼服，展现出高贵优雅的气质。桃幽的内在则隐藏着活泼可爱的一面，形成有趣的反差。她出生于音乐世家，精通小提琴演奏，并对古董乐器修复有着浓厚的兴趣。桃幽以时装设计专业为背景，致力于将古典优雅融入现代设计。她的故事和才华使她在全球范围内拥有广泛的名气，活跃于音乐、设计和艺术等多个领域。',
});
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
}

.swiper-scroll {
  position: absolute;
  z-index: 1000;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* 自定义滚动条的整体样式 */
  &::-webkit-scrollbar {
    width: 8px; /* 设置滚动条的宽度 */
    height: 8px; /* 设置滚动条的高度 */
    background-color: transparent; /* 设置滚动条的背景为透明 */
  }

  /* 自定义滚动轨迹的样式 */
  &::-webkit-scrollbar-track {
    background-color: transparent; /* 设置滚动轨迹的背景为透明 */
  }

  /* 自定义滚动滑块的样式 */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 170, 255, 0.4); /* 设置滚动滑块为灰色半透明 */
    border-radius: 6px; /* 设置滚动滑块的圆角 */
    visibility: visible; /* 默认隐藏滚动滑块 */
  }

  /* 自定义鼠标悬浮时滚动滑块的样式 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 170, 255, 0.5); /* 设置滚动滑块为灰色半透明 */
    visibility: visible; /* 鼠标悬浮时显示滚动滑块 */
  }

  /* 设置滚动条滑块在滚动时的样式 */
  &::-webkit-scrollbar-thumb:active {
    background-color: rgba(0, 170, 255, 0.8); /* 滚动时的滑块颜色 */
  }

  /* 隐藏滚动条两侧的箭头 */
  &::-webkit-scrollbar-button {
    display: none; /* 隐藏滚动条两侧的箭头 */
  }

  @media screen and (max-width: breakpoint-max(md)) {
    top: 56px;
    height: 100px;
    background: rgba(255, 255, 255, 0.35);
  }
  @media (min-width: breakpoint-min(md)) and (max-width: breakpoint-max(lg)) {
    top: 56px;
    height: 100px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.75));
  }
  @media (min-width: breakpoint-min(lg)) {
    bottom: 0;
    height: 150px;
    padding: 10px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.75));
  }
}

.swiper-scroll-part {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  flex: 0 0 auto;
  position: relative;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 15px;
  background-color: white;
  @media (max-width: breakpoint-max(lg)) {
    padding: 4px;
    height: 65px;
    width: 65px;
  }
  @media (min-width: breakpoint-min(lg)) {
    padding: 5px;
    height: 90px;
    width: 90px;
  }

  a {
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  span {
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 15px;
    background: #000;
    color: #fff;
    font-weight: 700;
    text-align: center;
    font-size: 1rem;
    border-radius: 5px;
    @media (max-width: breakpoint-max(lg)) {
      bottom: -5px;
      font-size: 0.8rem;
    }
    @media (min-width: breakpoint-min(lg)) {
      bottom: -12px;
      font-size: 1rem;
    }
  }
}

.swiper-scroll-part-active {
  border: 4px rgb(0, 170, 255) solid;
  margin-left: 2px !important;
  margin-right: 2px !important;
}

.swiperfade-enter-active,
.swiperfade-leave-active {
  transition: opacity 0.5s ease;
}

.swiperfade-enter-from,
.swiperfade-leave-to {
  opacity: 0;
}

.swiper-part {
  height: 100%;
  width: 100%;
  position: absolute;
}

.swiper-bg-color {
  height: 100%;
  margin: 0 auto;
  background: center top no-repeat white;
}

.swiper-bg-image {
  height: 100%;
  margin: 0 auto;
  background: center top no-repeat;
}

.swiper-character-01 {
  background-image: url('/images/taoyou/taoyou_01.webp');
}

.swiper-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.swiper-character {
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.swiper-card {
  font-family: 'Noto Sans SC', sans-serif;
  position: absolute;
  background: rgba(255, 255, 255, 0.75);
  text-align: center;
  border-radius: 15px;
  padding: 30px;
  overflow: auto;
  /* 自定义滚动条的整体样式 */
  &::-webkit-scrollbar {
    width: 8px; /* 设置滚动条的宽度 */
    height: 8px; /* 设置滚动条的高度 */
    background-color: transparent; /* 设置滚动条的背景为透明 */
  }

  /* 自定义滚动轨迹的样式 */
  &::-webkit-scrollbar-track {
    background-color: transparent; /* 设置滚动轨迹的背景为透明 */
  }

  /* 自定义滚动滑块的样式 */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 170, 255, 0.4); /* 设置滚动滑块为灰色半透明 */
    border-radius: 6px; /* 设置滚动滑块的圆角 */
    visibility: hidden; /* 默认隐藏滚动滑块 */
  }

  /* 自定义鼠标悬浮时滚动滑块的样式 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 170, 255, 0.5); /* 设置滚动滑块为灰色半透明 */
    visibility: visible; /* 鼠标悬浮时显示滚动滑块 */
  }

  /* 设置滚动条滑块在滚动时的样式 */
  &::-webkit-scrollbar-thumb:active {
    background-color: rgba(0, 170, 255, 0.8); /* 滚动时的滑块颜色 */
  }

  /* 隐藏滚动条两侧的箭头 */
  &::-webkit-scrollbar-button {
    display: none; /* 隐藏滚动条两侧的箭头 */
  }

  img {
    display: block;
    margin: 0 auto;
    width: 70%;
  }

  h1 {
    font-size: 22px;
  }
}

@media screen and (max-width: breakpoint-max(md)) {
  .swiper-bg-image {
    background-size: cover;
  }
  .swiper {
    height: 1000px;
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-character {
    height: calc(70% - 70px);
    width: calc(100% - 20px);
    top: 160px;
    left: 0;
    right: 0;
    margin: auto;
    background-position: center 0;
  }
  .swiper-card {
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    max-height: 60%;
    width: calc(100% - 30px);
  }
}

@media (min-width: breakpoint-min(md)) and (max-width: breakpoint-max(lg)) {
  .swiper-bg-image {
    background-size: cover;
  }
  .swiper {
    height: 1100px;
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-character {
    height: calc(80% - 70px);
    width: calc(80% - 20px);
    top: 160px;
    left: 0;
    right: 0;
    margin: auto;
    background-position: center 0;
  }
  .swiper-card {
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    max-height: 60%;
    width: 75%;
  }
}

@media (min-width: breakpoint-min(lg)) {
  .swiper-bg-image {
    background-size: auto 100%;
  }
  .swiper {
    height: 800px;
  }
  .swiper-container {
    max-width: 980px;
  }
  .swiper-character {
    height: 650px;
    width: 500px;
    top: 70px;
    left: 0;
  }
  .swiper-card {
    width: 500px;
    max-height: 70%;
    top: 45%;
    transform: translateY(-50%);
    right: 0;
    margin: auto;
  }
}
</style>
