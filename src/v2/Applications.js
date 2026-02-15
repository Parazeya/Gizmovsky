import { GizmoClient } from "../GizmoClient.js";

export class Applications {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all applications.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.applicationTitle - query
   * @param {integer} options.categoryId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplications(options = {}, params = {}) {
    const url = `/api/v2.0/applications`;
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
    const applicationTitle = options.hasOwnProperty("applicationTitle")
      ? options["applicationTitle"]
      : undefined;
    const categoryId = options.hasOwnProperty("categoryId")
      ? options["categoryId"]
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
    if (applicationTitle !== undefined)
      query["ApplicationTitle"] = applicationTitle;
    if (categoryId !== undefined) query["CategoryId"] = categoryId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application.
   * @param {string} data.title -
   * @param {string} data.description -
   * @param {string} data.version -
   * @param {integer} data.applicationCategoryId -
   * @param {integer} data.developerId -
   * @param {integer} data.publisherId -
   * @param {integer} data.ageRating -
   * @param {string} data.releaseDate -
   * @param {integer} data.defaultExecutableId -
   * @param {Object} params - additional query params
   */
  postApplications(data = {}, params = {}) {
    const url = `/api/v2.0/applications`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application.
   * @param {integer} data.id -
   * @param {string} data.title -
   * @param {string} data.description -
   * @param {string} data.version -
   * @param {integer} data.applicationCategoryId -
   * @param {integer} data.developerId -
   * @param {integer} data.publisherId -
   * @param {integer} data.ageRating -
   * @param {string} data.releaseDate -
   * @param {integer} data.defaultExecutableId -
   * @param {Object} params - additional query params
   */
  putApplications(data = {}, params = {}) {
    const url = `/api/v2.0/applications`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application by id.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  getApplicationsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applications/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  deleteApplicationsById(id, params = {}) {
    const url = `/api/v2.0/applications/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the image of the specified application.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  getApplicationsByIdImage(id, options = {}, params = {}) {
    const url = `/api/v2.0/applications/${id}/image`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update the image of the specified application.
   * @param {integer} id - User id.
   * @param {string} data.image -
   * @param {Object} params - additional query params
   */
  putApplicationsByIdImage(id, data = {}, params = {}) {
    const url = `/api/v2.0/applications/${id}/image`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
