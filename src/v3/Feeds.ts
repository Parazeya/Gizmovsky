import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Feeds {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getFeeds
   */
  getFeeds(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/feeds`;
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
   * postFeeds
   */
  postFeeds(data: { title?: string; maximum?: any; url?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/feeds`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putFeeds
   */
  putFeeds(data: { id?: any; title?: string; maximum?: any; url?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/feeds`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getFeedsById
   */
  getFeedsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ title?: string; maximum?: any; url?: string; id?: any }>> {
    const url = `/api/v3/feeds/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteFeedsById
   */
  deleteFeedsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/feeds/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getFeedsByIdBranches
   */
  getFeedsByIdBranches(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ isEnabled?: any; branchId?: any }>>> {
    const url = `/api/v3/feeds/${id}/branches`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postFeedsByIdBranches
   */
  postFeedsByIdBranches(id: string | number, data: { branchId?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/feeds/${id}/branches`;
    return this.client.request('post', url, data, params);
  }
}
