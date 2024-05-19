<script lang="ts" setup>
	// 金刚区域数据
	const diamondData = ref(
		[{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '绘本VIP'
		},
		{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '小学英语'
		},
		{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '零基础英语'
		},
		{
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '双语数学课'
		},
		],
	)
</script>
<template>
	<view class='wrap'>
		<!-- 金刚区区域 -->
		<view class='content'>
			<view v-for="item in diamondData" class='diamond-wrap'>
				<view class="diamond-icon">
					<image :src="item.url" mode='aspectFill'></image>
				</view>
				<text class='diamond-title'>{{item.content}}</text>
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.wrap {
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