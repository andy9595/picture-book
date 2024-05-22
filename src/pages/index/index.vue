<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app';
	// 引入接口
	import { indexData } from '@/api/modules/index'
	import type { Data } from '@/api/modules/http-interface'
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
	// 首页基础数据接口数据集合
	const dataConfig : Data = reactive({
		// 顶部banners
		banners: null,
	})

	onLoad(() => {
		getIndexBaeData()
	})
	// 获取首页基础数据
	const getIndexBaeData = async () => {
		const res = await indexData()
		if (res.code === 200) {
			loading.value = false;
			for (let key in dataConfig) {
				dataConfig[key] = res.data[key]
			}
		}
	}
</script>
<template>
	<view class="index-wrap">
		<!-- 顶部轮播图组件 -->
		<BannerWrap :loading="loading" :data="dataConfig?.banners" />
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