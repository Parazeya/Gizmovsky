import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Registers {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all registers.
   */
  getRegisters(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[]; name?: string; branchId?: number; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/registers`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.name !== undefined) query['Name'] = options.name;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a register.
   */
  postRegisters(data: { number?: number; name?: string; macAddress?: string; startCash?: number; idleTimeout?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/registers`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a register.
   */
  putRegisters(data: { id?: number; number?: number; name?: string; macAddress?: string; startCash?: number; idleTimeout?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/registers`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a register by id.
   */
  getRegistersById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; number?: number; name?: string; macAddress?: string; startCash?: number; idleTimeout?: number; isDeleted?: boolean }>> {
    const url = `/api/v2.0/registers/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a register.
   */
  deleteRegistersById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/registers/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Undelete a register.
   */
  putRegistersById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/registers/${id}`;
    return this.client.request('put', url, {}, params);
  }
}
