import { GizmoClient } from "../GizmoClient.js";

export class Assets {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all assets.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.tag - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getAssets(options = {}, params = {}) {
    const url = `/api/v2.0/assets`;
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
    const tag = options.hasOwnProperty("tag") ? options["tag"] : undefined;
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
    if (tag !== undefined) query["Tag"] = tag;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an asset.
   * @param {integer} data.assetTypeId -
   * @param {integer} data.number -
   * @param {string} data.tag -
   * @param {string} data.smartCardUid -
   * @param {string} data.barcode -
   * @param {string} data.serialNumber -
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  postAssets(data = {}, params = {}) {
    const url = `/api/v2.0/assets`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an asset.
   * @param {integer} data.id -
   * @param {integer} data.assetTypeId -
   * @param {integer} data.number -
   * @param {string} data.tag -
   * @param {string} data.smartCardUid -
   * @param {string} data.barcode -
   * @param {string} data.serialNumber -
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  putAssets(data = {}, params = {}) {
    const url = `/api/v2.0/assets`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an asset by id.
   * @param {integer} id - Asset id.
   * @param {Object} params - additional query params
   */
  getAssetsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/assets/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an asset.
   * @param {integer} id - Asset id.
   * @param {Object} params - additional query params
   */
  deleteAssetsById(id, params = {}) {
    const url = `/api/v2.0/assets/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
