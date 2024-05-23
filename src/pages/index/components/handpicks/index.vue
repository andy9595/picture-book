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
							<view class='book-type'>
								<view class='language'>
									<text v-if="bookItem.language==='cn'">中文</text>
									<text v-else-if="bookItem.language==='en'">英文</text>
								</view>
								<view :class="['money-type',bookItem.read]">
									<text v-if="bookItem.read==='free'">限免</text>
									<text v-else-if="bookItem.read==='vip'">VIP</text>
								</view>
							</view>
						</view>
						<text class='diamond-title'>{{bookItem.title}}</text>
						<view :class="['level',bookItem.language]">{{bookItem.difficulty_level}}</view>
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
				padding-top: 4rpx;
			}

			.book-item {
				width: 33%;
				margin: 0 auto;
				text-align: center;
				position: relative;

				.level {
					position: absolute;
					right: 10rpx;
					top: 0rpx;
					width: 30rpx;
					height: 30rpx;
					border-radius: 0 12rpx 0 12rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 16rpx;
					font-weight: bold;
					color: #fff;
						box-shadow: -3rpx 6rpx 6rpx -1rpx rgba(0, 0, 0, 0.2);

					&.en {
						background-color: #308bfe;
					}

					&.cn {
						background-color: #fd775b
					}


					/*right: 15rpx;
					top: -1rpx;
					font-size: 14rpx;
					font-weight: bold;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					--r: 8rpx;
					border-inline: 5rpx solid #0000;
					width: 18rpx;
					padding: 2rpx 3rpx calc(var(--r) + 1rpx);
					clip-path: polygon(0 0, 100% 0, 100% 100%, calc(100% - 5rpx) calc(100% - var(--r)), 50% 100%, 5rpx calc(100% - var(--r)), 0 100%);
					background:
						radial-gradient(50% .2em at top, #000a, #0000) border-box,
						#bd1550 padding-box; */




				}

				/* 第二排 */
				&:nth-child(n+4) {
					margin-top: 50rpx;
				}


				.diamond-title {
					font-size: 24rpx;
					padding: 0 16rpx;
				}

				.book-img {

					position: relative;
					width: 190rpx;
					height: 230rpx;
					margin: 0 auto;
					margin-bottom: 16rpx;
					border-radius: 12rpx;
					overflow: hidden;
					box-shadow: 3rpx 3rpx 6rpx 2rpx rgba(0, 0, 0, 0.2);

					image {
						width: 100%;
						height: 100%;
					}

					.book-type {
						position: absolute;
						bottom: 0;
						right: 0;
						height: 16%;
						background-color: rgba(0, 0, 0, 0.5);
						border-radius: 24rpx 0 0 0;
						width: 70%;

						.language {
							padding-left: 16rpx;
							font-size: 20rpx;
							color: #fff;
							display: flex;
							align-items: center;
							height: 100%;
							text-align: left;
						}

						.money-type {
							position: absolute;
							bottom: 0;
							right: 0;
							width: 70rpx;
							height: 100%;
							border-radius: 24rpx 0 0 0;
							color: #fff;
							font-size: 20rpx;
							display: flex;
							align-items: center;
							justify-content: center;

							&.free {
								background-color: #ff8728;
							}

							&.vip {
								background-color: #fed600;
								color: #000;
								font-weight: bold;

								text {
									padding-top: 2rpx;
								}
							}
						}

					}


				}
			}
		}

	}
</style>