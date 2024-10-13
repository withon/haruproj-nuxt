<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top header-nav"
    :style="{ backgroundColor: navBgColor }"
  >
    <div class="container">
      <NuxtLink class="navbar-brand" to="/" target="_self"
        ><img src="/images/brand/projectharuTitle.webp" style="height: 26px"
      /></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/" target="_self">首页</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/dynamic" target="_self">乐团动态</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/hisproject" target="_self">往期项目</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/member" target="_self">团队成员</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/taoyou" target="_self">春日娘桃幽</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#footer" target="_self">联系我们</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--MAIN-->
  <main class="main">
    <!------------------在此处填充页面内容----------------->
    <slot></slot>
  </main>
  <footer id="footer">
    <div class="container">
      <div class="pt-4 pb-3">
        <p class="text-center">Copyright © 2022-2024 Project Haru.春日计划</p>
        <p class="text-center">京ICP备2024000xxx号</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core';

const globalIfTop = ref(true);

const navBgColor = computed(() => {
  return globalIfTop.value ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 1)';
});

const changeTopbarBg = useDebounceFn(
  () => {
    let scrollTop = window.scrollY;
    let ifTop = scrollTop < 1;
    if (ifTop != globalIfTop.value) {
      globalIfTop.value = ifTop;
    }
  },
  100,
  { maxWait: 300 },
);

onMounted(() => {
  import.meta.client && window.addEventListener('scroll', changeTopbarBg);
});
onUnmounted(() => {
  import.meta.client && window.removeEventListener('scroll', changeTopbarBg);
});
</script>

<style lang="scss" scoped>
.header-nav {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  transition: background-color 1s;

  .fixed-top {
    position: fixed;
    width: 100%;
    z-index: 1030;
  }

  .nav-link {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    font-size: 1rem;
    color: #dddddd;
    transition: background-color 300ms;

    &:hover {
      color: #ffffff;
    }
  }
}

footer {
  color: rgb(201, 201, 201);
  font-size: small;
}
</style>
