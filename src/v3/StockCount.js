import { GizmoClient } from "../GizmoClient.js";

export class StockCount {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets filtered entries.
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
         * @param {array} options.expand - query
         * @param {integer} options.stockId - Stock id.
         * @param {integer} options.shiftId - Gets or sets the shift id.
         * @param {integer} options.operatorId - Gets or sets the operator id.
         * @param {boolean} options.hasUnexpected - Gets or sets whether the stock count has unexpected entries.
         * @param {integer} options.type - Count type.
         * @param {string} options.dateFrom - Return stock counts where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return stock counts where the date less than or equal to the specified date.
         * @param {Object} params - additional query params
         */
  getStockCount(options = {}, params = {}) {
    const url = `/api/v3.0/stockcount`;
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
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const stockId = options.hasOwnProperty("stockId")
      ? options["stockId"]
      : undefined;
    const shiftId = options.hasOwnProperty("shiftId")
      ? options["shiftId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const hasUnexpected = options.hasOwnProperty("hasUnexpected")
      ? options["hasUnexpected"]
      : undefined;
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
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
    if (expand !== undefined) query["Expand"] = expand;
    if (stockId !== undefined) query["StockId"] = stockId;
    if (shiftId !== undefined) query["ShiftId"] = shiftId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (hasUnexpected !== undefined) query["HasUnexpected"] = hasUnexpected;
    if (type !== undefined) query["Type"] = type;
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {integer} data.stockId - Stock id.
   * @param {string} data.note - Count note.
   * @param {integer} data.type - Count type.
   * @param {array} data.counts - Counts.
   * @param {Object} params - additional query params
   */
  postStockCount(data = {}, params = {}) {
    const url = `/api/v3.0/stockcount`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getStockCountById(id, options = {}, params = {}) {
    const url = `/api/v3.0/stockcount/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Gets filtered entries.
         * @param {integer} id - Entry id.
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
         * @param {array} options.expand - query
         * @param {Object} params - additional query params
         */
  getStockCountByIdEntries(id, options = {}, params = {}) {
    const url = `/api/v3.0/stockcount/${id}/entries`;
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
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }
}
