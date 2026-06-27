import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class SmsProviders {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets a list of supported providers.
   */
  getSmsProviders(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; name?: string; guid?: string; optionsType?: string; description?: string }>>> {
    const url = `/api/v2.0/smsproviders`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets provider by its guid.
   */
  getSmsProvidersByProviderGuid(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: string; name?: string; guid?: string; optionsType?: string; description?: string }>> {
    const url = `/api/v2.0/smsproviders/${providerGuid}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets provider options.
   */
  getSmsProvidersByProviderGuidOptions(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: string; values?: any[] }>> {
    const url = `/api/v2.0/smsproviders/${providerGuid}/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets provider options.
   */
  putSmsProvidersByProviderGuidOptions(providerGuid: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/smsproviders/${providerGuid}/options`;
    return this.client.request('put', url, data, params);
  }
}
