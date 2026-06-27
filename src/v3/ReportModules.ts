import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ReportModules {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * postReportModulesByReportIdExport
   */
  postReportModulesByReportIdExport(reportId: string | number, data: { reportModel?: any; reportModelAdditional?: any; metadata?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/reportmodules/${reportId}/export`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getReportModulesByReportId
   */
  getReportModulesByReportId(reportId: string | number, options: { reportFilter?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ reportModel?: any; reportModelAdditional?: any }>> {
    const url = `/api/v3/reportmodules/${reportId}`;
    const query: Record<string, any> = { ...params };
    if (options.reportFilter !== undefined) query['reportFilter'] = options.reportFilter;
    return this.client.request('get', url, {}, query);
  }
}
