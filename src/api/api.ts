
// 当前环境
const HttpEnv : 'dev' | 'test' | 'prd' = 'dev'
// 基地址配置
const baseUrlConfig = {
	'dev': 'https://api.limaogushi.com',
	'test': 'https://api.limaogushi.com',
	'prd': 'https://api.limaogushi.com'
}
// 拼接Api
const dealApi = (url : string) => {
	return `${baseUrlConfig[HttpEnv]}${url}`;
};

// 首页Api
const INDEX = {
	// 首页基础数据
	baseData: dealApi('/api/home'),
	// 首页猜你喜欢数据
	youLikes: dealApi('/api/home/guess-you-likes')
}


export type DealResultStyleUrl = {
	/** 需要替换的模板 */
	template : string;
	/** 需要处理的url */
	url : string;
	/** 需要替换成的内容 */
	resText : string | number;
};
/** 需要处理成result风格的Url */
export const dealResultStyleUrl = ({
	template,
	url,
	resText
} : DealResultStyleUrl) => {
	const needReplace = `{${template}}`;
	return url.replace(needReplace, resText as any);
};

export {
	INDEX,
};