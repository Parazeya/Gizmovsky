import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PaymentProviders {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets a list of supported providers.
   */
  getPaymentProviders(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; name?: string; guid?: string; optionsType?: string; description?: string }>>> {
    const url = `/api/v2.0/paymentproviders`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets provider by its guid.
   */
  getPaymentProvidersByProviderGuid(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: string; name?: string; guid?: string; optionsType?: string; description?: string }>> {
    const url = `/api/v2.0/paymentproviders/${providerGuid}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets provider options.
   */
  getPaymentProvidersByProviderGuidOptions(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: string; values?: any[] }>> {
    const url = `/api/v2.0/paymentproviders/${providerGuid}/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets provider options.
   */
  putPaymentProvidersByProviderGuidOptions(providerGuid: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/paymentproviders/${providerGuid}/options`;
    return this.client.request('put', url, data, params);
  }
}
