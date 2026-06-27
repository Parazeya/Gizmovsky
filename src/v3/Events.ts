import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Events {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getEventsChannelByUniqueChannelName
   */
  getEventsChannelByUniqueChannelName(uniqueChannelName: string | number, options: { filters?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/events/channel/${uniqueChannelName}`;
    const query: Record<string, any> = { ...params };
    if (options.filters !== undefined) query['filters'] = options.filters;
    return this.client.request('get', url, {}, query);
  }

  /**
   * deleteEventsChannelByUniqueChannelName
   */
  deleteEventsChannelByUniqueChannelName(uniqueChannelName: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/events/channel/${uniqueChannelName}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getEventsEntity
   */
  getEventsEntity(options: { connectionId?: string; filters?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/events/entity`;
    const query: Record<string, any> = { ...params };
    if (options.connectionId !== undefined) query['connectionId'] = options.connectionId;
    if (options.filters !== undefined) query['filters'] = options.filters;
    return this.client.request('get', url, {}, query);
  }

  /**
   * deleteEventsEntity
   */
  deleteEventsEntity(params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/events/entity`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getEventsStream
   */
  getEventsStream(options: { filters?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/events/stream`;
    const query: Record<string, any> = { ...params };
    if (options.filters !== undefined) query['filters'] = options.filters;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getEventsMetadata
   */
  getEventsMetadata(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ groupName?: string; groupId?: any; description?: string; events?: any[] }>>> {
    const url = `/api/v3/events/metadata`;
    return this.client.request('get', url, {}, params);
  }
}
