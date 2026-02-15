import { GizmoClient } from "../GizmoClient.js";

export class InvoicePayments {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all invoice payments.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {integer} options.invoiceId - query
   * @param {integer} options.userId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getInvoicePayments(options = {}, params = {}) {
    const url = `/api/v2.0/invoicepayments`;
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
    const invoiceId = options.hasOwnProperty("invoiceId")
      ? options["invoiceId"]
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
    if (invoiceId !== undefined) query["InvoiceId"] = invoiceId;
    if (userId !== undefined) query["UserId"] = userId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an invoice payment.
   * @param {integer} data.invoiceId -
   * @param {integer} data.paymentMethodId -
   * @param {number} data.amount -
   * @param {number} data.amountReceived -
   * @param {Object} params - additional query params
   */
  postInvoicePayments(data = {}, params = {}) {
    const url = `/api/v2.0/invoicepayments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get an invoice payment by id.
   * @param {integer} id - Invoice payment id.
   * @param {Object} params - additional query params
   */
  getInvoicePaymentsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/invoicepayments/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
