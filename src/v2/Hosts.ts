import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Hosts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all hosts.
   */
  getHosts(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; hostName?: string; isDeleted?: boolean; expand?: string[]; hostType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/hosts`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.hostName !== undefined) query['HostName'] = options.hostName;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.hostType !== undefined) query['HostType'] = options.hostType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a host.
   */
  postHosts(data: { hostType?: any; hostGroupId?: number; number?: number; name?: string; isOutOfOrder?: boolean; isLocked?: boolean; iconId?: number; isDeleted?: boolean; hostComputer?: any; hostEndpoint?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/hosts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a host.
   */
  putHosts(data: { id?: number; hostGroupId?: number; number?: number; name?: string; isOutOfOrder?: boolean; isLocked?: boolean; iconId?: number; isDeleted?: boolean; hostComputer?: any; hostEndpoint?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hosts`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a host by id.
   */
  getHostsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; hostType?: any; hostGroupId?: number; number?: number; name?: string; isOutOfOrder?: boolean; isLocked?: boolean; iconId?: number; isDeleted?: boolean; hostComputer?: any; hostEndpoint?: any }>> {
    const url = `/api/v2.0/hosts/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a host.
   */
  deleteHostsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hosts/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getHostsByIdHostdevices
   */
  getHostsByIdHostdevices(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/hosts/${id}/hostdevices`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostsByIdHostdevices
   */
  postHostsByIdHostdevices(id: string | number, data: { id?: number; hostId?: number; deviceId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/hosts/${id}/hostdevices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * deleteHostsByIdHostdevicesByHostDeviceId
   */
  deleteHostsByIdHostdevicesByHostDeviceId(id: string | number, hostDeviceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hosts/${id}/hostdevices/${hostDeviceId}`;
    return this.client.request('delete', url, {}, params);
  }
}
