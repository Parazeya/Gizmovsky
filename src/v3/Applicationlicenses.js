import { GizmoClient } from "../GizmoClient.js";

export class ApplicationLicenses {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all licenses.
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
         * @param {string} options.licenseName - Return licenses with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationLicenses(options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses`;
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
    const licenseName = options.hasOwnProperty("licenseName")
      ? options["licenseName"]
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
    if (licenseName !== undefined) query["LicenseName"] = licenseName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an license.
   * @param {string} data.name - The name of the license.
   * @param {string} data.plugin - License plugin unique identifier.
   * @param {array} data.options - License options.
   * @param {array} data.keys - License keys.
   * @param {Object} params - additional query params
   */
  postApplicationLicenses(data = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an license.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the license.
   * @param {array} data.options - License options.
   * @param {array} data.keys - License keys.
   * @param {Object} params - additional query params
   */
  putApplicationLicenses(data = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an license by id.
   * @param {integer} id - Application license id.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete license.
   * @param {integer} id - License id.
   * @param {Object} params - additional query params
   */
  deleteApplicationLicensesById(id, params = {}) {
    const url = `/api/v3.0/applicationlicenses/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Unassign the specified license from all related entries.
   * @param {integer} id - License id.
   * @param {Object} params - additional query params
   */
  putApplicationLicensesByIdUnassign(id, params = {}) {
    const url = `/api/v3.0/applicationlicenses/${id}/unassign`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Retrieves license options.
   * @param {integer} id - License id.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesByIdOptions(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/${id}/options`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Retrieve license keys.
   * @param {integer} id - License id.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesByIdKeys(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/${id}/keys`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates license key.
   * @param {integer} id - License id.
   * @param {string} data.propertyName - Property name.
   * @param {string} data.propertyValue - Property value.
   * @param {Object} params - additional query params
   */
  postApplicationLicensesByIdKeys(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/${id}/keys`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Retrieve metadata for an application license.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesMetadata(options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/metadata`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Retrieve license key.
   * @param {integer} keyId - Key id.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesKeysByKeyId(keyId, options = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/keys/${keyId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes existing license key.
   * @param {integer} keyId - Key id.
   * @param {Object} params - additional query params
   */
  deleteApplicationLicensesKeysByKeyId(keyId, params = {}) {
    const url = `/api/v3.0/applicationlicenses/keys/${keyId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Enables existing license key.
   * @param {integer} keyId - Key id.
   * @param {boolean} enable - Enabled.
   * @param {Object} params - additional query params
   */
  putApplicationLicensesKeysByKeyIdEnableByEnable(keyId, enable, params = {}) {
    const url = `/api/v3.0/applicationlicenses/keys/${keyId}/enable/${enable}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Sets license key associated host id.
   * @param {integer} keyId - Key id.
   * @param {integer} data.hostId - Host id.
   * @param {Object} params - additional query params
   */
  putApplicationLicensesKeysByKeyIdHost(keyId, data = {}, params = {}) {
    const url = `/api/v3.0/applicationlicenses/keys/${keyId}/host`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Retrieve display value for an application license key.
   * @param {string} plugin - License plugin guid.
   * @param {Object} options - options object with possible query parameters
   * @param {object} options.values - Key values.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesByPluginKeysDisplayvalue(
    plugin,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/applicationlicenses/${plugin}/keys/displayvalue`;
    const values = options.hasOwnProperty("values")
      ? options["values"]
      : undefined;
    const query = Object.assign({}, params);
    if (values !== undefined) query["values"] = values;
    return this.client.request("get", url, {}, query);
  }
}
