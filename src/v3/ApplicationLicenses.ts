import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationLicenses {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationLicenses
   */
  getApplicationLicenses(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; licenseName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationlicenses`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.licenseName !== undefined) query['LicenseName'] = options.licenseName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postApplicationLicenses
   */
  postApplicationLicenses(data: { name?: string; plugin?: string; options?: any[]; keys?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationlicenses`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationLicenses
   */
  putApplicationLicenses(data: { id?: any; name?: string; options?: any[]; keys?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlicenses`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationLicensesById
   */
  getApplicationLicensesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; name?: string; plugin?: string }>> {
    const url = `/api/v3/applicationlicenses/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationLicensesById
   */
  deleteApplicationLicensesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlicenses/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationLicensesNameExists
   */
  getApplicationLicensesNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationlicenses/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putApplicationLicensesByIdUnassign
   */
  putApplicationLicensesByIdUnassign(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlicenses/${id}/unassign`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getApplicationLicensesByIdOptions
   */
  getApplicationLicensesByIdOptions(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ propertyName?: string; propertyValue?: string }>>> {
    const url = `/api/v3/applicationlicenses/${id}/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getApplicationLicensesByIdKeys
   */
  getApplicationLicensesByIdKeys(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; hostId?: any; isEnabled?: boolean; comment?: any; displayValue?: any; values?: any[] }>>> {
    const url = `/api/v3/applicationlicenses/${id}/keys`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationLicensesByIdKeys
   */
  postApplicationLicensesByIdKeys(id: string | number, data: { propertyName?: string; propertyValue?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationlicenses/${id}/keys`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getApplicationLicensesMetadata
   */
  getApplicationLicensesMetadata(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ guid?: string; assembly?: string; type?: string; options?: any[]; keyOptions?: any[]; name?: string; description?: any; iconData?: any; isDeprecated?: boolean }>>> {
    const url = `/api/v3/applicationlicenses/metadata`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getApplicationLicensesKeysByKeyId
   */
  getApplicationLicensesKeysByKeyId(keyId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; hostId?: any; isEnabled?: boolean; comment?: any; displayValue?: any; values?: any[] }>> {
    const url = `/api/v3/applicationlicenses/keys/${keyId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationLicensesKeysByKeyId
   */
  deleteApplicationLicensesKeysByKeyId(keyId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlicenses/keys/${keyId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putApplicationLicensesKeysByKeyIdEnableByEnable
   */
  putApplicationLicensesKeysByKeyIdEnableByEnable(keyId: string | number, enable: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlicenses/keys/${keyId}/enable/${enable}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putApplicationLicensesKeysByKeyIdHost
   */
  putApplicationLicensesKeysByKeyIdHost(keyId: string | number, data: { hostId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlicenses/keys/${keyId}/host`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationLicensesByPluginKeysDisplayvalue
   */
  getApplicationLicensesByPluginKeysDisplayvalue(plugin: string | number, options: { values?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/applicationlicenses/${plugin}/keys/displayvalue`;
    const query: Record<string, any> = { ...params };
    if (options.values !== undefined) query['values'] = options.values;
    return this.client.request('get', url, {}, query);
  }
}
