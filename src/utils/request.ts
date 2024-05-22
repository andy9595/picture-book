


// 封装公共请求方法
export const request =<T>(url : string, method : 'GET' | 'POST', data ?: object | any) : Promise<T> => {
	return new Promise(function (resolve, reject) {
		let header = {
			'content-type': 'application/json',
			// Authorization: 'Bearer' + ' ' + uni.getStorageSync('token'),
			Accept: 'application/json, text/plain, */*',
			'X-Requested-With': 'XMLHttpRequest',
		};

		uni.request({
			url,
			method,
			data,
			header,
			timeout: 100000,
			success(res : any) {
				uni.hideLoading();
				resolve(res.data);
			},
			fail(err) {
				console.log('err', err);
				uni.hideLoading();
				//请求失败
				uni.showToast({
					title: '请求超时',
					icon: 'none'
				});
				reject(err);
			}
		});
	});
}