import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationExecutables {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all application executables.
   */
  getApplicationExecutables(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; executableCaption?: string; applicationId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applicationexecutables`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.executableCaption !== undefined) query['ExecutableCaption'] = options.executableCaption;
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an application executable.
   */
  postApplicationExecutables(data: { accessible?: boolean; caption?: string; description?: string; applicationModes?: any; executablePath?: string; workingDirectory?: string; arguments?: string; runMode?: any; reservationType?: any; executableOptions?: any; displayOrder?: number; applicationId?: number; defaultDeploymentId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationexecutables`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable.
   */
  putApplicationExecutables(data: { id?: number; accessible?: boolean; caption?: string; description?: string; applicationModes?: any; executablePath?: string; workingDirectory?: string; arguments?: string; runMode?: any; reservationType?: any; executableOptions?: any; displayOrder?: number; applicationId?: number; defaultDeploymentId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application executable by id.
   */
  getApplicationExecutablesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; accessible?: boolean; caption?: string; description?: string; applicationModes?: any; executablePath?: string; workingDirectory?: string; arguments?: string; runMode?: any; reservationType?: any; executableOptions?: any; displayOrder?: number; applicationId?: number; defaultDeploymentId?: number }>> {
    const url = `/api/v2.0/applicationexecutables/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application executable.
   */
  deleteApplicationExecutablesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the personal files of the specified application executable.
   */
  getApplicationExecutablesByIdPersonalfiles(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: number; personalFileId?: number; useOrder?: number }>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/personalfiles`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create an application executable personal file.
   */
  postApplicationExecutablesByIdPersonalfiles(id: string | number, data: { personalFileId?: number; useOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationexecutables/${id}/personalfiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable personal file.
   */
  putApplicationExecutablesPersonalfiles(data: { applicationExecutableId?: number; personalFileId?: number; useOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/personalfiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete an application executable personal file.
   */
  deleteApplicationExecutablesByIdPersonalfilesByPersonalFileId(id: string | number, personalFileId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/personalfiles/${personalFileId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the deployments of the specified application executable.
   */
  getApplicationExecutablesByIdDeployments(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: number; deploymentId?: number; useOrder?: number }>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/deployments`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create an application executable deployment.
   */
  postApplicationExecutablesByIdDeployments(id: string | number, data: { deploymentId?: number; useOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationexecutables/${id}/deployments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable deployment.
   */
  putApplicationExecutablesDeployments(data: { applicationExecutableId?: number; deploymentId?: number; useOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/deployments`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete an application executable deployment.
   */
  deleteApplicationExecutablesByIdDeploymentsByDeploymentId(id: string | number, deploymentId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/deployments/${deploymentId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the tasks of the specified application executable.
   */
  getApplicationExecutablesByIdTasks(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: number; taskId?: number; preDeploy?: boolean; preLicenseManagement?: boolean; preLaunch?: boolean; postTermination?: boolean; useOrder?: number; isEnabled?: boolean }>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/tasks`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create an application executable task.
   */
  postApplicationExecutablesByIdTasks(id: string | number, data: { taskId?: number; preDeploy?: boolean; preLicenseManagement?: boolean; preLaunch?: boolean; postTermination?: boolean; useOrder?: number; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationexecutables/${id}/tasks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable task.
   */
  putApplicationExecutablesTasks(data: { applicationExecutableId?: number; taskId?: number; preDeploy?: boolean; preLicenseManagement?: boolean; preLaunch?: boolean; postTermination?: boolean; useOrder?: number; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/tasks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete an application executable task.
   */
  deleteApplicationExecutablesByIdTasksByTaskId(id: string | number, taskId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/tasks/${taskId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the licenses of the specified application executable.
   */
  getApplicationExecutablesByIdLicenses(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: number; licenseId?: number; useOrder?: number }>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/licenses`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create an application executable license.
   */
  postApplicationExecutablesByIdLicenses(id: string | number, data: { licenseId?: number; useOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationexecutables/${id}/licenses`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable license.
   */
  putApplicationExecutablesLicenses(data: { applicationExecutableId?: number; licenseId?: number; useOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/licenses`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete an application executable license.
   */
  deleteApplicationExecutablesByIdLicensesByLicenseId(id: string | number, licenseId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/licenses/${licenseId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the cd images of the specified application executable.
   */
  getApplicationExecutablesByIdCdimages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; guid?: string; path?: string; mountOptions?: string; deviceId?: string; checkExitCode?: boolean }>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/cdimages`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create an application executable cd image.
   */
  postApplicationExecutablesByIdCdimages(id: string | number, data: { path?: string; mountOptions?: string; deviceId?: string; checkExitCode?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationexecutables/${id}/cdimages`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable cd image.
   */
  putApplicationExecutablesCdimages(data: { id?: number; applicationExecutableId?: number; path?: string; mountOptions?: string; deviceId?: string; checkExitCode?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/cdimages`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete an application executable cd image.
   */
  deleteApplicationExecutablesByIdCdimagesByCdimageId(id: string | number, cdimageId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/cdimages/${cdimageId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the image of the specified application executable.
   */
  getApplicationExecutablesByIdImage(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ image?: string }>> {
    const url = `/api/v2.0/applicationexecutables/${id}/image`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Update the image of the specified application executable.
   */
  putApplicationExecutablesByIdImage(id: string | number, data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationexecutables/${id}/image`;
    return this.client.request('put', url, data, params);
  }
}
