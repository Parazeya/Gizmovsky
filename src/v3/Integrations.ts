import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Integrations {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getIntegrations
   */
  getIntegrations(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; typeGuid?: string; isDisabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/integrations`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.typeGuid !== undefined) query['TypeGuid'] = options.typeGuid;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postIntegrations
   */
  postIntegrations(data: { name?: string; typeGuid?: string; configJson?: any; configSchemaVersion?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/integrations`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getIntegrationsById
   */
  getIntegrationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; typeGuid?: string; publicId?: string; configJson?: any; configSchemaVersion?: any; isDisabled?: boolean; type?: any }>> {
    const url = `/api/v3/integrations/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putIntegrationsById
   */
  putIntegrationsById(id: string | number, data: { name?: string; isDisabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/integrations/${id}`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteIntegrationsById
   */
  deleteIntegrationsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/integrations/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getIntegrationsTypes
   */
  getIntegrationsTypes(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ typeGuid?: string; name?: string; description?: any; configSections?: any[]; capabilities?: string[] }>>> {
    const url = `/api/v3/integrations/types`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getIntegrationsTypesByTypeGuidConfigschema
   */
  getIntegrationsTypesByTypeGuidConfigschema(typeGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ optionsTypeName?: string; sectionName?: any; properties?: any[] }>>> {
    const url = `/api/v3/integrations/types/${typeGuid}/config-schema`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putIntegrationsByIdConfig
   */
  putIntegrationsByIdConfig(id: string | number, data: { configJson?: any; configSchemaVersion?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/integrations/${id}/config`;
    return this.client.request('put', url, data, params);
  }
}
