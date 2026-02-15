import { GizmoClient } from "../GizmoClient.js";

export class ApplicationDeployments {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application deployments.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.deploymentName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplicationDeployments(options = {}, params = {}) {
    const url = `/api/v2.0/applicationdeployments`;
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
    const deploymentName = options.hasOwnProperty("deploymentName")
      ? options["deploymentName"]
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
    if (deploymentName !== undefined) query["DeploymentName"] = deploymentName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application deployment.
   * @param {string} data.name -
   * @param {string} data.registryString -
   * @param {string} data.source -
   * @param {string} data.destination -
   * @param {object} data.comparisonMode -
   * @param {object} data.deploymentOptions -
   * @param {Object} params - additional query params
   */
  postApplicationDeployments(data = {}, params = {}) {
    const url = `/api/v2.0/applicationdeployments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application deployment.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.registryString -
   * @param {string} data.source -
   * @param {string} data.destination -
   * @param {object} data.comparisonMode -
   * @param {object} data.deploymentOptions -
   * @param {Object} params - additional query params
   */
  putApplicationDeployments(data = {}, params = {}) {
    const url = `/api/v2.0/applicationdeployments`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application deployment by id.
   * @param {integer} id - Application deployment id.
   * @param {Object} params - additional query params
   */
  getApplicationDeploymentsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationdeployments/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application deployments.
   * @param {integer} id - Application deployment id.
   * @param {Object} params - additional query params
   */
  deleteApplicationDeploymentsById(id, params = {}) {
    const url = `/api/v2.0/applicationdeployments/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
