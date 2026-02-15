import { GizmoClient } from "../GizmoClient.js";

export class Attributes {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all attributes.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.attributeName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getAttributes(options = {}, params = {}) {
    const url = `/api/v2.0/attributes`;
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
    const attributeName = options.hasOwnProperty("attributeName")
      ? options["attributeName"]
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
    if (attributeName !== undefined) query["AttributeName"] = attributeName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an attribute.
   * @param {string} data.name -
   * @param {string} data.friendlyName -
   * @param {Object} params - additional query params
   */
  postAttributes(data = {}, params = {}) {
    const url = `/api/v2.0/attributes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an attribute.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.friendlyName -
   * @param {Object} params - additional query params
   */
  putAttributes(data = {}, params = {}) {
    const url = `/api/v2.0/attributes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an attribute by id.
   * @param {integer} id - Attribute id.
   * @param {Object} params - additional query params
   */
  getAttributesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/attributes/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an attribute.
   * @param {integer} id - Attribute id.
   * @param {Object} params - additional query params
   */
  deleteAttributesById(id, params = {}) {
    const url = `/api/v2.0/attributes/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
