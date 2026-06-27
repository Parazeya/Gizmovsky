import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Stats {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns user session time.
   */
  getStatsApiStatsSession(options: { userId?: number; max?: number; start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: number; username?: string; hours?: string; totalSpan?: any }>>> {
    const url = `/api/stats/session`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['userId'] = options.userId;
    if (options.max !== undefined) query['max'] = options.max;
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets total amount of unique user logins.
   */
  getStatsApiStatsUserLoginsUnique(options: { start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/stats/user/logins/unique`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns total amount of logins.
   */
  getStatsApiStatsUserLogins(options: { start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/stats/user/logins`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets total host use time.
   */
  getStatsApiStatsHostUse(options: { start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/stats/host/use`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets total host use time.
   */
  getStatsApiStatsHostByHostGroupNameUse(hostGroupName: string | number, options: { start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/stats/host/${hostGroupName}/use`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets total host use time.
   */
  getStatsApiStatsHostByHostGroupNameByUserGroupNameUse(hostGroupName: string | number, userGroupName: string | number, options: { start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/stats/host/${hostGroupName}/${userGroupName}/use`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets total host use time.
   */
  getStatsApiStatsHostByHostGroupIdByUserGroupIdUse(hostGroupId: string | number, userGroupId: string | number, options: { start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/stats/host/${hostGroupId}/${userGroupId}/use`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }
}
