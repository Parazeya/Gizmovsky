import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Users {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUsers
   */
  getUsers(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; userGroupId?: any; username?: string; smartCardUID?: string; isGuest?: boolean; isDisabled?: boolean; isDeleted?: boolean; expand?: string[]; isLoggedIn?: boolean; searchValue?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/users`;
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
    if (options.isLoggedIn !== undefined) query['IsLoggedIn'] = options.isLoggedIn;
    if (options.searchValue !== undefined) query['SearchValue'] = options.searchValue;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUsers
   */
  postUsers(data: { password?: any; username?: string; email?: any; userGroupId?: any; isNegativeBalanceAllowed?: any; isPersonalInfoRequested?: boolean; enableDate?: any; disabledDate?: any; firstName?: any; lastName?: any; birthDate?: any; address?: any; city?: any; country?: any; postCode?: any; phone?: any; mobilePhone?: any; sex?: number; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: any; identification?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/users`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUsers
   */
  putUsers(data: { id?: any; password?: any; username?: string; email?: any; userGroupId?: any; isNegativeBalanceAllowed?: any; isPersonalInfoRequested?: boolean; enableDate?: any; disabledDate?: any; firstName?: any; lastName?: any; birthDate?: any; address?: any; city?: any; country?: any; postCode?: any; phone?: any; mobilePhone?: any; sex?: number; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: any; identification?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUsersById
   */
  getUsersById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/users/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteUsersById
   */
  deleteUsersById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getUsersSearch
   */
  getUsersSearch(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; searchValue?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/users/search`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.searchValue !== undefined) query['SearchValue'] = options.searchValue;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getUsersAudit
   */
  getUsersAudit(options: { byPhone?: boolean; byEmail?: boolean; defaultCountryCode?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ duplicatedItems?: any[]; errors?: any[] }>> {
    const url = `/api/v3/users/audit`;
    const query: Record<string, any> = { ...params };
    if (options.byPhone !== undefined) query['ByPhone'] = options.byPhone;
    if (options.byEmail !== undefined) query['ByEmail'] = options.byEmail;
    if (options.defaultCountryCode !== undefined) query['DefaultCountryCode'] = options.defaultCountryCode;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUsersAudit
   */
  postUsersAudit(data: { byPhone?: boolean; byEmail?: boolean; defaultCountryCode?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/users/audit`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postUsersImportValidate
   */
  postUsersImportValidate(data: { file?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ duplicatedItems?: any[]; uniqueUsers?: any[]; errors?: any[] }>> {
    const url = `/api/v3/users/import/validate`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postUsersImport
   */
  postUsersImport(data: { file?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/users/import`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUsersByIdUndelete
   */
  putUsersByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * deleteUsersByIdHard
   */
  deleteUsersByIdHard(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/hard`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * deleteUsersHard
   */
  deleteUsersHard(data: { userIds?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userIds?: any[] }>> {
    const url = `/api/v3/users/hard`;
    return this.client.request('delete', url, data, params);
  }

  /**
   * putUsersByIdRename
   */
  putUsersByIdRename(id: string | number, data: { newUsername?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/rename`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUsersByIdAttributes
   */
  getUsersByIdAttributes(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; userId?: any; attributeId?: any; value?: string }>>> {
    const url = `/api/v3/users/${id}/attributes`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postUsersByIdAttributes
   */
  postUsersByIdAttributes(id: string | number, data: { attributeId?: any; value?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/users/${id}/attributes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUsersAttributes
   */
  putUsersAttributes(data: { id?: any; userId?: any; attributeId?: any; value?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/attributes`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteUsersByIdAttributesByUserAttributeId
   */
  deleteUsersByIdAttributesByUserAttributeId(id: string | number, userAttributeId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/attributes/${userAttributeId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getUsersByIdNotesCount
   */
  getUsersByIdNotesCount(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ severityPurpleCount?: any; severityOrangeCount?: any; severityBlueCount?: any; totalCount?: any }>> {
    const url = `/api/v3/users/${id}/notes/count`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersByIdNotes
   */
  getUsersByIdNotes(id: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/users/${id}/notes`;
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
  postUsersByIdNotes(id: string | number, data: { text?: string; severity?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/users/${id}/notes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getUsersByIdNotesByUserNoteId
   */
  getUsersByIdNotesByUserNoteId(id: string | number, userNoteId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; text?: string; severity?: number; createdById?: any; createdTime?: string }>> {
    const url = `/api/v3/users/${id}/notes/${userNoteId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteUsersByIdNotesByUserNoteId
   */
  deleteUsersByIdNotesByUserNoteId(id: string | number, userNoteId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/notes/${userNoteId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putUsersNotes
   */
  putUsersNotes(data: { id?: any; text?: string; severity?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/notes`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUsersByIdPicture
   */
  getUsersByIdPicture(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ picture?: string }>> {
    const url = `/api/v3/users/${id}/picture`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putUsersByIdPicture
   */
  putUsersByIdPicture(id: string | number, data: { picture?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/picture`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUsersByIdUseragreements
   */
  getUsersByIdUseragreements(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: any; userAgreementId?: any; acceptState?: number }>>> {
    const url = `/api/v3/users/${id}/useragreements`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putUsersByIdUseragreementsByUserAgreementIdAccept
   */
  putUsersByIdUseragreementsByUserAgreementIdAccept(id: string | number, userAgreementId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/useragreements/${userAgreementId}/accept`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putUsersByIdUseragreementsByUserAgreementIdReject
   */
  putUsersByIdUseragreementsByUserAgreementIdReject(id: string | number, userAgreementId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/useragreements/${userAgreementId}/reject`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getUsersByIdUseragreementsPending
   */
  getUsersByIdUseragreementsPending(id: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; isEnabled?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/users/${id}/useragreements/pending`;
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
   * getUsersByUsernameRecoverymethods
   */
  getUsersByUsernameRecoverymethods(username: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; recoveryMethod?: number }>> {
    const url = `/api/v3/users/${username}/recoverymethods`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersByIdUserusagetime
   */
  getUsersByIdUserusagetime(id: string | number, options: { hostGroupId?: any; startTime?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ rate?: any; timeOffer?: any; timeFixed?: any; usageType?: number; usableMinutes?: any; activationTime?: any; activationOrder?: any }>>> {
    const url = `/api/v3/users/${id}/userusagetime`;
    const query: Record<string, any> = { ...params };
    if (options.hostGroupId !== undefined) query['hostGroupId'] = options.hostGroupId;
    if (options.startTime !== undefined) query['startTime'] = options.startTime;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getUsersByIdUsageCurrent
   */
  getUsersByIdUsageCurrent(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/users/${id}/usage/current`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersUsageCurrent
   */
  getUsersUsageCurrent(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/users/usage/current`;
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
   * getUsersBalance
   */
  getUsersBalance(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/balance`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersByIdBalance
   */
  getUsersByIdBalance(id: string | number, options: { preferCache?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ balance?: any; points?: any; deposits?: any; time?: any; creditedTime?: any }>> {
    const url = `/api/v3/users/${id}/balance`;
    const query: Record<string, any> = { ...params };
    if (options.preferCache !== undefined) query['preferCache'] = options.preferCache;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getUsersByIdHostgroupsByHostGroupIdBalance
   */
  getUsersByIdHostgroupsByHostGroupIdBalance(id: string | number, hostGroupId: string | number, options: { preferCache?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ balance?: any; points?: any; deposits?: any; time?: any; creditedTime?: any }>> {
    const url = `/api/v3/users/${id}/hostgroups/${hostGroupId}/balance`;
    const query: Record<string, any> = { ...params };
    if (options.preferCache !== undefined) query['preferCache'] = options.preferCache;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUsersByUserIdLoginByHostId
   */
  postUsersByUserIdLoginByHostId(userId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ loginResult?: number }>> {
    const url = `/api/v3/users/${userId}/login/${hostId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postUsersByUserIdLoginByHostIdSlotBySlot
   */
  postUsersByUserIdLoginByHostIdSlotBySlot(userId: string | number, hostId: string | number, slot: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ loginResult?: number }>> {
    const url = `/api/v3/users/${userId}/login/${hostId}/slot/${slot}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postUsersByUserIdMove
   */
  postUsersByUserIdMove(userId: string | number, data: { hostId?: any; slot?: any; swap?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ loginResult?: number }>> {
    const url = `/api/v3/users/${userId}/move`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postUsersByUserIdLogout
   */
  postUsersByUserIdLogout(userId: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ logoutResult?: number }>> {
    const url = `/api/v3/users/${userId}/logout`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getUsersCounters
   */
  getUsersCounters(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ countersPerGroup?: any[]; totalUsers?: any; guestUsers?: any; bannedUsers?: any; deletedUsers?: any; totalUserDeposits?: any }>> {
    const url = `/api/v3/users/counters`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersByIdCounters
   */
  getUsersByIdCounters(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ assets?: any; notes?: any }>> {
    const url = `/api/v3/users/${id}/counters`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putUsersByIdBan
   */
  putUsersByIdBan(id: string | number, data: { revokeDate?: any; banReasonId?: any; note?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/ban`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByIdUnban
   */
  putUsersByIdUnban(id: string | number, data: { banReasonId?: any; note?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/unban`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByIdAddress
   */
  putUsersByIdAddress(id: string | number, data: { country?: any; address?: any; postCode?: any; city?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/address`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByIdPersonalinformation
   */
  putUsersByIdPersonalinformation(id: string | number, data: { firstName?: any; lastName?: any; username?: any; identification?: any; sex?: number; birthDate?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/personalinformation`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByIdContactinformation
   */
  putUsersByIdContactinformation(id: string | number, data: { email?: any; mobilePhone?: any; phone?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/contactinformation`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByIdRequestpersonalinfo
   */
  putUsersByIdRequestpersonalinfo(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/requestpersonalinfo`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putUsersByIdResetpassword
   */
  putUsersByIdResetpassword(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/resetpassword`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putUsersByIdUsergroup
   */
  putUsersByIdUsergroup(id: string | number, data: { userGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/usergroup`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByUserIdAssetsByAssetIdCheckout
   */
  putUsersByUserIdAssetsByAssetIdCheckout(userId: string | number, assetId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${userId}/assets/${assetId}/checkout`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putUsersAssetsByAssetIdCheckin
   */
  putUsersAssetsByAssetIdCheckin(assetId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/assets/${assetId}/checkin`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getUsersByIdStats
   */
  getUsersByIdStats(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ pointsEarned?: any; redeemed?: any; logins?: any; loginTime?: any; deposits?: any; withdrawals?: any; products?: any; fixedTime?: any; sessions?: any; timeProducts?: any; moneySpend?: any; checkOutItems?: any }>> {
    const url = `/api/v3/users/${id}/stats`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersByIdCommunicationchannels
   */
  getUsersByIdCommunicationchannels(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; value?: string; isVerified?: boolean }>>> {
    const url = `/api/v3/users/${id}/communicationchannels`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putUsersByIdSmartcard
   */
  putUsersByIdSmartcard(id: string | number, data: { smartCardUid?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/smartcard`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUsersSmartcardExists
   */
  getUsersSmartcardExists(options: { smartCardUid?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/users/smartcard/exists`;
    const query: Record<string, any> = { ...params };
    if (options.smartCardUid !== undefined) query['smartCardUid'] = options.smartCardUid;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putUsersByIdNegativebalance
   */
  putUsersByIdNegativebalance(id: string | number, data: { isEnabled?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/negativebalance`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putUsersByIdBillingoptions
   */
  putUsersByIdBillingoptions(id: string | number, data: { options?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/users/${id}/billingoptions`;
    return this.client.request('put', url, data, params);
  }
}
