import { GizmoClient } from "../GizmoClient.js";

export class Invoices {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all invoices.
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
         * @param {string} options.dateFrom - Return invoices where the date is greater than or equal to the specified date.
         * @param {string} options.dateTo - Return invoices where the date is less than or equal to the specified date.
         * @param {boolean} options.isVoided - Return voided invoices.
         * @param {integer} options.userId - Return invoices of the specified user.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.status - Return invoices of the specified status.
         * @param {integer} options.productOrderId - Return invoices of the specified order.
         * @param {integer} options.operatorId - Return invoices of the specified operator.
         * @param {integer} options.branchId - Return invoices of the specified branch.
         * @param {Object} params - additional query params
         */
  getInvoices(options = {}, params = {}) {
    const url = `/api/v3.0/invoices`;
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
    const status = options.hasOwnProperty("status")
      ? options["status"]
      : undefined;
    const productOrderId = options.hasOwnProperty("productOrderId")
      ? options["productOrderId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
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
    if (status !== undefined) query["Status"] = status;
    if (productOrderId !== undefined) query["ProductOrderId"] = productOrderId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get an invoice by id.
   * @param {integer} id - Invoice id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - Include specified objects in the result.
   * @param {Object} params - additional query params
   */
  getInvoicesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}`;
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
   * @param {integer} data.refundMethodId - Refund payment method method.
   * @param {number} data.refundAmount - Refund amount.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing.
   * @param {Object} params - additional query params
   */
  putInvoicesByIdVoid(id, data = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}/void`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets invoice line quantity.
   * @param {integer} invoiceLineId - Invoice line id.
   * @param {Object} params - additional query params
   */
  getInvoicesLinesByInvoiceLineIdQuantity(
    invoiceLineId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/invoices/lines/${invoiceLineId}/quantity`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Invoices active usage session.
   * @param {integer} userId - User id.
   * @param {Object} params - additional query params
   */
  postInvoicesUserByUserIdUsagesessionActiveInvoice(userId, params = {}) {
    const url = `/api/v3.0/invoices/user/${userId}/usagesession/active/invoice`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Closes user balance.
   * @param {integer} userId - User id.
   * @param {array} data.payments - Payments.
   * @param {array} data.invoices - Specific invoices to be closed.
   * @param {Object} params - additional query params
   */
  postInvoicesUserByUserIdBalanceClose(userId, data = {}, params = {}) {
    const url = `/api/v3.0/invoices/user/${userId}/balance/close`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Execute payments on existing invoice.
   * @param {integer} id - Invoice id.
   * @param {array} data.payments - Invoice payments.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing.
   * @param {boolean} data.autoComplete - Enables auto completion.
   * @param {Object} params - additional query params
   */
  postInvoicesByIdPayments(id, data = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}/payments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets invoice payments.
   * @param {integer} id - Invoice id.
   * @param {Object} params - additional query params
   */
  getInvoicesByIdPayments(id, options = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}/payments`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getInvoicesByIdRefundState(id, options = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}/refund/state`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getInvoicesByIdSaleReceiptWait(id, options = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}/sale/receipt/wait`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getInvoicesByIdRefundReceiptWait(id, options = {}, params = {}) {
    const url = `/api/v3.0/invoices/${id}/refund/receipt/wait`;
    return this.client.request("get", url, {}, params);
  }
}
