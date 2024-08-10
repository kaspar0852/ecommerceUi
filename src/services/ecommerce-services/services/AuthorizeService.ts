/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MyTokenObtainRequest } from "../models/MyTokenObtainRequest";
import type { MyTokenObtainResponse } from "../models/MyTokenObtainResponse";
import type { Register } from "../models/Register";
import type { TokenRefresh } from "../models/TokenRefresh";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AuthorizeService {
  /**
   * @param data
   * @returns MyTokenObtainResponse
   * @throws ApiError
   */
  public static authorizeLoginCreate(
    data: MyTokenObtainRequest
  ): CancelablePromise<MyTokenObtainResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/authorize/login/",
      body: data,
    });
  }

  /**
   * Takes a refresh type JSON web token and returns an access type JSON web
   * token if the refresh token is valid.
   * @param data
   * @returns TokenRefresh
   * @throws ApiError
   */
  public static authorizeLoginRefreshCreate(
    data: TokenRefresh
  ): CancelablePromise<TokenRefresh> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/authorize/login/refresh/",
      body: data,
    });
  }

  /**
   * @param data
   * @returns Register
   * @throws ApiError
   */
  public static authorizeRegisterCreate(
    data: Register
  ): CancelablePromise<Register> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/authorize/register/",
      body: data,
    });
  }
}
