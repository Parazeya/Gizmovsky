import { GizmoClient } from "../GizmoClient.js";

export class Applications {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all applications.
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
         * @param {string} options.applicationTitle - Return applications with titles that contain the specified string.
         * @param {integer} options.categoryId - Return applications that belongs to the specified category.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplications(options = {}, params = {}) {
    const url = `/api/v3.0/applications`;
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
   * @param {string} data.title - The title of the application.
   * @param {string} data.description - The description of the application.
   * @param {string} data.version - The version of the application.
   * @param {integer} data.applicationCategoryId - The Id of the application category this application belongs to.
   * @param {integer} data.developerId - The Id of the application enterprise that is the developer of the application.
   * @param {integer} data.publisherId - The Id of the application enterprise that is the publisher of the application.
   * @param {integer} data.ageRating - The age rating of the application.
   * @param {string} data.releaseDate - The release date of the application.
   * @param {integer} data.defaultExecutableId - The Id of the executable this application uses by default.
   * @param {Object} params - additional query params
   */
  postApplications(data = {}, params = {}) {
    const url = `/api/v3.0/applications`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.title - The title of the application.
   * @param {string} data.description - The description of the application.
   * @param {string} data.version - The version of the application.
   * @param {integer} data.applicationCategoryId - The Id of the application category this application belongs to.
   * @param {integer} data.developerId - The Id of the application enterprise that is the developer of the application.
   * @param {integer} data.publisherId - The Id of the application enterprise that is the publisher of the application.
   * @param {integer} data.ageRating - The age rating of the application.
   * @param {string} data.releaseDate - The release date of the application.
   * @param {integer} data.defaultExecutableId - The Id of the executable this application uses by default.
   * @param {Object} params - additional query params
   */
  putApplications(data = {}, params = {}) {
    const url = `/api/v3.0/applications`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application by id.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  getApplicationsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applications/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  deleteApplicationsById(id, params = {}) {
    const url = `/api/v3.0/applications/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the image of the specified application.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  getApplicationsByIdImage(id, options = {}, params = {}) {
    const url = `/api/v3.0/applications/${id}/image`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update the image of the specified application.
   * @param {integer} id - User id.
   * @param {string} data.image - The image data.
   * @param {Object} params - additional query params
   */
  putApplicationsByIdImage(id, data = {}, params = {}) {
    const url = `/api/v3.0/applications/${id}/image`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Duplicate the specified application.
   * @param {integer} id - Application id.
   * @param {string} data.newTitle - The title of the new executable.
   * @param {Object} params - additional query params
   */
  postApplicationsByIdDuplicate(id, data = {}, params = {}) {
    const url = `/api/v3.0/applications/${id}/duplicate`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
