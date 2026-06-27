import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets host groups.
   */
  getHostGroupsApiHostgroups(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; name?: string; skinName?: string; options?: any; appGroupId?: number; securityProfileId?: number; defaultGuestGroupId?: number }>>> {
    const url = `/api/hostgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets host group by id.
   */
  getHostGroupsApiHostgroupsByHostGroupId(hostGroupId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; skinName?: string; options?: any; appGroupId?: number; securityProfileId?: number; defaultGuestGroupId?: number }>> {
    const url = `/api/hostgroups/${hostGroupId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets disallowed user groups.
   */
  getHostGroupsApiHostgroupsByHostGroupIdDisallowedusergroups(hostGroupId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<number>>> {
    const url = `/api/hostgroups/${hostGroupId}/disallowedusergroups`;
    return this.client.request('get', url, {}, params);
  }
}
