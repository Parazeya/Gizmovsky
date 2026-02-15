import { GizmoClient } from "../GizmoClient.js";

export class ApplicationPersonalFiles {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application personal files.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.personalFileName - query
   * @param {string} options.personalFileCaption - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplicationPersonalFiles(options = {}, params = {}) {
    const url = `/api/v2.0/applicationpersonalfiles`;
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
    const personalFileName = options.hasOwnProperty("personalFileName")
      ? options["personalFileName"]
      : undefined;
    const personalFileCaption = options.hasOwnProperty("personalFileCaption")
      ? options["personalFileCaption"]
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
    if (personalFileName !== undefined)
      query["PersonalFileName"] = personalFileName;
    if (personalFileCaption !== undefined)
      query["PersonalFileCaption"] = personalFileCaption;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application personal file.
   * @param {object} data.type -
   * @param {string} data.name -
   * @param {string} data.caption -
   * @param {string} data.description -
   * @param {boolean} data.accessible -
   * @param {string} data.source -
   * @param {object} data.activation -
   * @param {integer} data.maxQuota -
   * @param {integer} data.compressionLevel -
   * @param {boolean} data.cleanUp -
   * @param {boolean} data.store -
   * @param {object} data.directoryOptions -
   * @param {Object} params - additional query params
   */
  postApplicationPersonalFiles(data = {}, params = {}) {
    const url = `/api/v2.0/applicationpersonalfiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application personal file.
   * @param {integer} data.id -
   * @param {object} data.type -
   * @param {string} data.name -
   * @param {string} data.caption -
   * @param {string} data.description -
   * @param {boolean} data.accessible -
   * @param {string} data.source -
   * @param {object} data.activation -
   * @param {integer} data.maxQuota -
   * @param {integer} data.compressionLevel -
   * @param {boolean} data.cleanUp -
   * @param {boolean} data.store -
   * @param {object} data.directoryOptions -
   * @param {Object} params - additional query params
   */
  putApplicationPersonalFiles(data = {}, params = {}) {
    const url = `/api/v2.0/applicationpersonalfiles`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application personal file by id.
   * @param {integer} id - Application personal file id.
   * @param {Object} params - additional query params
   */
  getApplicationPersonalFilesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationpersonalfiles/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application personal file.
   * @param {integer} id - Application personal file id.
   * @param {Object} params - additional query params
   */
  deleteApplicationPersonalFilesById(id, params = {}) {
    const url = `/api/v2.0/applicationpersonalfiles/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
