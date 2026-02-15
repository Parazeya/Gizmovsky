import { GizmoClient } from "../GizmoClient.js";

export class ApplicationTasks {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application executable tasks.
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
         * @param {string} options.taskName - Return tasks with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationTasks(options = {}, params = {}) {
    const url = `/api/v3.0/applicationtasks`;
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
    const taskName = options.hasOwnProperty("taskName")
      ? options["taskName"]
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
    if (taskName !== undefined) query["TaskName"] = taskName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an application executable task.
   * @param {integer} data.taskType - The type of the application task.
   * @param {string} data.name - The name of the task.
   * @param {object} data.taskJunction -
   * @param {object} data.taskNotification -
   * @param {object} data.taskProcess -
   * @param {object} data.taskScript -
   * @param {Object} params - additional query params
   */
  postApplicationTasks(data = {}, params = {}) {
    const url = `/api/v3.0/applicationtasks`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable task.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the task.
   * @param {object} data.taskJunction -
   * @param {object} data.taskNotification -
   * @param {object} data.taskProcess -
   * @param {object} data.taskScript -
   * @param {Object} params - additional query params
   */
  putApplicationTasks(data = {}, params = {}) {
    const url = `/api/v3.0/applicationtasks`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application executable task by id.
   * @param {integer} id - Application executable task id.
   * @param {Object} params - additional query params
   */
  getApplicationTasksById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationtasks/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application executable tasks.
   * @param {integer} id - Application executable task id.
   * @param {Object} params - additional query params
   */
  deleteApplicationTasksById(id, params = {}) {
    const url = `/api/v3.0/applicationtasks/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Returns the list of applications and executables that have the specified task assigned.
   * @param {integer} id - Application task id.
   * @param {Object} params - additional query params
   */
  getApplicationTasksByIdUsages(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationtasks/${id}/usages`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Unassign the specified task from every executable.
   * @param {integer} id - Application task id.
   * @param {Object} params - additional query params
   */
  putApplicationTasksByIdUnassign(id, params = {}) {
    const url = `/api/v3.0/applicationtasks/${id}/unassign`;
    return this.client.request("put", url, {}, params);
  }
}
