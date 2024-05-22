<template>
	<view class="wrap">
		<uv-skeletons :loading="props.loading" :skeleton="skeletonConfig">
			<view class="content" v-if="props?.data?.length>0">
				<view v-for="(item,index) in props?.data" class="images-wrap" :key="index">
					<image :src="item.image" mode='aspectFill'></image>
				</view>
			</view>
		</uv-skeletons>

	</view>

</template>

<script setup lang="ts">
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

<style lang="scss" scoped>
	.wrap {
		padding-bottom: 30rpx;

		.content {
			height: 100%;
			display: flex;
			justify-content: space-around;
		}

		.images-wrap {
			width: calc(50% - 20rpx);
			height: 140rpx;

			image {
				border-radius: 26rpx;
				width: 100%;
				height: 100%
			}
		}
	}
</style>