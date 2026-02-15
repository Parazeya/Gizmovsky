import { GizmoClient } from "../GizmoClient.js";

export class PaymentProviders {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets a list of supported providers.
   * @param {Object} params - additional query params
   */
  getPaymentProviders(options = {}, params = {}) {
    const url = `/api/v2.0/paymentproviders`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets provider by its guid.
   * @param {string} providerGuid - Provider guid.
   * @param {Object} params - additional query params
   */
  getPaymentProvidersByProviderGuid(providerGuid, options = {}, params = {}) {
    const url = `/api/v2.0/paymentproviders/${providerGuid}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets provider options.
   * @param {string} providerGuid - Provider guid.
   * @param {Object} params - additional query params
   */
  getPaymentProvidersByProviderGuidOptions(
    providerGuid,
    options = {},
    params = {}
  ) {
    const url = `/api/v2.0/paymentproviders/${providerGuid}/options`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets provider options.
   * @param {string} providerGuid - Provider guid.
   * @param {Object} data - request body (see openapi.paths["/api/v2.0/paymentproviders/{providerGuid}/options"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putPaymentProvidersByProviderGuidOptions(
    providerGuid,
    data = {},
    params = {}
  ) {
    const url = `/api/v2.0/paymentproviders/${providerGuid}/options`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
