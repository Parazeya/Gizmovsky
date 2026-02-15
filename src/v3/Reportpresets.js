import { GizmoClient } from "../GizmoClient.js";

export class ReportPresets {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets report presets.
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationLimit - Limit records for the response.
  equal 0 => DefaultLimit;
  equal -1 => int.MaxValue;
  less then -1 => DefaultLimit;
  Default limit is 10.
         * @param {string} options.paginationSortBy - Sorting field name (column name) of the data.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {boolean} options.paginationIsScroll - Support infinite scrolling.
         * @param {String} options.paginationCursor - Cursor for the request.
         * @param {array} options.expand - query
         * @param {Object} params - additional query params
         */
  getReportPresets(options = {}, params = {}) {
    const url = `/api/v3.0/reportpresets`;
    const paginationLimit = options.hasOwnProperty("paginationLimit")
      ? options["paginationLimit"]
      : undefined;
    const paginationSortBy = options.hasOwnProperty("paginationSortBy")
      ? options["paginationSortBy"]
      : undefined;
    const paginationIsAsc = options.hasOwnProperty("paginationIsAsc")
      ? options["paginationIsAsc"]
      : undefined;
    const paginationIsScroll = options.hasOwnProperty("paginationIsScroll")
      ? options["paginationIsScroll"]
      : undefined;
    const paginationCursor = options.hasOwnProperty("paginationCursor")
      ? options["paginationCursor"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (paginationLimit !== undefined)
      query["Pagination.Limit"] = paginationLimit;
    if (paginationSortBy !== undefined)
      query["Pagination.SortBy"] = paginationSortBy;
    if (paginationIsAsc !== undefined)
      query["Pagination.IsAsc"] = paginationIsAsc;
    if (paginationIsScroll !== undefined)
      query["Pagination.IsScroll"] = paginationIsScroll;
    if (paginationCursor !== undefined)
      query["Pagination.Cursor"] = paginationCursor;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates report preset.
   * @param {string} data.name -
   * @param {string} data.report -
   * @param {string} data.filters -
   * @param {integer} data.range - Report preset range.
   * @param {integer} data.displayOrder -
   * @param {Object} params - additional query params
   */
  postReportPresets(data = {}, params = {}) {
    const url = `/api/v3.0/reportpresets`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates report preset.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.report -
   * @param {string} data.filters -
   * @param {integer} data.range - Report preset range.
   * @param {integer} data.displayOrder -
   * @param {Object} params - additional query params
   */
  putReportPresets(data = {}, params = {}) {
    const url = `/api/v3.0/reportpresets`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets report preset by id.
   * @param {integer} id - Report preset id.
   * @param {Object} params - additional query params
   */
  getReportPresetsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/reportpresets/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes report preset.
   * @param {integer} id - Report preset id.
   * @param {Object} params - additional query params
   */
  deleteReportPresetsById(id, params = {}) {
    const url = `/api/v3.0/reportpresets/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Updates report preset display order.
   * @param {integer} id - Report preset id.
   * @param {integer} displayOrder - New display order.
   * @param {Object} params - additional query params
   */
  putReportPresetsByIdDisplayorderByDisplayOrder(
    id,
    displayOrder,
    params = {},
  ) {
    const url = `/api/v3.0/reportpresets/${id}/displayorder/${displayOrder}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Updates report preset name.
   * @param {integer} id - Report preset id.
   * @param {string} name - path
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/reportpresets/{id}/name/{name}"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putReportPresetsByIdNameByName(id, name, data = {}, params = {}) {
    const url = `/api/v3.0/reportpresets/${id}/name/${name}`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if preset exists with specified name.
   * @param {string} name - Preset name.
   * @param {Object} params - additional query params
   */
  getReportPresetsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/reportpresets/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
