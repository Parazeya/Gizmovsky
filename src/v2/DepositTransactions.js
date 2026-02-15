import { GizmoClient } from "../GizmoClient.js";

export class DepositTransactions {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all deposit transactions.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {integer} options.userId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getDepositTransactions(options = {}, params = {}) {
    const url = `/api/v2.0/deposittransactions`;
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
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a deposit transaction.
   * @param {boolean} data.receiptOverride -
   * @param {integer} data.userId -
   * @param {object} data.type -
   * @param {number} data.amount -
   * @param {integer} data.paymentMethodId -
   * @param {Object} params - additional query params
   */
  postDepositTransactions(data = {}, params = {}) {
    const url = `/api/v2.0/deposittransactions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get a deposit transaction by id.
   * @param {integer} id - Deposit transaction id.
   * @param {Object} params - additional query params
   */
  getDepositTransactionsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/deposittransactions/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
