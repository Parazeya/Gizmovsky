import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class BillingProfiles {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all billing profiles.
   */
  getBillingProfiles(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; billingProfileName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/billingprofiles`;
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
   * Create a billing profile.
   */
  postBillingProfiles(data: { name?: string; defaultRate?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/billingprofiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a billing profile.
   */
  putBillingProfiles(data: { id?: number; name?: string; defaultRate?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/billingprofiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a billing profile by id.
   */
  getBillingProfilesById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; defaultRate?: any; rates?: any[] }>> {
    const url = `/api/v2.0/billingprofiles/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Delete a billing profile.
   */
  deleteBillingProfilesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/billingprofiles/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the rates of the specified billing profile.
   */
  getBillingProfilesByIdRates(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; startFee?: number; minimumFee?: number; rate?: number; chargeEvery?: number; chargeAfter?: number; isStepBased?: boolean; rateSteps?: any[]; days?: any[] }>>> {
    const url = `/api/v2.0/billingprofiles/${id}/rates`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a billing profile rate.
   */
  postBillingProfilesByIdRates(id: string | number, data: { startFee?: number; minimumFee?: number; rate?: number; chargeEvery?: number; chargeAfter?: number; isStepBased?: boolean; rateSteps?: any[]; days?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/billingprofiles/${id}/rates`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a billing profile rate.
   */
  putBillingProfilesRates(data: { id?: number; startFee?: number; minimumFee?: number; rate?: number; chargeEvery?: number; chargeAfter?: number; isStepBased?: boolean; rateSteps?: any[]; days?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/billingprofiles/rates`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a billing profile rate.
   */
  deleteBillingProfilesByIdRatesByBillingProfileRateId(id: string | number, billingProfileRateId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/billingprofiles/${id}/rates/${billingProfileRateId}`;
    return this.client.request('delete', url, {}, params);
  }
}
