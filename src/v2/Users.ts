import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Users {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all users.
   */
  getUsers(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; userGroupId?: number; username?: string; smartCardUID?: string; isGuest?: boolean; isDisabled?: boolean; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/users`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.userGroupId !== undefined) query['UserGroupId'] = options.userGroupId;
    if (options.username !== undefined) query['Username'] = options.username;
    if (options.smartCardUID !== undefined) query['SmartCardUID'] = options.smartCardUID;
    if (options.isGuest !== undefined) query['IsGuest'] = options.isGuest;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a user.
   */
  postUsers(data: { password?: string; username?: string; email?: string; userGroupId?: number; isNegativeBalanceAllowed?: boolean; isPersonalInfoRequested?: boolean; enableDate?: string; disabledDate?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/users`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a user.
   */
  putUsers(data: { id?: number; password?: string; username?: string; email?: string; userGroupId?: number; isNegativeBalanceAllowed?: boolean; isPersonalInfoRequested?: boolean; enableDate?: string; disabledDate?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a user by id.
   */
  getUsersById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; isGuest?: boolean; username?: string; email?: string; userGroupId?: number; isNegativeBalanceAllowed?: boolean; isPersonalInfoRequested?: boolean; enableDate?: string; disabledDate?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string }>> {
    const url = `/api/v2.0/users/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a user.
   */
  deleteUsersById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getUsersByIdAttributes
   */
  getUsersByIdAttributes(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; userId?: number; attributeId?: number; value?: string }>>> {
    const url = `/api/v2.0/users/${id}/attributes`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postUsersByIdAttributes
   */
  postUsersByIdAttributes(id: string | number, data: { attributeId?: number; value?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/users/${id}/attributes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUsersAttributes
   */
  putUsersAttributes(data: { id?: number; userId?: number; attributeId?: number; value?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/attributes`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteUsersByIdAttributesByUserAttributeId
   */
  deleteUsersByIdAttributesByUserAttributeId(id: string | number, userAttributeId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/${id}/attributes/${userAttributeId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getUsersByIdNotes
   */
  getUsersByIdNotes(id: string | number, options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/users/${id}/notes`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUsersByIdNotes
   */
  postUsersByIdNotes(id: string | number, data: { text?: string; severity?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/users/${id}/notes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getUsersByIdNotesByUserNoteId
   */
  getUsersByIdNotesByUserNoteId(id: string | number, userNoteId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; text?: string; severity?: any }>> {
    const url = `/api/v2.0/users/${id}/notes/${userNoteId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteUsersByIdNotesByUserNoteId
   */
  deleteUsersByIdNotesByUserNoteId(id: string | number, userNoteId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/${id}/notes/${userNoteId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putUsersNotes
   */
  putUsersNotes(data: { id?: number; text?: string; severity?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/notes`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get the picture of the specified user.
   */
  getUsersByIdPicture(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ picture?: string }>> {
    const url = `/api/v2.0/users/${id}/picture`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Update the picture of the specified user.
   */
  putUsersByIdPicture(id: string | number, data: { picture?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/${id}/picture`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get all user agreement that the specified user has accepted/rejected.
   */
  getUsersByIdUseragreements(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: number; userAgreementId?: number; acceptState?: any }>>> {
    const url = `/api/v2.0/users/${id}/useragreements`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Specified user accepts the specified user agreement.
   */
  putUsersByIdUseragreementsByUserAgreementIdAccept(id: string | number, userAgreementId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/${id}/useragreements/${userAgreementId}/accept`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Specified user rejects the specified user agreement.
   */
  putUsersByIdUseragreementsByUserAgreementIdReject(id: string | number, userAgreementId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/users/${id}/useragreements/${userAgreementId}/reject`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Get all pending user agreements for the specified user.
   */
  getUsersByIdUseragreementsPending(id: string | number, options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; isEnabled?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/users/${id}/useragreements/pending`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.isEnabled !== undefined) query['IsEnabled'] = options.isEnabled;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets user recovery methods.
   */
  putUsersByUsernameRecoverymethods(username: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; recoveryMethod?: any }>> {
    const url = `/api/v2.0/users/${username}/recoverymethods`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getUsersByIdUserusagetime
   */
  getUsersByIdUserusagetime(id: string | number, options: { hostGroupId?: number; startTime?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ rate?: any; timeOffer?: any; timeFixed?: any; usageType?: any; usableMinutes?: number; activationTime?: string; activationOrder?: number }>>> {
    const url = `/api/v2.0/users/${id}/userusagetime`;
    const query: Record<string, any> = { ...params };
    if (options.hostGroupId !== undefined) query['hostGroupId'] = options.hostGroupId;
    if (options.startTime !== undefined) query['startTime'] = options.startTime;
    return this.client.request('get', url, {}, query);
  }
}
