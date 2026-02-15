import { GizmoClient } from "../GizmoClient.js";

export class ProductGroups {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all product groups.
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
         * @param {string} options.groupName - Return groups with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getProductGroups(options = {}, params = {}) {
    const url = `/api/v3.0/productgroups`;
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
    const groupName = options.hasOwnProperty("groupName")
      ? options["groupName"]
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
    if (groupName !== undefined) query["GroupName"] = groupName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a product group.
   * @param {string} data.name - The name of the product group.
   * @param {integer} data.displayOrder - The display order of the product group.
   * @param {integer} data.sortOption - The sort option of the product group.
   * @param {Object} params - additional query params
   */
  postProductGroups(data = {}, params = {}) {
    const url = `/api/v3.0/productgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product group.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the product group.
   * @param {integer} data.displayOrder - The display order of the product group.
   * @param {integer} data.sortOption - The sort option of the product group.
   * @param {Object} params - additional query params
   */
  putProductGroups(data = {}, params = {}) {
    const url = `/api/v3.0/productgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a product group by id.
   * @param {integer} id - Product group id.
   * @param {Object} params - additional query params
   */
  getProductGroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/productgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a product group.
   * @param {integer} id - Product group id.
   * @param {Object} params - additional query params
   */
  deleteProductGroupsById(id, params = {}) {
    const url = `/api/v3.0/productgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getProductGroupsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/productgroups/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
