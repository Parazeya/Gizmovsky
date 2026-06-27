import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Hosts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns all hosts list.
   */
  getHostsApiHosts(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; number?: number; name?: string; hostGroupId?: number; state?: any; iconId?: number; isDeleted?: boolean }>>> {
    const url = `/api/hosts`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns host by id.
   */
  getHostsApiHostsByHostId(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; number?: number; name?: string; hostGroupId?: number; state?: any; iconId?: number; isDeleted?: boolean }>> {
    const url = `/api/hosts/${hostId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Deletes specified host.
   */
  deleteHostsApiHostsByHostId(hostId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hosts/${hostId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns host list by host number.
   */
  getHostsApiHostsNumberByHostNumber(hostNumber: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; number?: number; name?: string; hostGroupId?: number; state?: any; iconId?: number; isDeleted?: boolean }>>> {
    const url = `/api/hosts/number/${hostNumber}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds a host.
   */
  putHostsApiHostsHost(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/hosts/host`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates existing host.
   */
  postHostsApiHostsHost(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hosts/host`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds a host computer.
   */
  putHostsApiHostsHostcomputer(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/hosts/hostcomputer`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates existing host computer.
   */
  postHostsApiHostsHostcomputer(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hosts/hostcomputer`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds a host endpoint.
   */
  putHostsApiHostsHostendpoint(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/hosts/hostendpoint`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates existing host.
   */
  postHostsApiHostsHostendpoint(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hosts/hostendpoint`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns last user login date on specified host.
   */
  getHostsApiHostsByHostIdLastuserlogin(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/hosts/${hostId}/lastuserlogin`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Return last user logout on specified host.
   */
  getHostsApiHostsByHostIdLastuserlogout(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/hosts/${hostId}/lastuserlogout`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Puts host in specified lock state.
   */
  postHostsApiHostsByHostIdLockByLocked(hostId: string | number, locked: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hosts/${hostId}/lock/${locked}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Puts host in specified order state.
   */
  postHostsApiHostsByHostIdOrderstateByInOrder(hostId: string | number, inOrder: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hosts/${hostId}/orderstate/${inOrder}`;
    return this.client.request('post', url, {}, params);
  }
}
