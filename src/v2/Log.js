import { GizmoClient } from "../GizmoClient.js";

export class Log {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets log entries.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {any} options.dateCompareOption - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {any} options.messageType - query
   * @param {any} options.moduleType - query
   * @param {any} options.messageCompareOption - query
   * @param {string} options.message - query
   * @param {Object} params - additional query params
   */
  getLog(options = {}, params = {}) {
    const url = `/api/v2.0/log`;
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
  getLogById(id, options = {}, params = {}) {
    const url = `/api/v2.0/log/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets log exception.
   * @param {integer} id - Log id.
   * @param {Object} params - additional query params
   */
  getLogByIdException(id, options = {}, params = {}) {
    const url = `/api/v2.0/log/${id}/exception`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Clears log.
   * @param {Object} params - additional query params
   */
  postLogClear(params = {}) {
    const url = `/api/v2.0/log/clear`;
    return this.client.request("post", url, {}, params);
  }
}
