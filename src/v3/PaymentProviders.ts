import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PaymentProviders {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPaymentProviders
   */
  getPaymentProviders(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; name?: string; guid?: string; optionsType?: any; description?: any }>>> {
    const url = `/api/v3/paymentproviders`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getPaymentProvidersByProviderGuid
   */
  getPaymentProvidersByProviderGuid(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: string; name?: string; guid?: string; optionsType?: any; description?: any }>> {
    const url = `/api/v3/paymentproviders/${providerGuid}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getPaymentProvidersByProviderGuidOptions
   */
  getPaymentProvidersByProviderGuidOptions(providerGuid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/paymentproviders/${providerGuid}/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putPaymentProvidersByProviderGuidOptions
   */
  putPaymentProvidersByProviderGuidOptions(providerGuid: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/paymentproviders/${providerGuid}/options`;
    return this.client.request('put', url, data, params);
  }
}
