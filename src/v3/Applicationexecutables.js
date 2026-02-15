import { GizmoClient } from "../GizmoClient.js";

export class ApplicationExecutables {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application executables.
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
         * @param {string} options.executableCaption - Return executables with captions that contain the specified string.
         * @param {integer} options.applicationId - Return executables that belongs to the specified application.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationExecutables(options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables`;
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
   * @param {boolean} data.accessible - Whether the executable is accessible.
   * @param {string} data.caption - The caption of the executable.
   * @param {string} data.description - The description of the executable.
   * @param {object} data.applicationModes -
   * @param {string} data.executablePath - The path of the executable.
   * @param {string} data.workingDirectory - The working directory of the executable.
   * @param {string} data.arguments - The arguments of the executable.
   * @param {integer} data.runMode - The run mode of the executable.
   * @param {integer} data.reservationType - The license reservation type of the executable.
   * @param {object} data.executableOptions -
   * @param {integer} data.displayOrder - The display order of the executable.
   * @param {integer} data.applicationId - The Id of the application this executable belongs to.
   * @param {integer} data.defaultDeploymentId - The Id of the deployment profile this executable uses by default.
   * @param {Object} params - additional query params
   */
  postApplicationExecutables(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable.
   * @param {integer} data.id - The Id of the object.
   * @param {boolean} data.accessible - Whether the executable is accessible.
   * @param {string} data.caption - The caption of the executable.
   * @param {string} data.description - The description of the executable.
   * @param {object} data.applicationModes -
   * @param {string} data.executablePath - The path of the executable.
   * @param {string} data.workingDirectory - The working directory of the executable.
   * @param {string} data.arguments - The arguments of the executable.
   * @param {integer} data.runMode - The run mode of the executable.
   * @param {integer} data.reservationType - The license reservation type of the executable.
   * @param {object} data.executableOptions -
   * @param {integer} data.displayOrder - The display order of the executable.
   * @param {integer} data.applicationId - The Id of the application this executable belongs to.
   * @param {integer} data.defaultDeploymentId - The Id of the deployment profile this executable uses by default.
   * @param {Object} params - additional query params
   */
  putApplicationExecutables(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
         * Get all application executables age rating.
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationPageNumber - Gets or sets the page number.
 less then 1 or equal int.MaxValue => DefaultPageNumber;
 Default page number is 1.
         * @param {integer} options.paginationPageSize - Gets or sets the page size.
 equal -1 => int.MaxValue;
 less then -1 or equal 0 => DefaultPageSize;
 Default page size is 10.
         * @param {string} options.paginationSortBy - Gets or sets the sort by.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {array} options.expand - query
         * @param {Object} params - additional query params
         */
  getApplicationExecutablesAgerating(options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/agerating`;
    const paginationPageNumber = options.hasOwnProperty("paginationPageNumber")
      ? options["paginationPageNumber"]
      : undefined;
    const paginationPageSize = options.hasOwnProperty("paginationPageSize")
      ? options["paginationPageSize"]
      : undefined;
    const paginationSortBy = options.hasOwnProperty("paginationSortBy")
      ? options["paginationSortBy"]
      : undefined;
    const paginationIsAsc = options.hasOwnProperty("paginationIsAsc")
      ? options["paginationIsAsc"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (paginationPageNumber !== undefined)
      query["Pagination.PageNumber"] = paginationPageNumber;
    if (paginationPageSize !== undefined)
      query["Pagination.PageSize"] = paginationPageSize;
    if (paginationSortBy !== undefined)
      query["Pagination.SortBy"] = paginationSortBy;
    if (paginationIsAsc !== undefined)
      query["Pagination.IsAsc"] = paginationIsAsc;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get an application executable by id.
   * @param {integer} id - Application executables id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application executable.
   * @param {integer} id - Application executables id.
   * @param {Object} params - additional query params
   */
  deleteApplicationExecutablesById(id, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the personal files of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdPersonalfiles(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/personalfiles`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable personal file.
   * @param {integer} id - Application executable id.
   * @param {integer} data.personalFileId - The Id of the personal file associated with this application executable.
   * @param {integer} data.useOrder - The order in which the personal file is used.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdPersonalfiles(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/personalfiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable personal file.
   * @param {integer} data.applicationExecutableId - The Id of the executable this personal file is associated with.
   * @param {integer} data.personalFileId - The Id of the personal file associated with this application executable.
   * @param {integer} data.useOrder - The order in which the personal file is used.
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesPersonalfiles(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/personalfiles`;
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
    params = {},
  ) {
    const url = `/api/v3.0/applicationexecutables/${id}/personalfiles/${personalFileId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the deployments of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdDeployments(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/deployments`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable deployment.
   * @param {integer} id - Application executable id.
   * @param {integer} data.deploymentId - The Id of the deployment associated with this application executable.
   * @param {integer} data.useOrder - The order in which the deployment is used.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdDeployments(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/deployments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable deployment.
   * @param {integer} data.applicationExecutableId - The Id of the executable this deployment is associated with.
   * @param {integer} data.deploymentId - The Id of the deployment associated with this application executable.
   * @param {integer} data.useOrder - The order in which the deployment is used.
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesDeployments(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/deployments`;
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
    params = {},
  ) {
    const url = `/api/v3.0/applicationexecutables/${id}/deployments/${deploymentId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the tasks of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdTasks(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/tasks`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable task.
   * @param {integer} id - Application executable id.
   * @param {integer} data.taskId - The Id of the task associated with this application executable.
   * @param {integer} data.activation - Executable task activation type.
   * @param {integer} data.useOrder - The order in which the task is used.
   * @param {boolean} data.isEnabled - Whether the executable is enabled.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdTasks(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/tasks`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable task.
   * @param {integer} data.applicationExecutableId - The Id of the executable this task is associated with.
   * @param {integer} data.taskId - The Id of the task associated with this application executable.
   * @param {integer} data.activation - Executable task activation type.
   * @param {integer} data.useOrder - The order in which the task is used.
   * @param {boolean} data.isEnabled - Whether the executable is enabled.
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesTasks(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/tasks`;
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
    const url = `/api/v3.0/applicationexecutables/${id}/tasks/${taskId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the licenses of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdLicenses(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/licenses`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable license.
   * @param {integer} id - Application executable id.
   * @param {integer} data.licenseId - The Id of the license associated with this application executable.
   * @param {integer} data.useOrder - The order in which the license is used.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdLicenses(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/licenses`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable license.
   * @param {integer} data.applicationExecutableId - The Id of the executable this license is associated with.
   * @param {integer} data.licenseId - The Id of the license associated with this application executable.
   * @param {integer} data.useOrder - The order in which the license is used.
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesLicenses(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/licenses`;
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
    params = {},
  ) {
    const url = `/api/v3.0/applicationexecutables/${id}/licenses/${licenseId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the cd images of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdCdimages(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/cdimages`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create an application executable cd image.
   * @param {integer} id - Application executable id.
   * @param {string} data.path - The path of the cd image.
   * @param {string} data.mountOptions - The mounting options of the cd image.
   * @param {string} data.deviceId - The device id of the cd image.
   * @param {boolean} data.checkExitCode - Whether the cd image will check the mounter process exit code value while mounting.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdCdimages(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/cdimages`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable cd image.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.applicationExecutableId - The Id of the executable this cd image belongs to.
   * @param {string} data.path - The path of the cd image.
   * @param {string} data.mountOptions - The mounting options of the cd image.
   * @param {string} data.deviceId - The device id of the cd image.
   * @param {boolean} data.checkExitCode - Whether the cd image will check the mounter process exit code value while mounting.
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesCdimages(data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/cdimages`;
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
    params = {},
  ) {
    const url = `/api/v3.0/applicationexecutables/${id}/cdimages/${cdimageId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the image of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdImage(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/image`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update the image of the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {string} data.image - The image data.
   * @param {Object} params - additional query params
   */
  putApplicationExecutablesByIdImage(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/image`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Duplicate the specified application executable.
   * @param {integer} id - Application executable id.
   * @param {string} data.newCaption - The caption of the new executable.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdDuplicate(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/duplicate`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets branch configuration entries.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getApplicationExecutablesByIdBranches(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/branches`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets branch configuration entries.
   * @param {integer} id - Application executable id.
   * @param {integer} data.branchId - Branch id.
   * @param {boolean} data.isEnabled - Reference state.
   * @param {Object} params - additional query params
   */
  postApplicationExecutablesByIdBranches(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationexecutables/${id}/branches`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
