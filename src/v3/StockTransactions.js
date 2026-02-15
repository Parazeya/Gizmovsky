import { GizmoClient } from "../GizmoClient.js";

export class StockTransactions {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all stock transactions.
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
         * @param {string} options.dateFrom - Return stock transactions where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return stock transactions where the date less than or equal to the specified date.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.stockId - Stock id.
         * @param {integer} options.type - Stock transaction type.
         * @param {integer} options.productId - Product id.
         * @param {integer} options.operatorId - Operator id.
         * @param {Object} params - additional query params
         */
  getStockTransactions(options = {}, params = {}) {
    const url = `/api/v3.0/stocktransactions`;
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
    const stockId = options.hasOwnProperty("stockId")
      ? options["stockId"]
      : undefined;
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
    const productId = options.hasOwnProperty("productId")
      ? options["productId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
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
    if (expand !== undefined) query["Expand"] = expand;
    if (stockId !== undefined) query["StockId"] = stockId;
    if (type !== undefined) query["Type"] = type;
    if (productId !== undefined) query["ProductId"] = productId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates stock transaction.
   * @param {integer} data.productId - Product id.
   * @param {integer} data.type - The type of the stock transaction.
   * @param {number} data.amount - The amount of the stock transaction.
   * @param {integer} data.stockId - Stock id.
   * @param {Object} params - additional query params
   */
  postStockTransactions(data = {}, params = {}) {
    const url = `/api/v3.0/stocktransactions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get a stock transaction by id.
   * @param {integer} id - Stock transaction id.
   * @param {Object} params - additional query params
   */
  getStockTransactionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/stocktransactions/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
