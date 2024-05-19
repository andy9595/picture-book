// banner高度
export const bannerHeight = ref('230rpx')

// 数据请求是否请求中
// export const loading = ref<boolean>(true);
// 骨架屏配置
export const skeletonConfig = ref([{
	type: 'line',
	num: 1,
	style: [`height: ${bannerHeight.value}`]
}])