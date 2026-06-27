import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserGuests {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserGuestsVirtual
   */
  getUserGuestsVirtual(options: { limit?: any; branchId?: any; searchValue?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: any; hostId?: any; slot?: any }>>> {
    const url = `/api/v3/userguests/virtual`;
    const query: Record<string, any> = { ...params };
    if (options.limit !== undefined) query['Limit'] = options.limit;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.searchValue !== undefined) query['SearchValue'] = options.searchValue;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUserGuestsReserve
   */
  postUserGuestsReserve(data: { hostId?: any; userGroupId?: any; slot?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; isNew?: boolean; userId?: any; slot?: any }>> {
    const url = `/api/v3/userguests/reserve`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postUserGuestsHostsByHostIdRelease
   */
  postUserGuestsHostsByHostIdRelease(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: any; success?: boolean }>>> {
    const url = `/api/v3/userguests/hosts/${hostId}/release`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postUserGuestsByUserIdRelease
   */
  postUserGuestsByUserIdRelease(userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number }>> {
    const url = `/api/v3/userguests/${userId}/release`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getUserGuestsJoined
   */
  getUserGuestsJoined(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/userguests/joined`;
    return this.client.request('get', url, {}, params);
  }
}
