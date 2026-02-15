import { GizmoClient } from "../GizmoClient.js";

export class ClientOptions {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all client options.
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
         * @param {Object} params - additional query params
         */
  getClientOptions(options = {}, params = {}) {
    const url = `/api/v3.0/clientoptions`;
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
   * Create a client option.
   * @param {string} data.name - The name of the client option.
   * @param {object} data.clientOptionSkin -
   * @param {string} data.customCSS -
   * @param {boolean} data.isDefault -
   * @param {Object} params - additional query params
   */
  postClientOptions(data = {}, params = {}) {
    const url = `/api/v3.0/clientoptions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a client option.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the client option.
   * @param {object} data.clientOptionSkin -
   * @param {string} data.customCSS -
   * @param {boolean} data.isDefault -
   * @param {Object} params - additional query params
   */
  putClientOptions(data = {}, params = {}) {
    const url = `/api/v3.0/clientoptions`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a client option by id.
   * @param {integer} id - Client option id.
   * @param {Object} params - additional query params
   */
  getClientOptionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/clientoptions/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a client option.
   * @param {integer} id - Client option id.
   * @param {Object} params - additional query params
   */
  deleteClientOptionsById(id, params = {}) {
    const url = `/api/v3.0/clientoptions/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Set client option as default.
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  putClientOptionsByIdSetasdefault(id, params = {}) {
    const url = `/api/v3.0/clientoptions/${id}/setasdefault`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} skinImageType - path
   * @param {Object} params - additional query params
   */
  getClientOptionsByIdImageBySkinImageType(
    id,
    skinImageType,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/clientoptions/${id}/image/${skinImageType}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.imageType - Image type.
   * @param {string} data.imageName - Image name.
   * @param {string} data.image - Image.
   * @param {Object} params - additional query params
   */
  putClientOptionsByIdImage(id, data = {}, params = {}) {
    const url = `/api/v3.0/clientoptions/${id}/image`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
