module app.entity {

    //#region interfaces
    export interface IResponseResult {
        result: string;
    }


    export interface ILoginParams {
        accesstoken: string;
        expires: number;
    }
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