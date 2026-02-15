import { GizmoClient } from "../GizmoClient.js";

export class ApplicationLinks {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application links.
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
         * @param {integer} options.applicationId - Return links that belongs to the specified application.
         * @param {Object} params - additional query params
         */
  getApplicationLinks(options = {}, params = {}) {
    const url = `/api/v3.0/applicationlinks`;
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
    const applicationId = options.hasOwnProperty("applicationId")
      ? options["applicationId"]
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
    if (applicationId !== undefined) query["ApplicationId"] = applicationId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application link.
   * @param {integer} data.applicationId - The Id of the application this link belongs to.
   * @param {string} data.caption - The caption of the link.
   * @param {string} data.description - The description of the link.
   * @param {string} data.url - The URL of the link.
   * @param {integer} data.displayOrder - The display order of the link.
   * @param {Object} params - additional query params
   */
  postApplicationLinks(data = {}, params = {}) {
    const url = `/api/v3.0/applicationlinks`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application link.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.applicationId - The Id of the application this link belongs to.
   * @param {string} data.caption - The caption of the link.
   * @param {string} data.description - The description of the link.
   * @param {string} data.url - The URL of the link.
   * @param {integer} data.displayOrder - The display order of the link.
   * @param {Object} params - additional query params
   */
  putApplicationLinks(data = {}, params = {}) {
    const url = `/api/v3.0/applicationlinks`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application link by id.
   * @param {integer} id - Application links id.
   * @param {Object} params - additional query params
   */
  getApplicationLinksById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationlinks/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application link.
   * @param {integer} id - Application links id.
   * @param {Object} params - additional query params
   */
  deleteApplicationLinksById(id, params = {}) {
    const url = `/api/v3.0/applicationlinks/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
