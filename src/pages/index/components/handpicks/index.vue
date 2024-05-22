<script lang='ts' setup>
	import type {
		Handpick
	} from '@/api/modules/http-interface'
	interface Props {
		loading: boolean,
		data: Array < any >
	}
	const props = withDefaults(defineProps < Props > (), {
		loading: true,
		data: () => []
	})

	const dealData = ref < Array < Handpick >> ([]);

	// 监听父组件传来的数据
	watch(() => props.data, (val) => {
		let groups: Array < any > = [];
		// 每6个一个分组分配一个swiper-item
		for (let i = 0; i < val.length; i += 6) {
			groups.push(val.slice(i, i + 6));
		}
		dealData.value = groups;
	})
</script>

<template>
	<view class='wrap'>
		<view>
			<text class='wrap-title'>精选绘本故事</text>
		</view>
		<view>
			<text class='wrap-description'>快来争做故事大王~</text>
		</view>
		<swiper class="swiper" :duration="200">
			<swiper-item v-for="(swiperItem,swiperIndex) in dealData" :key="swiperIndex">
				<view class="swiper-item">
					<view class="book-item" v-for="(bookItem,bookIndex) in swiperItem" :key="bookIndex">
						<view class="book-img">
							<image :src="bookItem.image" mode='aspectFill'></image>
						</view>
						<text class='diamond-title'>{{bookItem.title}}</text>
					</view>
				</view>
			</swiper-item>

		</swiper>
	</view>
</template>


<style lang='scss' scoped>
	.wrap {
		margin-top: 20rpx;
		background: linear-gradient(to bottom, #ddf3ff 0%, #ffffff 21%, #ffffff 80%, #ddf3ff 100%);
		border-radius: 20rpx;
		padding: 40rpx 30rpx;

		.wrap-title {
			font-size: 32rpx;
			font-weight: bold;
		}

		.wrap-description {
			font-size: 22rpx;
			color: #bdc2c5
		}

		swiper {
			padding-top: 32rpx;
			height: 740rpx !important;

			.swiper-item {
				display: flex;
				flex-wrap: wrap;
			}

			.book-item {
				width: 33%;
				margin: 0 auto;
				text-align: center;

				/* 第二排 */
				&:nth-child(n+4) {
					margin-top: 50rpx;
				}


				.diamond-title {
					font-size: 24rpx;
					padding: 5rpx 16rpx;
				}

				.book-img {
					width: 190rpx;
					height: 230rpx;
					margin: 0 auto;
					margin-bottom: 4rpx;

					image {
						border-radius: 10rpx;
						width: 100%;
						height: 100%;
					}
				}
			}
		}

	}
</style>