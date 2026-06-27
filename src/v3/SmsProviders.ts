import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class SmsProviders {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getSmsProviders
   */
  getSmsProviders(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; name?: string; guid?: string; optionsType?: any; description?: any }>>> {
    const url = `/api/v3/smsproviders`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSmsProvidersByProviderGuid
   */
  getSmsProvidersByProviderGuid(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: string; name?: string; guid?: string; optionsType?: any; description?: any }>> {
    const url = `/api/v3/smsproviders/${providerGuid}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSmsProvidersByProviderGuidOptions
   */
  getSmsProvidersByProviderGuidOptions(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/smsproviders/${providerGuid}/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putSmsProvidersByProviderGuidOptions
   */
  putSmsProvidersByProviderGuidOptions(providerGuid: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/smsproviders/${providerGuid}/options`;
    return this.client.request('put', url, data, params);
  }
}
