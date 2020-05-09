'use strict'

const NodeHelper = require('node_helper');
const request = require('request');
const parser = require('xml2json');

module.exports = NodeHelper.create({
    start: function () {
        console.log(this.name + ' helper started ...');
    },

    socketNotificationRecieved: function (notification, payload) {
        if(notification === 'MMM_MIAMI_TRANSIT_REQUEST') {
            request({
                url: `http://www.miamidade.gov/transit/WebServices/` +
                     `TrainTracker/?StationID=${payload.stationId}`,
                method: 'GET'
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    this.sendSocketNotification(
                        'MMM_MIAMI_TRANSIT_RESPONSE',
                        {
                            data: parser.toJson(body)
                        }
                    );
                }
            
            });
        }
    }

});
