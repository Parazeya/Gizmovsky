import { GizmoClient } from "../GizmoClient.js";

export class ApplicationPersonalFiles {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application personal files.
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
         * @param {string} options.personalFileName - Return personal files with names that contain the specified string.
         * @param {string} options.personalFileCaption - Return personal files with captions that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationPersonalFiles(options = {}, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles`;
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
   * @param {integer} data.type - The type of the personal file.
   * @param {string} data.name - The name of the personal file.
   * @param {string} data.caption - The caption of the personal file.
   * @param {string} data.description - The description of the personal file.
   * @param {boolean} data.accessible - Whether the personal file is accessible.
   * @param {string} data.source - The source path of the personal file.
   * @param {integer} data.activation - The activation type of the personal file.
   * @param {integer} data.maxQuota - The quota of the personal file.
   * @param {integer} data.compressionLevel - The compression level of the personal file.
   * @param {boolean} data.cleanUp - Whether to clean up before restore.
   * @param {boolean} data.store - Whether to store the personal file.
   * @param {object} data.directoryOptions -
   * @param {Object} params - additional query params
   */
  postApplicationPersonalFiles(data = {}, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application personal file.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.type - The type of the personal file.
   * @param {string} data.name - The name of the personal file.
   * @param {string} data.caption - The caption of the personal file.
   * @param {string} data.description - The description of the personal file.
   * @param {boolean} data.accessible - Whether the personal file is accessible.
   * @param {string} data.source - The source path of the personal file.
   * @param {integer} data.activation - The activation type of the personal file.
   * @param {integer} data.maxQuota - The quota of the personal file.
   * @param {integer} data.compressionLevel - The compression level of the personal file.
   * @param {boolean} data.cleanUp - Whether to clean up before restore.
   * @param {boolean} data.store - Whether to store the personal file.
   * @param {object} data.directoryOptions -
   * @param {Object} params - additional query params
   */
  putApplicationPersonalFiles(data = {}, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application personal file by id.
   * @param {integer} id - Application personal file id.
   * @param {Object} params - additional query params
   */
  getApplicationPersonalFilesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application personal file.
   * @param {integer} id - Application personal file id.
   * @param {Object} params - additional query params
   */
  deleteApplicationPersonalFilesById(id, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Returns the list of applications and executables that have the specified personal file assigned.
   * @param {integer} id - Application personal file id.
   * @param {Object} params - additional query params
   */
  getApplicationPersonalFilesByIdUsages(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles/${id}/usages`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Unassign the specified personal file from every executable.
   * @param {integer} id - Application personal file id.
   * @param {Object} params - additional query params
   */
  putApplicationPersonalFilesByIdUnassign(id, params = {}) {
    const url = `/api/v3.0/applicationpersonalfiles/${id}/unassign`;
    return this.client.request("put", url, {}, params);
  }
}
