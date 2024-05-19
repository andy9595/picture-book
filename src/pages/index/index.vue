<script setup lang="ts">
	// 顶部轮播图组件
	import BannerWrap from './components/banner/index.vue'
	// 轮播图下方广告图组件
	import AdvertisementWrap from './components/advertisement/index.vue'
	// 金刚区组件
	import Diamond from './components/diamond/index.vue'
</script>
<template>
	<view class="index-wrap">
		<!-- 顶部轮播图组件 -->
		<BannerWrap></BannerWrap>
		<!-- 轮播图下方广告图组件 -->
		<AdvertisementWrap></AdvertisementWrap>
		<!-- 金刚区组件  -->
		<Diamond></Diamond>
	</view>
</template>



<style lang="scss">
	.index-wrap {
		padding: 0 30rpx;
	}
</style>