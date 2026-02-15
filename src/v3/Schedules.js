import { GizmoClient } from "../GizmoClient.js";

export class Schedules {
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
         * @param {integer} options.type - Schedule type.
         * @param {boolean} options.isDisabled - Is disabled.
         * @param {Object} params - additional query params
         */
  getSchedules(options = {}, params = {}) {
    const url = `/api/v3.0/schedules`;
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
    const isDisabled = options.hasOwnProperty("isDisabled")
      ? options["isDisabled"]
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
    if (isDisabled !== undefined) query["IsDisabled"] = isDisabled;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getSchedulesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/schedules/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteSchedulesById(id, params = {}) {
    const url = `/api/v3.0/schedules/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putSchedulesByIdEnable(id, params = {}) {
    const url = `/api/v3.0/schedules/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putSchedulesByIdDisable(id, params = {}) {
    const url = `/api/v3.0/schedules/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Sets entry name.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/schedules/{id}/name"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putSchedulesByIdName(id, data = {}, params = {}) {
    const url = `/api/v3.0/schedules/${id}/name`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getSchedulesNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/schedules/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets entry description.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/schedules/{id}/description"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putSchedulesByIdDescription(id, data = {}, params = {}) {
    const url = `/api/v3.0/schedules/${id}/description`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {integer} data.type - Schedule type.
   * @param {string} data.startTime -
   * @param {boolean} data.isDisabled -
   * @param {array} data.entries - Entries.
   * @param {array} data.recipients - Recipients.
   * @param {Object} params - additional query params
   */
  postSchedulesReport(data = {}, params = {}) {
    const url = `/api/v3.0/schedules/report`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} id - Entry id.
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {integer} data.type - Schedule type.
   * @param {string} data.startTime -
   * @param {boolean} data.isDisabled -
   * @param {array} data.entries - Entries.
   * @param {array} data.recipients - Recipients.
   * @param {Object} params - additional query params
   */
  putSchedulesReportById(id, data = {}, params = {}) {
    const url = `/api/v3.0/schedules/report/${id}`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
