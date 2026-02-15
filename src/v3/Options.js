import { GizmoClient } from "../GizmoClient.js";

export class Options {
  constructor(client) {
    this.client = client;
  }

  /**
   * Reads options from the store.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.optionsType - Options type.
   * @param {Object} params - additional query params
   */
  getOptions(options = {}, params = {}) {
    const url = `/api/v3.0/options`;
    const optionsType = options.hasOwnProperty("optionsType")
      ? options["optionsType"]
      : undefined;
    const query = Object.assign({}, params);
    if (optionsType !== undefined) query["optionsType"] = optionsType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Writes specified options to the store.
   * @param {string} data.optionsType -
   * @param {object} data.values -
   * @param {Object} params - additional query params
   */
  putOptions(data = {}, params = {}) {
    const url = `/api/v3.0/options`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsSkin(options = {}, params = {}) {
    const url = `/api/v3.0/options/skin`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsSkinPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/skin/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsCurrency(options = {}, params = {}) {
    const url = `/api/v3.0/options/currency`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.currencyCode -
   * @param {string} data.currencySymbol -
   * @param {integer} data.currencyDecimalDigits -
   * @param {string} data.currencyDecimalSeparator -
   * @param {string} data.currencyGroupSeparator -
   * @param {Object} params - additional query params
   */
  postOptionsCurrency(data = {}, params = {}) {
    const url = `/api/v3.0/options/currency`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsCurrencyPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/currency/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsBusiness(options = {}, params = {}) {
    const url = `/api/v3.0/options/business`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.businessName -
   * @param {string} data.businessDayStart -
   * @param {string} data.businessDayEnd -
   * @param {integer} data.businessStartWeekDay -
   * @param {string} data.businessEmail -
   * @param {string} data.businessWebSite -
   * @param {integer} data.businessEndWeekDay -
   * @param {boolean} data.hasBusinessSchedule -
   * @param {Object} params - additional query params
   */
  postOptionsBusiness(data = {}, params = {}) {
    const url = `/api/v3.0/options/business`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsBusinessPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/business/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsGeneral(options = {}, params = {}) {
    const url = `/api/v3.0/options/general`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.defaultCulture -
   * @param {Object} params - additional query params
   */
  postOptionsGeneral(data = {}, params = {}) {
    const url = `/api/v3.0/options/general`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsGeneralPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/general/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsManagerfeatures(options = {}, params = {}) {
    const url = `/api/v3.0/options/managerfeatures`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.salesModule -
   * @param {boolean} data.reservationsModule -
   * @param {boolean} data.usersModule -
   * @param {Object} params - additional query params
   */
  postOptionsManagerfeatures(data = {}, params = {}) {
    const url = `/api/v3.0/options/managerfeatures`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsManagerfeaturesPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/managerfeatures/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsRegional(options = {}, params = {}) {
    const url = `/api/v3.0/options/regional`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.countryCode -
   * @param {string} data.timeZone -
   * @param {Object} params - additional query params
   */
  postOptionsRegional(data = {}, params = {}) {
    const url = `/api/v3.0/options/regional`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsRegionalPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/regional/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsFiscalization(options = {}, params = {}) {
    const url = `/api/v3.0/options/fiscalization`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  postOptionsFiscalization(data = {}, params = {}) {
    const url = `/api/v3.0/options/fiscalization`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsFiscalizationPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/fiscalization/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsTax(options = {}, params = {}) {
    const url = `/api/v3.0/options/tax`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.taxSystem -
   * @param {integer} data.goodsTaxSystem -
   * @param {integer} data.servicesTaxSystem -
   * @param {integer} data.depositTaxSystem -
   * @param {integer} data.goodsVATRate -
   * @param {integer} data.servicesVATRate -
   * @param {integer} data.depositVATRate -
   * @param {number} data.timeBasedServiceVATRate -
   * @param {boolean} data.treatDepositsAsService -
   * @param {string} data.depositServiceDescription -
   * @param {string} data.businessVATID -
   * @param {integer} data.depositAdvancePaymentType -
   * @param {Object} params - additional query params
   */
  postOptionsTax(data = {}, params = {}) {
    const url = `/api/v3.0/options/tax`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsTaxPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/tax/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsReservations(options = {}, params = {}) {
    const url = `/api/v3.0/options/reservations`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.enableLoginBlockBefore -
   * @param {integer} data.loginBlockBeforeTime -
   * @param {boolean} data.enableLoginBlockAfter -
   * @param {integer} data.loginBlockAfterTime -
   * @param {boolean} data.enableExpiration -
   * @param {integer} data.expireAfter -
   * @param {integer} data.timeSourceType -
   * @param {integer} data.minimumTime -
   * @param {integer} data.maximumTime -
   * @param {integer} data.feeType -
   * @param {number} data.fee -
   * @param {number} data.minimumPaymentPercentage -
   * @param {integer} data.cancellationGracePeriod -
   * @param {number} data.cancellationRefundPercentage -
   * @param {boolean} data.multiHostDisable -
   * @param {boolean} data.purchaseDisableDiscounts -
   * @param {integer} data.deficitFactor -
   * @param {integer} data.expectedAverageSessionDuration -
   * @param {integer} data.clientAlertBeforeTime -
   * @param {integer} data.managerAlertBeforeTime -
   * @param {integer} data.paymentExpireAfter -
   * @param {Object} params - additional query params
   */
  postOptionsReservations(data = {}, params = {}) {
    const url = `/api/v3.0/options/reservations`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsReservationsPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/reservations/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsAgerestrictions(options = {}, params = {}) {
    const url = `/api/v3.0/options/agerestrictions`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.requireAge -
   * @param {boolean} data.isApplicationsEnabled -
   * @param {boolean} data.isLoginEnabled -
   * @param {boolean} data.isProductsEnabled -
   * @param {Object} params - additional query params
   */
  postOptionsAgerestrictions(data = {}, params = {}) {
    const url = `/api/v3.0/options/agerestrictions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsAgerestrictionsPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/agerestrictions/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsWaitinglines(options = {}, params = {}) {
    const url = `/api/v3.0/options/waitinglines`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isLogoutGracePeriodEnabled -
   * @param {integer} data.logoutGracePeriodTime -
   * @param {boolean} data.isRemoveFromAllEnabled -
   * @param {integer} data.nextInLineTime -
   * @param {integer} data.removeTime -
   * @param {Object} params - additional query params
   */
  postOptionsWaitinglines(data = {}, params = {}) {
    const url = `/api/v3.0/options/waitinglines`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsWaitinglinesPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/waitinglines/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsTopup(options = {}, params = {}) {
    const url = `/api/v3.0/options/topup`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isCustomValueAllowed -
   * @param {number} data.minimumValue -
   * @param {number} data.maximumValue -
   * @param {Object} params - additional query params
   */
  postOptionsTopup(data = {}, params = {}) {
    const url = `/api/v3.0/options/topup`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsTopupPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/topup/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsPaymentprocessing(options = {}, params = {}) {
    const url = `/api/v3.0/options/paymentprocessing`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.paymentSuccessUrl -
   * @param {string} data.paymentCancelUrl -
   * @param {boolean} data.creditCardUseTerminal -
   * @param {Object} params - additional query params
   */
  postOptionsPaymentprocessing(data = {}, params = {}) {
    const url = `/api/v3.0/options/paymentprocessing`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsPaymentprocessingPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/paymentprocessing/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsSmtp(options = {}, params = {}) {
    const url = `/api/v3.0/options/smtp`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isEnabled -
   * @param {string} data.host -
   * @param {integer} data.port -
   * @param {boolean} data.enableAuthentication -
   * @param {string} data.username -
   * @param {string} data.password -
   * @param {boolean} data.useSSL -
   * @param {integer} data.smtpSecurity -
   * @param {string} data.replyToAddress -
   * @param {Object} params - additional query params
   */
  postOptionsSmtp(data = {}, params = {}) {
    const url = `/api/v3.0/options/smtp`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsSmtpPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/smtp/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsSmsgateway(options = {}, params = {}) {
    const url = `/api/v3.0/options/smsgateway`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isEnabled -
   * @param {string} data.provider -
   * @param {Object} params - additional query params
   */
  postOptionsSmsgateway(data = {}, params = {}) {
    const url = `/api/v3.0/options/smsgateway`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsSmsgatewayPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/smsgateway/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsNetwork(options = {}, params = {}) {
    const url = `/api/v3.0/options/network`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.httpProtocols -
   * @param {integer} data.httpPort -
   * @param {integer} data.httpsPort -
   * @param {string} data.hostName -
   * @param {Object} params - additional query params
   */
  postOptionsNetwork(data = {}, params = {}) {
    const url = `/api/v3.0/options/network`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsNetworkPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/network/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientNetworkConnection(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/network/connection`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.registeredOnly -
   * @param {boolean} data.autoDiscovery -
   * @param {boolean} data.restoreHostName -
   * @param {Object} params - additional query params
   */
  postOptionsClientNetworkConnection(data = {}, params = {}) {
    const url = `/api/v3.0/options/client/network/connection`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientNetworkConnectionPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/network/connection/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsHttpsCertificate(options = {}, params = {}) {
    const url = `/api/v3.0/options/https/certificate`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.type -
   * @param {string} data.certificate -
   * @param {string} data.password -
   * @param {Object} params - additional query params
   */
  postOptionsHttpsCertificate(data = {}, params = {}) {
    const url = `/api/v3.0/options/https/certificate`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsHttpsCertificatePack(options = {}, params = {}) {
    const url = `/api/v3.0/options/https/certificate/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserSessions(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/sessions`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.terminatePending -
   * @param {boolean} data.logoutDisconnected -
   * @param {integer} data.pendingTimeout -
   * @param {Object} params - additional query params
   */
  postOptionsUserSessions(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/sessions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserSessionsPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/sessions/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserLogin(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/login`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.userReLogin -
   * @param {boolean} data.guestReLogin -
   * @param {Object} params - additional query params
   */
  postOptionsUserLogin(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/login`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserLoginPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/login/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsMisc(options = {}, params = {}) {
    const url = `/api/v3.0/options/misc`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.executeBatchForComputers -
   * @param {Object} params - additional query params
   */
  postOptionsMisc(data = {}, params = {}) {
    const url = `/api/v3.0/options/misc`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsMiscPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/misc/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientUpdate(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/update`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.updateEnabled -
   * @param {boolean} data.downGradeEnabled -
   * @param {Object} params - additional query params
   */
  postOptionsClientUpdate(data = {}, params = {}) {
    const url = `/api/v3.0/options/client/update`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientUpdatePack(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/update/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClient(options = {}, params = {}) {
    const url = `/api/v3.0/options/client`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.defaultCulture -
   * @param {integer} data.logoutAction -
   * @param {integer} data.idlePowerSaving -
   * @param {integer} data.idlePowerSavingDelay -
   * @param {string} data.dataPath -
   * @param {string} data.managerPassword -
   * @param {boolean} data.isConcurrentExecutionLimitEnabled -
   * @param {Object} params - additional query params
   */
  postOptionsClient(data = {}, params = {}) {
    const url = `/api/v3.0/options/client`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsConfirmationCode(options = {}, params = {}) {
    const url = `/api/v3.0/options/confirmation/code`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.length -
   * @param {integer} data.type -
   * @param {Object} params - additional query params
   */
  postOptionsConfirmationCode(data = {}, params = {}) {
    const url = `/api/v3.0/options/confirmation/code`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsConfirmationCodePack(options = {}, params = {}) {
    const url = `/api/v3.0/options/confirmation/code/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserPasswordPolicy(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/password/policy`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.minimumLength -
   * @param {integer} data.maximumLength -
   * @param {boolean} data.requireLowerCase -
   * @param {boolean} data.requireUpperCase -
   * @param {boolean} data.requireNumbers -
   * @param {Object} params - additional query params
   */
  postOptionsUserPasswordPolicy(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/password/policy`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserPasswordPolicyPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/password/policy/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserPasswordRecovery(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/password/recovery`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.method -
   * @param {Object} params - additional query params
   */
  postOptionsUserPasswordRecovery(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/password/recovery`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserPasswordRecoveryPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/password/recovery/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserRegistration(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/registration`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isClientEnabled -
   * @param {boolean} data.isPortalEnabled -
   * @param {integer} data.verificationMethod -
   * @param {Object} params - additional query params
   */
  postOptionsUserRegistration(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/registration`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserRegistrationPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/registration/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserLogoutGrace(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/logout/grace`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isEnabled -
   * @param {integer} data.time -
   * @param {Object} params - additional query params
   */
  postOptionsUserLogoutGrace(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/logout/grace`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserLogoutGracePack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/logout/grace/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserFiles(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/files`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.userDataPath -
   * @param {string} data.defaultsUserDataPath -
   * @param {Object} params - additional query params
   */
  postOptionsUserFiles(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/files`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserFilesPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/files/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserStorage(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/storage`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.isEnabled -
   * @param {string} data.mountPoint -
   * @param {integer} data.size -
   * @param {integer} data.redirectedFolders -
   * @param {Object} params - additional query params
   */
  postOptionsUserStorage(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/storage`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserStoragePack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/storage/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserBalance(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/balance`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.withholdUnpaidUsageSessionDeposits -
   * @param {Object} params - additional query params
   */
  postOptionsUserBalance(data = {}, params = {}) {
    const url = `/api/v3.0/options/user/balance`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsUserBalancePack(options = {}, params = {}) {
    const url = `/api/v3.0/options/user/balance/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsDeployment(options = {}, params = {}) {
    const url = `/api/v3.0/options/deployment`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} data.diskSpaceAllocation -
   * @param {Object} params - additional query params
   */
  postOptionsDeployment(data = {}, params = {}) {
    const url = `/api/v3.0/options/deployment`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsDeploymentPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/deployment/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientNotifications(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/notifications`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} data.remainingTimeNotificationMessage -
   * @param {string} data.reservationTimeNotificationMessage -
   * @param {Object} params - additional query params
   */
  postOptionsClientNotifications(data = {}, params = {}) {
    const url = `/api/v3.0/options/client/notifications`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsClientNotificationsPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/client/notifications/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsInvoicing(options = {}, params = {}) {
    const url = `/api/v3.0/options/invoicing`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.autoInvoiceMember -
   * @param {integer} data.autoInvoiceMemberTime -
   * @param {boolean} data.autoInvoicePaymentMember -
   * @param {boolean} data.autoInvoiceGuest -
   * @param {integer} data.autoInvoiceGuestTime -
   * @param {boolean} data.autoInvoicePaymentGuest -
   * @param {Object} params - additional query params
   */
  postOptionsInvoicing(data = {}, params = {}) {
    const url = `/api/v3.0/options/invoicing`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsInvoicingPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/invoicing/pack`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsPosAutomation(options = {}, params = {}) {
    const url = `/api/v3.0/options/pos/automation`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {boolean} data.autoDelivery -
   * @param {boolean} data.autoPrepare -
   * @param {boolean} data.autoGuestLogin -
   * @param {boolean} data.disablePrintReceiptByDefault -
   * @param {Object} params - additional query params
   */
  postOptionsPosAutomation(data = {}, params = {}) {
    const url = `/api/v3.0/options/pos/automation`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getOptionsPosAutomationPack(options = {}, params = {}) {
    const url = `/api/v3.0/options/pos/automation/pack`;
    return this.client.request("get", url, {}, params);
  }
}
