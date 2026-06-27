import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Assets {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getAssets
   */
  getAssets(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; tag?: string; expand?: string[]; branchId?: any; assetTypeId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/assets`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.tag !== undefined) query['Tag'] = options.tag;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.assetTypeId !== undefined) query['AssetTypeId'] = options.assetTypeId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postAssets
   */
  postAssets(data: { assetTypeId?: any; number?: any; tag?: any; smartCardUid?: any; barcode?: any; serialNumber?: any; isEnabled?: boolean; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/assets`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putAssets
   */
  putAssets(data: { id?: any; assetTypeId?: any; number?: any; tag?: any; smartCardUid?: any; barcode?: any; serialNumber?: any; isEnabled?: boolean; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assets`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getAssetsById
   */
  getAssetsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; assetTypeId?: any; number?: any; tag?: any; smartCardUid?: any; barcode?: any; serialNumber?: any; isEnabled?: boolean; branchId?: any }>> {
    const url = `/api/v3/assets/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteAssetsById
   */
  deleteAssetsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assets/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getAssetsRfidExists
   */
  getAssetsRfidExists(options: { rfid?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/assets/rfid/exists`;
    const query: Record<string, any> = { ...params };
    if (options.rfid !== undefined) query['rfid'] = options.rfid;
    return this.client.request('get', url, {}, query);
  }
}
