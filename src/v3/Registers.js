import { GizmoClient } from "../GizmoClient.js";

export class Registers {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all registers.
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
         * @param {array} options.expand - Include specified objects in the result.
         * @param {string} options.name - Register name.
         * @param {integer} options.branchId - query
         * @param {boolean} options.isDeleted - Is deleted.
         * @param {Object} params - additional query params
         */
  getRegisters(options = {}, params = {}) {
    const url = `/api/v3.0/registers`;
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
    const name = options.hasOwnProperty("name") ? options["name"] : undefined;
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
    if (name !== undefined) query["Name"] = name;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a register.
   * @param {integer} data.number -
   * @param {string} data.name -
   * @param {number} data.startCash -
   * @param {integer} data.idleTimeout -
   * @param {integer} data.paymentTerminalNumber -
   * @param {integer} data.fiscalReceiptPrinterNumber -
   * @param {integer} data.stockId -
   * @param {integer} data.companionId -
   * @param {integer} data.branchId -
   * @param {integer} data.qrDisplayNumber -
   * @param {Object} params - additional query params
   */
  postRegisters(data = {}, params = {}) {
    const url = `/api/v3.0/registers`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a register.
   * @param {integer} data.id -
   * @param {integer} data.number -
   * @param {string} data.name -
   * @param {number} data.startCash -
   * @param {integer} data.idleTimeout -
   * @param {integer} data.paymentTerminalNumber -
   * @param {integer} data.fiscalReceiptPrinterNumber -
   * @param {integer} data.stockId -
   * @param {integer} data.companionId -
   * @param {integer} data.branchId -
   * @param {integer} data.qrDisplayNumber -
   * @param {Object} params - additional query params
   */
  putRegisters(data = {}, params = {}) {
    const url = `/api/v3.0/registers`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a register by id.
   * @param {integer} id - Register id.
   * @param {Object} params - additional query params
   */
  getRegistersById(id, options = {}, params = {}) {
    const url = `/api/v3.0/registers/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a register.
   * @param {integer} id - Register id.
   * @param {Object} params - additional query params
   */
  deleteRegistersById(id, params = {}) {
    const url = `/api/v3.0/registers/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undelete a register.
   * @param {integer} id - Register id.
   * @param {Object} params - additional query params
   */
  putRegistersByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/registers/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Sets entry name.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/registers/{id}/name"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putRegistersByIdName(id, data = {}, params = {}) {
    const url = `/api/v3.0/registers/${id}/name`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getRegistersNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/registers/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {integer} branchId - Branch id.
   * @param {Object} params - additional query params
   */
  getRegistersNameByNameBranchByBranchIdExist(
    name,
    branchId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/registers/name/${name}/branch/${branchId}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
