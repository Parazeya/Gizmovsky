import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class AssetTypes {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all asset types.
   */
  getAssetTypes(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; assetTypeName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/assettypes`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.assetTypeName !== undefined) query['AssetTypeName'] = options.assetTypeName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an asset type.
   */
  postAssetTypes(data: { name?: string; description?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/assettypes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an asset type.
   */
  putAssetTypes(data: { id?: number; name?: string; description?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assettypes`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an asset type by id.
   */
  getAssetTypesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; description?: string }>> {
    const url = `/api/v2.0/assettypes/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an asset type.
   */
  deleteAssetTypesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assettypes/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
