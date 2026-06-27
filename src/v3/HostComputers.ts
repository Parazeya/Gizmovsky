import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostComputers {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getHostComputersByHostIdScreen
   */
  getHostComputersByHostIdScreen(hostId: string | number, options: { width?: any; height?: any; imageQuality?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ width?: any; height?: any; x?: any; y?: any; data?: string }>> {
    const url = `/api/v3/hostcomputers/${hostId}/screen`;
    const query: Record<string, any> = { ...params };
    if (options.width !== undefined) query['Width'] = options.width;
    if (options.height !== undefined) query['Height'] = options.height;
    if (options.imageQuality !== undefined) query['ImageQuality'] = options.imageQuality;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostComputersByHostIdScreenLast
   */
  getHostComputersByHostIdScreenLast(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ width?: any; height?: any; x?: any; y?: any; data?: string }>> {
    const url = `/api/v3/hostcomputers/${hostId}/screen/last`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostComputersByHostIdReboot
   */
  postHostComputersByHostIdReboot(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/reboot`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostComputersByHostIdShutdown
   */
  postHostComputersByHostIdShutdown(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/shutdown`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostComputersByHostIdInputLockByValue
   */
  postHostComputersByHostIdInputLockByValue(hostId: string | number, value: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/input/lock/${value}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getHostComputersByHostIdInputLock
   */
  getHostComputersByHostIdInputLock(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/hostcomputers/${hostId}/input/lock`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostComputersByHostIdMaintenanceByValue
   */
  postHostComputersByHostIdMaintenanceByValue(hostId: string | number, value: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/maintenance/${value}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getHostComputersByHostIdMaintenance
   */
  getHostComputersByHostIdMaintenance(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/hostcomputers/${hostId}/maintenance`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostComputersByHostIdSecurityByValue
   */
  postHostComputersByHostIdSecurityByValue(hostId: string | number, value: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/security/${value}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getHostComputersByHostIdSecurity
   */
  getHostComputersByHostIdSecurity(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/hostcomputers/${hostId}/security`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostComputersByHostIdOutoforderByValue
   */
  postHostComputersByHostIdOutoforderByValue(hostId: string | number, value: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/outoforder/${value}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostComputersByHostIdOutoforder
   */
  postHostComputersByHostIdOutoforder(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/outoforder`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postHostComputersByHostIdClientRestart
   */
  postHostComputersByHostIdClientRestart(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/client/restart`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getHostComputersClientConnections
   */
  getHostComputersClientConnections(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; branchId?: any; hostId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/hostcomputers/client/connections`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostComputersByHostIdClientConnection
   */
  getHostComputersByHostIdClientConnection(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ hostId?: any; isConnected?: boolean; ipAddress?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/client/connection`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getHostComputersByHostIdProcesses
   */
  getHostComputersByHostIdProcesses(hostId: string | number, options: { processName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ processId?: any; parentId?: any; processName?: any; workingDirectory?: any; commandLine?: any; startTime?: any; sessionId?: any; cpuUsage?: any }>>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes`;
    const query: Record<string, any> = { ...params };
    if (options.processName !== undefined) query['ProcessName'] = options.processName;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postHostComputersByHostIdProcesses
   */
  postHostComputersByHostIdProcesses(hostId: string | number, data: { fileName?: string; workingDirectory?: any; arguments?: any; waitForExit?: boolean; waitTimeout?: any; createNoWindow?: boolean; shellExecute?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ processId?: any; exitCode?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getHostComputersByHostIdProcessesByProcessId
   */
  getHostComputersByHostIdProcessesByProcessId(hostId: string | number, processId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ processId?: any; parentId?: any; processName?: any; workingDirectory?: any; commandLine?: any; startTime?: any; sessionId?: any; cpuUsage?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes/${processId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteHostComputersByHostIdProcessesByProcessId
   */
  deleteHostComputersByHostIdProcessesByProcessId(hostId: string | number, processId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes/${processId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getHostComputersByHostIdProcessesByProcessIdModule
   */
  getHostComputersByHostIdProcessesByProcessIdModule(hostId: string | number, processId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ fileName?: any; fileVersion?: any; moduleName?: any; companyName?: any; description?: any; icon?: string }>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes/${processId}/module`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteHostComputersByHostIdProcessesByProcessName
   */
  deleteHostComputersByHostIdProcessesByProcessName(hostId: string | number, processName: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes/${processName}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * deleteHostComputersByHostIdProcessesPathByExecutablePath
   */
  deleteHostComputersByHostIdProcessesPathByExecutablePath(hostId: string | number, executablePath: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostcomputers/${hostId}/processes/path/${executablePath}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getHostComputersByHostIdCpuUsage
   */
  getHostComputersByHostIdCpuUsage(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/cpu/usage`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostComputersByHostIdScriptBatch
   */
  postHostComputersByHostIdScriptBatch(hostId: string | number, data: { script?: string; waitForExit?: boolean; waitTimeout?: any; createNoWindow?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ processId?: any; exitCode?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/script/batch`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postHostComputersByHostIdScriptAutoit
   */
  postHostComputersByHostIdScriptAutoit(hostId: string | number, data: { script?: string; waitForExit?: boolean; waitTimeout?: any; createNoWindow?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ processId?: any; exitCode?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/script/autoit`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postHostComputersByHostIdScriptVisualbasic
   */
  postHostComputersByHostIdScriptVisualbasic(hostId: string | number, data: { script?: string; waitForExit?: boolean; waitTimeout?: any; createNoWindow?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ processId?: any; exitCode?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/script/visualbasic`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postHostComputersByHostIdRegistryImport
   */
  postHostComputersByHostIdRegistryImport(hostId: string | number, data: { entries?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostcomputers/${hostId}/registry/import`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postHostComputersByHostIdNotificationsAlert
   */
  postHostComputersByHostIdNotificationsAlert(hostId: string | number, data: { type?: number; title?: string; message?: string; waitForAcknowledged?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostcomputers/${hostId}/notifications/alert`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postHostComputersByHostIdJunction
   */
  postHostComputersByHostIdJunction(hostId: string | number, data: { link?: string; target?: string; deleteExistingLinks?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostcomputers/${hostId}/junction`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getHostComputersByHostIdFsDrives
   */
  getHostComputersByHostIdFsDrives(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ path?: string; totalSize?: any; availableSpace?: any; format?: any; type?: number }>>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/drives`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getHostComputersByHostIdFsDirectoryStream
   */
  getHostComputersByHostIdFsDirectoryStream(hostId: string | number, options: { path?: string; pattern?: string; skipAttributes?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/directory/stream`;
    const query: Record<string, any> = { ...params };
    if (options.path !== undefined) query['Path'] = options.path;
    if (options.pattern !== undefined) query['Pattern'] = options.pattern;
    if (options.skipAttributes !== undefined) query['SkipAttributes'] = options.skipAttributes;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostComputersByHostIdFsInfo
   */
  getHostComputersByHostIdFsInfo(hostId: string | number, options: { path?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; attributes?: number; length?: any; creationTimeUtc?: string; lastAccessTimeUtc?: string; lastWriteTimeUtc?: string }>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/info`;
    const query: Record<string, any> = { ...params };
    if (options.path !== undefined) query['path'] = options.path;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getHostComputersByHostIdFsExists
   */
  getHostComputersByHostIdFsExists(hostId: string | number, options: { path?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/exists`;
    const query: Record<string, any> = { ...params };
    if (options.path !== undefined) query['path'] = options.path;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postHostComputersByHostIdFsDirectory
   */
  postHostComputersByHostIdFsDirectory(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/directory`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteHostComputersByHostIdFsEntry
   */
  deleteHostComputersByHostIdFsEntry(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ isSuccess?: boolean; errorCode?: any; errorMessage?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/entry`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postHostComputersByHostIdFsMove
   */
  postHostComputersByHostIdFsMove(hostId: string | number, data: { sourcePath?: string; destinationPath?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isSuccess?: boolean; errorCode?: any; errorMessage?: any }>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/move`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getHostComputersByHostIdFsFile
   */
  getHostComputersByHostIdFsFile(hostId: string | number, options: { path?: string; mode?: any; share?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/file`;
    const query: Record<string, any> = { ...params };
    if (options.path !== undefined) query['Path'] = options.path;
    if (options.mode !== undefined) query['Mode'] = options.mode;
    if (options.share !== undefined) query['Share'] = options.share;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putHostComputersByHostIdFsFile
   */
  putHostComputersByHostIdFsFile(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/file`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * patchHostComputersByHostIdFsAttributes
   */
  patchHostComputersByHostIdFsAttributes(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/attributes`;
    return this.client.request('patch', url, {}, params);
  }

  /**
   * patchHostComputersByHostIdFsLength
   */
  patchHostComputersByHostIdFsLength(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/length`;
    return this.client.request('patch', url, {}, params);
  }

  /**
   * patchHostComputersByHostIdFsTimestamps
   */
  patchHostComputersByHostIdFsTimestamps(hostId: string | number, data: { path?: string; createdUtc?: any; modifiedUtc?: any; accessedUtc?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/timestamps`;
    return this.client.request('patch', url, data, params);
  }

  /**
   * postHostComputersByHostIdFsDownloadBatch
   */
  postHostComputersByHostIdFsDownloadBatch(hostId: string | number, data: { paths?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/hostcomputers/${hostId}/fs/download/batch`;
    return this.client.request('post', url, data, params);
  }
}
