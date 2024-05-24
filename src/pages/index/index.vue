<script setup lang="ts">
	import { onReady, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
	// 引入接口
	import { indexData } from '@/api/modules/index'
	// 顶部轮播图组件
	import BannerWrap from './components/banner/index.vue'
	// 轮播图下方广告图组件
	import AdvertisementWrap from './components/advertisement/index.vue'
	// 金刚区组件
	import Diamond from './components/diamond/index.vue'
	// tabs选项卡组件
	import TabsWrap from './components/tabs/index.vue'
	// 精选绘本组件
	import Handpicks from './components/handpicks/index.vue'
	// 猜你喜欢组件
	import YourLikes from './components/your-likes/index.vue'

	// 请求首页数据的Loading
	const loading = ref<boolean>(true);
	// 首页基础数据接口数据集合
	const dataConfig = reactive<{ [k : string] : any }>({
		// 顶部banners
		banners: [],
		// 瓷片区
		porcelainList: [],
		// 金刚区
		diamondList: [],
		// 选项卡区
		tabList: [],
		// 精选绘本
		handpickList: [],
	})
	// 吐司提示Dom
	const toast = ref(null);


	// 获取首页基础数据
	const getIndexBaeData = async () => {
		loading.value = true;
		try {
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
				// 精选绘本赋值
				dataConfig.handpickList = data?.handpicks || []
			} else {
				toast.value && (toast.value as any).show({
					type: 'default',
					message: message
				})
			}
		} catch {
			toast.value && (toast.value as any).show({
				type: 'default',
				message: '请求异常...请再次刷新康康'
			})
		}
	}


	// 页面加载时
	onReady(() => {
		getIndexBaeData()
	})
	// 下拉刷新时
	onPullDownRefresh(async () => {
		await getIndexBaeData()
		uni.stopPullDownRefresh()
	})

	// 猜你喜欢组件dom
	const yourLikesDom = ref<InstanceType<typeof YourLikes> | null>(null);
	// 页面触底时请求猜你喜欢组件里的接口
	onReachBottom(() => {
		yourLikesDom.value?.getYourLikesData()
	})
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
		<!-- 精选绘本组件 -->
		<Handpicks :loading="loading" :data="dataConfig.handpickList" />
		<!-- 猜你喜欢组件 -->
		<YourLikes ref="yourLikesDom" />
		<!-- 吐司提示组件 -->
		<uv-toast :loading="loading" ref="toast" />
	</view>
</template>



<style lang="scss">
	.index-wrap {
		padding: 0 30rpx;
	}
</style>