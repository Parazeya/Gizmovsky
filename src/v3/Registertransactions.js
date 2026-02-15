import { GizmoClient } from "../GizmoClient.js";

export class RegisterTransactions {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all register transactions.
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
         * @param {string} options.dateFrom - Return register transactions where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return register transactions where the date less than or equal to the specified date.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.type - Transaction type.
         * @param {Object} params - additional query params
         */
  getRegisterTransactions(options = {}, params = {}) {
    const url = `/api/v3.0/registertransactions`;
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
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
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
    if (expand !== undefined) query["Expand"] = expand;
    if (type !== undefined) query["Type"] = type;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates register transaction.
   * @param {integer} data.type - The type of the register transaction.
   * @param {number} data.amount - The amount of the register transaction.
   * @param {string} data.note - The note of the register transaction.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing for created transaction.
   * @param {Object} params - additional query params
   */
  postRegisterTransactions(data = {}, params = {}) {
    const url = `/api/v3.0/registertransactions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get a register transaction by id.
   * @param {integer} id - Register transaction id.
   * @param {Object} params - additional query params
   */
  getRegisterTransactionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/registertransactions/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Waits for payment receipt fiscalization.
   * @param {integer} id - Register transaction id.
   * @param {Object} params - additional query params
   */
  getRegisterTransactionsByIdReceiptWait(id, options = {}, params = {}) {
    const url = `/api/v3.0/registertransactions/${id}/receipt/wait`;
    return this.client.request("get", url, {}, params);
  }
}
