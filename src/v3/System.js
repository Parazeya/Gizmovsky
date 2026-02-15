import { GizmoClient } from "../GizmoClient.js";

export class System {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets available time zones.
   * @param {Object} params - additional query params
   */
  getSystemTimezones(options = {}, params = {}) {
    const url = `/api/v3.0/system/timezones`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets local system time zone.
   * @param {Object} params - additional query params
   */
  getSystemTimezonesLocal(options = {}, params = {}) {
    const url = `/api/v3.0/system/timezones/local`;
    return this.client.request("get", url, {}, params);
  }
}
