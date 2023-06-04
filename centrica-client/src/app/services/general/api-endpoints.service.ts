import { Injectable } from '@angular/core';
import { UrlBuilder } from './url-builder';
import { QueryStringParameters } from './query-string-parameteres';
import { Constants } from 'src/app/config/constant';
@Injectable()
export class ApiEndpointsService {
  constructor(private constants: Constants) {}
  private createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI
        ? this.constants.API_MOCK_ENDPOINT
        : this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
  public allDistrict(): string {
    return this.createUrl('District');
  }
}
