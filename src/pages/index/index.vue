<script setup lang="ts">
	import { onReady } from '@dcloudio/uni-app';
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
		banners: [],
		// 瓷片区
		porcelainList: [],
		// 金刚区
		diamondList: [],
		// 选项卡区
		tabList: []
	})


	// 获取首页基础数据
	const getIndexBaeData = async () => {
		const { code = 0, data, message = '' } = await indexData()
		if (code === 200) {
			loading.value = false;
			// banner赋值
			dataConfig.banners = data?.banners || [];
			// 瓷片区赋值
			dataConfig.porcelainList = [
				{
					image: data?.porcelain_en_icon,
				},
				{
					image: data?.porcelain_ch_icon,
				}
			]
			// 金刚区赋值
			dataConfig.diamondList = data?.diamond_regions || []
			// 选项卡区赋值
			dataConfig.tabList = data?.sliding_block || []
		} else {
			toast.value && (toast.value as any).show({
				type: 'default',
				message: message
			})
		}
	}
	// 页面加载时
	onReady(() => {
		getIndexBaeData()
	})
	// 吐司提示Dom
	const toast = ref(null);
</script>
<template>
	<view class="index-wrap">
		<!-- 顶部轮播图组件 -->
		<BannerWrap :loading="loading" :data="dataConfig.banners" />
		<!-- 瓷片区-轮播图下方广告图组件 -->
		<AdvertisementWrap :loading="loading" :data='dataConfig.porcelainList' />
		<!-- 金刚区组件  -->
		<Diamond :loading="loading" :data="dataConfig.diamondList" />
		<!-- 选项卡组件 -->
		<TabsWrap :loading="loading" :data="dataConfig.tabList" />
		<!-- 吐司提示组件 -->
		<uv-toast ref="toast"></uv-toast>
	</view>
</template>



<style lang="scss">
	.index-wrap {
		padding: 0 30rpx;
	}
</style>