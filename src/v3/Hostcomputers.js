import { GizmoClient } from "../GizmoClient.js";

export class HostComputers {
  constructor(client) {
    this.client = client;
  }

  /**
   * Captures system screen.
   * @param {integer} hostId - Host id.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.width - Image resize width.
   * @param {integer} options.height - Image resize height.
   * @param {integer} options.imageQuality - Image quality.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdScreen(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/screen`;
    const width = options.hasOwnProperty("width")
      ? options["width"]
      : undefined;
    const height = options.hasOwnProperty("height")
      ? options["height"]
      : undefined;
    const imageQuality = options.hasOwnProperty("imageQuality")
      ? options["imageQuality"]
      : undefined;
    const query = Object.assign({}, params);
    if (width !== undefined) query["Width"] = width;
    if (height !== undefined) query["Height"] = height;
    if (imageQuality !== undefined) query["ImageQuality"] = imageQuality;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Obtain last system screen captured.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdScreenLast(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/screen/last`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Reboots host system.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdReboot(hostId, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/reboot`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Shuts down host system.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdShutdown(hostId, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/shutdown`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Locks/Unlocks system input.
   * @param {integer} hostId - Host id.
   * @param {boolean} value - State.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdInputLockByValue(hostId, value, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/input/lock/${value}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets input lock state.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdInputLock(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/input/lock`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Enables/Disables maintenance mode.
   * @param {integer} hostId - Host id.
   * @param {boolean} value - State.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdMaintenanceByValue(hostId, value, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/maintenance/${value}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets maintenance mode state.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdMaintenance(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/maintenance`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Enables/Disables client security.
   * @param {integer} hostId - Host id.
   * @param {boolean} value - State.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdSecurityByValue(hostId, value, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/security/${value}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets security state.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdSecurity(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/security`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Enables/Disables out of order state.
   * @param {integer} hostId - Host id.
   * @param {boolean} value - State.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdOutoforderByValue(hostId, value, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/outoforder/${value}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets out of order state.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdOutoforder(hostId, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/outoforder`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Restarts client module.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdClientRestart(hostId, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/client/restart`;
    return this.client.request("post", url, {}, params);
  }

  /**
         * Gets client connections.
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
         * @param {integer} options.branchId - query
         * @param {integer} options.hostId - Host computer id.
         * @param {Object} params - additional query params
         */
  getHostComputersClientConnections(options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/client/connections`;
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
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const hostId = options.hasOwnProperty("hostId")
      ? options["hostId"]
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
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (hostId !== undefined) query["HostId"] = hostId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets client connection.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdClientConnection(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/client/connection`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.processName - Optional process name.
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdProcesses(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes`;
    const processName = options.hasOwnProperty("processName")
      ? options["processName"]
      : undefined;
    const query = Object.assign({}, params);
    if (processName !== undefined) query["ProcessName"] = processName;
    return this.client.request("get", url, {}, query);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} data.fileName - Process file name.
   * @param {string} data.workingDirectory - Working directory.
   * @param {string} data.arguments - Arguments.
   * @param {boolean} data.waitForExit - Wait for exit.
   * @param {integer} data.waitTimeout - Wait timeout in seconds.
   * @param {boolean} data.createNoWindow - Create no window.
   * @param {boolean} data.shellExecute - Use shell execute.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdProcesses(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {integer} processId - path
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdProcessesByProcessId(
    hostId,
    processId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes/${processId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {integer} processId - path
   * @param {Object} params - additional query params
   */
  deleteHostComputersByHostIdProcessesByProcessId(
    hostId,
    processId,
    params = {},
  ) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes/${processId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {integer} processId - path
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdProcessesByProcessIdModule(
    hostId,
    processId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes/${processId}/module`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} processName - path
   * @param {Object} params - additional query params
   */
  deleteHostComputersByHostIdProcessesByProcessName(
    hostId,
    processName,
    params = {},
  ) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes/${processName}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} executablePath - path
   * @param {Object} params - additional query params
   */
  deleteHostComputersByHostIdProcessesPathByExecutablePath(
    hostId,
    executablePath,
    params = {},
  ) {
    const url = `/api/v3.0/hostcomputers/${hostId}/processes/path/${executablePath}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {Object} params - additional query params
   */
  getHostComputersByHostIdCpuUsage(hostId, options = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/cpu/usage`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} data.script - Script data.
   * @param {boolean} data.waitForExit - Wait for exit.
   * @param {integer} data.waitTimeout - Wait timeout in seconds.
   * @param {boolean} data.createNoWindow - Create no window.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdScriptBatch(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/script/batch`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} data.script - Script data.
   * @param {boolean} data.waitForExit - Wait for exit.
   * @param {integer} data.waitTimeout - Wait timeout in seconds.
   * @param {boolean} data.createNoWindow - Create no window.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdScriptAutoit(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/script/autoit`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} data.script - Script data.
   * @param {boolean} data.waitForExit - Wait for exit.
   * @param {integer} data.waitTimeout - Wait timeout in seconds.
   * @param {boolean} data.createNoWindow - Create no window.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdScriptVisualbasic(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/script/visualbasic`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} data.entries - Registry entries.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdRegistryImport(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/registry/import`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {integer} data.type - Alert type.
   * @param {string} data.title - Notification title.
   * @param {string} data.message - Notification message.
   * @param {boolean} data.waitForAcknowledged - Waits for notification to be acknowledged.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdNotificationsAlert(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/notifications/alert`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} hostId - path
   * @param {string} data.link - Junction link.
   * @param {string} data.target - Junction target.
   * @param {boolean} data.deleteExistingLinks - Delete existing links.
   * @param {Object} params - additional query params
   */
  postHostComputersByHostIdJunction(hostId, data = {}, params = {}) {
    const url = `/api/v3.0/hostcomputers/${hostId}/junction`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
