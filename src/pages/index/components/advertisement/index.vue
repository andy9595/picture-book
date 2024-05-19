<template>
	<view class="wrap">
		<view class="content">
			<view v-for="(item,index) in imgList" class="images-wrap" :key="index">
				<image :src="item.url" mode='aspectFill'></image>
			</view>
		</view>

	</view>

</template>

<script setup lang="ts">
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