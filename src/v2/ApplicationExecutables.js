import { GizmoClient } from "../GizmoClient.js";

export class ApplicationExecutables {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application executables.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.executableCaption - query
   * @param {integer} options.applicationId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplicationExecutables(options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables`;
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
    const executableCaption = options.hasOwnProperty("executableCaption")
      ? options["executableCaption"]
      : undefined;
    const applicationId = options.hasOwnProperty("applicationId")
      ? options["applicationId"]
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
    if (executableCaption !== undefined)
      query["ExecutableCaption"] = executableCaption;
    if (applicationId !== undefined) query["ApplicationId"] = applicationId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application executable.
   * @param {boolean} data.accessible -
   * @param {string} data.caption -
   * @param {string} data.description -
   * @param {object} data.applicationModes -
   * @param {string} data.executablePath -
   * @param {string} data.workingDirectory -
   * @param {string} data.arguments -
   * @param {object} data.runMode -
   * @param {object} data.reservationType -
   * @param {object} data.executableOptions -
   * @param {integer} data.displayOrder -
   * @param {integer} data.applicationId -
   * @param {integer} data.defaultDeploymentId -
   * @param {Object} params - additional query params
   */
  postApplicationExecutables(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable.
   * @param {integer} data.id -
   * @param {boolean} data.accessible -
   * @param {string} data.caption -
   * @param {string} data.description -
   * @param {object} data.applicationModes -
   * @param {string} data.executablePath -
   * @param {string} data.workingDirectory -
   * @param {string} data.arguments -
   * @param {object} data.runMode -
   * @param {object} data.reservationType -
   * @param {object} data.executableOptions -
   * @param {integer} data.displayOrder -
   * @param {integer} data.applicationId -
   * @param {integer} data.defaultDeploymentId -
   * @param {Object} params - additional query params
   */
  putApplicationExecutables(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application executable by id.
   * @param {integer} id - Application executables id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application executable.
   * @param {integer} id - Application executables id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesById(id, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the personal files of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdPersonalfiles(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/personalfiles`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable personal file.
   * @param {integer} id - Application executable id.
   * @param {integer} data.personalFileId -
   * @param {integer} data.useOrder -
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdPersonalfiles(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/personalfiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable personal file.
   * @param {integer} data.applicationExecutableId -
   * @param {integer} data.personalFileId -
   * @param {integer} data.useOrder -
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesPersonalfiles(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/personalfiles`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete an application executable personal file.
   * @param {integer} id - Application executable id.
   * @param {integer} personalFileId - Personal file id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesByIdPersonalfilesByPersonalFileId(
    id,
    personalFileId,
    params = {}
  ) {
    const url = `/api/v2.0/applicationexecutables/${id}/personalfiles/${personalFileId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the deployments of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdDeployments(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/deployments`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable deployment.
   * @param {integer} id - Application executable id.
   * @param {integer} data.deploymentId -
   * @param {integer} data.useOrder -
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdDeployments(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/deployments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable deployment.
   * @param {integer} data.applicationExecutableId -
   * @param {integer} data.deploymentId -
   * @param {integer} data.useOrder -
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesDeployments(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/deployments`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete an application executable deployment.
   * @param {integer} id - Application executable id.
   * @param {integer} deploymentId - Deployment id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesByIdDeploymentsByDeploymentId(
    id,
    deploymentId,
    params = {}
  ) {
    const url = `/api/v2.0/applicationexecutables/${id}/deployments/${deploymentId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the tasks of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdTasks(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/tasks`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable task.
   * @param {integer} id - Application executable id.
   * @param {integer} data.taskId -
   * @param {boolean} data.preDeploy -
   * @param {boolean} data.preLicenseManagement -
   * @param {boolean} data.preLaunch -
   * @param {boolean} data.postTermination -
   * @param {integer} data.useOrder -
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdTasks(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/tasks`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable task.
   * @param {integer} data.applicationExecutableId -
   * @param {integer} data.taskId -
   * @param {boolean} data.preDeploy -
   * @param {boolean} data.preLicenseManagement -
   * @param {boolean} data.preLaunch -
   * @param {boolean} data.postTermination -
   * @param {integer} data.useOrder -
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesTasks(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/tasks`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete an application executable task.
   * @param {integer} id - Application executable id.
   * @param {integer} taskId - Task id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesByIdTasksByTaskId(id, taskId, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/tasks/${taskId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the licenses of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdLicenses(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/licenses`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable license.
   * @param {integer} id - Application executable id.
   * @param {integer} data.licenseId -
   * @param {integer} data.useOrder -
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdLicenses(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/licenses`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable license.
   * @param {integer} data.applicationExecutableId -
   * @param {integer} data.licenseId -
   * @param {integer} data.useOrder -
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesLicenses(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/licenses`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete an application executable license.
   * @param {integer} id - Application executable id.
   * @param {integer} licenseId - License id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesByIdLicensesByLicenseId(
    id,
    licenseId,
    params = {}
  ) {
    const url = `/api/v2.0/applicationexecutables/${id}/licenses/${licenseId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the cd images of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdCdimages(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/cdimages`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable cd image.
   * @param {integer} id - Application executable id.
   * @param {string} data.path -
   * @param {string} data.mountOptions -
   * @param {string} data.deviceId -
   * @param {boolean} data.checkExitCode -
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdCdimages(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/cdimages`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable cd image.
   * @param {integer} data.id -
   * @param {integer} data.applicationExecutableId -
   * @param {string} data.path -
   * @param {string} data.mountOptions -
   * @param {string} data.deviceId -
   * @param {boolean} data.checkExitCode -
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesCdimages(data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/cdimages`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete an application executable cd image.
   * @param {integer} id - Application executable id.
   * @param {integer} cdimageId - Cd image id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesByIdCdimagesByCdimageId(
    id,
    cdimageId,
    params = {}
  ) {
    const url = `/api/v2.0/applicationexecutables/${id}/cdimages/${cdimageId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the image of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdImage(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/image`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update the image of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {string} data.image -
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesByIdImage(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationexecutables/${id}/image`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
