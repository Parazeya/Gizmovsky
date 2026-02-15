import { GizmoClient } from "../GizmoClient.js";

export class AssetTypes {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all asset types.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.assetTypeName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getAssetTypes(options = {}, params = {}) {
    const url = `/api/v2.0/assettypes`;
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
    const assetTypeName = options.hasOwnProperty("assetTypeName")
      ? options["assetTypeName"]
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
    if (assetTypeName !== undefined) query["AssetTypeName"] = assetTypeName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an asset type.
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {Object} params - additional query params
   */
  postAssetTypes(data = {}, params = {}) {
    const url = `/api/v2.0/assettypes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an asset type.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {Object} params - additional query params
   */
  putAssetTypes(data = {}, params = {}) {
    const url = `/api/v2.0/assettypes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an asset type by id.
   * @param {integer} id - Asset type id.
   * @param {Object} params - additional query params
   */
  getAssetTypesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/assettypes/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an asset type.
   * @param {integer} id - Asset type id.
   * @param {Object} params - additional query params
   */
  deleteAssetTypesById(id, params = {}) {
    const url = `/api/v2.0/assettypes/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
