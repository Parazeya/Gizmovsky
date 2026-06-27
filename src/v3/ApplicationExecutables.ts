import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationExecutables {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationExecutables
   */
  getApplicationExecutables(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; executableCaption?: string; applicationId?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationexecutables`;
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
   * postApplicationExecutables
   */
  postApplicationExecutables(data: { accessible?: boolean; caption?: any; description?: any; applicationModes?: any; executablePath?: string; workingDirectory?: any; arguments?: any; runMode?: number; reservationType?: number; executableOptions?: any; displayOrder?: any; applicationId?: any; defaultDeploymentId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationExecutables
   */
  putApplicationExecutables(data: { id?: any; accessible?: boolean; caption?: any; description?: any; applicationModes?: any; executablePath?: string; workingDirectory?: any; arguments?: any; runMode?: number; reservationType?: number; executableOptions?: any; displayOrder?: any; applicationId?: any; defaultDeploymentId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationExecutablesAgerating
   */
  getApplicationExecutablesAgerating(options: { paginationPageNumber?: any; paginationPageSize?: any; paginationSortBy?: string; paginationIsAsc?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; totalItems?: any; totalPages?: any }>> {
    const url = `/api/v3/applicationexecutables/agerating`;
    const query: Record<string, any> = { ...params };
    if (options.paginationPageNumber !== undefined) query['Pagination.PageNumber'] = options.paginationPageNumber;
    if (options.paginationPageSize !== undefined) query['Pagination.PageSize'] = options.paginationPageSize;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getApplicationExecutablesById
   */
  getApplicationExecutablesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; accessible?: boolean; caption?: any; description?: any; applicationModes?: any; executablePath?: string; workingDirectory?: any; arguments?: any; runMode?: number; reservationType?: number; executableOptions?: any; displayOrder?: any; applicationId?: any; defaultDeploymentId?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationExecutablesById
   */
  deleteApplicationExecutablesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationExecutablesByIdPersonalfiles
   */
  getApplicationExecutablesByIdPersonalfiles(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: any; personalFileId?: any; useOrder?: any }>>> {
    const url = `/api/v3/applicationexecutables/${id}/personalfiles`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationExecutablesByIdPersonalfiles
   */
  postApplicationExecutablesByIdPersonalfiles(id: string | number, data: { personalFileId?: any; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}/personalfiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationExecutablesPersonalfiles
   */
  putApplicationExecutablesPersonalfiles(data: { applicationExecutableId?: any; personalFileId?: any; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/personalfiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteApplicationExecutablesByIdPersonalfilesByPersonalFileId
   */
  deleteApplicationExecutablesByIdPersonalfilesByPersonalFileId(id: string | number, personalFileId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/personalfiles/${personalFileId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationExecutablesByIdDeployments
   */
  getApplicationExecutablesByIdDeployments(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: any; deploymentId?: any; useOrder?: any }>>> {
    const url = `/api/v3/applicationexecutables/${id}/deployments`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationExecutablesByIdDeployments
   */
  postApplicationExecutablesByIdDeployments(id: string | number, data: { deploymentId?: any; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}/deployments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationExecutablesDeployments
   */
  putApplicationExecutablesDeployments(data: { applicationExecutableId?: any; deploymentId?: any; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/deployments`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteApplicationExecutablesByIdDeploymentsByDeploymentId
   */
  deleteApplicationExecutablesByIdDeploymentsByDeploymentId(id: string | number, deploymentId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/deployments/${deploymentId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationExecutablesByIdTasks
   */
  getApplicationExecutablesByIdTasks(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: any; taskId?: any; activation?: number; useOrder?: any; isEnabled?: boolean }>>> {
    const url = `/api/v3/applicationexecutables/${id}/tasks`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationExecutablesByIdTasks
   */
  postApplicationExecutablesByIdTasks(id: string | number, data: { taskId?: any; activation?: number; useOrder?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}/tasks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationExecutablesTasks
   */
  putApplicationExecutablesTasks(data: { applicationExecutableId?: any; taskId?: any; activation?: number; useOrder?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/tasks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteApplicationExecutablesByIdTasksByTaskId
   */
  deleteApplicationExecutablesByIdTasksByTaskId(id: string | number, taskId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/tasks/${taskId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationExecutablesByIdLicenses
   */
  getApplicationExecutablesByIdLicenses(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationExecutableId?: any; licenseId?: any; useOrder?: any }>>> {
    const url = `/api/v3/applicationexecutables/${id}/licenses`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationExecutablesByIdLicenses
   */
  postApplicationExecutablesByIdLicenses(id: string | number, data: { licenseId?: any; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}/licenses`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationExecutablesLicenses
   */
  putApplicationExecutablesLicenses(data: { applicationExecutableId?: any; licenseId?: any; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/licenses`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteApplicationExecutablesByIdLicensesByLicenseId
   */
  deleteApplicationExecutablesByIdLicensesByLicenseId(id: string | number, licenseId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/licenses/${licenseId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationExecutablesByIdCdimages
   */
  getApplicationExecutablesByIdCdimages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; guid?: string; path?: any; mountOptions?: any; deviceId?: any; checkExitCode?: boolean }>>> {
    const url = `/api/v3/applicationexecutables/${id}/cdimages`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationExecutablesByIdCdimages
   */
  postApplicationExecutablesByIdCdimages(id: string | number, data: { path?: any; mountOptions?: any; deviceId?: any; checkExitCode?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}/cdimages`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationExecutablesCdimages
   */
  putApplicationExecutablesCdimages(data: { id?: any; applicationExecutableId?: any; path?: any; mountOptions?: any; deviceId?: any; checkExitCode?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/cdimages`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteApplicationExecutablesByIdCdimagesByCdimageId
   */
  deleteApplicationExecutablesByIdCdimagesByCdimageId(id: string | number, cdimageId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/cdimages/${cdimageId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationExecutablesByIdImage
   */
  getApplicationExecutablesByIdImage(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ image?: string }>> {
    const url = `/api/v3/applicationexecutables/${id}/image`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putApplicationExecutablesByIdImage
   */
  putApplicationExecutablesByIdImage(id: string | number, data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/image`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postApplicationExecutablesByIdDuplicate
   */
  postApplicationExecutablesByIdDuplicate(id: string | number, data: { newCaption?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationexecutables/${id}/duplicate`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getApplicationExecutablesByIdBranches
   */
  getApplicationExecutablesByIdBranches(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ isEnabled?: any; branchId?: any }>>> {
    const url = `/api/v3/applicationexecutables/${id}/branches`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationExecutablesByIdBranches
   */
  postApplicationExecutablesByIdBranches(id: string | number, data: { branchId?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationexecutables/${id}/branches`;
    return this.client.request('post', url, data, params);
  }
}
