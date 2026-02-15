import { GizmoClient } from "../GizmoClient.js";

export class Users {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all users.
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
         * @param {integer} options.userGroupId - Return users of the specified user group.
         * @param {string} options.username - Return users with usernames that contain the specified string.
         * @param {string} options.smartCardUID - Smart card UID.
         * @param {boolean} options.isGuest - Return guest users.
         * @param {boolean} options.isDisabled - Return disabled users.
         * @param {boolean} options.isDeleted - Return deleted users.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {boolean} options.isLoggedIn - Return logged in users.
         * @param {string} options.searchValue - Return users using all active search fields.
         * @param {Object} params - additional query params
         */
  getUsers(options = {}, params = {}) {
    const url = `/api/v3.0/users`;
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
    const userGroupId = options.hasOwnProperty("userGroupId")
      ? options["userGroupId"]
      : undefined;
    const username = options.hasOwnProperty("username")
      ? options["username"]
      : undefined;
    const smartCardUID = options.hasOwnProperty("smartCardUID")
      ? options["smartCardUID"]
      : undefined;
    const isGuest = options.hasOwnProperty("isGuest")
      ? options["isGuest"]
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
    const isLoggedIn = options.hasOwnProperty("isLoggedIn")
      ? options["isLoggedIn"]
      : undefined;
    const searchValue = options.hasOwnProperty("searchValue")
      ? options["searchValue"]
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
    if (userGroupId !== undefined) query["UserGroupId"] = userGroupId;
    if (username !== undefined) query["Username"] = username;
    if (smartCardUID !== undefined) query["SmartCardUID"] = smartCardUID;
    if (isGuest !== undefined) query["IsGuest"] = isGuest;
    if (isDisabled !== undefined) query["IsDisabled"] = isDisabled;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (expand !== undefined) query["Expand"] = expand;
    if (isLoggedIn !== undefined) query["IsLoggedIn"] = isLoggedIn;
    if (searchValue !== undefined) query["SearchValue"] = searchValue;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a user.
   * @param {string} data.password - The initial password for the user, if left empty no password will be set.
   * @param {string} data.username - The username of the user.
   * @param {string} data.email - The email of the user.
   * @param {integer} data.userGroupId - The Id of the users group id this user belongs to.
   * @param {boolean} data.isNegativeBalanceAllowed - Whether the user is allowed to have negative balance.
   * @param {boolean} data.isPersonalInfoRequested - Whether the personal info has been requested from the user.
   * @param {string} data.enableDate - The date the user will be enabled again.
   * @param {string} data.disabledDate - The date the user has been disabled.
   * @param {string} data.firstName - The first name of the user.
   * @param {string} data.lastName - The last name of the user.
   * @param {string} data.birthDate - The birth date of the user.
   * @param {string} data.address - The address of the user.
   * @param {string} data.city - The city of the user.
   * @param {string} data.country - The country of the user.
   * @param {string} data.postCode - The post code of the user.
   * @param {string} data.phone - The phone number of the user.
   * @param {string} data.mobilePhone - The mobile phone number of the user.
   * @param {integer} data.sex - The sex of the user.
   * @param {boolean} data.isDeleted - Whether the user is deleted.
   * @param {boolean} data.isDisabled - Whether the user is disabled.
   * @param {string} data.smartCardUid - The SmartCard UID of the user.
   * @param {string} data.identification - The identification number of the user.
   * @param {Object} params - additional query params
   */
  postUsers(data = {}, params = {}) {
    const url = `/api/v3.0/users`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a user.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.password - The new password for the user, if left empty the password will remain the same.
   * @param {string} data.username - The username of the user.
   * @param {string} data.email - The email of the user.
   * @param {integer} data.userGroupId - The Id of the users group id this user belongs to.
   * @param {boolean} data.isNegativeBalanceAllowed - Whether the user is allowed to have negative balance.
   * @param {boolean} data.isPersonalInfoRequested - Whether the personal info has been requested from the user.
   * @param {string} data.enableDate - The date the user will be enabled again.
   * @param {string} data.disabledDate - The date the user has been disabled.
   * @param {string} data.firstName - The first name of the user.
   * @param {string} data.lastName - The last name of the user.
   * @param {string} data.birthDate - The birth date of the user.
   * @param {string} data.address - The address of the user.
   * @param {string} data.city - The city of the user.
   * @param {string} data.country - The country of the user.
   * @param {string} data.postCode - The post code of the user.
   * @param {string} data.phone - The phone number of the user.
   * @param {string} data.mobilePhone - The mobile phone number of the user.
   * @param {integer} data.sex - The sex of the user.
   * @param {boolean} data.isDeleted - Whether the user is deleted.
   * @param {boolean} data.isDisabled - Whether the user is disabled.
   * @param {string} data.smartCardUid - The SmartCard UID of the user.
   * @param {string} data.identification - The identification number of the user.
   * @param {Object} params - additional query params
   */
  putUsers(data = {}, params = {}) {
    const url = `/api/v3.0/users`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a user by id.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersById(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  deleteUsersById(id, params = {}) {
    const url = `/api/v3.0/users/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
         * User search.
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
         * @param {string} options.searchValue - Search value to filter users by.
 </br>
         * @param {Object} params - additional query params
         */
  getUsersSearch(options = {}, params = {}) {
    const url = `/api/v3.0/users/search`;
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
    const searchValue = options.hasOwnProperty("searchValue")
      ? options["searchValue"]
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
    if (searchValue !== undefined) query["SearchValue"] = searchValue;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Undelete a user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  putUsersByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/users/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Hard delete a user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  deleteUsersByIdHard(id, params = {}) {
    const url = `/api/v3.0/users/${id}/hard`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Hard delete users by user ids.
   * @param {array} data.userIds - The ids of the users to hard delete.
   * @param {Object} params - additional query params
   */
  deleteUsersHard(data = {}, params = {}) {
    const url = `/api/v3.0/users/hard`;
    const body = data;
    return this.client.request("delete", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {string} data.newUsername - New username.
   * @param {Object} params - additional query params
   */
  putUsersByIdRename(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/rename`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getUsersByIdAttributes(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/attributes`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.attributeId - The Id of the attribute this user attribute is associated with.
   * @param {string} data.value - The value of the user attribute.
   * @param {Object} params - additional query params
   */
  postUsersByIdAttributes(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/attributes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.userId - The Id of the user this attribute belongs to.
   * @param {integer} data.attributeId - The Id of the attribute this user attribute is associated with.
   * @param {string} data.value - The value of the user attribute.
   * @param {Object} params - additional query params
   */
  putUsersAttributes(data = {}, params = {}) {
    const url = `/api/v3.0/users/attributes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} userAttributeId - path
   * @param {Object} params - additional query params
   */
  deleteUsersByIdAttributesByUserAttributeId(id, userAttributeId, params = {}) {
    const url = `/api/v3.0/users/${id}/attributes/${userAttributeId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getUsersByIdNotesCount(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/notes/count`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * 
         * @param {integer} id - path
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
         * @param {Object} params - additional query params
         */
  getUsersByIdNotes(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/notes`;
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
   *
   * @param {integer} id - path
   * @param {string} data.text - The text of the note.
   * @param {integer} data.severity - The severity of the note.
   * @param {Object} params - additional query params
   */
  postUsersByIdNotes(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/notes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} userNoteId - path
   * @param {Object} params - additional query params
   */
  getUsersByIdNotesByUserNoteId(id, userNoteId, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/notes/${userNoteId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} userNoteId - path
   * @param {Object} params - additional query params
   */
  deleteUsersByIdNotesByUserNoteId(id, userNoteId, params = {}) {
    const url = `/api/v3.0/users/${id}/notes/${userNoteId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.text - The text of the note.
   * @param {integer} data.severity - The severity of the note.
   * @param {Object} params - additional query params
   */
  putUsersNotes(data = {}, params = {}) {
    const url = `/api/v3.0/users/notes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get the picture of the specified user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdPicture(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/picture`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update the picture of the specified user.
   * @param {integer} id - User id.
   * @param {string} data.picture - The image data of the product image.
   * @param {Object} params - additional query params
   */
  putUsersByIdPicture(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/picture`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get all user agreement that the specified user has accepted/rejected.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdUseragreements(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/useragreements`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Specified user accepts the specified user agreement.
   * @param {integer} id - User id.
   * @param {integer} userAgreementId - User agreement id
   * @param {Object} params - additional query params
   */
  putUsersByIdUseragreementsByUserAgreementIdAccept(
    id,
    userAgreementId,
    params = {},
  ) {
    const url = `/api/v3.0/users/${id}/useragreements/${userAgreementId}/accept`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Specified user rejects the specified user agreement.
   * @param {integer} id - User id.
   * @param {integer} userAgreementId - User agreement id
   * @param {Object} params - additional query params
   */
  putUsersByIdUseragreementsByUserAgreementIdReject(
    id,
    userAgreementId,
    params = {},
  ) {
    const url = `/api/v3.0/users/${id}/useragreements/${userAgreementId}/reject`;
    return this.client.request("put", url, {}, params);
  }

  /**
         * Get all pending user agreements for the specified user.
         * @param {integer} id - User id.
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
         * @param {boolean} options.isEnabled - Return enabled user agreements.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getUsersByIdUseragreementsPending(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/useragreements/pending`;
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
    const isEnabled = options.hasOwnProperty("isEnabled")
      ? options["isEnabled"]
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
    if (isEnabled !== undefined) query["IsEnabled"] = isEnabled;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets user recovery methods.
   * @param {string} username - Username.
   * @param {Object} params - additional query params
   */
  getUsersByUsernameRecoverymethods(username, options = {}, params = {}) {
    const url = `/api/v3.0/users/${username}/recoverymethods`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.hostGroupId - query
   * @param {string} options.startTime - query
   * @param {Object} params - additional query params
   */
  getUsersByIdUserusagetime(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/userusagetime`;
    const hostGroupId = options.hasOwnProperty("hostGroupId")
      ? options["hostGroupId"]
      : undefined;
    const startTime = options.hasOwnProperty("startTime")
      ? options["startTime"]
      : undefined;
    const query = Object.assign({}, params);
    if (hostGroupId !== undefined) query["hostGroupId"] = hostGroupId;
    if (startTime !== undefined) query["startTime"] = startTime;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets users active usage.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdUsageCurrent(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/usage/current`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Gets users active usage.
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
         * @param {Object} params - additional query params
         */
  getUsersUsageCurrent(options = {}, params = {}) {
    const url = `/api/v3.0/users/usage/current`;
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
   * Gets users balances.
   * @param {Object} params - additional query params
   */
  getUsersBalance(options = {}, params = {}) {
    const url = `/api/v3.0/users/balance`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets user balance.
   * @param {integer} id - User id.
   * @param {Object} options - options object with possible query parameters
   * @param {boolean} options.preferCache - Prefer cached balance value.
   * @param {Object} params - additional query params
   */
  getUsersByIdBalance(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/balance`;
    const preferCache = options.hasOwnProperty("preferCache")
      ? options["preferCache"]
      : undefined;
    const query = Object.assign({}, params);
    if (preferCache !== undefined) query["preferCache"] = preferCache;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets user balance.
   * @param {integer} id - User id.
   * @param {integer} hostGroupId - Host group id.
   * @param {Object} options - options object with possible query parameters
   * @param {boolean} options.preferCache - Prefer cached balance value.
   * @param {Object} params - additional query params
   */
  getUsersByIdHostgroupByHostGroupIdBalance(
    id,
    hostGroupId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/users/${id}/hostgroup/${hostGroupId}/balance`;
    const preferCache = options.hasOwnProperty("preferCache")
      ? options["preferCache"]
      : undefined;
    const query = Object.assign({}, params);
    if (preferCache !== undefined) query["preferCache"] = preferCache;
    return this.client.request("get", url, {}, query);
  }

  /**
   *
   * @param {integer} userId - path
   * @param {integer} hostId - path
   * @param {Object} params - additional query params
   */
  postUsersByUserIdLoginByHostId(userId, hostId, params = {}) {
    const url = `/api/v3.0/users/${userId}/login/${hostId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {integer} userId - path
   * @param {integer} hostId - path
   * @param {integer} slot - path
   * @param {Object} params - additional query params
   */
  postUsersByUserIdLoginByHostIdSlotBySlot(userId, hostId, slot, params = {}) {
    const url = `/api/v3.0/users/${userId}/login/${hostId}/slot/${slot}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {integer} userId - path
   * @param {integer} data.hostId - Move host id.
   * @param {integer} data.slot - Optional slot.
   * @param {Object} params - additional query params
   */
  postUsersByUserIdMove(userId, data = {}, params = {}) {
    const url = `/api/v3.0/users/${userId}/move`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} userId - path
   * @param {Object} params - additional query params
   */
  postUsersByUserIdLogout(userId, params = {}) {
    const url = `/api/v3.0/users/${userId}/logout`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getUsersCounters(options = {}, params = {}) {
    const url = `/api/v3.0/users/counters`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getUsersByIdCounters(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/counters`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {boolean} data.isBanned - Whether the user is banned.
   * @param {string} data.enableDate - The date where the ban will be revoked.
   * @param {Object} params - additional query params
   */
  putUsersByIdBan(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/ban`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {string} data.country - The country of the user.
   * @param {string} data.address - The address of the user.
   * @param {string} data.postCode - The post code of the user.
   * @param {string} data.city - The city of the user.
   * @param {Object} params - additional query params
   */
  putUsersByIdAddress(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/address`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {string} data.firstName - The first name of the user.
   * @param {string} data.lastName - The last name of the user.
   * @param {string} data.username - The username of the user.
   * @param {string} data.identification - The identification number of the user.
   * @param {integer} data.sex - The sex of the user.
   * @param {string} data.birthDate - The birth date of the user.
   * @param {Object} params - additional query params
   */
  putUsersByIdPersonalinformation(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/personalinformation`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {string} data.email - The email of the user.
   * @param {string} data.mobilePhone - The mobile phone number of the user.
   * @param {string} data.phone - The phone number of the user.
   * @param {Object} params - additional query params
   */
  putUsersByIdContactinformation(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/contactinformation`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  putUsersByIdRequestpersonalinfo(id, params = {}) {
    const url = `/api/v3.0/users/${id}/requestpersonalinfo`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  putUsersByIdResetpassword(id, params = {}) {
    const url = `/api/v3.0/users/${id}/resetpassword`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.userGroupId - The Id of the users group id this user belongs to.
   * @param {Object} params - additional query params
   */
  putUsersByIdUsergroup(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/usergroup`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} userId - path
   * @param {integer} assetId - path
   * @param {Object} params - additional query params
   */
  putUsersByUserIdAssetByAssetIdCheckout(userId, assetId, params = {}) {
    const url = `/api/v3.0/users/${userId}/asset/${assetId}/checkout`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {integer} assetId - path
   * @param {Object} params - additional query params
   */
  putUsersAssetByAssetIdCheckin(assetId, params = {}) {
    const url = `/api/v3.0/users/asset/${assetId}/checkin`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Get the stats of the specified user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdStats(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/stats`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Retrieves the communication channels of the specified user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdCommunicationchannels(id, options = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/communicationchannels`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets user smart card UID.
   * @param {integer} id - User id.
   * @param {string} data.smartCardUid - Smart card UID.
   * @param {Object} params - additional query params
   */
  putUsersByIdSmartcard(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/smartcard`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Sets user smart card UID.
   * @param {string} smartCardUid - Smart card UID.
   * @param {Object} params - additional query params
   */
  getUsersSmartcardBySmartCardUidExist(
    smartCardUid,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/users/smartcard/${smartCardUid}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Configures user negative balance parameters.
   * @param {integer} id - User id.
   * @param {boolean} data.isEnabled - Enables user negative balance.
   * @param {Object} params - additional query params
   */
  putUsersByIdNegativebalance(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/negativebalance`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Configures user billing options parameters.
   * @param {integer} id - User id.
   * @param {integer} data.options - Gets or sets options.
   * @param {Object} params - additional query params
   */
  putUsersByIdBillingoptions(id, data = {}, params = {}) {
    const url = `/api/v3.0/users/${id}/billingoptions`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
