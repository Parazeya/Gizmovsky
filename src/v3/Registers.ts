import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Registers {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getRegisters
   */
  getRegisters(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; name?: string; branchId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/registers`;
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
   * postRegisters
   */
  postRegisters(data: { number?: any; name?: string; startCash?: any; idleTimeout?: any; paymentTerminalNumber?: any; fiscalReceiptPrinterNumber?: any; stockId?: any; companionId?: any; branchId?: any; qrDisplayNumber?: any; isDefault?: boolean; isGlobalDefault?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/registers`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putRegisters
   */
  putRegisters(data: { id?: any; number?: any; name?: string; startCash?: any; idleTimeout?: any; paymentTerminalNumber?: any; fiscalReceiptPrinterNumber?: any; stockId?: any; companionId?: any; branchId?: any; qrDisplayNumber?: any; isDefault?: boolean; isGlobalDefault?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/registers`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getRegistersById
   */
  getRegistersById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; number?: any; name?: string; startCash?: any; idleTimeout?: any; paymentTerminalNumber?: any; fiscalReceiptPrinterNumber?: any; stockId?: any; isDeleted?: boolean; companionId?: any; branchId?: any; qrDisplayNumber?: any; isDefault?: boolean; isGlobalDefault?: boolean }>> {
    const url = `/api/v3/registers/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteRegistersById
   */
  deleteRegistersById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/registers/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putRegistersByIdUndelete
   */
  putRegistersByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/registers/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putRegistersByIdName
   */
  putRegistersByIdName(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/registers/${id}/name`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getRegistersNameExists
   */
  getRegistersNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/registers/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getRegistersNameBranchesByBranchIdExists
   */
  getRegistersNameBranchesByBranchIdExists(branchId: string | number, options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/registers/name/branches/${branchId}/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }
}
