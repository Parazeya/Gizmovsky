import { GizmoClient } from "../GizmoClient.js";

export class Assets {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all assets.
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
         * @param {string} options.tag - Return assets with tags that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.branchId - query
         * @param {integer} options.assetTypeId - Return assets of the specified asset type.
         * @param {Object} params - additional query params
         */
  getAssets(options = {}, params = {}) {
    const url = `/api/v3.0/assets`;
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
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const assetTypeId = options.hasOwnProperty("assetTypeId")
      ? options["assetTypeId"]
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
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (assetTypeId !== undefined) query["AssetTypeId"] = assetTypeId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an asset.
   * @param {integer} data.assetTypeId - The Id of the asset type this asset belongs to.
   * @param {integer} data.number - The number of the asset.
   * @param {string} data.tag - The tag of the asset.
   * @param {string} data.smartCardUid - The smart card unique id of the asset.
   * @param {string} data.barcode - The barcode of the asset.
   * @param {string} data.serialNumber - The serial number of the asset.
   * @param {boolean} data.isEnabled - Whether the asset is enabled.
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  postAssets(data = {}, params = {}) {
    const url = `/api/v3.0/assets`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an asset.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.assetTypeId - The Id of the asset type this asset belongs to.
   * @param {integer} data.number - The number of the asset.
   * @param {string} data.tag - The tag of the asset.
   * @param {string} data.smartCardUid - The smart card unique id of the asset.
   * @param {string} data.barcode - The barcode of the asset.
   * @param {string} data.serialNumber - The serial number of the asset.
   * @param {boolean} data.isEnabled - Whether the asset is enabled.
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  putAssets(data = {}, params = {}) {
    const url = `/api/v3.0/assets`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an asset by id.
   * @param {integer} id - Asset id.
   * @param {Object} params - additional query params
   */
  getAssetsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/assets/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an asset.
   * @param {integer} id - Asset id.
   * @param {Object} params - additional query params
   */
  deleteAssetsById(id, params = {}) {
    const url = `/api/v3.0/assets/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified rfid.
   * @param {string} rfid - Entry rfid.
   * @param {Object} params - additional query params
   */
  getAssetsRfidByRfidExist(rfid, options = {}, params = {}) {
    const url = `/api/v3.0/assets/rfid/${rfid}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
