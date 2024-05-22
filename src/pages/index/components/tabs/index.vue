<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared', // 解除样式隔离
		},
	}
</script>
<script lang='ts' setup>
	// 导入骨架屏配置
	import {
		skeletonConfigTitle,
		skeletonConfigContent
	} from './skeleton-config'
	interface Props {
		loading: boolean,
		data: Array < any >
	}
	const props = withDefaults(defineProps < Props > (), {
		loading: true,
		data: () => []
	})
	// 当前活跃下标
	const activeIndex = ref(0);
	// 滑块的背景图
	const lineBg = ref(
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII="
	)


	// 点击tabs的title时回调触发
	const clickTabsTitile = (data: {
		index: number
	}) => {
		activeIndex.value = data.index
	}
	watch(() => activeIndex.value, (val) => {
		console.log(val)
	})
</script>
<template>
	<view class="wrap">
		<uv-skeletons :loading="props.loading" :skeleton="skeletonConfigTitle">
			<uv-tabs keyName="title" v-if="props?.data?.length>0" :list="props?.data"
				:lineColor="`url(${lineBg}) 100% 100%`" @click="clickTabsTitile" :current="activeIndex" :activeStyle="{
			color: '#303133',
			fontWeight: 'bold',
			transform: 'scale(1.05)'
    	}">
			</uv-tabs>
		</uv-skeletons>
		<view style='margin-top:20rpx'>
			<uv-skeletons :loading="props.loading" :skeleton="skeletonConfigContent">
				<uv-swiper v-if="props?.data?.length > 0" :list="props?.data" :current="activeIndex" key keyName="image"
					@change="e => activeIndex = e.current" :autoplay="false"></uv-swiper>
			</uv-skeletons>
		</view>

	</view>
</template>

<style lang='scss' scoped>
	.wrap {
		padding-top: 26rpx;

		/* tabs栏 */
		:deep(.uv-tabs) {
			.uv-tabs__wrapper__nav__item {
				padding-bottom: 20rpx;
				height: 26rpx !important;

				text {
					font-size: 26rpx;
				}
			}

			.uv-tabs__wrapper__nav__line {
				bottom: 4rpx;
				height: 5rpx !important;
			}
		}

		/* content栏 */
		:deep(.uv-swiper) {
			background-color: #fff !important;
			height: 280rpx !important;

			.uv-swiper__wrapper {
				height: 100% !important;

				.uv-swiper__wrapper__item__wrapper {
					border-radius: 10rpx;
					height: 100% !important;

					.uv-swiper__wrapper__item__wrapper__image {
						border-radius: 30rpx !important;
						height: 100% !important;
					}
				}
			}
		}

	}
</style>