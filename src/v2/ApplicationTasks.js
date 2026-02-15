import { GizmoClient } from "../GizmoClient.js";

export class ApplicationTasks {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application executable tasks.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.taskName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplicationTasks(options = {}, params = {}) {
    const url = `/api/v2.0/applicationtasks`;
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
   * @param {object} data.taskType -
   * @param {string} data.name -
   * @param {object} data.taskJunction -
   * @param {object} data.taskNotification -
   * @param {object} data.taskProcess -
   * @param {object} data.taskScript -
   * @param {Object} params - additional query params
   */
  postApplicationTasks(data = {}, params = {}) {
    const url = `/api/v2.0/applicationtasks`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application executable task.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {object} data.taskJunction -
   * @param {object} data.taskNotification -
   * @param {object} data.taskProcess -
   * @param {object} data.taskScript -
   * @param {Object} params - additional query params
   */
  putApplicationTasks(data = {}, params = {}) {
    const url = `/api/v2.0/applicationtasks`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application executable task by id.
   * @param {integer} id - Application executable task id.
   * @param {Object} params - additional query params
   */
  getApplicationTasksById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationtasks/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application executable tasks.
   * @param {integer} id - Application executable task id.
   * @param {Object} params - additional query params
   */
  deleteApplicationTasksById(id, params = {}) {
    const url = `/api/v2.0/applicationtasks/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
