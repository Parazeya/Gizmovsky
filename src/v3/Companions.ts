import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Companions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getCompanions
   */
  getCompanions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; registerId?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/companions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postCompanions
   */
  postCompanions(data: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/companions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putCompanions
   */
  putCompanions(data: { id?: any; name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/companions`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getCompanionsById
   */
  getCompanionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; guid?: string }>> {
    const url = `/api/v3/companions/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteCompanionsById
   */
  deleteCompanionsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/companions/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getCompanionsConnections
   */
  getCompanionsConnections(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ companionId?: any; connectionId?: any; remoteIpAddress?: any; localIpAddress?: any; remotePort?: any; localPort?: any }>>> {
    const url = `/api/v3/companions/connections`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postCompanionsByGuidCashdrawerOpen
   */
  postCompanionsByGuidCashdrawerOpen(guid: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/companions/${guid}/cashdrawer/open`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postCompanionsCashdrawerOpen
   */
  postCompanionsCashdrawerOpen(params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/companions/cashdrawer/open`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postCompanionsByGuidPrinterXreport
   */
  postCompanionsByGuidPrinterXreport(guid: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/companions/${guid}/printer/x-report`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postCompanionsPrinterXreport
   */
  postCompanionsPrinterXreport(params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/companions/printer/x-report`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postCompanionsByGuidTerminalXreport
   */
  postCompanionsByGuidTerminalXreport(guid: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/companions/${guid}/terminal/x-report`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postCompanionsTerminalXreport
   */
  postCompanionsTerminalXreport(params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/companions/terminal/x-report`;
    return this.client.request('post', url, {}, params);
  }
}
