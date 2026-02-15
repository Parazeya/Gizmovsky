import { GizmoClient } from "../GizmoClient.js";

export class Skins {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all skins.
   * @param {Object} params - additional query params
   */
  getSkins(options = {}, params = {}) {
    const url = `/api/v3.0/skins`;
    return this.client.request("get", url, {}, params);
  }
}
