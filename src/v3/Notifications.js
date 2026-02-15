import { GizmoClient } from "../GizmoClient.js";

export class Notifications {
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
         * @param {integer} options.type - Notification type.
         * @param {boolean} options.isDisabled - Is disabled.
         * @param {Object} params - additional query params
         */
  getNotifications(options = {}, params = {}) {
    const url = `/api/v3.0/notifications`;
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
  getNotificationsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/notifications/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteNotificationsById(id, params = {}) {
    const url = `/api/v3.0/notifications/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Creates entry.
   * @param {integer} data.minute - Minute.
   * @param {integer} data.type - Notification type.
   * @param {integer} data.focusType - Notification focus type.
   * @param {string} data.message -
   * @param {Object} params - additional query params
   */
  postNotificationsTimedRemaining(data = {}, params = {}) {
    const url = `/api/v3.0/notifications/timed/remaining`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {integer} data.minute - Minute.
   * @param {integer} data.type - Notification type.
   * @param {integer} data.focusType - Notification focus type.
   * @param {string} data.message -
   * @param {Object} params - additional query params
   */
  putNotificationsTimedRemaining(data = {}, params = {}) {
    const url = `/api/v3.0/notifications/timed/remaining`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {integer} data.minute - Minute.
   * @param {integer} data.type - Notification type.
   * @param {integer} data.focusType - Notification focus type.
   * @param {string} data.message -
   * @param {Object} params - additional query params
   */
  postNotificationsTimedReservation(data = {}, params = {}) {
    const url = `/api/v3.0/notifications/timed/reservation`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {integer} data.minute - Minute.
   * @param {integer} data.type - Notification type.
   * @param {integer} data.focusType - Notification focus type.
   * @param {string} data.message -
   * @param {Object} params - additional query params
   */
  putNotificationsTimedReservation(data = {}, params = {}) {
    const url = `/api/v3.0/notifications/timed/reservation`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putNotificationsByIdEnable(id, params = {}) {
    const url = `/api/v3.0/notifications/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putNotificationsByIdDisable(id, params = {}) {
    const url = `/api/v3.0/notifications/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }
}
