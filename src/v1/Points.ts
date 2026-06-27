import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Points {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns points transactions.
   */
  getPointsApiPoints(options: { userId?: number; type?: any; start?: string; end?: string; max?: number; skip?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; transactionId?: number; amount?: number; balance?: number; type?: any; userId?: number }>>> {
    const url = `/api/points`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['userId'] = options.userId;
    if (options.type !== undefined) query['type'] = options.type;
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    if (options.max !== undefined) query['max'] = options.max;
    if (options.skip !== undefined) query['skip'] = options.skip;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Reset points to zero for all users.
   */
  postPointsApiPointsReset(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/points/reset`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Resets points to zero for specified user.
   */
  postPointsApiPointsByUserIdReset(userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/points/${userId}/reset`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Sets points amount for all users.
   */
  postPointsApiPointsByAmount(amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; transactionId?: number; amount?: number; balance?: number; type?: any; userId?: number }>>> {
    const url = `/api/points/${amount}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Sets points amount for specified user.
   */
  postPointsApiPointsByUserIdByAmount(userId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; transactionId?: number; amount?: number; balance?: number; type?: any; userId?: number }>>> {
    const url = `/api/points/${userId}/${amount}`;
    return this.client.request('post', url, {}, params);
  }
}
