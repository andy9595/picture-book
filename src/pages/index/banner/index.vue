<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared', // 解除样式隔离
		},
	}
</script>
<script setup lang="ts">
	// // 当前活跃下表
	const activeIndex = ref<number>(0)
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
</script>
<template>
	<view class='banner-wrap'>

		<uv-swiper :list="bannberImgList" @change="e => activeIndex = e.current" autoplay height='86'>
			<template #indicator>
				<view class="indicator">
					<view class="indicator__dot" v-for="(item, index) in bannberImgList" :key="index"
						:class="[index === activeIndex && 'indicator__dot--active']"></view>
				</view>
			</template>
		</uv-swiper>
	</view>
</template>


<style lang="scss" scoped>
	.banner-wrap {
		padding: 10rpx 20rpx;
		// 调整轮播图内容样式
		:deep(.uv-swiper) {
			background-color: #fff !important;

			.uv-swiper__wrapper {
				.uv-swiper__wrapper__item__wrapper {
					padding: 0 10rpx;
					border-radius: 10rpx;

					.uv-swiper__wrapper__item__wrapper__image {
						border-radius: 30rpx !important;
					}
				}
			}
		}


		@mixin flex($direction: row) {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: $direction;
		}

		.indicator {
			@include flex(row);
			justify-content: center;

			&__dot {
				height: 20rpx;
				width: 20rpx;
				border-radius: 50%;
				background-color: rgba(255, 255, 255, 0.35);
				margin: 0 5px;
				transition: background-color 0.3s;

				&--active {
					background-color: #ffffff;
				}
			}
		}
	}
</style>