import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Instance {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getInstanceAuthentication
   */
  getInstanceAuthentication(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ state?: number; claims?: any[] }>> {
    const url = `/api/v3/instance/authentication`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postInstanceAuthentication
   */
  postInstanceAuthentication(data: { username?: string; password?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number }>> {
    const url = `/api/v3/instance/authentication`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postInstanceAuthorization
   */
  postInstanceAuthorization(params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; licenseState?: any }>> {
    const url = `/api/v3/instance/authorization`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getInstanceAuthorization
   */
  getInstanceAuthorization(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; state?: any; authorizedIdType?: any; authorizedId?: any; count?: any; expiresAt?: any; verificationTime?: any; isRecurring?: any; warnings?: any; isLocal?: any }>> {
    const url = `/api/v3/instance/authorization`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getInstanceId
   */
  getInstanceId(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: any; value?: string }>> {
    const url = `/api/v3/instance/id`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getInstanceLicense
   */
  getInstanceLicense(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; payload?: any; signature?: any }>> {
    const url = `/api/v3/instance/license`;
    return this.client.request('get', url, {}, params);
  }
}
