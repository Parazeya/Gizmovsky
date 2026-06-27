import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Hosts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getHosts
   */
  getHosts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; hostName?: string; isDeleted?: boolean; expand?: string[]; hostType?: any; branchId?: any; searchValue?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/hosts`;
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
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.searchValue !== undefined) query['SearchValue'] = options.searchValue;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postHosts
   */
  postHosts(data: { hostType?: any; hostGroupId?: any; number?: any; name?: string; isOutOfOrder?: boolean; isLocked?: boolean; iconId?: any; isDeleted?: boolean; hostComputer?: any; hostEndpoint?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/hosts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putHosts
   */
  putHosts(data: { id?: any; hostGroupId?: any; number?: any; name?: string; isOutOfOrder?: boolean; isLocked?: boolean; iconId?: any; isDeleted?: boolean; hostComputer?: any; hostEndpoint?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getHostsById
   */
  getHostsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/hosts/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteHostsById
   */
  deleteHostsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ hostDeleteResult?: number }>> {
    const url = `/api/v3/hosts/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putHostsById
   */
  putHostsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts/${id}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getHostsByIdDevicesAssignments
   */
  getHostsByIdDevicesAssignments(id: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; deviceId?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/hosts/${id}/devices/assignments`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.deviceId !== undefined) query['DeviceId'] = options.deviceId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostsByIdDevices
   */
  getHostsByIdDevices(id: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; deviceId?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/hosts/${id}/devices`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.deviceId !== undefined) query['DeviceId'] = options.deviceId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postHostsByIdDevicesByDeviceId
   */
  postHostsByIdDevicesByDeviceId(id: string | number, deviceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/hosts/${id}/devices/${deviceId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteHostsByIdDevicesByDeviceId
   */
  deleteHostsByIdDevicesByDeviceId(id: string | number, deviceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts/${id}/devices/${deviceId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postHostsByIdLockByValue
   */
  postHostsByIdLockByValue(id: string | number, value: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts/${id}/lock/${value}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostsByIdOutoforderByValue
   */
  postHostsByIdOutoforderByValue(id: string | number, value: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts/${id}/outoforder/${value}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostsByIdOn
   */
  postHostsByIdOn(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts/${id}/on`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostsByIdOff
   */
  postHostsByIdOff(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hosts/${id}/off`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getHostsByIdLayoutgroups
   */
  getHostsByIdLayoutgroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ hostLayoutGroupId?: any; isHidden?: boolean }>>> {
    const url = `/api/v3/hosts/${id}/layoutgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getHostsStatus
   */
  getHostsStatus(options: { layoutId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ hostId?: any; number?: any; name?: string; hostGroupId?: any; hostGroupName?: any; row?: any; column?: any; isLocked?: boolean; isOutOfOrder?: boolean; isInMaintenance?: boolean; isConnected?: boolean; layoutGroupId?: any; sessions?: any[] }>>> {
    const url = `/api/v3/hosts/status`;
    const query: Record<string, any> = { ...params };
    if (options.layoutId !== undefined) query['LayoutId'] = options.layoutId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostsByIdStatus
   */
  getHostsByIdStatus(id: string | number, options: { layoutGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ hostId?: any; number?: any; name?: string; hostGroupId?: any; hostGroupName?: any; row?: any; column?: any; isLocked?: boolean; isOutOfOrder?: boolean; isInMaintenance?: boolean; isConnected?: boolean; layoutGroupId?: any; sessions?: any[] }>> {
    const url = `/api/v3/hosts/${id}/status`;
    const query: Record<string, any> = { ...params };
    if (options.layoutGroupId !== undefined) query['layoutGroupId'] = options.layoutGroupId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostsStatusStream
   */
  getHostsStatusStream(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hosts/status/stream`;
    return this.client.request('get', url, {}, params);
  }
}
