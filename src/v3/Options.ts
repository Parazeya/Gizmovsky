import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Options {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getOptions
   */
  getOptions(options: { optionsType?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options`;
    const query: Record<string, any> = { ...params };
    if (options.optionsType !== undefined) query['optionsType'] = options.optionsType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putOptions
   */
  putOptions(data: { optionsType?: string; values?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getOptionsSkin
   */
  getOptionsSkin(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ defaultSkin?: any }>> {
    const url = `/api/v3/options/skin`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsSkinPack
   */
  getOptionsSkinPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/skin/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsCurrency
   */
  getOptionsCurrency(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ currencyCode?: any; currencySymbol?: any; currencyDecimalDigits?: any; currencyDecimalSeparator?: any; currencyGroupSeparator?: any }>> {
    const url = `/api/v3/options/currency`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsCurrency
   */
  postOptionsCurrency(data: { currencyCode?: any; currencySymbol?: any; currencyDecimalDigits?: any; currencyDecimalSeparator?: any; currencyGroupSeparator?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/currency`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsCurrencyPack
   */
  getOptionsCurrencyPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/currency/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsBusiness
   */
  getOptionsBusiness(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ businessName?: any; businessDayStart?: any; businessDayEnd?: any; businessStartWeekDay?: any; businessEmail?: any; businessWebSite?: any; businessEndWeekDay?: any; hasBusinessSchedule?: boolean }>> {
    const url = `/api/v3/options/business`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsBusiness
   */
  postOptionsBusiness(data: { businessName?: any; businessDayStart?: any; businessDayEnd?: any; businessStartWeekDay?: any; businessEmail?: any; businessWebSite?: any; businessEndWeekDay?: any; hasBusinessSchedule?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/business`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsBusinessPack
   */
  getOptionsBusinessPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/business/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsGeneral
   */
  getOptionsGeneral(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ defaultCulture?: any }>> {
    const url = `/api/v3/options/general`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsGeneral
   */
  postOptionsGeneral(data: { defaultCulture?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/general`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsGeneralPack
   */
  getOptionsGeneralPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/general/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsManagerfeatures
   */
  getOptionsManagerfeatures(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ salesModule?: boolean; reservationsModule?: boolean }>> {
    const url = `/api/v3/options/managerfeatures`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsManagerfeatures
   */
  postOptionsManagerfeatures(data: { salesModule?: boolean; reservationsModule?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/managerfeatures`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsManagerfeaturesPack
   */
  getOptionsManagerfeaturesPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/managerfeatures/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsRegional
   */
  getOptionsRegional(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ countryCode?: any; timeZone?: any }>> {
    const url = `/api/v3/options/regional`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsRegional
   */
  postOptionsRegional(data: { countryCode?: any; timeZone?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/regional`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsRegionalPack
   */
  getOptionsRegionalPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/regional/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsFiscalization
   */
  getOptionsFiscalization(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isEnabled?: boolean }>> {
    const url = `/api/v3/options/fiscalization`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsFiscalization
   */
  postOptionsFiscalization(data: { isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/fiscalization`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsFiscalizationPack
   */
  getOptionsFiscalizationPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/fiscalization/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsTax
   */
  getOptionsTax(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ taxSystem?: any; goodsTaxSystem?: any; servicesTaxSystem?: any; depositTaxSystem?: any; goodsVATRate?: any; servicesVATRate?: any; depositVATRate?: any; timeBasedServiceVATRate?: any; treatDepositsAsService?: boolean; depositServiceDescription?: any; businessVATID?: any; depositAdvancePaymentType?: any }>> {
    const url = `/api/v3/options/tax`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsTax
   */
  postOptionsTax(data: { taxSystem?: any; goodsTaxSystem?: any; servicesTaxSystem?: any; depositTaxSystem?: any; goodsVATRate?: any; servicesVATRate?: any; depositVATRate?: any; timeBasedServiceVATRate?: any; treatDepositsAsService?: boolean; depositServiceDescription?: any; businessVATID?: any; depositAdvancePaymentType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/tax`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsTaxPack
   */
  getOptionsTaxPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/tax/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsReservations
   */
  getOptionsReservations(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ enableLoginBlockBefore?: boolean; loginBlockBeforeTime?: any; enableLoginBlockAfter?: boolean; loginBlockAfterTime?: any; enableExpiration?: boolean; expireAfter?: any; timeSourceType?: number; minimumTime?: any; maximumTime?: any; feeType?: number; fee?: any; minimumPaymentPercentage?: any; cancellationGracePeriod?: any; cancellationRefundPercentage?: any; multiHostDisable?: boolean; purchaseDisableDiscounts?: boolean; deficitFactor?: any; expectedAverageSessionDuration?: any; clientAlertBeforeTime?: any; managerAlertBeforeTime?: any; paymentExpireAfter?: any }>> {
    const url = `/api/v3/options/reservations`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsReservations
   */
  postOptionsReservations(data: { enableLoginBlockBefore?: boolean; loginBlockBeforeTime?: any; enableLoginBlockAfter?: boolean; loginBlockAfterTime?: any; enableExpiration?: boolean; expireAfter?: any; timeSourceType?: number; minimumTime?: any; maximumTime?: any; feeType?: number; fee?: any; minimumPaymentPercentage?: any; cancellationGracePeriod?: any; cancellationRefundPercentage?: any; multiHostDisable?: boolean; purchaseDisableDiscounts?: boolean; deficitFactor?: any; expectedAverageSessionDuration?: any; clientAlertBeforeTime?: any; managerAlertBeforeTime?: any; paymentExpireAfter?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/reservations`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsReservationsPack
   */
  getOptionsReservationsPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/reservations/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsAgerestrictions
   */
  getOptionsAgerestrictions(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ requireAge?: boolean; isApplicationsEnabled?: boolean; isLoginEnabled?: boolean; isProductsEnabled?: boolean }>> {
    const url = `/api/v3/options/agerestrictions`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsAgerestrictions
   */
  postOptionsAgerestrictions(data: { requireAge?: boolean; isApplicationsEnabled?: boolean; isLoginEnabled?: boolean; isProductsEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/agerestrictions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsAgerestrictionsPack
   */
  getOptionsAgerestrictionsPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/agerestrictions/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsWaitinglines
   */
  getOptionsWaitinglines(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isLogoutGracePeriodEnabled?: boolean; logoutGracePeriodTime?: any; isRemoveFromAllEnabled?: boolean; nextInLineTime?: any; removeTime?: any }>> {
    const url = `/api/v3/options/waitinglines`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsWaitinglines
   */
  postOptionsWaitinglines(data: { isLogoutGracePeriodEnabled?: boolean; logoutGracePeriodTime?: any; isRemoveFromAllEnabled?: boolean; nextInLineTime?: any; removeTime?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/waitinglines`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsWaitinglinesPack
   */
  getOptionsWaitinglinesPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/waitinglines/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsTopup
   */
  getOptionsTopup(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isCustomValueAllowed?: boolean; minimumValue?: any; maximumValue?: any }>> {
    const url = `/api/v3/options/topup`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsTopup
   */
  postOptionsTopup(data: { isCustomValueAllowed?: boolean; minimumValue?: any; maximumValue?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/topup`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsTopupPack
   */
  getOptionsTopupPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/topup/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsPaymentprocessing
   */
  getOptionsPaymentprocessing(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ paymentSuccessUrl?: any; paymentCancelUrl?: any; creditCardUseTerminal?: boolean }>> {
    const url = `/api/v3/options/paymentprocessing`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsPaymentprocessing
   */
  postOptionsPaymentprocessing(data: { paymentSuccessUrl?: any; paymentCancelUrl?: any; creditCardUseTerminal?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/paymentprocessing`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsPaymentprocessingPack
   */
  getOptionsPaymentprocessingPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/paymentprocessing/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsSmtp
   */
  getOptionsSmtp(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isEnabled?: boolean; host?: string; port?: any; enableAuthentication?: boolean; username?: any; password?: any; useSSL?: boolean; smtpSecurity?: number; replyToAddress?: any }>> {
    const url = `/api/v3/options/smtp`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsSmtp
   */
  postOptionsSmtp(data: { isEnabled?: boolean; host?: string; port?: any; enableAuthentication?: boolean; username?: any; password?: any; useSSL?: boolean; smtpSecurity?: number; replyToAddress?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/smtp`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsSmtpPack
   */
  getOptionsSmtpPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/smtp/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsSmsgateway
   */
  getOptionsSmsgateway(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isEnabled?: boolean; provider?: any }>> {
    const url = `/api/v3/options/smsgateway`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsSmsgateway
   */
  postOptionsSmsgateway(data: { isEnabled?: boolean; provider?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/smsgateway`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsSmsgatewayPack
   */
  getOptionsSmsgatewayPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/smsgateway/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsNetwork
   */
  getOptionsNetwork(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ httpProtocols?: number; httpPort?: any; httpsPort?: any; hostName?: any }>> {
    const url = `/api/v3/options/network`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsNetwork
   */
  postOptionsNetwork(data: { httpProtocols?: number; httpPort?: any; httpsPort?: any; hostName?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/network`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsNetworkPack
   */
  getOptionsNetworkPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/network/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsClientNetworkConnection
   */
  getOptionsClientNetworkConnection(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ registeredOnly?: boolean; autoDiscovery?: boolean; restoreHostName?: boolean }>> {
    const url = `/api/v3/options/client/network/connection`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsClientNetworkConnection
   */
  postOptionsClientNetworkConnection(data: { registeredOnly?: boolean; autoDiscovery?: boolean; restoreHostName?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/client/network/connection`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsClientNetworkConnectionPack
   */
  getOptionsClientNetworkConnectionPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/client/network/connection/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsHttpsCertificate
   */
  getOptionsHttpsCertificate(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: any; certificate?: any; password?: any }>> {
    const url = `/api/v3/options/https/certificate`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsHttpsCertificate
   */
  postOptionsHttpsCertificate(data: { type?: any; certificate?: any; password?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/https/certificate`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsHttpsCertificatePack
   */
  getOptionsHttpsCertificatePack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/https/certificate/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserSessions
   */
  getOptionsUserSessions(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ terminatePending?: boolean; logoutDisconnected?: boolean; pendingTimeout?: any }>> {
    const url = `/api/v3/options/user/sessions`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserSessions
   */
  postOptionsUserSessions(data: { terminatePending?: boolean; logoutDisconnected?: boolean; pendingTimeout?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/sessions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserSessionsPack
   */
  getOptionsUserSessionsPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/sessions/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserLogin
   */
  getOptionsUserLogin(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userReLogin?: boolean; guestReLogin?: boolean }>> {
    const url = `/api/v3/options/user/login`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserLogin
   */
  postOptionsUserLogin(data: { userReLogin?: boolean; guestReLogin?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/login`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserLoginPack
   */
  getOptionsUserLoginPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/login/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsMisc
   */
  getOptionsMisc(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ executeBatchForComputers?: boolean }>> {
    const url = `/api/v3/options/misc`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsMisc
   */
  postOptionsMisc(data: { executeBatchForComputers?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/misc`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsMiscPack
   */
  getOptionsMiscPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/misc/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsClientUpdate
   */
  getOptionsClientUpdate(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ updateEnabled?: boolean; downGradeEnabled?: boolean }>> {
    const url = `/api/v3/options/client/update`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsClientUpdate
   */
  postOptionsClientUpdate(data: { updateEnabled?: boolean; downGradeEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/client/update`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsClientUpdatePack
   */
  getOptionsClientUpdatePack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/client/update/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsClient
   */
  getOptionsClient(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ defaultCulture?: any; logoutAction?: number; idlePowerSaving?: number; idlePowerSavingDelay?: any; dataPath?: any; managerPassword?: any; isConcurrentExecutionLimitEnabled?: boolean }>> {
    const url = `/api/v3/options/client`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsClient
   */
  postOptionsClient(data: { defaultCulture?: any; logoutAction?: number; idlePowerSaving?: number; idlePowerSavingDelay?: any; dataPath?: any; managerPassword?: any; isConcurrentExecutionLimitEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/client`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsClientPack
   */
  getOptionsClientPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/client/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsConfirmationCode
   */
  getOptionsConfirmationCode(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ length?: any; type?: number }>> {
    const url = `/api/v3/options/confirmation/code`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsConfirmationCode
   */
  postOptionsConfirmationCode(data: { length?: any; type?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/confirmation/code`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsConfirmationCodePack
   */
  getOptionsConfirmationCodePack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/confirmation/code/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserPasswordPolicy
   */
  getOptionsUserPasswordPolicy(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ minimumLength?: any; maximumLength?: any; requireLowerCase?: boolean; requireUpperCase?: boolean; requireNumbers?: boolean }>> {
    const url = `/api/v3/options/user/password/policy`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserPasswordPolicy
   */
  postOptionsUserPasswordPolicy(data: { minimumLength?: any; maximumLength?: any; requireLowerCase?: boolean; requireUpperCase?: boolean; requireNumbers?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/password/policy`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserPasswordPolicyPack
   */
  getOptionsUserPasswordPolicyPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/password/policy/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserPasswordRecovery
   */
  getOptionsUserPasswordRecovery(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ method?: number }>> {
    const url = `/api/v3/options/user/password/recovery`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserPasswordRecovery
   */
  postOptionsUserPasswordRecovery(data: { method?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/password/recovery`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserPasswordRecoveryPack
   */
  getOptionsUserPasswordRecoveryPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/password/recovery/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserRegistration
   */
  getOptionsUserRegistration(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isClientEnabled?: boolean; isPortalEnabled?: boolean; verificationMethod?: number }>> {
    const url = `/api/v3/options/user/registration`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserRegistration
   */
  postOptionsUserRegistration(data: { isClientEnabled?: boolean; isPortalEnabled?: boolean; verificationMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/registration`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserRegistrationPack
   */
  getOptionsUserRegistrationPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/registration/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserLogoutGrace
   */
  getOptionsUserLogoutGrace(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isEnabled?: boolean; time?: any }>> {
    const url = `/api/v3/options/user/logout/grace`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserLogoutGrace
   */
  postOptionsUserLogoutGrace(data: { isEnabled?: boolean; time?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/logout/grace`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserLogoutGracePack
   */
  getOptionsUserLogoutGracePack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/logout/grace/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserFiles
   */
  getOptionsUserFiles(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userDataPath?: any; defaultsUserDataPath?: any }>> {
    const url = `/api/v3/options/user/files`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserFiles
   */
  postOptionsUserFiles(data: { userDataPath?: any; defaultsUserDataPath?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/files`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserFilesPack
   */
  getOptionsUserFilesPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/files/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserStorage
   */
  getOptionsUserStorage(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isEnabled?: boolean; mountPoint?: string; size?: any; redirectedFolders?: number }>> {
    const url = `/api/v3/options/user/storage`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserStorage
   */
  postOptionsUserStorage(data: { isEnabled?: boolean; mountPoint?: string; size?: any; redirectedFolders?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/storage`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserStoragePack
   */
  getOptionsUserStoragePack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/storage/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsUserBalance
   */
  getOptionsUserBalance(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ withholdUnpaidUsageSessionDeposits?: boolean }>> {
    const url = `/api/v3/options/user/balance`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsUserBalance
   */
  postOptionsUserBalance(data: { withholdUnpaidUsageSessionDeposits?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/user/balance`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsUserBalancePack
   */
  getOptionsUserBalancePack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/user/balance/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsDeployment
   */
  getOptionsDeployment(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ diskSpaceAllocation?: number }>> {
    const url = `/api/v3/options/deployment`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsDeployment
   */
  postOptionsDeployment(data: { diskSpaceAllocation?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/deployment`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsDeploymentPack
   */
  getOptionsDeploymentPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/deployment/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsClientNotifications
   */
  getOptionsClientNotifications(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ remainingTimeNotificationMessage?: any; reservationTimeNotificationMessage?: any }>> {
    const url = `/api/v3/options/client/notifications`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsClientNotifications
   */
  postOptionsClientNotifications(data: { remainingTimeNotificationMessage?: any; reservationTimeNotificationMessage?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/client/notifications`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsClientNotificationsPack
   */
  getOptionsClientNotificationsPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/client/notifications/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsInvoicing
   */
  getOptionsInvoicing(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ autoInvoiceMember?: boolean; autoInvoiceMemberTime?: any; autoInvoicePaymentMember?: boolean; autoInvoiceGuest?: boolean; autoInvoiceGuestTime?: any; autoInvoicePaymentGuest?: boolean }>> {
    const url = `/api/v3/options/invoicing`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsInvoicing
   */
  postOptionsInvoicing(data: { autoInvoiceMember?: boolean; autoInvoiceMemberTime?: any; autoInvoicePaymentMember?: boolean; autoInvoiceGuest?: boolean; autoInvoiceGuestTime?: any; autoInvoicePaymentGuest?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/invoicing`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsInvoicingPack
   */
  getOptionsInvoicingPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/invoicing/pack`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOptionsPosAutomation
   */
  getOptionsPosAutomation(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ autoDelivery?: boolean; autoPrepare?: boolean; autoGuestLogin?: boolean; disablePrintReceiptByDefault?: boolean }>> {
    const url = `/api/v3/options/pos/automation`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOptionsPosAutomation
   */
  postOptionsPosAutomation(data: { autoDelivery?: boolean; autoPrepare?: boolean; autoGuestLogin?: boolean; disablePrintReceiptByDefault?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/options/pos/automation`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOptionsPosAutomationPack
   */
  getOptionsPosAutomationPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/options/pos/automation/pack`;
    return this.client.request('get', url, {}, params);
  }
}
