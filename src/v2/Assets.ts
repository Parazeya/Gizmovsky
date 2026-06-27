import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Assets {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all assets.
   */
  getAssets(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; tag?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/assets`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.tag !== undefined) query['Tag'] = options.tag;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an asset.
   */
  postAssets(data: { assetTypeId?: number; number?: number; tag?: string; smartCardUid?: string; barcode?: string; serialNumber?: string; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/assets`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an asset.
   */
  putAssets(data: { id?: number; assetTypeId?: number; number?: number; tag?: string; smartCardUid?: string; barcode?: string; serialNumber?: string; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assets`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an asset by id.
   */
  getAssetsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; assetTypeId?: number; number?: number; tag?: string; smartCardUid?: string; barcode?: string; serialNumber?: string; isEnabled?: boolean }>> {
    const url = `/api/v2.0/assets/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an asset.
   */
  deleteAssetsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assets/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
