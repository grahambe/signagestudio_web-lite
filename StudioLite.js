/**
 StudioLite MediaSignage Inc (c) open source digital signage project.
 Visit Github for license and docs: http://git.digitalsignage.com
 @class StudioLite
 @constructor
 @return {Object} instantiated StudioLite
 **/
define(['underscore', 'jquery', 'backbone', 'bootstrap', 'backbone.controller', 'Services', 'ComBroker', 'Lib', 'Jalapeno'], function (_, $, Backbone, Bootstrap, backbonecontroller, Services, ComBroker, Lib, Jalapeno) {
    var StudioLite = Backbone.Controller.extend({

        // application init
        initialize: function () {

            Backbone.globs = {};
            Backbone.globs['UNIQUE_COUNTER'] = 0;
            Backbone.globs['RC4KEY'] = '226a3a42f34ddd778ed2c3ba56644315';
            Backbone.lib = new Lib();
            Backbone.lib.addBackboneViewOptions();
            Backbone.comBroker = new ComBroker();
            Backbone.Jalapeno = new Jalapeno();
            window.log = Backbone.lib.log;

            // router init
            require(['AppRouter'],function(AppRouter){
                var appRouter = new AppRouter();
                Backbone.history.start();
                Backbone.comBroker.setService(Services.APP_ROUTER, appRouter);
                appRouter.navigate('authenticate/_/_', {trigger: true});
            })
        }
    });
    return StudioLite;
});