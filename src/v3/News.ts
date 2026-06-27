import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class News {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getNews
   */
  getNews(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; startDate?: string; endDate?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/news`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.startDate !== undefined) query['StartDate'] = options.startDate;
    if (options.endDate !== undefined) query['EndDate'] = options.endDate;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postNews
   */
  postNews(data: { title?: string; data?: any; startDate?: any; endDate?: any; url?: any; mediaUrl?: any; thumbnailUrl?: any; isCustomTemplate?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/news`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putNews
   */
  putNews(data: { id?: any; title?: string; data?: any; startDate?: any; endDate?: any; url?: any; mediaUrl?: any; thumbnailUrl?: any; isCustomTemplate?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/news`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getNewsById
   */
  getNewsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; isCustomTemplate?: boolean; title?: string; data?: any; startDate?: any; endDate?: any; url?: any; mediaUrl?: any; thumbnailUrl?: any }>> {
    const url = `/api/v3/news/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteNewsById
   */
  deleteNewsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/news/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getNewsByIdBranches
   */
  getNewsByIdBranches(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ isEnabled?: any; branchId?: any }>>> {
    const url = `/api/v3/news/${id}/branches`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postNewsByIdBranches
   */
  postNewsByIdBranches(id: string | number, data: { branchId?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/news/${id}/branches`;
    return this.client.request('post', url, data, params);
  }
}
