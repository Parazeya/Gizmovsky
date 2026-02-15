import { GizmoClient } from "../GizmoClient.js";

export class Mappings {
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
         * @param {array} options.expand - <inheritdoc />
         * @param {integer} options.type - Mapping type.
         * @param {Object} params - additional query params
         */
  getMappings(options = {}, params = {}) {
    const url = `/api/v3.0/mappings`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getMappingsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/mappings/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteMappingsById(id, params = {}) {
    const url = `/api/v3.0/mappings/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Creates entry.
   * @param {string} data.label - Label.
   * @param {string} data.source - Source.
   * @param {string} data.mountPoint - Mount point.
   * @param {integer} data.size - Size.
   * @param {boolean} data.directAccess - Direct access.
   * @param {boolean} data.isReadOnly - Read only.
   * @param {Object} params - additional query params
   */
  postMappingsVirtualdrive(data = {}, params = {}) {
    const url = `/api/v3.0/mappings/virtualdrive`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.label - Label.
   * @param {string} data.source - Source.
   * @param {string} data.mountPoint - Mount point.
   * @param {integer} data.size - Size.
   * @param {boolean} data.directAccess - Direct access.
   * @param {boolean} data.isReadOnly - Read only.
   * @param {Object} params - additional query params
   */
  putMappingsVirtualdrive(data = {}, params = {}) {
    const url = `/api/v3.0/mappings/virtualdrive`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {string} data.source - Source.
   * @param {string} data.mountPoint - Mount point.
   * @param {boolean} data.directAccess - Direct access.
   * @param {boolean} data.isReadOnly - Read only.
   * @param {Object} params - additional query params
   */
  postMappingsVirtualfolder(data = {}, params = {}) {
    const url = `/api/v3.0/mappings/virtualfolder`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.source - Source.
   * @param {string} data.mountPoint - Mount point.
   * @param {boolean} data.directAccess - Direct access.
   * @param {boolean} data.isReadOnly - Read only.
   * @param {Object} params - additional query params
   */
  putMappingsVirtualfolder(data = {}, params = {}) {
    const url = `/api/v3.0/mappings/virtualfolder`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Creates entry.
   * @param {string} data.source - Source.
   * @param {string} data.mountPoint - Mount point.
   * @param {boolean} data.useCredentials - Use credentials.
   * @param {string} data.username - Username.
   * @param {string} data.password - Password.
   * @param {Object} params - additional query params
   */
  postMappingsNetworkdrive(data = {}, params = {}) {
    const url = `/api/v3.0/mappings/networkdrive`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.source - Source.
   * @param {string} data.mountPoint - Mount point.
   * @param {boolean} data.useCredentials - Use credentials.
   * @param {string} data.username - Username.
   * @param {string} data.password - Password.
   * @param {Object} params - additional query params
   */
  putMappingsNetworkdrive(data = {}, params = {}) {
    const url = `/api/v3.0/mappings/networkdrive`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if entry exists with specified mount point.
   * @param {string} mountPoint - Mount point.
   * @param {Object} params - additional query params
   */
  getMappingsMountpointByMountPointExist(
    mountPoint,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/mappings/mountpoint/${mountPoint}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
