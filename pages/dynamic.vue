<template>
  <div>
    <!--聚焦-->
    <HalfSpotlight title="团队动态" url="/images/backgrounds/member_spotlight.jpeg" />
    <!-- 团队动态 -->
    <section class="section-light pt-4 pb-4">
      <div class="cd-container">
        <div class="cd-timeline-block">
          <div class="cd-timeline-img" :style="{backgroundColor: 'green'}">
            <i class="bi-camera-video-fill" role="img" aria-label="GitHub"></i>
          </div>
          <div class="cd-timeline-content">
            <h2>有内容有图片的标题</h2>
            <p>
              测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
            </p>
            <div class="mb-1">
              <img
                class="bd-placeholder-img card-img-top"
                src="/images/member/yueshou.jpeg"
                style="object-fit: cover"
                alt="Placeholder"
              />
            </div>
            <a
              href="http://www.helloweba.com/view-blog-285.html"
              class="cd-read-more"
              target="_blank"
              >阅读全文</a
            >
            <span class="cd-date">2015-01-06</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
/* --------------------------------
时间流
-------------------------------- */
img {
  max-width: 100%;
}

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

.cd-timeline-img {
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

  .cd-picture {
    background: #75ce66;
  }

  .cd-movie {
    background: #c03b44;
  }

  .cd-advertisement {
    background: #f0ca45;
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
    padding: 0.8em 1em;
    background: #acb7c0;
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
</style>
