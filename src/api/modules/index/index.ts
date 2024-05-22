import { request } from "@/utils/request";
import { INDEX } from "@/api/api";
import type { Response } from './http-interface'


// 首页数据
export const indexData = () => {
	return request<Response>(INDEX.baseData, 'GET')
}