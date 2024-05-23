<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared', // 解除样式隔离
		},
	}
</script>
<script lang='ts' setup>
	import {
		guid
	} from '@/uni_modules/uv-ui-tools/libs/function/index.js'
	// 引入接口
	import {
		yourLikes
	} from '@/api/modules/index'
	// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
	const changeList = (e: any) => {
		if (e.name === 'list1') {
			list1.value.push(e.value)
		} else if (e.name === 'list2') {
			list2.value.push(e.value)
		}
	}


	// 猜你喜欢数据
	const yourLikeList = ref < Array < any >> ([]);
	// 瀑布流第一列数据
	const list1 = ref([]);
	// 瀑布流第二列数据
	const list2 = ref([]);
	// 下一页的页码标识
	const nextCursor = ref < string | null > ("");
	// 获取猜你喜欢数据
	const getYourLikesData = async () => {
		try {
			const {
				code = 0, data, message = ''
			} = await yourLikes()

			if (code === 200) {
				nextCursor.value = data?.meta.next_cursor;
				data.data.forEach(item => {
					const newItem = {
						id: guid(), // 随机生成的id
						...item,
					}
					yourLikeList.value.push(newItem)
				})

			} else {
				console.log(message)
			}
		} catch {

		}
	}
	onMounted(() => {
		getYourLikesData()
	})
</script>
<template>
	<view class='wrap'>
		<view class='wrap-title'>
			<text>猜你喜欢</text>
		</view>
		<!-- 瀑布流区域 -->
		<view class='list-wrap'>
			<uv-waterfall ref="waterfall" v-model="yourLikeList" :add-time="10" column-gap="20rpx"
				@changeList="changeList">
				<!-- 第一列数据 -->
				<template #list1>
					<!-- 为了磨平部分平台的BUG，必须套一层view -->
					<view>
						<view v-for="(item, index) in list1" :key="item.id" class="waterfall-item">
							<view class="waterfall-item__image">
								<image :src="item.image" mode="aspectFill"></image>
							</view>
							<view class="waterfall-item__ft">
								<!-- 文章标题 -->
								<view class="waterfall-item__ft__title">
									<text class="value">{{item.title}}</text>
								</view>
								<!-- 导读 -->
								<view class="waterfall-item__ft__desc" v-show="item.intro">
									<text class="value">{{item.intro}}</text>
								</view>
								<!-- 发布者、播放量 -->
								<view class='waterfall-item__ft__other-info'>
									<view class='user-info' v-show="item.published_author">
										<!-- 用户头像 -->
										<view class='user-avatar'>
											<uv-avatar :src="item.published_avatar" />
										</view>
										<!-- 用户名 -->
										<text class='user-name'>{{item.published_author}}</text>
									</view>
									<!-- 点击量 -->
									<view class='count' v-show="item.hits">{{item.hits}}</view>
								</view>
							</view>
							<view class='waterfall-item__money-type' v-if="item.read==='vip'">VIP</view>

						</view>
					</view>
				</template>
				<!-- 第二列数据 -->
				<template #list2>
					<!-- 为了磨平部分平台的BUG，必须套一层view -->
					<view>
						<view v-for="(item, index) in list2" :key="item.id" class="waterfall-item">
							<view class="waterfall-item__image">
								<image :src="item.image" mode="aspectFill"></image>
							</view>
							<view class="waterfall-item__ft">
								<!-- 文章标题 -->
								<view class="waterfall-item__ft__title">
									<text class="value">{{item.title}}</text>
								</view>
								<!-- 导读 -->
								<view class="waterfall-item__ft__desc" v-show="item.intro">
									<text class="value">{{item.intro}}</text>
								</view>
								<!-- 发布者、播放量 -->
								<view class='waterfall-item__ft__other-info'>
									<view class='user-info' v-show="item.published_author">
										<!-- 用户头像 -->
										<view class='user-avatar'>
											<uv-avatar :src="item.published_avatar" />
										</view>
										<!-- 用户名 -->
										<text class='user-name'>{{item.published_author}}</text>
									</view>
									<!-- 点击量 -->
									<view class='count' v-show="item.hits">{{item.hits}}</view>
								</view>
							</view>
							<view class='waterfall-item__money-type' v-if="item.read==='vip'">VIP</view>
						</view>
					</view>
				</template>
			</uv-waterfall>
		</view>
	</view>
</template>



<style lang='scss' scoped>
	/* $show-lines: 1; */
	@import '@/uni_modules/uv-ui-tools/libs/css/variable.scss';

	.wrap {
		margin-top: 30rpx;

		/* 布局标题 */
		.wrap-title {
			font-size: 32rpx;
			font-weight: bold;
			letter-spacing: 2rpx;
		}

		/* 瀑布流区域 */
		.list-wrap {
			.waterfall-item {
				overflow: hidden;
				margin-top: 12px;
				border-radius: 8px;
				box-shadow: 3rpx 3rpx 6rpx 2rpx rgba(0, 0, 0, 0.2);
				position: relative;


				&__money-type {
					position: absolute;
					padding: 6rpx 20rpx;
					background-color: #fed500;
					border-radius: 0 0 16rpx 0;
					color: #6c3500;
					left: 0;
					top: 0;
					font-size: 22rpx;
					font-weight: bold;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				&__image {
					width: 100%;
					height: 250rpx;

					image {
						height: 100% !important;
						width: 100%;
					}
				}

				&__ft {
					padding: 8rpx 20rpx 20rpx;
					/* background: #fff; */

					/* 文章标题 */
					&__title {
						padding: 6rpx 10rpx;
						font-weight: 700;
						line-height: 32rpx;

						.value {
							font-size: 24rpx;
						}
					}

					/* 导读 */
					&__desc {
						line-height: 26rpx;

						.value {
							letter-spacing: 2rpx;
							font-size: 22rpx;
							color: #c4c4c4;
						}
					}

					/* 发布者、播放量  */
					&__other-info {
						height: 40rpx;
						margin-top: 20rpx;
						position: relative;

						/* 用户信息 */
						.user-info {
							font-size: 20rpx;
							color: #c4c4c4;
							background-color: #fafafa;
							position: absolute;
							left: 0;
							height: 100%;
							display: flex;
							border-radius: 25rpx;
							align-items: center;
							padding-left: 52rpx;
							padding-right: 12rpx;

							.user-avatar {
								position: absolute;
								left: 0;

								:deep(.uv-avatar) {
									width: 40rpx !important;
									height: 40rpx !important;

									image {
										width: 100% !important;
										height: 100% !important;
									}

								}
							}

						}

						/* 点击量 */
						.count {
							font-size: 18rpx;
							color: #c4c4c4;
							position: absolute;
							right: 0;
							height: 100%;
							display: flex;
							align-items: center;
						}
					}
				}
			}


		}
	}
</style>