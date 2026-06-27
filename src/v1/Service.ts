import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Service {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets current syste time in UTC format.
   */
  getServiceApiService(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/service`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Stops service.
   */
  postServiceApiServiceStop(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/service/stop`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Restarts service.
   */
  postServiceApiServiceRestart(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/service/restart`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns service resource usage status.
   */
  getServiceApiServiceStatus(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ cpuLevel?: number; processUpTime?: any; systemUpTime?: any; totalThreads?: number }>> {
    const url = `/api/service/status`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns service version.
   */
  getServiceApiServiceVersion(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/service/version`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns service executable module information.
   */
  getServiceApiServiceModule(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ fileName?: string; moduleType?: any; moduleVersion?: string }>> {
    const url = `/api/service/module`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns service hardware id string.
   */
  getServiceApiServiceHardwareid(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/service/hardwareid`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns service settings.
   */
  getServiceApiServiceSettings(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ global?: any; service?: any; client?: any }>> {
    const url = `/api/service/settings`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns service network stats.
   */
  getServiceApiServiceNetworkStats(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ dataSent?: number; dataReceived?: number; clients?: number; managers?: number }>> {
    const url = `/api/service/network/stats`;
    return this.client.request('get', url, {}, params);
  }
}
