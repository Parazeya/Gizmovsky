import { GizmoClient } from "../GizmoClient.js";

export class ReportModules {
  constructor(client) {
    this.client = client;
  }

  /**
   * Exports report.
   * @param {string} reportId - Report module unique id.
   * @param {any} data.reportModel - Report model
   * @param {any} data.reportModelAdditional - Optional additional report model.
   * @param {object} data.metadata -
   * @param {Object} params - additional query params
   */
  postReportModulesByReportIdExport(reportId, data = {}, params = {}) {
    const url = `/api/v3.0/reportmodules/${reportId}/export`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Generates report.
   * @param {string} reportId - Report module unique id.
   * @param {Object} options - options object with possible query parameters
   * @param {object} options.reportFilter - Report module filters.
   * @param {Object} params - additional query params
   */
  getReportModulesByReportId(reportId, options = {}, params = {}) {
    const url = `/api/v3.0/reportmodules/${reportId}`;
    const reportFilter = options.hasOwnProperty("reportFilter")
      ? options["reportFilter"]
      : undefined;
    const query = Object.assign({}, params);
    if (reportFilter !== undefined) query["reportFilter"] = reportFilter;
    return this.client.request("get", url, {}, query);
  }
}
