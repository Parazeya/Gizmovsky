import { GizmoClient } from "../GizmoClient.js";

export class Reservations {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all reservations.
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
         * @param {string} options.dateFrom - Return reservations where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return reservations where the date less than or equal to the specified date.
         * @param {integer} options.status - Return reservations with the specified reservation status.
         * @param {integer} options.userId - Return reservations of the specified user.
         * @param {string} options.contactPhone - Return reservations with the specified contact phone.
         * @param {string} options.contactEmail - Return reservations with the specified contact email.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.branchId - query
         * @param {integer} options.hostGroupId - Host group id.
         * @param {integer} options.paymentStatus - Return reservations with the specified reservation payment status.
         * @param {Object} params - additional query params
         */
  getReservations(options = {}, params = {}) {
    const url = `/api/v3.0/reservations`;
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
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const hostGroupId = options.hasOwnProperty("hostGroupId")
      ? options["hostGroupId"]
      : undefined;
    const paymentStatus = options.hasOwnProperty("paymentStatus")
      ? options["paymentStatus"]
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
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (hostGroupId !== undefined) query["HostGroupId"] = hostGroupId;
    if (paymentStatus !== undefined) query["PaymentStatus"] = paymentStatus;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates a reservation.
   * @param {integer} data.userId - Reserving user id.
   * @param {string} data.contactPhone - Contact phone.
   * @param {string} data.contactEmail - Contact email.
   * @param {string} data.note - Note.
   * @param {string} data.date - Reservation date.
   * @param {integer} data.duration - Reservation duration.
   * @param {integer} data.branchId - Branch id.
   * @param {array} data.hosts - Reservation hosts.
   * @param {array} data.users - Reservation users.
   * @param {Object} params - additional query params
   */
  postReservations(data = {}, params = {}) {
    const url = `/api/v3.0/reservations`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a reservation.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.userId - The Id of the user this reservation is associated with.
   * @param {string} data.date - The date of the reservation.
   * @param {integer} data.duration - The duration of the reservation.
   * @param {string} data.contactPhone - The contact phone of the reservation.
   * @param {string} data.contactEmail - The contact email of the reservation.
   * @param {string} data.note - The note of the reservation.
   * @param {string} data.pin - The pin of the reservation.
   * @param {integer} data.status - The status of the reservation.
   * @param {array} data.hosts - The reserved hosts by this reservation.
   * @param {array} data.users - The users of this reservation.
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  putReservations(data = {}, params = {}) {
    const url = `/api/v3.0/reservations`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a reservation by id.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  getReservationsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Performs host reservation availability check.
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
         * @param {array} options.expand - <inheritdoc />
         * @param {string} options.start - Desired reservation start.
         * @param {integer} options.duration - Desired reservation duration.
         * @param {integer} options.branchId - Desired branch id.
         * @param {array} options.userGroups - Participating user groups.
         * @param {Object} params - additional query params
         */
  getReservationsAvailability(options = {}, params = {}) {
    const url = `/api/v3.0/reservations/availability`;
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
    const start = options.hasOwnProperty("start")
      ? options["start"]
      : undefined;
    const duration = options.hasOwnProperty("duration")
      ? options["duration"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const userGroups = options.hasOwnProperty("userGroups")
      ? options["userGroups"]
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
    if (start !== undefined) query["Start"] = start;
    if (duration !== undefined) query["Duration"] = duration;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (userGroups !== undefined) query["UserGroups"] = userGroups;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates a reservation offer for host groups.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.date - Reservation start date.
   * @param {integer} options.duration - Duration of the reservation in minutes.
   * @param {array} options.hosts - Participating hosts.
   * @param {array} options.users - Reservation users.
   * @param {integer} options.userGroupId - Reserving user group id.
   * @param {integer} options.userId - Reserving user id.
   * @param {string} options.contactPhone - Contact phone.
   * @param {string} options.contactEmail - Contact email.
   * @param {string} options.note - Reservation note.
   * @param {Object} params - additional query params
   */
  getReservationsOffer(options = {}, params = {}) {
    const url = `/api/v3.0/reservations/offer`;
    const date = options.hasOwnProperty("date") ? options["date"] : undefined;
    const duration = options.hasOwnProperty("duration")
      ? options["duration"]
      : undefined;
    const hosts = options.hasOwnProperty("hosts")
      ? options["hosts"]
      : undefined;
    const users = options.hasOwnProperty("users")
      ? options["users"]
      : undefined;
    const userGroupId = options.hasOwnProperty("userGroupId")
      ? options["userGroupId"]
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
    const note = options.hasOwnProperty("note") ? options["note"] : undefined;
    const query = Object.assign({}, params);
    if (date !== undefined) query["Date"] = date;
    if (duration !== undefined) query["Duration"] = duration;
    if (hosts !== undefined) query["Hosts"] = hosts;
    if (users !== undefined) query["Users"] = users;
    if (userGroupId !== undefined) query["UserGroupId"] = userGroupId;
    if (userId !== undefined) query["UserId"] = userId;
    if (contactPhone !== undefined) query["ContactPhone"] = contactPhone;
    if (contactEmail !== undefined) query["ContactEmail"] = contactEmail;
    if (note !== undefined) query["Note"] = note;
    return this.client.request("get", url, {}, query);
  }

  /**
         * Gets hosts next upcoming reservation.
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
         * @param {array} options.expand - Include specified objects in the result.
         * @param {string} options.startDate - Specifies the start date.
         * @param {boolean} options.isDeleted - Specifies if deleted hosts should be included.
         * @param {integer} options.branchId - Specifies branch id.
         * @param {Object} params - additional query params
         */
  getReservationsHostsNext(options = {}, params = {}) {
    const url = `/api/v3.0/reservations/hosts/next`;
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
    const startDate = options.hasOwnProperty("startDate")
      ? options["startDate"]
      : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
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
    if (startDate !== undefined) query["StartDate"] = startDate;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets hosts next upcoming reservation.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getReservationsHostsByHostIdNext(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/reservations/hosts/${hostId}/next`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Cancels a reservation.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  putReservationsByIdCancel(id, params = {}) {
    const url = `/api/v3.0/reservations/${id}/cancel`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Adds a host to a reservation.
   * @param {integer} id - Reservation id.
   * @param {integer} data.hostId - Host id.
   * @param {integer} data.slot - Slot.
   * @param {Object} params - additional query params
   */
  postReservationsByIdHost(id, data = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/host`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Completes a reservation.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  putReservationsByIdComplete(id, params = {}) {
    const url = `/api/v3.0/reservations/${id}/complete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Moves host reservation.
   * @param {integer} id - Reservation id.
   * @param {integer} data.hostId - Host id.
   * @param {integer} data.moveHostId - Move host id.
   * @param {Object} params - additional query params
   */
  putReservationsByIdHostMove(id, data = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/host/move`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Completes a reservation for host.
   * @param {integer} id - Reservation id.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  putReservationsByIdHostByHostIdComplete(id, hostId, params = {}) {
    const url = `/api/v3.0/reservations/${id}/host/${hostId}/complete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Adds a user to a reservation.
   * @param {integer} id - Reservation id.
   * @param {integer} data.userId - User id.
   * @param {Object} params - additional query params
   */
  putReservationsByIdUser(id, data = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/user`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Removes a user from reservation.
   * @param {integer} id - Reservation id.
   * @param {integer} userId - User id.
   * @param {Object} params - additional query params
   */
  deleteReservationsByIdUserByUserId(id, userId, params = {}) {
    const url = `/api/v3.0/reservations/${id}/user/${userId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets reservation note.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  getReservationsByIdNote(id, options = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/note`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Adds or updates reservation note.
   * @param {integer} id - Reservation id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/reservations/{id}/note"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putReservationsByIdNote(id, data = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/note`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets reservation order.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  getReservationsByIdOrder(id, options = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/order`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets reservation payments.
   * @param {integer} id - Reservation id.
   * @param {Object} params - additional query params
   */
  getReservationsByIdPayments(id, options = {}, params = {}) {
    const url = `/api/v3.0/reservations/${id}/payments`;
    return this.client.request("get", url, {}, params);
  }
}
