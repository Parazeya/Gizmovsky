import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApiKeys {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApiKeys
   */
  getApiKeys(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; isDeleted?: boolean; isDisabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/apikeys`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postApiKeys
   */
  postApiKeys(data: { name?: string; type?: number; expireTime?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ apiKey?: string; id?: any }>> {
    const url = `/api/v3/apikeys`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getApiKeysById
   */
  getApiKeysById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: any; name?: string; apiKey?: string; type?: number; expireTime?: any; isDeleted?: boolean; isDisabled?: boolean }>> {
    const url = `/api/v3/apikeys/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApiKeysById
   */
  deleteApiKeysById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/apikeys/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putApiKeysByIdUndelete
   */
  putApiKeysByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/apikeys/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putApiKeysByIdEnable
   */
  putApiKeysByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/apikeys/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putApiKeysByIdDisable
   */
  putApiKeysByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/apikeys/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }
}
