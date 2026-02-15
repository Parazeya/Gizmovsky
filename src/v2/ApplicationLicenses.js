import { GizmoClient } from "../GizmoClient.js";

export class ApplicationLicenses {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application executable licenses.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.licenseName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplicationLicenses(options = {}, params = {}) {
    const url = `/api/v2.0/applicationlicenses`;
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
   * Get an application executable license by id.
   * @param {integer} id - Application executable license id.
   * @param {Object} params - additional query params
   */
  getApplicationLicensesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationlicenses/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
