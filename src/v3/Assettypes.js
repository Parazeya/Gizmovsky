import { GizmoClient } from "../GizmoClient.js";

export class AssetTypes {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all asset types.
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
         * @param {string} options.assetTypeName - Return asset types with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getAssetTypes(options = {}, params = {}) {
    const url = `/api/v3.0/assettypes`;
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
   * @param {string} data.name - The name of the asset type.
   * @param {string} data.description - The description of the asset type.
   * @param {Object} params - additional query params
   */
  postAssetTypes(data = {}, params = {}) {
    const url = `/api/v3.0/assettypes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an asset type.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the asset type.
   * @param {string} data.description - The description of the asset type.
   * @param {Object} params - additional query params
   */
  putAssetTypes(data = {}, params = {}) {
    const url = `/api/v3.0/assettypes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an asset type by id.
   * @param {integer} id - Asset type id.
   * @param {Object} params - additional query params
   */
  getAssetTypesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/assettypes/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an asset type.
   * @param {integer} id - Asset type id.
   * @param {Object} params - additional query params
   */
  deleteAssetTypesById(id, params = {}) {
    const url = `/api/v3.0/assettypes/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
