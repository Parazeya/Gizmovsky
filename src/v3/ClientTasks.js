import { GizmoClient } from "../GizmoClient.js";

export class ClientTasks {
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
         * @param {integer} options.activation - Activation.
         * @param {boolean} options.isEnabled - Is enabled.
         * @param {Object} params - additional query params
         */
  getClientTasks(options = {}, params = {}) {
    const url = `/api/v3.0/clienttasks`;
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
    const activation = options.hasOwnProperty("activation")
      ? options["activation"]
      : undefined;
    const isEnabled = options.hasOwnProperty("isEnabled")
      ? options["isEnabled"]
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
    if (activation !== undefined) query["Activation"] = activation;
    if (isEnabled !== undefined) query["IsEnabled"] = isEnabled;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates new entry.
   * @param {integer} data.taskId - Task id.
   * @param {integer} data.activation - Client task activation type.
   * @param {integer} data.useOrder - Use order.
   * @param {boolean} data.isEnabled - Is enabled.
   * @param {Object} params - additional query params
   */
  postClientTasks(data = {}, params = {}) {
    const url = `/api/v3.0/clienttasks`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {integer} data.taskId - Task id.
   * @param {integer} data.activation - Client task activation type.
   * @param {integer} data.useOrder - Use order.
   * @param {boolean} data.isEnabled - Is enabled.
   * @param {Object} params - additional query params
   */
  putClientTasks(data = {}, params = {}) {
    const url = `/api/v3.0/clienttasks`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getClientTasksById(id, options = {}, params = {}) {
    const url = `/api/v3.0/clienttasks/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteClientTasksById(id, params = {}) {
    const url = `/api/v3.0/clienttasks/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putClientTasksByIdEnable(id, params = {}) {
    const url = `/api/v3.0/clienttasks/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putClientTasksByIdDisable(id, params = {}) {
    const url = `/api/v3.0/clienttasks/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }
}
