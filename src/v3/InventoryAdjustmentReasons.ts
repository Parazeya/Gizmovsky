import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class InventoryAdjustmentReasons {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getInventoryAdjustmentReasons
   */
  getInventoryAdjustmentReasons(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/inventoryadjustmentreasons`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postInventoryAdjustmentReasons
   */
  postInventoryAdjustmentReasons(data: { name?: string; description?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/inventoryadjustmentreasons`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putInventoryAdjustmentReasons
   */
  putInventoryAdjustmentReasons(data: { id?: any; name?: string; description?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/inventoryadjustmentreasons`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getInventoryAdjustmentReasonsById
   */
  getInventoryAdjustmentReasonsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; description?: string; isDeleted?: boolean }>> {
    const url = `/api/v3/inventoryadjustmentreasons/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteInventoryAdjustmentReasonsById
   */
  deleteInventoryAdjustmentReasonsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/inventoryadjustmentreasons/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putInventoryAdjustmentReasonsByIdUndelete
   */
  putInventoryAdjustmentReasonsByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/inventoryadjustmentreasons/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getInventoryAdjustmentReasonsNameExists
   */
  getInventoryAdjustmentReasonsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/inventoryadjustmentreasons/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }
}
