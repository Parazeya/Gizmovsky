import { GizmoClient } from "../GizmoClient.js";

export class Operators {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all operators.
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
         * @param {string} options.username - Return operators with usernames that contain the specified string.
         * @param {boolean} options.isDisabled - Return disabled operators.
         * @param {boolean} options.isDeleted - Return deleted operators.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getOperators(options = {}, params = {}) {
    const url = `/api/v3.0/operators`;
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
   * @param {string} data.password - The initial password for the operator, if left empty no password will be set.
   * @param {string} data.username - The username of the operator.
   * @param {string} data.email - The email of the operator.
   * @param {string} data.firstName - The first name of the operator.
   * @param {string} data.lastName - The last name of the operator.
   * @param {string} data.birthDate - The birth date of the operator.
   * @param {string} data.address - The address of the operator.
   * @param {string} data.city - The city of the operator.
   * @param {string} data.country - The country of the operator.
   * @param {string} data.postCode - The post code of the operator.
   * @param {string} data.phone - The phone number of the operator.
   * @param {string} data.mobilePhone - The mobile phone number of the operator.
   * @param {integer} data.sex - The sex of the operator.
   * @param {boolean} data.isDeleted - Whether the operator is deleted.
   * @param {boolean} data.isDisabled - Whether the operator is disabled.
   * @param {string} data.smartCardUid - The SmartCard UID of the operator.
   * @param {string} data.identification - The identification number of the operator.
   * @param {integer} data.shiftOptions - The shift options of the operator.
   * @param {integer} data.permissionSetId - The id of the permission set of the operator.
   * @param {Object} params - additional query params
   */
  postOperators(data = {}, params = {}) {
    const url = `/api/v3.0/operators`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an operator.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.password - The new password for the operator, if left empty the password will remain the same.
   * @param {string} data.username - The username of the operator.
   * @param {string} data.email - The email of the operator.
   * @param {string} data.firstName - The first name of the operator.
   * @param {string} data.lastName - The last name of the operator.
   * @param {string} data.birthDate - The birth date of the operator.
   * @param {string} data.address - The address of the operator.
   * @param {string} data.city - The city of the operator.
   * @param {string} data.country - The country of the operator.
   * @param {string} data.postCode - The post code of the operator.
   * @param {string} data.phone - The phone number of the operator.
   * @param {string} data.mobilePhone - The mobile phone number of the operator.
   * @param {integer} data.sex - The sex of the operator.
   * @param {boolean} data.isDeleted - Whether the operator is deleted.
   * @param {boolean} data.isDisabled - Whether the operator is disabled.
   * @param {string} data.smartCardUid - The SmartCard UID of the operator.
   * @param {string} data.identification - The identification number of the operator.
   * @param {integer} data.shiftOptions - The shift options of the operator.
   * @param {integer} data.permissionSetId - The id of the permission set of the operator.
   * @param {Object} params - additional query params
   */
  putOperators(data = {}, params = {}) {
    const url = `/api/v3.0/operators`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an operator by id.
   * @param {integer} id - Operator id.
   * @param {Object} params - additional query params
   */
  getOperatorsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/operators/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an operator.
   * @param {integer} id - Operator id.
   * @param {Object} params - additional query params
   */
  deleteOperatorsById(id, params = {}) {
    const url = `/api/v3.0/operators/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get current operator.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrent(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets current operator shift options.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentShiftOptions(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/shift/options`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Gets accessible branches for current operator.
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
         * @param {Object} params - additional query params
         */
  getOperatorsCurrentBranches(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/branches`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
         * Gets accessible branches for specified operator.
         * @param {integer} operatorId - Operator id.
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
         * @param {Object} params - additional query params
         */
  getOperatorsByOperatorIdBranches(operatorId, options = {}, params = {}) {
    const url = `/api/v3.0/operators/${operatorId}/branches`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets operator current branch.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentBranchesCurrent(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/branches/current`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Get operator registers for the specified branch.
         * @param {integer} branchId - Branch id.
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
         * @param {Object} params - additional query params
         */
  getOperatorsCurrentBranchesByBranchIdRegisters(
    branchId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/operators/current/branches/${branchId}/registers`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
         * Get operator registers for the current branch.
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
         * @param {Object} params - additional query params
         */
  getOperatorsCurrentRegisters(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/registers`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get operator current register.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentRegistersCurrent(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/registers/current`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Starts shift for current operator.
   * @param {integer} data.registerId - <inheritdoc />
   * @param {number} data.startCash - <inheritdoc />
   * @param {Object} params - additional query params
   */
  postOperatorsCurrentShiftStart(data = {}, params = {}) {
    const url = `/api/v3.0/operators/current/shift/start`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Starts shift.
   * @param {integer} operatorId - Operator id.
   * @param {integer} data.registerId - <inheritdoc />
   * @param {number} data.startCash - <inheritdoc />
   * @param {Object} params - additional query params
   */
  postOperatorsByOperatorIdShiftStart(operatorId, data = {}, params = {}) {
    const url = `/api/v3.0/operators/${operatorId}/shift/start`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Locks active shift for current operator.
   * @param {Object} params - additional query params
   */
  putOperatorsCurrentShiftActiveLock(params = {}) {
    const url = `/api/v3.0/operators/current/shift/active/lock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Unlocks active shift for current operator.
   * @param {Object} params - additional query params
   */
  putOperatorsCurrentShiftActiveUnlock(params = {}) {
    const url = `/api/v3.0/operators/current/shift/active/unlock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Returns active shift information for current operator.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentShiftActive(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/shift/active`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Ends active shift for current operator.
   * @param {array} data.counts - <inheritdoc />
   * @param {Object} params - additional query params
   */
  postOperatorsCurrentShiftActiveEnd(data = {}, params = {}) {
    const url = `/api/v3.0/operators/current/shift/active/end`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Returns active shift expected payments information.
   * @param {Object} params - additional query params
   */
  getOperatorsCurrentShiftActiveExpected(options = {}, params = {}) {
    const url = `/api/v3.0/operators/current/shift/active/expected`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets or updates current operator password.
   * @param {string} data.password - <inheritdoc />
   * @param {Object} params - additional query params
   */
  postOperatorsCurrentPassword(data = {}, params = {}) {
    const url = `/api/v3.0/operators/current/password`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Adds operator to the branch.
   * @param {integer} operatorId - Operator id.
   * @param {integer} branchId - Branch id.
   * @param {Object} params - additional query params
   */
  postOperatorsByOperatorIdBranchByBranchId(operatorId, branchId, params = {}) {
    const url = `/api/v3.0/operators/${operatorId}/branch/${branchId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Removes operator from the branch.
   * @param {integer} operatorId - Operator id.
   * @param {integer} branchId - Branch id.
   * @param {Object} params - additional query params
   */
  deleteOperatorsByOperatorIdBranchByBranchId(
    operatorId,
    branchId,
    params = {},
  ) {
    const url = `/api/v3.0/operators/${operatorId}/branch/${branchId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Sets operator default branch.
   * @param {integer} operatorId - Operator id.
   * @param {integer} branchId - Branch id.
   * @param {boolean} isDefault - Default value.
   * @param {Object} params - additional query params
   */
  postOperatorsByOperatorIdBranchByBranchIdDefaultByIsDefault(
    operatorId,
    branchId,
    isDefault,
    params = {},
  ) {
    const url = `/api/v3.0/operators/${operatorId}/branch/${branchId}/default/${isDefault}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets operator default branch.
   * @param {integer} operatorId - Operator id.
   * @param {Object} params - additional query params
   */
  getOperatorsByOperatorIdBranchDefault(operatorId, options = {}, params = {}) {
    const url = `/api/v3.0/operators/${operatorId}/branch/default`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Applies specified permission set.
   * @param {integer} operatorId - Operator id.
   * @param {integer} permissionSetId - Permission set id.
   * @param {Object} params - additional query params
   */
  putOperatorsByOperatorIdPermissionsetByPermissionSetId(
    operatorId,
    permissionSetId,
    params = {},
  ) {
    const url = `/api/v3.0/operators/${operatorId}/permissionset/${permissionSetId}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Gets current permissions.
   * @param {integer} operatorId - Operator id.
   * @param {Object} params - additional query params
   */
  getOperatorsByOperatorIdPermissions(operatorId, options = {}, params = {}) {
    const url = `/api/v3.0/operators/${operatorId}/permissions`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putOperatorsByIdEnable(id, params = {}) {
    const url = `/api/v3.0/operators/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putOperatorsByIdDisable(id, params = {}) {
    const url = `/api/v3.0/operators/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }
}
