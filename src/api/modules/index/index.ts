import { request } from "@/utils/request";
import { INDEX } from "@/api/api";


// 首页数据
export const indexData = () => {
	return request<Response>(INDEX.baseData, 'GET')
}

// 猜你喜欢
export const yourLikes = (params = {}) => {
	return request<YourLikesResponse>(INDEX.youLikes, 'GET', params)
}


export interface Response {
	/**
	 * 状态，200正常
	 */
	code : number;
	/**
	 * 数据
	 */
	data : Data;
	/**
	 * 消息
	 */
	message : string;
	/**
	 * 状态标志，Success 或者 Fail
	 */
	status : string;
}

/**
 * 数据
 */
export type Data = {
	/**
	 * 轮播图
	 */
	banners ?: Banner[];
	/**
	 * 金刚区
	 */
	diamond_regions ?: DiamondRegion[];
	/**
	 * 精选绘本
	 */
	handpicks ?: Handpick[];
	/**
	 * 瓷片区-中文图标
	 */
	porcelain_ch_icon ?: string;
	/**
	 * 瓷片区-英文图标
	 */
	porcelain_en_icon ?: string;
	/**
	 * 滑块区
	 */
	sliding_block ?: SlidingBlock[];
}

export interface Banner {
	/**
	 * 图片
	 */
	image : string;
	/**
	 * 跳转
	 */
	jump : BannerJump;
}

/**
 * 跳转
 */
export interface BannerJump {
	/**
	 * 类型，1跳转webview、2跳转原生页面
	 */
	jump_type : number;
	/**
	 * 跳转webview pages参数
	 */
	pages ?: null | string;
	/**
	 * 跳转webview url地址
	 */
	url ?: null | string;
}

export interface DiamondRegion {
	/**
	 * icon
	 */
	icon : string;
	/**
	 * 跳转
	 */
	jump : DiamondRegionJump;
	/**
	 * 文本
	 */
	text : string;
}

/**
 * 跳转
 */
export interface DiamondRegionJump {
	/**
	 * 类型，1跳转webview、2跳转原生页面
	 */
	jump_type : number;
	/**
	 * 跳转webview pages参数
	 */
	pages ?: null | string;
	/**
	 * 跳转webview url地址
	 */
	url ?: null | string;
}

export type Handpick = {
	/**
	 * 难度级别，英文是蓝底色，中文是红底色
	 */
	difficulty_level : string;
	/**
	 * 点击数
	 */
	hits : number;
	/**
	 * 图片
	 */
	image : string;
	/**
	 * 导读
	 */
	intro : string;
	/**
	 * 跳转
	 */
	jump : HandpickJump;
	/**
	 * 语言，en英文，cn中文
	 */
	language : string;
	/**
	 * 发布作者
	 */
	published_author : string;
	/**
	 * 作者头像
	 */
	published_avatar : string;
	/**
	 * 阅读，free免费，vip付费
	 */
	read : string;
	/**
	 * 标题
	 */
	title : string;
}

/**
 * 跳转
 */
export interface HandpickJump {
	jump_type : number;
	pages ?: null | string;
	url ?: null | string;
}

export interface SlidingBlock {
	/**
	 * 图片
	 */
	image : string;
	/**
	 * 跳转
	 */
	jump : SlidingBlockJump;
	/**
	 * 标题
	 */
	title : string;
	[property : string] : any;
}

/**
 * 跳转
 */
export interface SlidingBlockJump {
	jump_type : number;
	pages ?: null | string;
	url ?: null | string;
}



export interface YourLikesResponse {
	code : number;
	data : YourLikesData;
	message : string;
	status : string;
	[property : string] : any;
}

export interface YourLikesData {
	data : Datum[];
	meta : Meta;
	[property : string] : any;
}

export interface Datum {
	/**
	 * 难度级别，英文是蓝底色，中文是红底色
	 */
	difficulty_level : string;
	/**
	 * 点击量，有就显示，没有就隐藏
	 */
	hits : number;
	/**
	 * 图片
	 */
	image : string;
	/**
	 * 导读，有就显示，没有就隐藏
	 */
	intro : string;
	/**
	 * 跳转
	 */
	jump : Jump;
	/**
	 * 语言，en英文，cn中文
	 */
	language : string;
	/**
	 * 发布作者，有就显示，没有就隐藏
	 */
	published_author : string;
	/**
	 * 发布人头像，有就显示，没有就隐藏
	 */
	published_avatar : string;
	/**
	 * 阅读，free免费，vip付费
	 */
	read : string;
	/**
	 * 标题
	 */
	title : string;
	[property : string] : any;
}

/**
 * 跳转
 */
export interface Jump {
	/**
	 * 类型，1跳转webview、2跳转原生页面
	 */
	jump_type : number;
	pages ?: null | string;
	url ?: null | string;
	[property : string] : any;
}

export interface Meta {
	/**
	 * 下一页游标
	 */
	next_cursor : null | string;
	/**
	 * 分页字段名字
	 */
	page_name : string;
	/**
	 * 上一页游标
	 */
	prev_cursor : null | string;
	[property : string] : any;
}