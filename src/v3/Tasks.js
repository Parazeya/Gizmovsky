import { GizmoClient } from "../GizmoClient.js";

export class Tasks {
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
         * @param {integer} options.type - Task type.
         * @param {boolean} options.isDeleted - Is deleted filter.
         * @param {Object} params - additional query params
         */
  getTasks(options = {}, params = {}) {
    const url = `/api/v3.0/tasks`;
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
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (type !== undefined) query["Type"] = type;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getTasksById(id, options = {}, params = {}) {
    const url = `/api/v3.0/tasks/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteTasksById(id, params = {}) {
    const url = `/api/v3.0/tasks/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getTasksNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/tasks/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets entry name.
   * @param {integer} id - Entry id.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  putTasksByIdByNameName(id, name, params = {}) {
    const url = `/api/v3.0/tasks/${id}/${name}/name`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Task name.
   * @param {string} data.fileName - File name.
   * @param {string} data.workingDirectory - Working directory.
   * @param {string} data.arguments - Arguments.
   * @param {boolean} data.wait - Wait.
   * @param {boolean} data.hide - Hide.
   * @param {Object} params - additional query params
   */
  postTasksProcess(data = {}, params = {}) {
    const url = `/api/v3.0/tasks/process`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} id - Entry id.
   * @param {string} data.name - Task name.
   * @param {string} data.fileName - File name.
   * @param {string} data.workingDirectory - Working directory.
   * @param {string} data.arguments - Arguments.
   * @param {boolean} data.wait - Wait.
   * @param {boolean} data.hide - Hide.
   * @param {Object} params - additional query params
   */
  putTasksByIdProcess(id, data = {}, params = {}) {
    const url = `/api/v3.0/tasks/${id}/process`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Task name.
   * @param {integer} data.type - Script type.
   * @param {string} data.script - Script.
   * @param {boolean} data.wait - Wait.
   * @param {boolean} data.hide - Hide.
   * @param {Object} params - additional query params
   */
  postTasksScript(data = {}, params = {}) {
    const url = `/api/v3.0/tasks/script`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} id - Entry id.
   * @param {string} data.name - Task name.
   * @param {integer} data.type - Script type.
   * @param {string} data.script - Script.
   * @param {boolean} data.wait - Wait.
   * @param {boolean} data.hide - Hide.
   * @param {Object} params - additional query params
   */
  putTasksByIdScript(id, data = {}, params = {}) {
    const url = `/api/v3.0/tasks/${id}/script`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Task name.
   * @param {string} data.sourceDirectory - Source directory.
   * @param {string} data.destinationDirectory - Destination directory.
   * @param {boolean} data.deleteDestination - Hide.
   * @param {Object} params - additional query params
   */
  postTasksJunction(data = {}, params = {}) {
    const url = `/api/v3.0/tasks/junction`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} id - Entry id.
   * @param {string} data.name - Task name.
   * @param {string} data.sourceDirectory - Source directory.
   * @param {string} data.destinationDirectory - Destination directory.
   * @param {boolean} data.deleteDestination - Hide.
   * @param {Object} params - additional query params
   */
  putTasksByIdJunction(id, data = {}, params = {}) {
    const url = `/api/v3.0/tasks/${id}/junction`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Task name.
   * @param {string} data.title - Title.
   * @param {string} data.message - Message.
   * @param {boolean} data.wait - Wait.
   * @param {Object} params - additional query params
   */
  postTasksNotification(data = {}, params = {}) {
    const url = `/api/v3.0/tasks/notification`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} id - Entry id.
   * @param {string} data.name - Task name.
   * @param {string} data.title - Title.
   * @param {string} data.message - Message.
   * @param {boolean} data.wait - Wait.
   * @param {Object} params - additional query params
   */
  putTasksByIdNotification(id, data = {}, params = {}) {
    const url = `/api/v3.0/tasks/${id}/notification`;
    const body = data;
    return this.client.request("put", url, body, params);
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
         * @param {integer} options.type - Task type.
         * @param {boolean} options.isDeleted - Is deleted filter.
         * @param {Object} params - additional query params
         */
  getTasksCounters(options = {}, params = {}) {
    const url = `/api/v3.0/tasks/counters`;
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
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (type !== undefined) query["Type"] = type;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }
}
