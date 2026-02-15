import { GizmoClient } from "../GizmoClient.js";

export class Inventories {
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
         * @param {integer} options.type - Gets or sets inventory type.
         * @param {integer} options.stockId - Gets or sets stock id.
         * @param {string} options.dateFrom - Return inventories where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return inventories where the date less than or equal to the specified date.
         * @param {integer} options.operatorId - Gets or sets the operator id.
         * @param {boolean} options.isCompleted - Completed inventories.
         * @param {Object} params - additional query params
         */
  getInventories(options = {}, params = {}) {
    const url = `/api/v3.0/inventories`;
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
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
    const stockId = options.hasOwnProperty("stockId")
      ? options["stockId"]
      : undefined;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const isCompleted = options.hasOwnProperty("isCompleted")
      ? options["isCompleted"]
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
    if (type !== undefined) query["Type"] = type;
    if (stockId !== undefined) query["StockId"] = stockId;
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (isCompleted !== undefined) query["IsCompleted"] = isCompleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get an inventory by id.
   * @param {integer} id - Inventory id.
   * @param {Object} params - additional query params
   */
  getInventoriesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/inventories/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Gets filtered entries.
         * @param {integer} id - Id.
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
  getInventoriesByIdEntries(id, options = {}, params = {}) {
    const url = `/api/v3.0/inventories/${id}/entries`;
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

  /**
   * Creates a new inventory.
   * @param {integer} data.stockId - Stock id.
   * @param {string} data.note - Note.
   * @param {integer} data.inventoryTransferId - Inventory transfer Id.
   * @param {array} data.documents - Documents.
   * @param {array} data.entries -
   * @param {Object} params - additional query params
   */
  postInventoriesInbound(data = {}, params = {}) {
    const url = `/api/v3.0/inventories/inbound`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Creates a new inventory.
   * @param {integer} data.stockId - Stock id.
   * @param {string} data.note - Note.
   * @param {array} data.documents - Documents.
   * @param {integer} data.adjustmentType - Adjustment type.
   * @param {array} data.entries -
   * @param {Object} params - additional query params
   */
  postInventoriesAdjustment(data = {}, params = {}) {
    const url = `/api/v3.0/inventories/adjustment`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Creates a new inventory.
   * @param {integer} data.stockId - Stock id.
   * @param {integer} data.transferStockId - Transfer stock id.
   * @param {string} data.note - Note.
   * @param {array} data.documents - Documents.
   * @param {array} data.entries -
   * @param {boolean} data.autoInbound - Automatic transfer.
   * @param {Object} params - additional query params
   */
  postInventoriesTransfer(data = {}, params = {}) {
    const url = `/api/v3.0/inventories/transfer`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Creates a new inventory.
   * @param {integer} id - Transfer inventory id.
   * @param {Object} data - request body (see components.schemas.InventoryTransferInboundModelCreate)
   * @param {Object} params - additional query params
   */
  postInventoriesTransferByIdInbound(id, data = {}, params = {}) {
    const url = `/api/v3.0/inventories/transfer/${id}/inbound`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
