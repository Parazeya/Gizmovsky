import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Shift {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns shifts.
   */
  getShift(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[]; isActive?: boolean; operatorId?: number; registerId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/shift`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.isActive !== undefined) query['IsActive'] = options.isActive;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns shifts.
   */
  getShiftById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; operatorId?: number; registerId?: number; isActive?: boolean; isEnding?: boolean; startTime?: string; endTime?: string; startCash?: number }>> {
    const url = `/api/v2.0/shift/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Ends shift.
   */
  putShiftByIdEnd(id: string | number, data: { counts?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/shift/${id}/end`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Locks shift.
   */
  putShiftByIdLock(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/shift/${id}/lock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Unlocks shift.
   */
  putShiftByIdUnlock(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/shift/${id}/unlock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Returns shift expected values.
   */
  getShiftByIdExpected(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ exepected?: any[]; expectedTotal?: number }>> {
    const url = `/api/v2.0/shift/${id}/expected`;
    return this.client.request('get', url, {}, params);
  }
}
