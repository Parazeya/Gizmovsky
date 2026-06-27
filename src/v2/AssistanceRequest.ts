import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class AssistanceRequest {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets if any assistance requests are pending for current user.
   */
  getUserAssistanceRequestPendingAny(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/user/v2.0/assistancerequest/pending/any`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Creates assistance request for current user.
   */
  postUserAssistanceRequest(data: { assistanceRequestTypeId?: number; note?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/user/v2.0/assistancerequest`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Cancels pending assistance request for current user.
   */
  deleteUserAssistanceRequest(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v2.0/assistancerequest`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Gets assistance requests.
   */
  getAssistanceRequest(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[]; userId?: number; status?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/assistancerequest`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.status !== undefined) query['Status'] = options.status;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create assistance request.
   */
  postAssistanceRequest(data: { assistanceRequestTypeId?: number; userId?: number; hostId?: number; note?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/assistancerequest`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Gets assistance request.
   */
  getAssistanceRequestById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; assistanceRequestTypeId?: number; userId?: number; hostId?: number; status?: any; note?: string; createdTime?: string }>> {
    const url = `/api/v2.0/assistancerequest/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Rejects assistance request.
   */
  putAssistanceRequestByIdReject(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assistancerequest/${id}/reject`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Accepts assistance request.
   */
  putAssistanceRequestByIdAccept(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assistancerequest/${id}/accept`;
    return this.client.request('put', url, {}, params);
  }
}
