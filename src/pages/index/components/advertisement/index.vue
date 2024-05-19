
<template>
	<view class="wrap">
		<view class="content">
			<view v-for="item in bannberImgList" class="images-wrap">
				<image :src="item.url" mode='aspectFill'></image>
			</view>

		</view>

	</view>

</template>

<script setup lang="ts">
	// 轮播图数据数据
	const bannberImgList = ref(
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
		height: 180rpx;

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