import { GizmoClient } from "../GizmoClient.js";

export class Documents {
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
         * @param {integer} options.documentTypeId - Filter by document type id.
         * @param {boolean} options.isDeleted - Filter by deleted state.
         * @param {Object} params - additional query params
         */
  getDocuments(options = {}, params = {}) {
    const url = `/api/v3.0/documents`;
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
    const documentTypeId = options.hasOwnProperty("documentTypeId")
      ? options["documentTypeId"]
      : undefined;
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
    if (documentTypeId !== undefined) query["DocumentTypeId"] = documentTypeId;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   *
   * @param {string} data.file -
   * @param {Object} params - additional query params
   */
  postDocuments(data = {}, params = {}) {
    const url = `/api/v3.0/documents`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {integer} data.documentTypeId -
   * @param {string} data.fileName -
   * @param {string} data.description -
   * @param {Object} params - additional query params
   */
  putDocuments(data = {}, params = {}) {
    const url = `/api/v3.0/documents`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getDocumentsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/documents/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteDocumentsById(id, params = {}) {
    const url = `/api/v3.0/documents/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putDocumentsByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/documents/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Checks if document with specified file name exists.
   * @param {string} fileName - File name.
   * @param {Object} params - additional query params
   */
  getDocumentsFileByFileNameExists(fileName, options = {}, params = {}) {
    const url = `/api/v3.0/documents/file/${fileName}/exists`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets description.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getDocumentsByIdDescription(id, options = {}, params = {}) {
    const url = `/api/v3.0/documents/${id}/description`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets description.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/documents/{id}/description"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putDocumentsByIdDescription(id, data = {}, params = {}) {
    const url = `/api/v3.0/documents/${id}/description`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
