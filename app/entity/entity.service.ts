module app.entity {

    //#region enum
    export enum SortType {
        Activity,
        Creation,
        Votes,
        Hot,
        Week,
        Month
    }

    
    //#endregion

    //#region interfaces
    export interface IResponseResult {
        result: string;
    }


    export interface ILoginParams {
        accesstoken: string;
        expires: number;
    }

    //#region profile
    export interface BadgeCounts {
        bronze: number;
        silver: number;
        gold: number;
    }

    export interface Item {
        badge_counts: BadgeCounts;
        account_id: number;
        is_employee: boolean;
        last_modified_date: number;
        last_access_date: number;
        reputation_change_year: number;
        reputation_change_quarter: number;
        reputation_change_month: number;
        reputation_change_week: number;
        reputation_change_day: number;
        reputation: number;
        creation_date: number;
        user_type: string;
        user_id: number;
        website_url: string;
        link: string;
        profile_image: string;
        display_name: string;
    }

    export interface IProfile {
        items: Item[];
        has_more: boolean;
        quota_max: number;
        quota_remaining: number;
    }
    //#endregion


    //#region question

    export interface Owner {
        reputation: number;
        user_id: number;
        user_type: string;
        profile_image: string;
        display_name: string;
        link: string;
        accept_rate: number;
    }

    export interface IItem {
        tags: string[];
        owner: Owner;
        is_answered: boolean;
        view_count: number;
        answer_count: number;
        score: number;
        last_activity_date: number;
        creation_date: number;
        last_edit_date: number;
        question_id: number;
        link: string;
        title: string;
        accepted_answer_id: number;
    }

    export interface IQuestions {
        items: IItem[];
        has_more: boolean;
        quota_max: number;
        quota_remaining: number;
    }

    //#endregion


    //#region  app.models.question

   

        

    export interface IQuestionDetail {
        owner: Owner;
        is_accepted: boolean;
        score: number;
        last_activity_date: number;
        creation_date: number;
        answer_id: number;
        question_id: number;
        body: string;
    }

    export interface IQuestion {
        items: IQuestionDetail[];
        has_more: boolean;
        quota_max: number;
        quota_remaining: number;
    }

    
    //#endregion

    //#region search


      
    export interface ISearchResultItem {
        tags: string[];
        owner: Owner;
        is_answered: boolean;
        view_count: number;
        answer_count: number;
        score: number;
        last_activity_date: number;
        creation_date: number;
        question_id: number;
        link: string;
        title: string;
        last_edit_date: number;
        accepted_answer_id: number;
        closed_date: number;
        closed_reason: string;
    }

    export interface IQuestionSearchReults {
        items : ISearchResultItem[]   ;
      has_more : boolean;
     quota_max : number;
     quota_remaining : number;
}


//#endregion


//#endregion

//#region classes
export class ResponseResult implements IResponseResult {
    result: string;
}

export class LoginParams implements ILoginParams {
    accesstoken: string;
    expires: number;
}



   

    //#endregion
}