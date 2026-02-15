import { GizmoClient } from "../GizmoClient.js";

export class ApplicationDeployments {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application deployments.
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
         * @param {string} options.deploymentName - Return deployments with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationDeployments(options = {}, params = {}) {
    const url = `/api/v3.0/applicationdeployments`;
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
         * @param {string} data.name - The name of the deployment.
         * @param {string} data.registryString - The registry string of the deployment.
         * @param {string} data.source - The source of the deployment.
         * @param {string} data.destination - The destination of the deployment.
         * @param {integer} data.comparisonMode - The deployment options of the deployment.
         * @param {object} data.deploymentOptions - 
         * @param {string} data.excludeFiles - The list of files that should be excluded.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {string} data.excludeDirectories - The list of directories that should be excluded.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {string} data.includeFiles - The list of files that should be included.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {string} data.includeDirectories - The list of directories that should be included.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {Object} params - additional query params
         */
  postApplicationDeployments(data = {}, params = {}) {
    const url = `/api/v3.0/applicationdeployments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
         * Update an application deployment.
         * @param {integer} data.id - The Id of the object.
         * @param {string} data.name - The name of the deployment.
         * @param {string} data.registryString - The registry string of the deployment.
         * @param {string} data.source - The source of the deployment.
         * @param {string} data.destination - The destination of the deployment.
         * @param {integer} data.comparisonMode - The deployment options of the deployment.
         * @param {object} data.deploymentOptions - 
         * @param {string} data.excludeFiles - The list of files that should be excluded.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {string} data.excludeDirectories - The list of directories that should be excluded.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {string} data.includeFiles - The list of files that should be included.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {string} data.includeDirectories - The list of directories that should be included.
 <remarks>Each entry should be seperated by ; character.</remarks>
         * @param {Object} params - additional query params
         */
  putApplicationDeployments(data = {}, params = {}) {
    const url = `/api/v3.0/applicationdeployments`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application deployment by id.
   * @param {integer} id - Application deployment id.
   * @param {Object} params - additional query params
   */
  getApplicationDeploymentsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationdeployments/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application deployments.
   * @param {integer} id - Application deployment id.
   * @param {Object} params - additional query params
   */
  deleteApplicationDeploymentsById(id, params = {}) {
    const url = `/api/v3.0/applicationdeployments/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Returns the list of applications and executables that have the specified deployment assigned.
   * @param {integer} id - Application deployment id.
   * @param {Object} params - additional query params
   */
  getApplicationDeploymentsByIdUsages(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationdeployments/${id}/usages`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Unassign the specified deployment from every executable.
   * @param {integer} id - Application deployment id.
   * @param {Object} params - additional query params
   */
  putApplicationDeploymentsByIdUnassign(id, params = {}) {
    const url = `/api/v3.0/applicationdeployments/${id}/unassign`;
    return this.client.request("put", url, {}, params);
  }
}
