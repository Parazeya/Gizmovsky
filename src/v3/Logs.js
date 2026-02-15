import { GizmoClient } from "../GizmoClient.js";

export class Logs {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets log entries.
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
         * @param {array} options.expand - <inheritdoc />
         * @param {integer} options.dateCompareOption - <inheritdoc />
         * @param {string} options.dateFrom - <inheritdoc />
         * @param {string} options.dateTo - <inheritdoc />
         * @param {integer} options.messageType - <inheritdoc />
         * @param {integer} options.moduleType - <inheritdoc />
         * @param {integer} options.messageCompareOption - <inheritdoc />
         * @param {string} options.message - <inheritdoc />
         * @param {Object} params - additional query params
         */
  getLogs(options = {}, params = {}) {
    const url = `/api/v3.0/logs`;
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
    const dateCompareOption = options.hasOwnProperty("dateCompareOption")
      ? options["dateCompareOption"]
      : undefined;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const messageType = options.hasOwnProperty("messageType")
      ? options["messageType"]
      : undefined;
    const moduleType = options.hasOwnProperty("moduleType")
      ? options["moduleType"]
      : undefined;
    const messageCompareOption = options.hasOwnProperty("messageCompareOption")
      ? options["messageCompareOption"]
      : undefined;
    const message = options.hasOwnProperty("message")
      ? options["message"]
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
    if (dateCompareOption !== undefined)
      query["DateCompareOption"] = dateCompareOption;
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (messageType !== undefined) query["MessageType"] = messageType;
    if (moduleType !== undefined) query["ModuleType"] = moduleType;
    if (messageCompareOption !== undefined)
      query["MessageCompareOption"] = messageCompareOption;
    if (message !== undefined) query["Message"] = message;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets log entry by id.
   * @param {integer} id - Id.
   * @param {Object} params - additional query params
   */
  getLogsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/logs/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets log exception.
   * @param {integer} id - Log id.
   * @param {Object} params - additional query params
   */
  getLogsByIdException(id, options = {}, params = {}) {
    const url = `/api/v3.0/logs/${id}/exception`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Clears log.
   * @param {Object} params - additional query params
   */
  postLogsClear(params = {}) {
    const url = `/api/v3.0/logs/clear`;
    return this.client.request("post", url, {}, params);
  }
}
