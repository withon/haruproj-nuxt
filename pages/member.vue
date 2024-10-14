<template>
  <!--聚焦-->
  <HalfSpotlight title="团队成员" :url="spotLightImg" />
  <!--团队成员-->
  <section class="section-light" style="padding-top: 1rem">
    <div class="container pb-5">
      <div class="m-3 text-center">
        <h3>常驻成员</h3>
        <p>春日计划，启动！</p>
      </div>
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="member in currentMemberList" class="col">
          <div>
            <img
              class="bd-placeholder-img card-img-top"
              :src="member.portraitImg"
              style="object-fit: cover"
              alt="Placeholder"
            />
            <div class="card-body mt-3">
              <h4 class="text-center">{{ member.fullName }}</h4>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="m-3 text-center">
        <h3>往期成员</h3>
        <p>曾经一起并肩作战过的小伙伴们我们也不会忘记。</p>
      </div>
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="member in hisMemberList" class="col">
          <div>
            <img
              class="bd-placeholder-img card-img-top"
              :src="member.portraitImg"
              style="object-fit: cover"
              alt="Placeholder"
            />
            <div class="card-body mt-3">
              <h4 class="text-center">{{ member.fullName }}</h4>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const spotLightImg = ref('/images/backgrounds/member_spotlight.jpeg');
const currentMemberList = ref([
  {
    id: '1',
    fullName: '张三',
    portraitImg: '/images/member/yueshou.jpeg',
  },
]);
const hisMemberList = ref([
  {
    id: '2',
    fullName: '李四',
    portraitImg: '/images/member/yueshou.jpeg',
  },
]);
</script>

<style lang="scss" scoped></style>
