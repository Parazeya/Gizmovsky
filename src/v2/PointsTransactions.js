import { GizmoClient } from "../GizmoClient.js";

export class PointsTransactions {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets list of points transactions.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {integer} options.userId - query
   * @param {any} options.type - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getPointsTransactions(options = {}, params = {}) {
    const url = `/api/v2.0/pointstransactions`;
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
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
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
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (userId !== undefined) query["UserId"] = userId;
    if (type !== undefined) query["Type"] = type;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a points transaction.
   * @param {integer} data.userId -
   * @param {object} data.type -
   * @param {integer} data.amount -
   * @param {Object} params - additional query params
   */
  postPointsTransactions(data = {}, params = {}) {
    const url = `/api/v2.0/pointstransactions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets points transaction by id.
   * @param {integer} id - Id.
   * @param {Object} params - additional query params
   */
  getPointsTransactionsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/pointstransactions/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
