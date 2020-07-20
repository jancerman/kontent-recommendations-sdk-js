
export class RecommenderApiEndpoints {

    recommendItems(): string {
        return `recommend/items`;
    }

    trackVisit(): string {
        return `track/visit`;
    }

    trackConversion(): string {
        return `track/conversion`;
    }

    trackPortion(): string {
        return `track/portion`;
    }

    trackVisitor(visitId: string): string {
        return `track/visitor?visitId=${visitId}`;
    }
}

export const recommenderApiEndpoints = new RecommenderApiEndpoints();
