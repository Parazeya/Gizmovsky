import { GizmoClient } from "../GizmoClient.js";

export class Operators {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all operators.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.username - query
   * @param {boolean} options.isDisabled - query
   * @param {boolean} options.isDeleted - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getOperators(options = {}, params = {}) {
    const url = `/api/v2.0/operators`;
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
    const username = options.hasOwnProperty("username")
      ? options["username"]
      : undefined;
    const isDisabled = options.hasOwnProperty("isDisabled")
      ? options["isDisabled"]
      : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (username !== undefined) query["Username"] = username;
    if (isDisabled !== undefined) query["IsDisabled"] = isDisabled;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an operator.
   * @param {string} data.password -
   * @param {string} data.username -
   * @param {string} data.email -
   * @param {string} data.firstName -
   * @param {string} data.lastName -
   * @param {string} data.birthDate -
   * @param {string} data.address -
   * @param {string} data.city -
   * @param {string} data.country -
   * @param {string} data.postCode -
   * @param {string} data.phone -
   * @param {string} data.mobilePhone -
   * @param {object} data.sex -
   * @param {boolean} data.isDeleted -
   * @param {boolean} data.isDisabled -
   * @param {string} data.smartCardUid -
   * @param {string} data.identification -
   * @param {Object} params - additional query params
   */
  postOperators(data = {}, params = {}) {
    const url = `/api/v2.0/operators`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an operator.
   * @param {integer} data.id -
   * @param {string} data.password -
   * @param {string} data.username -
   * @param {string} data.email -
   * @param {string} data.firstName -
   * @param {string} data.lastName -
   * @param {string} data.birthDate -
   * @param {string} data.address -
   * @param {string} data.city -
   * @param {string} data.country -
   * @param {string} data.postCode -
   * @param {string} data.phone -
   * @param {string} data.mobilePhone -
   * @param {object} data.sex -
   * @param {boolean} data.isDeleted -
   * @param {boolean} data.isDisabled -
   * @param {string} data.smartCardUid -
   * @param {string} data.identification -
   * @param {Object} params - additional query params
   */
  putOperators(data = {}, params = {}) {
    const url = `/api/v2.0/operators`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an operator by id.
   * @param {integer} id - Operator id.
   * @param {Object} params - additional query params
   */
  getOperatorsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/operators/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an operator.
   * @param {integer} id - Operator id.
   * @param {Object} params - additional query params
   */
  deleteOperatorsById(id, params = {}) {
    const url = `/api/v2.0/operators/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get current operator.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrent(options = {}, params = {}) {
    const url = `/api/v2.0/operators/current`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets current operator shift options.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentShiftOptions(options = {}, params = {}) {
    const url = `/api/v2.0/operators/current/shift/options`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Starts shift for current operator.
   * @param {integer} data.registerId -
   * @param {number} data.startCash -
   * @param {Object} params - additional query params
   */
  postOperatorsCurrentShiftStart(data = {}, params = {}) {
    const url = `/api/v2.0/operators/current/shift/start`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Starts shift.
   * @param {integer} operatorId - Operator id.
   * @param {integer} data.registerId -
   * @param {number} data.startCash -
   * @param {Object} params - additional query params
   */
  postOperatorsByOperatorIdShiftStart(operatorId, data = {}, params = {}) {
    const url = `/api/v2.0/operators/${operatorId}/shift/start`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Locks active shift for current operator.
   * @param {Object} params - additional query params
   */
  putOperatorsCurrentShiftActiveLock(params = {}) {
    const url = `/api/v2.0/operators/current/shift/active/lock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Unlocks active shift for current operator.
   * @param {Object} params - additional query params
   */
  putOperatorsCurrentShiftActiveUnlock(params = {}) {
    const url = `/api/v2.0/operators/current/shift/active/unlock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Returns active shift information for current operator.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentShiftActive(options = {}, params = {}) {
    const url = `/api/v2.0/operators/current/shift/active`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Ends active shift for current operator.
   * @param {array} data.counts -
   * @param {Object} params - additional query params
   */
  postOperatorsCurrentShiftActiveEnd(data = {}, params = {}) {
    const url = `/api/v2.0/operators/current/shift/active/end`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Returns active shift expected payments information.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentShiftActiveExpected(options = {}, params = {}) {
    const url = `/api/v2.0/operators/current/shift/active/expected`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets or updates current operator password.
   * @param {string} data.password -
   * @param {Object} params - additional query params
   */
  postOperatorsCurrentPassword(data = {}, params = {}) {
    const url = `/api/v2.0/operators/current/password`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
