import { GizmoClient } from "../GizmoClient.js";

export class Stock {
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
         * @param {integer} options.type - Filters by stock type.
         * @param {integer} options.branchId - Filters by assigned branches.
         * @param {boolean} options.isDeleted - Filters by deleted status.
         * @param {Object} params - additional query params
         */
  getStock(options = {}, params = {}) {
    const url = `/api/v3.0/stock`;
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
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {string} data.name -
   * @param {integer} data.type - Stock type.
   * @param {integer} data.branchId -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  postStock(data = {}, params = {}) {
    const url = `/api/v3.0/stock`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {integer} data.type - Stock type.
   * @param {integer} data.branchId -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  putStock(data = {}, params = {}) {
    const url = `/api/v3.0/stock`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getStockById(id, options = {}, params = {}) {
    const url = `/api/v3.0/stock/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteStockById(id, params = {}) {
    const url = `/api/v3.0/stock/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putStockByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/stock/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Sets entry name.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/stock/{id}/name"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putStockByIdName(id, data = {}, params = {}) {
    const url = `/api/v3.0/stock/${id}/name`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getStockNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/stock/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {integer} branchId - Branch id.
   * @param {Object} params - additional query params
   */
  getStockNameByNameBranchByBranchIdExist(
    name,
    branchId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/stock/name/${name}/branch/${branchId}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
