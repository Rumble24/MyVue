<template>
  <div class="app-container">
    <!-- 中间的 路由 router-view 区域 缓冲所有的组件-->
    <transition>
      <keep-alive :include="keepLive">
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
export default {
  name: "App",
  computed: {
    keepLive() {
      // 此处使用 store getters 计算过的 keepLive 数组
      //（在 store 拿到 routes，循环出 meta 里面带有 keepLive: true 的 route 的 name 放到 keepLive）
      return this.$store.getters.keepLive;
    }
  }
};
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.mint-header {
  z-index: 99;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

// 该类名，解决 tabbar 点击无法切换的问题
.mui-bar-tab .mui-tab-item-llb .mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
