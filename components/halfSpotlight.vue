<template>
  <!--聚焦-->
  <section
    class="spotlight"
    :style="{ height: spotlightHeight, backgroundImage: 'url(' + url + ')' }"
  >
    <div class="spotlight-holder">
      <div class="container d-flex justify-content-center align-items-center">
        <h2
          class="heading display-4 font-weight-400 text-white mt-5 animated"
          data-animation-in="fadeInUp"
          data-animation-delay="2000"
        >
          <span class="font-weight-500">{{ title }}</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  /**
   * 中间的标题
   */
  title?: string;
  /**
   * 背景图片url
   */
  url: string;
  /**
   * 最小高度
   */
  minHeight?: number;
}

const { title = '', url, minHeight = 220 } = defineProps<Props>();

const windowWidth = ref(0);

onMounted(() => {
  if (import.meta.client) {
    windowWidth.value = document.documentElement.clientWidth;
    // 监听窗口大小变化
    const handleResize = () => {
      windowWidth.value = document.documentElement.clientWidth;
    };
    window.addEventListener('resize', handleResize);

    // 在组件卸载时移除事件监听器
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
  }
});

const spotlightHeight = computed(() => {
  return Math.max(windowWidth.value * 0.3, minHeight) + 'px';
});
</script>

<style lang="scss" scoped>
.spotlight {
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-shadow: 1px 1px 2px black;

  .container {
    height: 100%;
  }
}

.spotlight-holder {
  height: 100%;
}
</style>
