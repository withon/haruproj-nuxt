<template>
  <!--聚焦-->
  <HalfSpotlight title="往期项目" :url="spotLightImg" />
  <!--往期项目-->
  <section class="section-light pt-5 pb-5">
    <div class="container" style="max-width: 1000px">
      <div v-for="ph in projHis" class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="ph.cardImg" class="card-img" alt="text" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ ph.title }}</h5>
              <p class="card-text">{{ ph.content }}</p>
              <p class="card-text">
                <small class="text-muted">{{ dateTimeFormatter(ph.time) }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const spotLightImg = ref('/images/backgrounds/member_spotlight.jpeg');

const projHis = ref([
  {
    id: '1',
    cardImg: '/images/member/yueshou.jpeg',
    title: '标题',
    content: '内容',
    time: '202410132207',
  },
  {
    id: '2',
    cardImg: '/images/member/yueshou.jpeg',
    title: '标题',
    content: '内容',
    time: '202410132207',
  },
]);
</script>

<style lang="scss" scoped></style>
