import { GizmoClient } from "../GizmoClient.js";

export class PaymentProviders {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getPaymentProviders(options = {}, params = {}) {
    const url = `/api/v3.0/paymentproviders`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} providerGuid - path
   * @param {Object} params - additional query params
   */
  getPaymentProvidersByProviderGuid(providerGuid, options = {}, params = {}) {
    const url = `/api/v3.0/paymentproviders/${providerGuid}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} providerGuid - path
   * @param {Object} params - additional query params
   */
  getPaymentProvidersByProviderGuidOptions(
    providerGuid,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/paymentproviders/${providerGuid}/options`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} providerGuid - path
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/paymentproviders/{providerGuid}/options"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putPaymentProvidersByProviderGuidOptions(
    providerGuid,
    data = {},
    params = {},
  ) {
    const url = `/api/v3.0/paymentproviders/${providerGuid}/options`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
