import { GizmoClient } from "../GizmoClient.js";

export class Reservations {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all reservations.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {any} options.status - query
   * @param {integer} options.userId - query
   * @param {string} options.contactPhone - query
   * @param {string} options.contactEmail - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getReservations(options = {}, params = {}) {
    const url = `/api/v2.0/reservations`;
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
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const status = options.hasOwnProperty("status")
      ? options["status"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const contactPhone = options.hasOwnProperty("contactPhone")
      ? options["contactPhone"]
      : undefined;
    const contactEmail = options.hasOwnProperty("contactEmail")
      ? options["contactEmail"]
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
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (status !== undefined) query["Status"] = status;
    if (userId !== undefined) query["UserId"] = userId;
    if (contactPhone !== undefined) query["ContactPhone"] = contactPhone;
    if (contactEmail !== undefined) query["ContactEmail"] = contactEmail;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a reservation.
   * @param {integer} data.userId -
   * @param {string} data.date -
   * @param {integer} data.duration -
   * @param {string} data.contactPhone -
   * @param {string} data.contactEmail -
   * @param {string} data.note -
   * @param {string} data.pin -
   * @param {object} data.status -
   * @param {array} data.hosts -
   * @param {array} data.users -
   * @param {Object} params - additional query params
   */
  postReservations(data = {}, params = {}) {
    const url = `/api/v2.0/reservations`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a reservation.
   * @param {integer} data.id -
   * @param {integer} data.userId -
   * @param {string} data.date -
   * @param {integer} data.duration -
   * @param {string} data.contactPhone -
   * @param {string} data.contactEmail -
   * @param {string} data.note -
   * @param {string} data.pin -
   * @param {object} data.status -
   * @param {array} data.hosts -
   * @param {array} data.users -
   * @param {Object} params - additional query params
   */
  putReservations(data = {}, params = {}) {
    const url = `/api/v2.0/reservations`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a reservation by id.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  getReservationsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/reservations/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a reservation.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  deleteReservationsById(id, params = {}) {
    const url = `/api/v2.0/reservations/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
