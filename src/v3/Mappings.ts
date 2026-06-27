import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Mappings {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getMappings
   */
  getMappings(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/mappings`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getMappingsById
   */
  getMappingsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/mappings/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteMappingsById
   */
  deleteMappingsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/mappings/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postMappingsVirtualdrive
   */
  postMappingsVirtualdrive(data: { label?: string; source?: string; mountPoint?: string; size?: any; directAccess?: boolean; isReadOnly?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/mappings/virtualdrive`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putMappingsVirtualdrive
   */
  putMappingsVirtualdrive(data: { id?: any; label?: string; source?: string; mountPoint?: string; size?: any; directAccess?: boolean; isReadOnly?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/mappings/virtualdrive`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postMappingsVirtualfolder
   */
  postMappingsVirtualfolder(data: { source?: string; mountPoint?: string; directAccess?: boolean; isReadOnly?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/mappings/virtualfolder`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putMappingsVirtualfolder
   */
  putMappingsVirtualfolder(data: { id?: any; source?: string; mountPoint?: string; directAccess?: boolean; isReadOnly?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/mappings/virtualfolder`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postMappingsNetworkdrive
   */
  postMappingsNetworkdrive(data: { source?: string; mountPoint?: string; useCredentials?: boolean; username?: any; password?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/mappings/networkdrive`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putMappingsNetworkdrive
   */
  putMappingsNetworkdrive(data: { id?: any; source?: string; mountPoint?: string; useCredentials?: boolean; username?: any; password?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/mappings/networkdrive`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getMappingsMountpointExists
   */
  getMappingsMountpointExists(options: { mountPoint?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/mappings/mountpoint/exists`;
    const query: Record<string, any> = { ...params };
    if (options.mountPoint !== undefined) query['mountPoint'] = options.mountPoint;
    return this.client.request('get', url, {}, query);
  }
}
