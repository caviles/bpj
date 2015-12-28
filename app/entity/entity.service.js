var app;
(function (app) {
    var entity;
    (function (entity) {
        //#region enum
        (function (SortType) {
            SortType[SortType["Activity"] = 0] = "Activity";
            SortType[SortType["Creation"] = 1] = "Creation";
            SortType[SortType["Votes"] = 2] = "Votes";
            SortType[SortType["Hot"] = 3] = "Hot";
            SortType[SortType["Week"] = 4] = "Week";
            SortType[SortType["Month"] = 5] = "Month";
        })(entity.SortType || (entity.SortType = {}));
        var SortType = entity.SortType;
        //#endregion
        //#endregion
        //#region classes
        var ResponseResult = (function () {
            function ResponseResult() {
            }
            return ResponseResult;
        })();
        entity.ResponseResult = ResponseResult;
        var LoginParams = (function () {
            function LoginParams() {
            }
            return LoginParams;
        })();
        entity.LoginParams = LoginParams;
    })(entity = app.entity || (app.entity = {}));
})(app || (app = {}));
