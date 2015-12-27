var app;
(function (app) {
    var entity;
    (function (entity) {
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
