import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ReportPresets {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getReportPresets
   */
  getReportPresets(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/reportpresets`;
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
   * postReportPresets
   */
  postReportPresets(data: { name?: string; report?: string; filters?: any; range?: number; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/reportpresets`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putReportPresets
   */
  putReportPresets(data: { id?: any; name?: string; report?: string; filters?: any; range?: number; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reportpresets`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getReportPresetsById
   */
  getReportPresetsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; report?: string; filters?: any; range?: number; displayOrder?: any }>> {
    const url = `/api/v3/reportpresets/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteReportPresetsById
   */
  deleteReportPresetsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reportpresets/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putReportPresetsByIdDisplayorderByDisplayOrder
   */
  putReportPresetsByIdDisplayorderByDisplayOrder(id: string | number, displayOrder: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reportpresets/${id}/displayorder/${displayOrder}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putReportPresetsByIdNameByName
   */
  putReportPresetsByIdNameByName(id: string | number, name: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reportpresets/${id}/name/${name}`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getReportPresetsNameExists
   */
  getReportPresetsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/reportpresets/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }
}
