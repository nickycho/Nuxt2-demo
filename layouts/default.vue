<template>
  <div>
    <Nuxt />

    <van-tabbar v-model="tabActive">
      <van-tabbar-item replace icon="home-o" to="./home">總覽</van-tabbar-item>
      <van-tabbar-item replace icon="friends-o" to="./messages">訊息</van-tabbar-item>
      <van-tabbar-item replace icon="setting-o" to="./settings">設定</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
