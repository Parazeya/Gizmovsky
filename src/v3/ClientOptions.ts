import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ClientOptions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getClientOptions
   */
  getClientOptions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/clientoptions`;
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
   * postClientOptions
   */
  postClientOptions(data: { name?: string; clientOptionSkin?: any; customCSS?: any; isDefault?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/clientoptions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putClientOptions
   */
  putClientOptions(data: { id?: any; name?: string; clientOptionSkin?: any; customCSS?: any; isDefault?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clientoptions`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getClientOptionsById
   */
  getClientOptionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; clientOptionSkin?: any; customCSS?: any; isDefault?: boolean }>> {
    const url = `/api/v3/clientoptions/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteClientOptionsById
   */
  deleteClientOptionsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clientoptions/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putClientOptionsByIdSetasdefault
   */
  putClientOptionsByIdSetasdefault(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clientoptions/${id}/setasdefault`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getClientOptionsByIdImagesBySkinImageType
   */
  getClientOptionsByIdImagesBySkinImageType(id: string | number, skinImageType: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ imageType?: number; imageName?: any; image?: any }>> {
    const url = `/api/v3/clientoptions/${id}/images/${skinImageType}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putClientOptionsByIdImages
   */
  putClientOptionsByIdImages(id: string | number, data: { imageType?: number; imageName?: any; image?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clientoptions/${id}/images`;
    return this.client.request('put', url, data, params);
  }
}
