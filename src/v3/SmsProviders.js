import { GizmoClient } from "../GizmoClient.js";

export class SmsProviders {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getSmsProviders(options = {}, params = {}) {
    const url = `/api/v3.0/smsproviders`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} providerGuid - path
   * @param {Object} params - additional query params
   */
  getSmsProvidersByProviderGuid(providerGuid, options = {}, params = {}) {
    const url = `/api/v3.0/smsproviders/${providerGuid}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} providerGuid - path
   * @param {Object} params - additional query params
   */
  getSmsProvidersByProviderGuidOptions(
    providerGuid,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/smsproviders/${providerGuid}/options`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} providerGuid - path
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/smsproviders/{providerGuid}/options"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putSmsProvidersByProviderGuidOptions(providerGuid, data = {}, params = {}) {
    const url = `/api/v3.0/smsproviders/${providerGuid}/options`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
