import { GizmoClient } from "../GizmoClient.js";

export class Companion {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets active companion connections.
   * @param {Object} params - additional query params
   */
  getCompanionConnections(options = {}, params = {}) {
    const url = `/api/v2.0/companion/connections`;
    return this.client.request("get", url, {}, params);
  }
}
