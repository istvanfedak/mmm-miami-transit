'use strict'

const NodeHelper = require('node_helper');
const getStation = require('./getStation');

module.exports = NodeHelper.create({
    socketNotificationReceived: function(notification, payload) {
        switch(notification) {
            case "MMM_MIAMI_TRANSIT_REQUEST":
                this.sendSocketNotification(
                    "MMM_MIAMI_TRANSIT_RESPONSE",
                    getStation(payload)
                );
                break;
            default:
                break;
        }
    },
});
