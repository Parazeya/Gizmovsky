import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class BillingProfiles {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getBillingProfiles
   */
  getBillingProfiles(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; billingProfileName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/billingprofiles`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.billingProfileName !== undefined) query['BillingProfileName'] = options.billingProfileName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postBillingProfiles
   */
  postBillingProfiles(data: { name?: string; defaultRate?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/billingprofiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putBillingProfiles
   */
  putBillingProfiles(data: { id?: any; name?: string; defaultRate?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/billingprofiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getBillingProfilesById
   */
  getBillingProfilesById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; defaultRate?: any; rates?: any[] }>> {
    const url = `/api/v3/billingprofiles/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * deleteBillingProfilesById
   */
  deleteBillingProfilesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/billingprofiles/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getBillingProfilesByIdRates
   */
  getBillingProfilesByIdRates(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; startFee?: any; minimumFee?: any; rate?: any; chargeEvery?: any; chargeAfter?: any; isStepBased?: boolean; rateSteps?: any[]; days?: any[] }>>> {
    const url = `/api/v3/billingprofiles/${id}/rates`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postBillingProfilesByIdRates
   */
  postBillingProfilesByIdRates(id: string | number, data: { startFee?: any; minimumFee?: any; rate?: any; chargeEvery?: any; chargeAfter?: any; isStepBased?: boolean; rateSteps?: any[]; days?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/billingprofiles/${id}/rates`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putBillingProfilesRates
   */
  putBillingProfilesRates(data: { id?: any; startFee?: any; minimumFee?: any; rate?: any; chargeEvery?: any; chargeAfter?: any; isStepBased?: boolean; rateSteps?: any[]; days?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/billingprofiles/rates`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteBillingProfilesByIdRatesByBillingProfileRateId
   */
  deleteBillingProfilesByIdRatesByBillingProfileRateId(id: string | number, billingProfileRateId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/billingprofiles/${id}/rates/${billingProfileRateId}`;
    return this.client.request('delete', url, {}, params);
  }
}
