<template>
  <div>
    <!--聚焦-->
    <HalfSpotlight title="团队动态" url="/images/backgrounds/member_spotlight.jpeg" />
    <!-- 团队动态 -->
    <section class="section-light pt-4 pb-4">
      <div class="cd-container">
        <div v-for="dy in dynamicList" class="cd-timeline-block">
          <div class="cd-timeline-svg" :style="{ backgroundColor: dy.svgColor || 'gray' }">
            <i :class="dy.svgClass" role="img" :aria-label="dy.svgClass"></i>
          </div>
          <div class="cd-timeline-content">
            <h2>{{ dy.title }}</h2>
            <p>
              {{ dy.content }}
            </p>
            <div class="mb-1 container">
              <div class="row">
                <img
                  v-for="dyImg in dy.dynamicImgList"
                  :class="{ 'col-6': dy.dynamicImgList.length > 1 }"
                  class="cd-timeline-img"
                  :src="dyImg"
                  :alt="dy.title"
                  @click="imgShow(dyImg)"
                />
              </div>
            </div>
            <a v-if="dy.detailHref" :href="dy.detailHref" class="cd-read-more" target="_blank"
              >详情</a
            >
            <span class="cd-date">{{ dateTimeFormatter(dy.time) }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-show="previewFlag" class="preview-contatiner" @click="imgHide">
    <img :src="previewImage" alt="预览" />
  </div>
</template>

<script lang="ts" setup>
const dynamicList = ref([
  {
    id: '1',
    title: '标题',
    content: '测试内容',
    svgClass: 'bi-camera-video-fill',
    svgColor: 'rgb(0,170,0)',
    dynamicImgList: ['/images/member/yueshou.jpeg', '/images/member/yueshou.jpeg'],
    detailHref: 'https://show.bilibili.com/platform/detail.html',
    time: '202410132207',
  },
]);

/**
 * 图片全屏放大功能
 */
const previewFlag = ref(false);
const previewImage = ref('/images/brand/projectharuTitle.webp');
const imgShow = (imageUrl: string) => {
  previewImage.value = imageUrl;
  previewFlag.value = true;
};
const imgHide = () => {
  previewFlag.value = false;
};
</script>

<style lang="scss" scoped>
/* --------------------------------
时间流
-------------------------------- */
/* --------------------------------
  Modules - reusable parts of our design
  -------------------------------- */
.cd-container {
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  padding: 2em 0;

  &::after {
    /* clearfix */
    content: '';
    display: table;
    clear: both;
  }

  &::before {
    /* this is the vertical line */
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: #d7e4ed;
    @media only screen and (min-width: 1170px) {
      left: 50%;
      margin-left: -2px;
    }
  }
}

/* --------------------------------
  Main components
-------------------------------- */

.cd-timeline-block {
  position: relative;
  margin: 2em 0;

  @media only screen and (min-width: 1170px) {
    margin: 4em 0;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px white,
    inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    display: block;
    font-size: 28px;
    color: white;
  }

  @media only screen and (min-width: 1170px) {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
    /* Force Hardware Acceleration in WebKit */
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #d7e4ed;
  @media only screen and (min-width: 1170px) {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid white;
    @media only screen and (min-width: 1170px) {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: white;
    }
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  h2 {
    color: #303e49;
    @media only screen and (min-width: 768px) {
      font-size: 20px;
      font-size: 1.25rem;
    }
  }

  p,
  .cd-read-more,
  .cd-date {
    font-size: 13px;
    font-size: 0.8125rem;
  }

  p {
    margin: 1em 0;
    line-height: 1.6;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      font-size: 1rem;
    }
  }

  .cd-read-more,
  .cd-date {
    display: inline-block;
    @media only screen and (min-width: 768px) {
      font-size: 14px;
      font-size: 0.875rem;
    }
  }

  .cd-read-more {
    float: right;
    padding: 0.5em 0.8em;
    background: #acb7c0;
    text-decoration: none;
    color: white;
    border-radius: 0.25em;
    @media only screen and (min-width: 1170px) {
      float: left;
    }
  }

  .cd-date {
    float: left;
    padding: 0.8em 0;
    opacity: 0.7;
    @media only screen and (min-width: 1170px) {
      position: absolute;
      width: 100%;
      left: 122%;
      top: 6px;
      font-size: 16px;
      font-size: 1rem;
    }
  }
}

.cd-timeline-img {
  padding: 2px;
  max-width: 100%;
  height: auto;
  cursor: zoom-in;
}

a.cd-read-more:hover {
  text-decoration: none;
  background-color: #424242;
}

.cd-timeline-block:nth-child(even) {
  @media only screen and (min-width: 1170px) {
    .cd-timeline-content {
      float: right;

      &::before {
        top: 24px;
        left: auto;
        right: 100%;
        border-color: transparent;
        border-right-color: white;
      }

      .cd-read-more {
        float: right;
      }

      .cd-date {
        left: auto;
        right: 122%;
        text-align: right;
      }
    }
  }
}

.preview-contatiner {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 80%;
    max-height: 80%;
  }
}
</style>
