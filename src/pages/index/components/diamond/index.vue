<script lang="ts" setup>
	// 导入骨架屏配置
	import { skeletonConfig } from './skeleton-config'
	interface Props {
		loading : boolean,
		data : Array<any>
	}
	const props = withDefaults(defineProps<Props>(), {
		loading: true,
		data: () => []
	})
</script>
<template>
	<view class='wrap'>
		<uv-skeletons :loading="props.loading" :skeleton="skeletonConfig">
			<!-- 金刚区区域 -->
			<view class='content'>
				<view v-for="(item,index) in props?.data" class='diamond-wrap' :key="index">
					<view class="diamond-icon">
						<image :src="item.icon" mode='aspectFill'></image>
					</view>
					<text class='diamond-title'>{{item.text}}</text>
				</view>
			</view>
		</uv-skeletons>
	</view>
</template>
<style lang="scss" scoped>
	.wrap {
		margin-bottom:20rpx;
		.content {
			display: flex;
			justify-content: space-around;

			// 金刚区每个盒子
			.diamond-wrap {
				margin: 0 auto;
				width: 25%;
				text-align: center;

				// 金刚区图标
				.diamond-icon {
					width: 100rpx;
					height: 100rpx;
					margin: 0 auto;
					margin-bottom: 4rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
				}

				// 金刚区标题
				.diamond-title {
					color: #9d9d9d;
					font-size: 20rpx;
				}
			}
		}
	}
</style>