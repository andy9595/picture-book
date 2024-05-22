<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared', // 解除样式隔离
		},
	}
</script>
<script setup lang="ts">
	// 导入骨架屏配置
	import { skeletonConfig, bannerHeight } from './skeleton-config'
	interface Props {
		loading : boolean,
		data : any
	}
	const props = withDefaults(defineProps<Props>(), {
		loading: true,
		data: () => []
	})
	// 当前活跃下表
	const activeIndex = ref<number>(0)
</script>
<template>
	<view class='banner-wrap'>
		<uv-skeletons :loading="props.loading" :skeleton="skeletonConfig">
			<uv-swiper v-if="props?.data?.length>0" keyName="image" :list="props.data"
				@change="e => activeIndex = e.current" autoplay>
				<template #indicator>
					<view class="indicator">
						<view class="indicator__dot" v-for="(item, index) in props.data" :key="index"
							:class="[index === activeIndex && 'indicator__dot--active']"></view>
					</view>
				</template>
			</uv-swiper>
		</uv-skeletons>
	</view>
</template>


<style lang="scss" scoped>
	.banner-wrap {
		padding: 22rpx 0;

		// 调整轮播图内容样式
		:deep(.uv-swiper) {
			background-color: #fff !important;
			height: v-bind(bannerHeight) !important;

			.uv-swiper__wrapper {
				height: 100% !important;

				.uv-swiper__wrapper__item__wrapper {
					padding: 0 10rpx;
					border-radius: 10rpx;
					height: 100% !important;

					.uv-swiper__wrapper__item__wrapper__image {
						border-radius: 30rpx !important;
						height: 100% !important;
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
				margin: 0 5rpx;
				transition: background-color 0.3s;

				&--active {
					background-color: #ffffff;
				}
			}
		}
	}
</style>