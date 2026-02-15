import { GizmoClient } from "../GizmoClient.js";

export class Verifications {
  constructor(client) {
    this.client = client;
  }

  /**
   * Starts email verification for calling user.
   * @param {string} emailAddress - Email address.
   * @param {Object} params - additional query params
   */
  postVerificationsApiUserV20VerificationsEmailByEmailAddress(
    emailAddress,
    params = {}
  ) {
    const url = `/api/user/v2.0/verifications/email/${emailAddress}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Completes email verification.
   * @param {string} token - Token.
   * @param {string} confirmationCode - Confirmation code.
   * @param {Object} params - additional query params
   */
  postVerificationsApiUserV20VerificationsEmailByTokenByConfirmationCodeComplete(
    token,
    confirmationCode,
    params = {}
  ) {
    const url = `/api/user/v2.0/verifications/email/${token}/${confirmationCode}/complete`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Starts mobile phone verification for calling user.
   * @param {string} mobilePhoneNumber - Mobile phone.
   * @param {Object} params - additional query params
   */
  postVerificationsApiUserV20VerificationsMobilephoneByMobilePhoneNumber(
    mobilePhoneNumber,
    params = {}
  ) {
    const url = `/api/user/v2.0/verifications/mobilephone/${mobilePhoneNumber}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Completes mobile phone verification.
   * @param {string} token - Token.
   * @param {string} confirmationCode - Confirmation code.
   * @param {Object} params - additional query params
   */
  postVerificationsApiUserV20VerificationsMobilephoneByTokenByConfirmationCodeComplete(
    token,
    confirmationCode,
    params = {}
  ) {
    const url = `/api/user/v2.0/verifications/mobilephone/${token}/${confirmationCode}/complete`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Starts email verification.
   * @param {integer} userId - User id.
   * @param {string} emailAddress - Email address.
   * @param {Object} params - additional query params
   */
  postVerificationsEmailByUserIdByEmailAddress(
    userId,
    emailAddress,
    params = {}
  ) {
    const url = `/api/v2.0/verifications/email/${userId}/${emailAddress}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Starts email verification for calling user.
   * @param {string} emailAddress - Email address.
   * @param {Object} params - additional query params
   */
  postVerificationsEmailByEmailAddress(emailAddress, params = {}) {
    const url = `/api/v2.0/verifications/email/${emailAddress}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Completes email verification.
   * @param {string} token - Token.
   * @param {string} confirmationCode - Confirmation code.
   * @param {Object} params - additional query params
   */
  postVerificationsEmailByTokenByConfirmationCodeComplete(
    token,
    confirmationCode,
    params = {}
  ) {
    const url = `/api/v2.0/verifications/email/${token}/${confirmationCode}/complete`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Starts mobile phone verification.
   * @param {integer} userId - User id.
   * @param {string} mobilePhoneNumber - Mobile phone.
   * @param {Object} params - additional query params
   */
  postVerificationsMobilephoneByUserIdByMobilePhoneNumber(
    userId,
    mobilePhoneNumber,
    params = {}
  ) {
    const url = `/api/v2.0/verifications/mobilephone/${userId}/${mobilePhoneNumber}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Starts mobile phone verification for calling user.
   * @param {string} mobilePhoneNumber - Mobile phone.
   * @param {Object} params - additional query params
   */
  postVerificationsMobilephoneByMobilePhoneNumber(
    mobilePhoneNumber,
    params = {}
  ) {
    const url = `/api/v2.0/verifications/mobilephone/${mobilePhoneNumber}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Completes mobile phone verification.
   * @param {string} token - Token.
   * @param {string} confirmationCode - Confirmation code.
   * @param {Object} params - additional query params
   */
  postVerificationsMobilephoneByTokenByConfirmationCodeComplete(
    token,
    confirmationCode,
    params = {}
  ) {
    const url = `/api/v2.0/verifications/mobilephone/${token}/${confirmationCode}/complete`;
    return this.client.request("post", url, {}, params);
  }
}
