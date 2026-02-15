import { GizmoClient } from "../GizmoClient.js";

export class Fiscalizations {
  constructor(client) {
    this.client = client;
  }

  /**
   * Creates fiscalizations.
   * @param {array} data.tasks - Fiscalization tasks.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing.
   * @param {Object} params - additional query params
   */
  postFiscalizations(data = {}, params = {}) {
    const url = `/api/v3.0/fiscalizations`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
