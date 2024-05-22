export interface Response {
    /**
     * 状态，200正常
     */
    code: number;
    /**
     * 数据
     */
    data: Data;
    /**
     * 消息
     */
    message: string;
    /**
     * 状态标志，Success 或者 Fail
     */
    status: string;
    [property: string]: any;
}

/**
 * 数据
 */
export interface Data {
    /**
     * 轮播图
     */
    banners: Banner[];
    /**
     * 金刚区
     */
    diamond_regions: DiamondRegion[];
    /**
     * 精选绘本
     */
    handpicks: Handpick[];
    /**
     * 瓷片区-中文图标
     */
    porcelain_ch_icon: string;
    /**
     * 瓷片区-英文图标
     */
    porcelain_en_icon: string;
    /**
     * 滑块区
     */
    sliding_block: SlidingBlock[];
    [property: string]: any;
}

export interface Banner {
    /**
     * 图片
     */
    image: string;
    /**
     * 跳转
     */
    jump: BannerJump;
    [property: string]: any;
}

/**
 * 跳转
 */
export interface BannerJump {
    /**
     * 类型，1跳转webview、2跳转原生页面
     */
    jump_type: number;
    /**
     * 跳转webview pages参数
     */
    pages?: null | string;
    /**
     * 跳转webview url地址
     */
    url?: null | string;
    [property: string]: any;
}

export interface DiamondRegion {
    /**
     * icon
     */
    icon: string;
    /**
     * 跳转
     */
    jump: DiamondRegionJump;
    /**
     * 文本
     */
    text: string;
    [property: string]: any;
}

/**
 * 跳转
 */
export interface DiamondRegionJump {
    /**
     * 类型，1跳转webview、2跳转原生页面
     */
    jump_type: number;
    /**
     * 跳转webview pages参数
     */
    pages?: null | string;
    /**
     * 跳转webview url地址
     */
    url?: null | string;
    [property: string]: any;
}

export interface Handpick {
    /**
     * 难度级别，英文是蓝底色，中文是红底色
     */
    difficulty_level: string;
    /**
     * 点击数
     */
    hits: number;
    /**
     * 图片
     */
    image: string;
    /**
     * 导读
     */
    intro: string;
    /**
     * 跳转
     */
    jump: HandpickJump;
    /**
     * 语言，en英文，cn中文
     */
    language: string;
    /**
     * 发布作者
     */
    published_author: string;
    /**
     * 作者头像
     */
    published_avatar: string;
    /**
     * 阅读，free免费，vip付费
     */
    read: string;
    /**
     * 标题
     */
    title: string;
    [property: string]: any;
}

/**
 * 跳转
 */
export interface HandpickJump {
    jump_type: number;
    pages?: null | string;
    url?: null | string;
    [property: string]: any;
}

export interface SlidingBlock {
    /**
     * 图片
     */
    image: string;
    /**
     * 跳转
     */
    jump: SlidingBlockJump;
    /**
     * 标题
     */
    title: string;
    [property: string]: any;
}

/**
 * 跳转
 */
export interface SlidingBlockJump {
    jump_type: number;
    pages?: null | string;
    url?: null | string;
    [property: string]: any;
}