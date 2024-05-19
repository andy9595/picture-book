
// 数据请求是否请求中
// export const loading = ref<boolean>(true);
// 骨架屏配置
export const skeletonConfig = ref([{
	type: 'flex',
	num: 1,
	children: [
		{
			type: 'line',
			num: 1,
			style: ['width: calc( 100% - 20rpx);height:140rpx']
		},
		{
			type: 'line',
			num: 1,
			style: ['width:100% ;height:140rpx']
		}
	]
}])