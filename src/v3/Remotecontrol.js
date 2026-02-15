import { GizmoClient } from "../GizmoClient.js";

export class RemoteControl {
  constructor(client) {
    this.client = client;
  }

  /**
   * Creates remote control session.
   * @param {integer} hostId - path
   * @param {Object} params - additional query params
   */
  getRemoteControlHostsByHostIdSession(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/remotecontrol/hosts/${hostId}/session`;
    return this.client.request("get", url, {}, params);
  }
}
