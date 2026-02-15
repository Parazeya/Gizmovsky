import { GizmoClient } from "../GizmoClient.js";

export class Invoices {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all invoices.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {boolean} options.isVoided - query
   * @param {integer} options.userId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getInvoices(options = {}, params = {}) {
    const url = `/api/v2.0/invoices`;
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
    const isVoided = options.hasOwnProperty("isVoided")
      ? options["isVoided"]
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
    if (isVoided !== undefined) query["IsVoided"] = isVoided;
    if (userId !== undefined) query["UserId"] = userId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get an invoice by id.
   * @param {integer} id - Invoice id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getInvoicesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/invoices/${id}`;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Void the specified invoice.
   * @param {integer} id - Invoice id.
   * @param {integer} data.refundMethodId -
   * @param {Object} params - additional query params
   */
  putInvoicesByIdVoid(id, data = {}, params = {}) {
    const url = `/api/v2.0/invoices/${id}/void`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
