import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Promotions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPromotions
   */
  getPromotions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/promotions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postPromotions
   */
  postPromotions(data: { name?: string; description?: any; type?: number; discountId?: any; isDisabled?: boolean; period?: any; limits?: any[]; codeType?: number; codePrefix?: any; codeLength?: any; codeCount?: any; codeCharSetType?: any; branches?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/promotions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getPromotionsById
   */
  getPromotionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/promotions/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putPromotionsById
   */
  putPromotionsById(id: string | number, data: { isDisabled?: boolean; period?: any; limits?: any[]; branches?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/promotions/${id}`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deletePromotionsById
   */
  deletePromotionsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/promotions/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getPromotionsByIdCodes
   */
  getPromotionsByIdCodes(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; promotionId?: any; value?: string; status?: number }>>> {
    const url = `/api/v3/promotions/${id}/codes`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getPromotionsCodesById
   */
  getPromotionsCodesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; promotionId?: any; value?: string; status?: number }>> {
    const url = `/api/v3/promotions/codes/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putPromotionsByIdUndelete
   */
  putPromotionsByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/promotions/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putPromotionsByIdEnable
   */
  putPromotionsByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/promotions/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putPromotionsByIdDisable
   */
  putPromotionsByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/promotions/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putPromotionsCodesByIdRevoke
   */
  putPromotionsCodesByIdRevoke(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/promotions/codes/${id}/revoke`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getPromotionsByIdExport
   */
  getPromotionsByIdExport(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ fileStream?: any; contentType?: any; fileDownloadName?: any; lastModified?: any; entityTag?: any; enableRangeProcessing?: boolean }>> {
    const url = `/api/v3/promotions/${id}/export`;
    return this.client.request('get', url, {}, params);
  }
}
