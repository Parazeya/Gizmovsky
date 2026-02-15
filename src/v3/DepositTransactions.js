import { GizmoClient } from "../GizmoClient.js";

export class DepositTransactions {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all deposit transactions.
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
         * @param {string} options.dateFrom - Return deposit transactions where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return deposit transactions where the date less than or equal to the specified date.
         * @param {integer} options.userId - Return deposit transactions of the specified user.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.type - Return deposit transactions of the specified type.
         * @param {integer} options.operatorId - Return deposit transactions of the specified operator.
         * @param {integer} options.branchId - Return deposit transactions of the specified branch.
         * @param {integer} options.paymentMethodId - Return deposit transactions of the specified payment method.
         * @param {Object} params - additional query params
         */
  getDepositTransactions(options = {}, params = {}) {
    const url = `/api/v3.0/deposittransactions`;
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
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const paymentMethodId = options.hasOwnProperty("paymentMethodId")
      ? options["paymentMethodId"]
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
    if (type !== undefined) query["Type"] = type;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (paymentMethodId !== undefined)
      query["PaymentMethodId"] = paymentMethodId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a deposit transaction.
   * @param {boolean} data.receiptOverride - Whether to override the receipt.
   * @param {integer} data.userId - The Id of the user this deposit transaction is associated with.
   * @param {integer} data.type - The type of the deposit transaction.
   * @param {number} data.amount - The amount of the deposit transaction.
   * @param {integer} data.paymentMethodId - The Id of the payment method of this deposit transaction.
   * @param {Object} params - additional query params
   */
  postDepositTransactions(data = {}, params = {}) {
    const url = `/api/v3.0/deposittransactions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get a deposit transaction by id.
   * @param {integer} id - Deposit transaction id.
   * @param {Object} params - additional query params
   */
  getDepositTransactionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/deposittransactions/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Void the specified deposit payment.
   * @param {integer} id - Deposit payment id.
   * @param {number} data.amount - The amount to refund, if null the total amount will be refunded.
   * @param {boolean} data.receiptOverride - Whether to override the receipt.
   * @param {integer} data.refundMethodId - The Id of the payment method to use for the refund.
   * @param {Object} params - additional query params
   */
  putDepositTransactionsByIdVoid(id, data = {}, params = {}) {
    const url = `/api/v3.0/deposittransactions/${id}/void`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
