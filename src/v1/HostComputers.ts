import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostComputers {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns host computers.
   */
  getHostComputersApiHostcomputers(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; number?: number; name?: string; hostGroupId?: number; state?: any; iconId?: number; isDeleted?: boolean; hostname?: string; macAddress?: string }>>> {
    const url = `/api/hostcomputers`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns host computers with specified host name.
   */
  getHostComputersApiHostcomputersByHostname(hostname: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; number?: number; name?: string; hostGroupId?: number; state?: any; iconId?: number; isDeleted?: boolean; hostname?: string; macAddress?: string }>>> {
    const url = `/api/hostcomputers/${hostname}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns all processes on specified host.
   */
  getHostComputersApiHostcomputersByHostIdProcess(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; processName?: string; processExeName?: string; parentId?: number; basePriority?: number; sessionId?: number; exitCode?: number; mainModule?: any; startInfo?: any; startTime?: string; exitTime?: string; cpuUsage?: number; totalProcessorTime?: any; userProcessorTime?: any; currentDirectory?: string; commandLine?: string; isAccessible?: boolean; hookExited?: boolean; hasExited?: boolean; processorCount?: number }>>> {
    const url = `/api/hostcomputers/${hostId}/process`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Creates a new process on specified host.
   */
  putHostComputersApiHostcomputersByHostIdProcess(hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/hostcomputers/${hostId}/process`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Terminates process on specified host.
   */
  deleteHostComputersApiHostcomputersByHostIdProcess(hostId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hostcomputers/${hostId}/process`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns a process on specified host by process id.
   */
  getHostComputersApiHostcomputersByHostIdProcessByProcessId(hostId: string | number, processId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; processName?: string; processExeName?: string; parentId?: number; basePriority?: number; sessionId?: number; exitCode?: number; mainModule?: any; startInfo?: any; startTime?: string; exitTime?: string; cpuUsage?: number; totalProcessorTime?: any; userProcessorTime?: any; currentDirectory?: string; commandLine?: string; isAccessible?: boolean; hookExited?: boolean; hasExited?: boolean; processorCount?: number }>> {
    const url = `/api/hostcomputers/${hostId}/process/${processId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Terminates process on specified host.
   */
  deleteHostComputersApiHostcomputersByHostIdProcessByProcessId(hostId: string | number, processId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hostcomputers/${hostId}/process/${processId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns a process on specified host with matching process name.
   */
  getHostComputersApiHostcomputersByHostIdProcessByProcessName(hostId: string | number, processName: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; processName?: string; processExeName?: string; parentId?: number; basePriority?: number; sessionId?: number; exitCode?: number; mainModule?: any; startInfo?: any; startTime?: string; exitTime?: string; cpuUsage?: number; totalProcessorTime?: any; userProcessorTime?: any; currentDirectory?: string; commandLine?: string; isAccessible?: boolean; hookExited?: boolean; hasExited?: boolean; processorCount?: number }>>> {
    const url = `/api/hostcomputers/${hostId}/process/${processName}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets host security state.
   */
  postHostComputersApiHostcomputersByHostIdSecurityByEnabled(hostId: string | number, enabled: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hostcomputers/${hostId}/security/${enabled}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns host maintenance state.
   */
  getHostComputersApiHostcomputersByHostIdMaintenance(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/hostcomputers/${hostId}/maintenance`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets host maintenance state.
   */
  postHostComputersApiHostcomputersByHostIdMaintenanceByEnabled(hostId: string | number, enabled: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/hostcomputers/${hostId}/maintenance/${enabled}`;
    return this.client.request('post', url, {}, params);
  }
}
