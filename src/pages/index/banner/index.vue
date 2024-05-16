<script setup lang="ts">
	// // 当前活跃下表
	// const activeIndex = ref<number>(0)
	// // 改变页面时赋值当前活跃下标
	// const swiperBanner = (e) => {
	// 	activeIndex.value = e.target.current
	// }
	// 轮播图数据数据
	const bannberImgList = ref(
		[{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '内容 A'
		},
		{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '内容 B'
		},
		{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '内容 C'
		}
		],
	)
	// // 点击轮播图指示点
	// const clickItem = (value : number) => {
	// 	activeIndex.value = value
	// }
	// // 轮播图指示点样式
	// const dotStyle = {
	// 	backgroundColor: 'rgba(0, 0, 0, .3)',
	// 	border: '1px rgba(0, 0, 0, .3) solid',
	// 	color: '#fff',
	// 	selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
	// 	selectedBorder: '1px rgba(0, 0, 0, .9) solid'
	// }
</script>
<template>

	<!-- <view class="banner-wrap">
		<uni-swiper-dot class='banner-swiper-wrap' @clickItem="clickItem" :info="bannberImgList" :current="activeIndex"
			mode="round" :dots-styles="dotStyle">
			<swiper @change="swiperBanner">
				<swiper-item v-for="(item, index) in bannberImgList" :key="index">
					<image class="banner-img" :src="item.url"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view> -->
	<view class='banner-wrap'>
		<uv-swiper 
					:list="bannberImgList" 
					previousMargin="30" 
					nextMargin="30" 
					circular 
					:autoplay="false" 
					radius="5" 
					bgColor="#ffffff">
				</uv-swiper>
	</view>
</template>


<style lang="scss" scoped>
	.banner-wrap {
		padding: 30rpx;
		overflow: hidden;

		.uv-swiper__wrapper__item__wrapper {
			padding: 0 30rpx;

			
		}

	}
	::v-deep .uv-swiper__wrapper__item__wrapper__image {
		border-radius: 20rpx;
	}

	
</style>