import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class AgeRestrictions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getAgeRestrictions
   */
  getAgeRestrictions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/agerestrictions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getAgeRestrictionsById
   */
  getAgeRestrictionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/agerestrictions/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteAgeRestrictionsById
   */
  deleteAgeRestrictionsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/agerestrictions/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postAgeRestrictionsLogin
   */
  postAgeRestrictionsLogin(data: { ageFrom?: any; ageTo?: any; dayMinuteFrom?: any; dayMinuteTo?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/agerestrictions/login`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postAgeRestrictionsProduct
   */
  postAgeRestrictionsProduct(data: { ageFrom?: any; ageTo?: any; dayMinuteFrom?: any; dayMinuteTo?: any; productId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/agerestrictions/product`;
    return this.client.request('post', url, data, params);
  }
}
