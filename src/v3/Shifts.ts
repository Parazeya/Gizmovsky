import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Shifts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getShifts
   */
  getShifts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; isActive?: boolean; operatorId?: any; registerId?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/shifts`;
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
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getShiftsById
   */
  getShiftsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; operatorId?: any; registerId?: any; isActive?: boolean; isEnding?: boolean; startTime?: string; endTime?: any; startCash?: any; branchId?: any }>> {
    const url = `/api/v3/shifts/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putShiftsByIdEnd
   */
  putShiftsByIdEnd(id: string | number, data: { counts?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/shifts/${id}/end`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putShiftsByIdLock
   */
  putShiftsByIdLock(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/shifts/${id}/lock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putShiftsByIdUnlock
   */
  putShiftsByIdUnlock(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/shifts/${id}/unlock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getShiftsByIdExpected
   */
  getShiftsByIdExpected(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ exepected?: any[]; expectedTotal?: any }>> {
    const url = `/api/v3/shifts/${id}/expected`;
    return this.client.request('get', url, {}, params);
  }
}
