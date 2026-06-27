import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserAgreements {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserAgreements
   */
  getUserAgreements(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; isEnabled?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/useragreements`;
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
   * postUserAgreements
   */
  postUserAgreements(data: { name?: any; agreement?: any; displayOrder?: any; isEnabled?: boolean; isRejectable?: boolean; ignoreState?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/useragreements`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUserAgreements
   */
  putUserAgreements(data: { id?: any; name?: any; agreement?: any; displayOrder?: any; isEnabled?: boolean; isRejectable?: boolean; ignoreState?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/useragreements`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUserAgreementsById
   */
  getUserAgreementsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: any; agreement?: any; displayOrder?: any; isEnabled?: boolean; isRejectable?: boolean; ignoreState?: boolean }>> {
    const url = `/api/v3/useragreements/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteUserAgreementsById
   */
  deleteUserAgreementsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/useragreements/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * deleteUserAgreementsByIdResetstates
   */
  deleteUserAgreementsByIdResetstates(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/useragreements/${id}/resetstates`;
    return this.client.request('delete', url, {}, params);
  }
}
