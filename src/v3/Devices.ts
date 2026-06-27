import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Devices {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getDevices
   */
  getDevices(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; deviceType?: any; expand?: string[]; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/devices`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.deviceType !== undefined) query['DeviceType'] = options.deviceType;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postDevices
   */
  postDevices(data: { deviceType?: number; name?: any; isEnabled?: boolean; hdmiDevice?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/devices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putDevices
   */
  putDevices(data: { id?: any; name?: any; isEnabled?: boolean; hdmiDevice?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/devices`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDevicesById
   */
  getDevicesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; deviceType?: number; name?: any; isEnabled?: boolean; hdmiDevice?: any; branchId?: any }>> {
    const url = `/api/v3/devices/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteDevicesById
   */
  deleteDevicesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/devices/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putDevicesByIdEnable
   */
  putDevicesByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/devices/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putDevicesByIdDisable
   */
  putDevicesByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/devices/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getDevicesHosts
   */
  getDevicesHosts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; id?: any; hostId?: any; deviceId?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/devices/hosts`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.id !== undefined) query['Id'] = options.id;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.deviceId !== undefined) query['DeviceId'] = options.deviceId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postDevicesByDeviceIdHostsByHostId
   */
  postDevicesByDeviceIdHostsByHostId(deviceId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/devices/${deviceId}/hosts/${hostId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteDevicesByDeviceIdHostsByHostId
   */
  deleteDevicesByDeviceIdHostsByHostId(deviceId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/devices/${deviceId}/hosts/${hostId}`;
    return this.client.request('delete', url, {}, params);
  }
}
