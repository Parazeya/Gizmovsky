import { GizmoClient } from "../GizmoClient.js";

export class InvoicePayments {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all invoice payments.
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
         * @param {string} options.dateFrom - Return invoice payments where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return invoice payments where the date less than or equal to the specified date.
         * @param {integer} options.invoiceId - Return invoice payments of the specified invoice.
         * @param {integer} options.userId - Return invoice payments of the specified user.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getInvoicePayments(options = {}, params = {}) {
    const url = `/api/v3.0/invoicepayments`;
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
   * @param {integer} data.invoiceId - The Id of the invoice this invoice payment is associated with.
   * @param {integer} data.paymentMethodId - The Id of the payment method this invoice payment is associated with.
   * @param {number} data.amount - The amount of the invoice payment.
   * @param {number} data.amountReceived - The amount received for the invoice payment.
   * @param {Object} params - additional query params
   */
  postInvoicePayments(data = {}, params = {}) {
    const url = `/api/v3.0/invoicepayments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get an invoice payment by id.
   * @param {integer} id - Invoice payment id.
   * @param {Object} params - additional query params
   */
  getInvoicePaymentsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/invoicepayments/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
