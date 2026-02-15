import { GizmoClient } from "../GizmoClient.js";

export class PublicOptions {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns general options.
   * @param {Object} params - additional query params
   */
  getPublicOptionsGeneral(options = {}, params = {}) {
    const url = `/api/v3.0/publicoptions/general`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Returns general options pack.
   * @param {Object} params - additional query params
   */
  getPublicOptionsGeneralPack(options = {}, params = {}) {
    const url = `/api/v3.0/publicoptions/general/pack`;
    return this.client.request("get", url, {}, params);
  }
}
