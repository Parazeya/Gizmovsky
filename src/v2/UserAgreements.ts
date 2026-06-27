import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserAgreements {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all user agreements.
   */
  getUserAgreements(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; isEnabled?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/useragreements`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.isEnabled !== undefined) query['IsEnabled'] = options.isEnabled;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a user agreement.
   */
  postUserAgreements(data: { name?: string; agreement?: string; displayOrder?: number; isEnabled?: boolean; isRejectable?: boolean; ignoreState?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/useragreements`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a user agreement.
   */
  putUserAgreements(data: { id?: number; name?: string; agreement?: string; displayOrder?: number; isEnabled?: boolean; isRejectable?: boolean; ignoreState?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/useragreements`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a user agreement by id.
   */
  getUserAgreementsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; agreement?: string; displayOrder?: number; isEnabled?: boolean; isRejectable?: boolean; ignoreState?: boolean }>> {
    const url = `/api/v2.0/useragreements/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a user agreement.
   */
  deleteUserAgreementsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/useragreements/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Reset the user states of a user agreement.
   */
  deleteUserAgreementsByIdResetstates(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/useragreements/${id}/resetstates`;
    return this.client.request('delete', url, {}, params);
  }
}
