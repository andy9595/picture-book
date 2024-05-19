<script setup lang="ts">
	// 顶部轮播图组件
	import BannerWrap from './components/banner/index.vue'
	// 轮播图下方广告图组件
	import AdvertisementWrap from './components/advertisement/index.vue'
	// 金刚区组件
	import Diamond from './components/diamond/index.vue'
	// tabs选项卡组件
	import TabsWrap from './components/tabs/index.vue'

	// 请求首页数据的Loading
	const loading = ref<boolean>(true);
	onMounted(() => {
		setTimeout(() => {
			loading.value = false
		}, 2000)
	})
</script>
<template>
	<view class="index-wrap">
		<!-- 顶部轮播图组件 -->
		<BannerWrap :loading="loading" />
		<!-- 轮播图下方广告图组件 -->
		<AdvertisementWrap :loading="loading" />
		<!-- 金刚区组件  -->
		<Diamond :loading="loading" />
		<!-- 选项卡组件 -->
		<TabsWrap />
	</view>
</template>



<style lang="scss">
	.index-wrap {
		padding: 0 30rpx;
	}
</style>