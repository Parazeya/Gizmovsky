import { GizmoClient } from "../GizmoClient.js";

export class Users {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all users.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {integer} options.userGroupId - query
   * @param {string} options.username - query
   * @param {string} options.smartCardUID - query
   * @param {boolean} options.isGuest - query
   * @param {boolean} options.isDisabled - query
   * @param {boolean} options.isDeleted - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getUsers(options = {}, params = {}) {
    const url = `/api/v2.0/users`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a user.
   * @param {string} data.password -
   * @param {string} data.username -
   * @param {string} data.email -
   * @param {integer} data.userGroupId -
   * @param {boolean} data.isNegativeBalanceAllowed -
   * @param {boolean} data.isPersonalInfoRequested -
   * @param {string} data.enableDate -
   * @param {string} data.disabledDate -
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
  postUsers(data = {}, params = {}) {
    const url = `/api/v2.0/users`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a user.
   * @param {integer} data.id -
   * @param {string} data.password -
   * @param {string} data.username -
   * @param {string} data.email -
   * @param {integer} data.userGroupId -
   * @param {boolean} data.isNegativeBalanceAllowed -
   * @param {boolean} data.isPersonalInfoRequested -
   * @param {string} data.enableDate -
   * @param {string} data.disabledDate -
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
  putUsers(data = {}, params = {}) {
    const url = `/api/v2.0/users`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a user by id.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersById(id, options = {}, params = {}) {
    const url = `/api/v2.0/users/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  deleteUsersById(id, params = {}) {
    const url = `/api/v2.0/users/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getUsersByIdAttributes(id, options = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/attributes`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.attributeId -
   * @param {string} data.value -
   * @param {Object} params - additional query params
   */
  postUsersByIdAttributes(id, data = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/attributes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} data.id -
   * @param {integer} data.userId -
   * @param {integer} data.attributeId -
   * @param {string} data.value -
   * @param {Object} params - additional query params
   */
  putUsersAttributes(data = {}, params = {}) {
    const url = `/api/v2.0/users/attributes`;
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
    const url = `/api/v2.0/users/${id}/attributes/${userAttributeId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getUsersByIdNotes(id, options = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/notes`;
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
   * @param {string} data.text -
   * @param {object} data.severity -
   * @param {Object} params - additional query params
   */
  postUsersByIdNotes(id, data = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/notes`;
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
    const url = `/api/v2.0/users/${id}/notes/${userNoteId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} userNoteId - path
   * @param {Object} params - additional query params
   */
  deleteUsersByIdNotesByUserNoteId(id, userNoteId, params = {}) {
    const url = `/api/v2.0/users/${id}/notes/${userNoteId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} data.id -
   * @param {string} data.text -
   * @param {object} data.severity -
   * @param {Object} params - additional query params
   */
  putUsersNotes(data = {}, params = {}) {
    const url = `/api/v2.0/users/notes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get the picture of the specified user.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdPicture(id, options = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/picture`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update the picture of the specified user.
   * @param {integer} id - User id.
   * @param {string} data.picture -
   * @param {Object} params - additional query params
   */
  putUsersByIdPicture(id, data = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/picture`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get all user agreement that the specified user has accepted/rejected.
   * @param {integer} id - User id.
   * @param {Object} params - additional query params
   */
  getUsersByIdUseragreements(id, options = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/useragreements`;
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
    params = {}
  ) {
    const url = `/api/v2.0/users/${id}/useragreements/${userAgreementId}/accept`;
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
    params = {}
  ) {
    const url = `/api/v2.0/users/${id}/useragreements/${userAgreementId}/reject`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Get all pending user agreements for the specified user.
   * @param {integer} id - User id.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {boolean} options.isEnabled - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getUsersByIdUseragreementsPending(id, options = {}, params = {}) {
    const url = `/api/v2.0/users/${id}/useragreements/pending`;
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
  putUsersByUsernameRecoverymethods(username, params = {}) {
    const url = `/api/v2.0/users/${username}/recoverymethods`;
    return this.client.request("put", url, {}, params);
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
    const url = `/api/v2.0/users/${id}/userusagetime`;
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
}
