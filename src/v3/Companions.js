import { GizmoClient } from "../GizmoClient.js";

export class Companions {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets filtered entries.
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
         * @param {array} options.expand - query
         * @param {integer} options.registerId - Filters by assigned registers.
         * @param {integer} options.branchId - Filters by assigned branches.
         * @param {Object} params - additional query params
         */
  getCompanions(options = {}, params = {}) {
    const url = `/api/v3.0/companions`;
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
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
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
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {string} data.name -
   * @param {Object} params - additional query params
   */
  postCompanions(data = {}, params = {}) {
    const url = `/api/v3.0/companions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {Object} params - additional query params
   */
  putCompanions(data = {}, params = {}) {
    const url = `/api/v3.0/companions`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getCompanionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/companions/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteCompanionsById(id, params = {}) {
    const url = `/api/v3.0/companions/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets active companion connections.
   * @param {Object} params - additional query params
   */
  getCompanionsConnections(options = {}, params = {}) {
    const url = `/api/v3.0/companions/connections`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} guid - path
   * @param {Object} params - additional query params
   */
  postCompanionsByGuidCashdrawerOpen(guid, params = {}) {
    const url = `/api/v3.0/companions/${guid}/cashdrawer/open`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  postCompanionsCashdrawerOpen(params = {}) {
    const url = `/api/v3.0/companions/cashdrawer/open`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {string} guid - path
   * @param {Object} params - additional query params
   */
  postCompanionsByGuidPrinterXreport(guid, params = {}) {
    const url = `/api/v3.0/companions/${guid}/printer/x-report`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  postCompanionsPrinterXreport(params = {}) {
    const url = `/api/v3.0/companions/printer/x-report`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {string} guid - path
   * @param {Object} params - additional query params
   */
  postCompanionsByGuidTerminalXreport(guid, params = {}) {
    const url = `/api/v3.0/companions/${guid}/terminal/x-report`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  postCompanionsTerminalXreport(params = {}) {
    const url = `/api/v3.0/companions/terminal/x-report`;
    return this.client.request("post", url, {}, params);
  }
}
