import { GizmoClient } from "../GizmoClient.js";

export class Payments {
  constructor(client) {
    this.client = client;
  }

  /**
         * 
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationPageNumber - Gets or sets the page number.
 less then 1 or equal int.MaxValue => DefaultPageNumber;
 Default page number is 1.
         * @param {integer} options.paginationPageSize - Gets or sets the page size.
 equal -1 => int.MaxValue;
 less then -1 or equal 0 => DefaultPageSize;
 Default page size is 10.
         * @param {string} options.paginationSortBy - Gets or sets the sort by.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {string} options.dateFrom - Date from.
         * @param {string} options.dateTo - Date to.
         * @param {integer} options.shiftId - Shift id.
         * @param {integer} options.registerId - Register id.
         * @param {integer} options.operatorId - Operator id.
         * @param {integer} options.userId - Customer id.
         * @param {integer} options.paymentMethodId - Payment method id.
         * @param {integer} options.paymentDirection - Direction type.
         * @param {boolean} options.invoiceTransactions - Include invoice transactions.
         * @param {boolean} options.depositTransactions - Include deposit transactions.
         * @param {boolean} options.registerTransactions - Include register transactions.
         * @param {integer} options.branchId - Branch id.
         * @param {Object} params - additional query params
         */
  getPaymentsTransactions(options = {}, params = {}) {
    const url = `/api/v3.0/payments/transactions`;
    const paginationPageNumber = options.hasOwnProperty("paginationPageNumber")
      ? options["paginationPageNumber"]
      : undefined;
    const paginationPageSize = options.hasOwnProperty("paginationPageSize")
      ? options["paginationPageSize"]
      : undefined;
    const paginationSortBy = options.hasOwnProperty("paginationSortBy")
      ? options["paginationSortBy"]
      : undefined;
    const paginationIsAsc = options.hasOwnProperty("paginationIsAsc")
      ? options["paginationIsAsc"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const shiftId = options.hasOwnProperty("shiftId")
      ? options["shiftId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const paymentMethodId = options.hasOwnProperty("paymentMethodId")
      ? options["paymentMethodId"]
      : undefined;
    const paymentDirection = options.hasOwnProperty("paymentDirection")
      ? options["paymentDirection"]
      : undefined;
    const invoiceTransactions = options.hasOwnProperty("invoiceTransactions")
      ? options["invoiceTransactions"]
      : undefined;
    const depositTransactions = options.hasOwnProperty("depositTransactions")
      ? options["depositTransactions"]
      : undefined;
    const registerTransactions = options.hasOwnProperty("registerTransactions")
      ? options["registerTransactions"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const query = Object.assign({}, params);
    if (paginationPageNumber !== undefined)
      query["Pagination.PageNumber"] = paginationPageNumber;
    if (paginationPageSize !== undefined)
      query["Pagination.PageSize"] = paginationPageSize;
    if (paginationSortBy !== undefined)
      query["Pagination.SortBy"] = paginationSortBy;
    if (paginationIsAsc !== undefined)
      query["Pagination.IsAsc"] = paginationIsAsc;
    if (expand !== undefined) query["Expand"] = expand;
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (shiftId !== undefined) query["ShiftId"] = shiftId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (userId !== undefined) query["UserId"] = userId;
    if (paymentMethodId !== undefined)
      query["PaymentMethodId"] = paymentMethodId;
    if (paymentDirection !== undefined)
      query["PaymentDirection"] = paymentDirection;
    if (invoiceTransactions !== undefined)
      query["InvoiceTransactions"] = invoiceTransactions;
    if (depositTransactions !== undefined)
      query["DepositTransactions"] = depositTransactions;
    if (registerTransactions !== undefined)
      query["RegisterTransactions"] = registerTransactions;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   *
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Date from.
   * @param {string} options.dateTo - Date to.
   * @param {integer} options.branchId - Branch id.
   * @param {integer} options.shiftId - Shift id.
   * @param {integer} options.registerId - Register id.
   * @param {integer} options.operatorId - Operator id.
   * @param {integer} options.userId - Customer id.
   * @param {integer} options.paymentMethodId - Payment method id.
   * @param {integer} options.paymentDirection - Direction type.
   * @param {boolean} options.invoiceTransactions - Include invoice transactions.
   * @param {boolean} options.depositTransactions - Include deposit transactions.
   * @param {boolean} options.registerTransactions - Include register transactions.
   * @param {Object} params - additional query params
   */
  getPaymentsTransactionsStats(options = {}, params = {}) {
    const url = `/api/v3.0/payments/transactions/stats`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const shiftId = options.hasOwnProperty("shiftId")
      ? options["shiftId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const paymentMethodId = options.hasOwnProperty("paymentMethodId")
      ? options["paymentMethodId"]
      : undefined;
    const paymentDirection = options.hasOwnProperty("paymentDirection")
      ? options["paymentDirection"]
      : undefined;
    const invoiceTransactions = options.hasOwnProperty("invoiceTransactions")
      ? options["invoiceTransactions"]
      : undefined;
    const depositTransactions = options.hasOwnProperty("depositTransactions")
      ? options["depositTransactions"]
      : undefined;
    const registerTransactions = options.hasOwnProperty("registerTransactions")
      ? options["registerTransactions"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (shiftId !== undefined) query["ShiftId"] = shiftId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (userId !== undefined) query["UserId"] = userId;
    if (paymentMethodId !== undefined)
      query["PaymentMethodId"] = paymentMethodId;
    if (paymentDirection !== undefined)
      query["PaymentDirection"] = paymentDirection;
    if (invoiceTransactions !== undefined)
      query["InvoiceTransactions"] = invoiceTransactions;
    if (depositTransactions !== undefined)
      query["DepositTransactions"] = depositTransactions;
    if (registerTransactions !== undefined)
      query["RegisterTransactions"] = registerTransactions;
    return this.client.request("get", url, {}, query);
  }

  /**
   *
   * @param {integer} id - path
   * @param {boolean} data.void - Indicates an void.
   * @param {Object} params - additional query params
   */
  postPaymentsByIdReverse(id, data = {}, params = {}) {
    const url = `/api/v3.0/payments/${id}/reverse`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
