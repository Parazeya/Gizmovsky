import { GizmoClient } from "../GizmoClient.js";

export class Registers {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all registers.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {string} options.name - query
   * @param {integer} options.branchId - query
   * @param {boolean} options.isDeleted - query
   * @param {Object} params - additional query params
   */
  getRegisters(options = {}, params = {}) {
    const url = `/api/v2.0/registers`;
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
   * @param {string} data.macAddress -
   * @param {number} data.startCash -
   * @param {integer} data.idleTimeout -
   * @param {Object} params - additional query params
   */
  postRegisters(data = {}, params = {}) {
    const url = `/api/v2.0/registers`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a register.
   * @param {integer} data.id -
   * @param {integer} data.number -
   * @param {string} data.name -
   * @param {string} data.macAddress -
   * @param {number} data.startCash -
   * @param {integer} data.idleTimeout -
   * @param {Object} params - additional query params
   */
  putRegisters(data = {}, params = {}) {
    const url = `/api/v2.0/registers`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a register by id.
   * @param {integer} id - Register id.
   * @param {Object} params - additional query params
   */
  getRegistersById(id, options = {}, params = {}) {
    const url = `/api/v2.0/registers/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a register.
   * @param {integer} id - Register id.
   * @param {Object} params - additional query params
   */
  deleteRegistersById(id, params = {}) {
    const url = `/api/v2.0/registers/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undelete a register.
   * @param {integer} id - Register id.
   * @param {Object} params - additional query params
   */
  putRegistersById(id, params = {}) {
    const url = `/api/v2.0/registers/${id}`;
    return this.client.request("put", url, {}, params);
  }
}
