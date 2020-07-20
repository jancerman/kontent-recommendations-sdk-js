import { Observable } from 'rxjs';

import { IRecommendationClientConfig } from '../../config';
import { ITrackVisitQueryOptions } from '../../models';
import { EmptyResponse } from '../../responses';
import { RecommendationQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class TrackVisitQuery extends BaseQuery<EmptyResponse> {
    constructor(
        protected config: IRecommendationClientConfig,
        protected queryService: RecommendationQueryService,
        public data: ITrackVisitQueryOptions
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<EmptyResponse> {
        return this.queryService.trackVisit(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.trackVisit();
    }
}
