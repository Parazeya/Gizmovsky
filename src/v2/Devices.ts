import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Devices {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all devices.
   */
  getDevices(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; deviceType?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/devices`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.deviceType !== undefined) query['DeviceType'] = options.deviceType;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an device.
   */
  postDevices(data: { deviceType?: any; name?: string; isEnabled?: boolean; hdmiDevice?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/devices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Updates an device.
   */
  putDevices(data: { id?: number; name?: string; isEnabled?: boolean; hdmiDevice?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/devices`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Deletes specified device.
   */
  deleteDevices(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/devices`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Enables specified device.
   */
  putDevicesByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/devices/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Disables specified device.
   */
  putDevicesByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/devices/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Gets devices and host associations.
   */
  getDevicesHosts(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; id?: number; hostId?: number; deviceId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/devices/hosts`;
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
   * Assigns device specified by deviceId to the host specified by hostId.
   */
  postDevicesByDeviceIdHostByHostId(deviceId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/devices/${deviceId}/host/${hostId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Unassigns device specified by deviceId to the host specified by hostId.
   */
  deleteDevicesByDeviceIdHostByHostId(deviceId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/devices/${deviceId}/host/${hostId}`;
    return this.client.request('delete', url, {}, params);
  }
}
