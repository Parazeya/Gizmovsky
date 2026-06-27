import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Users {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns all users.
   */
  getUsersApiUsers(options: { userGroupId?: number; isDeleted?: boolean; isDisabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; username?: string; email?: string; userGroupId?: number; isNegativeBalanceAllowed?: boolean; isPersonalInfoRequested?: boolean; billingOptions?: any; enableDate?: string; disabledDate?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; guid?: string; smartCardUID?: string; identification?: string }>>> {
    const url = `/api/users`;
    const query: Record<string, any> = { ...params };
    if (options.userGroupId !== undefined) query['UserGroupId'] = options.userGroupId;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Adds new user.
   */
  putUsersApiUsers(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates existing user.
   */
  postUsersApiUsers(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns user by username.
   */
  getUsersApiUsersByUsernameUsername(username: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; username?: string; email?: string; userGroupId?: number; isNegativeBalanceAllowed?: boolean; isPersonalInfoRequested?: boolean; billingOptions?: any; enableDate?: string; disabledDate?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; guid?: string; smartCardUID?: string; identification?: string }>> {
    const url = `/api/users/${username}/username`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns user by id.
   */
  getUsersApiUsersByUserId(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; username?: string; email?: string; userGroupId?: number; isNegativeBalanceAllowed?: boolean; isPersonalInfoRequested?: boolean; billingOptions?: any; enableDate?: string; disabledDate?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; guid?: string; smartCardUID?: string; identification?: string }>> {
    const url = `/api/users/${userId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Deletes existing user.
   */
  deleteUsersApiUsersByUserId(userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns user id for specified username.
   */
  getUsersApiUsersByUsernameUserid(username: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${username}/userid`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Renames existing user.
   */
  postUsersApiUsersByUserIdUsernameByNewUsername(userId: string | number, newUsername: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/username/${newUsername}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Undelete existing user.
   */
  postUsersApiUsersByUserIdUndelete(userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/undelete`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns if a user exist with specified user id.
   */
  getUsersApiUsersByUserIdExist(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/${userId}/exist`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUsersApiUsersExistByUserId
   */
  getUsersApiUsersExistByUserId(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/exist/${userId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns if a user exist with specified username.
   */
  getUsersApiUsersUsernameByUserNameExist(userName: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/username/${userName}/exist`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns if a user exist with specified username.
   */
  getUsersApiUsersUsernameExist(options: { userName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/username/exist`;
    const query: Record<string, any> = { ...params };
    if (options.userName !== undefined) query['userName'] = options.userName;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns if a user exist with specified email address.
   */
  getUsersApiUsersEmailByUserEmailExist(userEmail: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/email/${userEmail}/exist`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns if a user exist with specified email address.
   */
  getUsersApiUsersEmailExistByUserEmail(userEmail: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/email/exist/${userEmail}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns if a user exist with specified username or email address.
   */
  getUsersApiUsersLoginnameByLoginNameExist(loginName: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/loginname/${loginName}/exist`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns if a user exist with specified username or email address.
   */
  getUsersApiUsersLoginnameExist(options: { loginName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/loginname/exist`;
    const query: Record<string, any> = { ...params };
    if (options.loginName !== undefined) query['loginName'] = options.loginName;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Sets user password.
   */
  postUsersApiUsersByUserIdPasswordByNewPassword(userId: string | number, newPassword: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/password/${newPassword}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Resets user password.
   */
  postUsersApiUsersByUserIdPasswordReset(userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/password/reset`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Sets user email address.
   */
  postUsersApiUsersByUserIdEmailByNewEmail(userId: string | number, newEmail: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/email/${newEmail}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Sets user group for specified user.
   */
  postUsersApiUsersByUserIdUsergroupByNewUserGroupId(userId: string | number, newUserGroupId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/usergroup/${newUserGroupId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Logouts sepcified user.
   */
  postUsersApiUsersByUserIdLogout(userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/logout`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Logs in user.
   */
  postUsersApiUsersByUserIdLoginByHostId(userId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 2 | 4 | 8 | 12 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768 | 65536 | 131072 | 262144 | 524288 | 1048576>> {
    const url = `/api/users/${userId}/login/${hostId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns users last login time.
   */
  getUsersApiUsersByUserIdLastlogin(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/users/${userId}/lastlogin`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns user las logout time.
   */
  getUsersApiUsersByUserIdLastlogout(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/users/${userId}/lastlogout`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns current login state for the user.
   */
  getUsersApiUsersByUserIdLoginstate(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 2 | 4 | 8 | 17>> {
    const url = `/api/users/${userId}/loginstate`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns current logged in host for the user.
   */
  getUsersApiUsersByUserIdCurrenthost(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; number?: number; name?: string; hostGroupId?: number; state?: any; iconId?: number; isDeleted?: boolean }>> {
    const url = `/api/users/${userId}/currenthost`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns current logged in host id for specified user.
   */
  getUsersApiUsersByUserIdCurrenthostid(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${userId}/currenthostid`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds sepcified amount to user deposits.
   */
  putUsersApiUsersByUserIdDepositByAmountByPaymentMethodId(userId: string | number, amount: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; depositTransactionId?: number; paymentId?: number; shiftId?: number; registerId?: number }>> {
    const url = `/api/users/${userId}/deposit/${amount}/${paymentMethodId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Withdraws specified amount from user deposits.
   */
  deleteUsersApiUsersByUserIdDepositByAmount(userId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; type?: any; amount?: number; balance?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>> {
    const url = `/api/users/${userId}/deposit/${amount}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns user point balance.
   */
  getUsersApiUsersByUserIdPoints(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${userId}/points`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Awards specified points amount to the user.
   */
  putUsersApiUsersByUserIdPointsByAmount(userId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; type?: any; amount?: number; balance?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>> {
    const url = `/api/users/${userId}/points/${amount}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Redeems specified amount of points for user.
   */
  deleteUsersApiUsersByUserIdPointsByAmount(userId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; type?: any; amount?: number; balance?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>> {
    const url = `/api/users/${userId}/points/${amount}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Awards specified amount of points to user.
   */
  putUsersApiUsersByUserNamePointsByAmountAward(userName: string | number, amount: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userName}/points/${amount}/award`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Redeems specified amount of points for user.
   */
  deleteUsersApiUsersByUserNamePointsByAmountRedeem(userName: string | number, amount: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userName}/points/${amount}/redeem`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns all attributes set for user.
   */
  getUsersApiUsersByUserIdAttribute(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; attributeId?: number; value?: string }>>> {
    const url = `/api/users/${userId}/attribute`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets specified attribute value to specified user.
   */
  putUsersApiUsersByUserIdAttributeByAttributeIdByAttributeValue(userId: string | number, attributeId: string | number, attributeValue: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/attribute/${attributeId}/${attributeValue}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Sets specified attribute value to specified user.
   */
  putUsersApiUsersByUserIdAttributeByAttributeNameByAttributeValue(userId: string | number, attributeName: string | number, attributeValue: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/attribute/${attributeName}/${attributeValue}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Gets specified attribute value for specified user.
   */
  getUsersApiUsersByUserIdAttributeByAttributeName(userId: string | number, attributeName: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/users/${userId}/attribute/${attributeName}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Deletes specified attribute from specified user.
   */
  deleteUsersApiUsersByUserIdAttributeByAttributeName(userId: string | number, attributeName: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/${userId}/attribute/${attributeName}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Gets specified attribute value for specified user.
   */
  getUsersApiUsersByUserIdAttributeByAttributeId(userId: string | number, attributeId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/users/${userId}/attribute/${attributeId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Deletes specified attribute from specified user.
   */
  deleteUsersApiUsersByUserIdAttributeByAttributeId(userId: string | number, attributeId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/users/${userId}/attribute/${attributeId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns all user balance info.
   */
  getUsersApiUsersBalance(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: number; deposits?: number; points?: number; onInvoices?: number; onInvoicedUsage?: number; onUninvoicedUsage?: number; timeProduct?: number; timeFixed?: number; availableTime?: number; availableCreditedTime?: number; balance?: number; timeProductBalance?: number; usageBalance?: number; totalOutstanding?: number }>>> {
    const url = `/api/users/balance`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns user balance info.
   */
  getUsersApiUsersByUserIdBalance(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: number; deposits?: number; points?: number; onInvoices?: number; onInvoicedUsage?: number; onUninvoicedUsage?: number; timeProduct?: number; timeFixed?: number; availableTime?: number; availableCreditedTime?: number; balance?: number; timeProductBalance?: number; usageBalance?: number; totalOutstanding?: number }>> {
    const url = `/api/users/${userId}/balance`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns time cost for specified user for specified amount of minutes.
   */
  getUsersApiUsersByUserIdTimeByMinutesMoney(userId: string | number, minutes: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${userId}/time/${minutes}/money`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns amount of minutes user receives based on specified amount of money.
   */
  getUsersApiUsersByUserIdMoneyByMoneyTime(userId: string | number, money: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${userId}/money/${money}/time`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds fixed time to user.
   */
  postUsersApiUsersByUserIdOrderTimeByAmountInvoice(userId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/time/${amount}/invoice`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds fixed time to user.
   */
  postUsersApiUsersByUserIdOrderTimeByAmountInvoicePaymentByPaymentMethodId(userId: string | number, amount: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/time/${amount}/invoice/payment/${paymentMethodId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds fixed time to user for specified amount of money.
   */
  postUsersApiUsersByUserIdOrderTimeByAmountPriceByPriceInvoice(userId: string | number, amount: string | number, price: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/time/${amount}/price/${price}/invoice`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds fixed time to user for specified amount of money.
   */
  postUsersApiUsersByUserIdOrderTimeByAmountPriceByPriceInvoicePaymentByPaymentMethodId(userId: string | number, amount: string | number, price: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/time/${amount}/price/${price}/invoice/payment/${paymentMethodId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds fixed time to user for specifed amount of money.
   */
  postUsersApiUsersByUserIdOrderTimeMoneyByAmountInvoice(userId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/time/money/${amount}/invoice`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds fixed time to user for specifed amount of money.
   */
  postUsersApiUsersByUserIdOrderTimeMoneyByAmountInvoicePaymentByPaymentMethodId(userId: string | number, amount: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/time/money/${amount}/invoice/payment/${paymentMethodId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds a user note to specified user.
   */
  putUsersApiUsersByUserIdNoteByTextBySevirity(userId: string | number, text: string | number, sevirity: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${userId}/note/${text}/${sevirity}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Returns user notes for specified user.
   */
  getUsersApiUsersByUserIdNote(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; userNoteOptions?: any; text?: string; options?: any; sevirity?: any; isDeleted?: boolean }>>> {
    const url = `/api/users/${userId}/note`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns user picture.
   */
  getUsersApiUsersByUserIdPicture(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/picture`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds or updates user picture.
   */
  putUsersApiUsersByUserIdPicture(userId: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/picture`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Adds or updates user app rating.
   */
  putUsersApiUsersByUserIdAppByAppIdRatingByValue(userId: string | number, appId: string | number, value: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${userId}/app/${appId}/rating/${value}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Returns user app rating.
   */
  getUsersApiUsersByUserIdAppByAppIdRating(userId: string | number, appId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/users/${userId}/app/${appId}/rating`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns if user credentials are valid.
   */
  getUsersApiUsersByUsernameByPasswordValid(username: string | number, password: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/users/${username}/${password}/valid`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns user top rated app infos.
   */
  getUsersApiUsersByUserIdAppInfosTopRating(userId: string | number, options: { max?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ appId?: number; title?: string; description?: string; rating?: number; ratingsCount?: number; totalExecutions?: number; totalExecutionSeconds?: number; totalExecutionMinutes?: number; totalExecutionHours?: number }>>> {
    const url = `/api/users/${userId}/app/infos/top/rating`;
    const query: Record<string, any> = { ...params };
    if (options.max !== undefined) query['max'] = options.max;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets user top used app infos.
   */
  getUsersApiUsersByUserIdAppInfosTopUse(userId: string | number, options: { max?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ appId?: number; title?: string; description?: string; rating?: number; ratingsCount?: number; totalExecutions?: number; totalExecutionSeconds?: number; totalExecutionMinutes?: number; totalExecutionHours?: number }>>> {
    const url = `/api/users/${userId}/app/infos/top/use`;
    const query: Record<string, any> = { ...params };
    if (options.max !== undefined) query['max'] = options.max;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Creates a user product order and invoice it.
   */
  postUsersApiUsersByUserIdOrderByProductIdByQuantityInvoicePaymentByPaymentMethodId(userId: string | number, productId: string | number, quantity: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/${productId}/${quantity}/invoice/payment/${paymentMethodId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Creates a user product order and invoice it.
   */
  postUsersApiUsersByUserIdOrderByProductIdInvoice(userId: string | number, productId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/${productId}/invoice`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Creates a user product order and invoice it.
   */
  postUsersApiUsersByUserIdOrderByProductIdInvoicePaymentByPaymentMethodId(userId: string | number, productId: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; userId?: number; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoicePayments?: any[]; invoiceLines?: any[]; voids?: any[]; productOrder?: any }>> {
    const url = `/api/users/${userId}/order/${productId}/invoice/payment/${paymentMethodId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Returns user logins sessions info.
   */
  getUsersApiUsersByUserIdLogins(userId: string | number, options: { hostId?: number; start?: string; end?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ sessionId?: number; userId?: number; hostId?: number; loginTime?: string; loggedInById?: number; logoutTime?: string; loggedOutById?: number; moveHostId?: number }>>> {
    const url = `/api/users/${userId}/logins`;
    const query: Record<string, any> = { ...params };
    if (options.hostId !== undefined) query['hostId'] = options.hostId;
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns user time products.
   */
  getUsersApiUsersByUserIdProducttime(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ invoiceId?: number; invoiceLineId?: number; productName?: string; purchaseDate?: string; totalSeconds?: number; usedSeconds?: number; expiresAtLogout?: boolean; expiryDate?: string; isPaid?: boolean; isDepleted?: boolean; isDeleted?: boolean; isVoided?: boolean; isExpired?: boolean; type?: any; secondsLeft?: number }>>> {
    const url = `/api/users/${userId}/producttime`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns user extended product time info.
   */
  getUsersApiUsersByUserIdProducttimeextended(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ invoiceId?: number; invoiceLineId?: number; productName?: string; purchaseDate?: string; totalSeconds?: number; usedSeconds?: number; expiresAtLogout?: boolean; expiryDate?: string; isPaid?: boolean; isDepleted?: boolean; isDeleted?: boolean; isVoided?: boolean; isExpired?: boolean; type?: any; secondsLeft?: number }>>> {
    const url = `/api/users/${userId}/producttimeextended`;
    return this.client.request('get', url, {}, params);
  }
}
