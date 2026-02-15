import { GizmoClient } from "../GizmoClient.js";

export class ApplicationCategories {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application categories.
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
         * @param {string} options.categoryName - Return categories with names that contain the specified string.
         * @param {integer} options.parentId - Return subcategories that belongs to the specified parent category.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationCategories(options = {}, params = {}) {
    const url = `/api/v3.0/applicationcategories`;
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
    const categoryName = options.hasOwnProperty("categoryName")
      ? options["categoryName"]
      : undefined;
    const parentId = options.hasOwnProperty("parentId")
      ? options["parentId"]
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
    if (categoryName !== undefined) query["CategoryName"] = categoryName;
    if (parentId !== undefined) query["ParentId"] = parentId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application category.
   * @param {string} data.name - The name of the application category.
   * @param {integer} data.parentId - The Id of the parent category if the category is a subcategory, otherwise it will be null.
   * @param {Object} params - additional query params
   */
  postApplicationCategories(data = {}, params = {}) {
    const url = `/api/v3.0/applicationcategories`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application category.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the application category.
   * @param {integer} data.parentId - The Id of the parent category if the category is a subcategory, otherwise it will be null.
   * @param {Object} params - additional query params
   */
  putApplicationCategories(data = {}, params = {}) {
    const url = `/api/v3.0/applicationcategories`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application category by id.
   * @param {integer} id - Application category id.
   * @param {Object} params - additional query params
   */
  getApplicationCategoriesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationcategories/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application category.
   * @param {integer} id - Application category id.
   * @param {Object} params - additional query params
   */
  deleteApplicationCategoriesById(id, params = {}) {
    const url = `/api/v3.0/applicationcategories/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
