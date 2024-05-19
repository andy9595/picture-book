<template>
	<view class="wrap">
		<uv-skeletons :loading="props.loading" :skeleton="skeletonConfig">
			<view class="content">
				<view v-for="(item,index) in imgList" class="images-wrap" :key="index">
					<image :src="item.url" mode='aspectFill'></image>
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
		data : any
	}
	const props = withDefaults(defineProps<Props>(), {
		loading: true,
		data: () => ({})
	})
	// 广告图数据数据
	const imgList = ref(
		[{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
		},
		{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
		},
		],
	)
</script>

<style lang="scss">
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