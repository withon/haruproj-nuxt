<template>
  <div>
    <!--聚焦-->
    <section class="spotlight" style="background-image: url('/images/backgrounds/spotlight.webp')">
      <div class="holder">
        <div class="container d-flex justify-content-center align-items-center">
          <div
            class="row cols-xs-space align-items-center text-center text-md-left justify-content-center"
          >
            <div class="col-10">
              <div class="text-center mt-5">
                <img
                  src="/images/brand/projectharuTitle.webp"
                  style="width: 800px"
                  class="img-fluid animated"
                  data-animation-in="jackInTheBox"
                  data-animation-delay="1000"
                />
                <h2
                  class="heading display-4 font-weight-400 text-white mt-5 animated"
                  data-animation-in="fadeInUp"
                  data-animation-delay="2000"
                >
                  <span class="font-weight-500">春日计划乐团</span>
                </h2>
                <p
                  class="lead text-white mt-3 lh-180 animated"
                  data-animation-in="fadeInUp"
                  data-animation-delay="2500"
                >
                  来自北京的小乐团，向着全国最棒的二次元室内乐团前进中
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--乐团简介-->
    <section class="section-light">
      <div class="container">
        <div class="row justify-content-center pt-5 pb-5">
          <div class="col-10 col-lg-7">
            <div class="text-center">
              <!-- <h2 class="mb-5">乐团简介</h2> -->
              <div class="d-sm-block">
                <img
                  src="/images/brand/853485E06F3F0B49717080958A9234CF.png"
                  style="width: 70%"
                  alt="春日计划乐团"
                />
              </div>
              <p class="mt-5 mb-5">
                「春日计划」成立于2021年8月，乐团成员由热爱动漫、游戏并且热衷管弦乐的小伙伴发起成立。现已固定成为12人的中型室内乐团，涵盖了弦乐、木管、钢琴、吉他和打击乐五大类音色，使得室内乐团的听感变的立体而丰富，充满生机。我们的成员几乎均来自中央音乐学院、中国音乐学院等，也都是精挑细选的精兵强将。除了扎实的技术功底，每位乐手老师都对动漫画、游戏等某一个ACG领域如数家珍，完美表达“二次元”音乐内核。
              </p>
              <NuxtLink to="/member" target="_self">
                <button type="button" class="btn btn-outline-dark btn-lg">了解更多</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--B站视频-->
    <section class="section-dark">
      <div class="container">
        <div class="row justify-content-center pt-5 pb-5">
          <div class="col-10 col-sm-8">
            <div class="text-center">
              <h2>精选作品</h2>
              <iframe
                id="bilibiliIframe"
                src="//player.bilibili.com/player.html?aid=1756430859&bvid=BV194421Z7Bh&cid=1627995776&page=1&high_quality=1&danmaku=0&autoplay=0"
                :allowfullscreen="true"
                width="100%"
                height="500px"
                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--巡演动态-->
    <section class="section-light">
      <div class="container text-center">
        <div class="row justify-content-center pt-5 pb-5">
          <div class="col-12 col-sm-12">
            <h2 class="mb-5">巡演计划</h2>
            <div class="container">
              <div class="row">
                <div v-for="i in [1, 2, 3]" class="col-12 col-md-6 col-lg-4">
                  <div class="card dynamic-card">
                    <img
                      :src="
                        i % 2 ? '/images/backgrounds/taoyou.png' : '/images/member/yueshou.jpeg'
                      "
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">标题</h5>
                      <p class="card-text">
                        测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
                      </p>
                      <a
                        href="https://show.bilibili.com/platform/detail.html?id=92853"
                        target="_blank"
                        class="btn btn-outline-dark"
                        >详情</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NuxtLink to="/dynamic" target="_self">
              <button type="button" class="btn btn-outline-dark btn-lg">更多动态</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.spotlight {
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-shadow: 1px 1px 2px black;

  .container {
    height: 100%;
  }

  .holder {
    height: 100%;
  }
}

.dynamic-card {
  height: calc(100% - 20px);
  margin-bottom: 15px;
}
</style>
