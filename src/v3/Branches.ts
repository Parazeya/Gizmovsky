import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Branches {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getBranches
   */
  getBranches(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; name?: string; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/branches`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.name !== undefined) query['Name'] = options.name;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postBranches
   */
  postBranches(data: { name?: string; businessName?: any; country?: any; city?: any; address?: any; phone?: any; email?: any; postalCode?: any; region?: any; webSite?: any; info?: any; timeZone?: any; hasBusinessSchedule?: boolean; businessStartWeekDay?: any; businessEndWeekDay?: any; businessDayStart?: any; businessDayEnd?: any; isFiscalizationEnabled?: any; businessVATID?: any; taxSystem?: any; goodsTaxSystem?: any; servicesTaxSystem?: any; depositTaxSystem?: any; goodsVATRate?: any; servicesVATRate?: any; depositVATRate?: any; timeBasedServiceVATRate?: any; treatDepositsAsService?: any; depositServiceDescription?: any; companionId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/branches`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putBranches
   */
  putBranches(data: { id?: any; name?: string; businessName?: any; country?: any; city?: any; address?: any; phone?: any; email?: any; postalCode?: any; region?: any; webSite?: any; info?: any; timeZone?: any; hasBusinessSchedule?: boolean; businessStartWeekDay?: any; businessEndWeekDay?: any; businessDayStart?: any; businessDayEnd?: any; isFiscalizationEnabled?: any; businessVATID?: any; taxSystem?: any; goodsTaxSystem?: any; servicesTaxSystem?: any; depositTaxSystem?: any; goodsVATRate?: any; servicesVATRate?: any; depositVATRate?: any; timeBasedServiceVATRate?: any; treatDepositsAsService?: any; depositServiceDescription?: any; companionId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/branches`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getBranchesById
   */
  getBranchesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; businessName?: any; country?: any; city?: any; address?: any; phone?: any; email?: any; postalCode?: any; region?: any; webSite?: any; info?: any; timeZone?: any; hasBusinessSchedule?: boolean; businessStartWeekDay?: any; businessEndWeekDay?: any; businessDayStart?: any; businessDayEnd?: any; isFiscalizationEnabled?: any; businessVATID?: any; taxSystem?: any; goodsTaxSystem?: any; servicesTaxSystem?: any; depositTaxSystem?: any; goodsVATRate?: any; servicesVATRate?: any; depositVATRate?: any; timeBasedServiceVATRate?: any; treatDepositsAsService?: any; depositServiceDescription?: any; companionId?: any; guid?: string; isDisabled?: boolean; disableTime?: any; isDeleted?: boolean }>> {
    const url = `/api/v3/branches/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteBranchesById
   */
  deleteBranchesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/branches/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putBranchesByIdUndelete
   */
  putBranchesByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/branches/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getBranchesNameExists
   */
  getBranchesNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/branches/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getBranchesByBranchIdTimezone
   */
  getBranchesByBranchIdTimezone(branchId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string; displayName?: string }>> {
    const url = `/api/v3/branches/${branchId}/timezone`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putBranchesByIdEnable
   */
  putBranchesByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/branches/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putBranchesByIdDisable
   */
  putBranchesByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/branches/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getBranchesByIdCounters
   */
  getBranchesByIdCounters(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ branchId?: any; endpoints?: any; computers?: any; controllers?: any }>> {
    const url = `/api/v3/branches/${id}/counters`;
    return this.client.request('get', url, {}, params);
  }
}
