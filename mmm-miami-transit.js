
// mmm-miami-transit.js
Module.register("mmm-miami-transit", {
    // default module config
    default : {
        text: "mmm-miami-transit!",
        stationId: "BKL",
        updateInterval: 1000.
        config: {
            text: 'mm-miami-transit',
            fadeSpeed: 100
        },
        schedule: {}
    },

    // this method is called when a module is loaded 
    loaded: function(callback) {
      Log.log(this.name + ' is loaded!');
      callback();
    },

    // this method is called when all modules are loaded and the
    // system is ready to boot up
    start: function() {
      this.mySpecialProperty = "So much wow!";
        Log.log(this.name + ' is started!');

      // Schedule update timer.
        setInterval(function() {
            self.updateDom(self.config.fadeSpeed);
        }, this.config.updateInterval);
    },

    // override the dom generator
    getDom: function() {
        var element = document.createElement("div");
        element.id = 'title';
        element.innerHTML = this.config.text;
        var subElement = document.createElement("p");
        subElement.id = 'transitSchedule';
        subElement.innerHTML = this.schedule;
        element.appendChild(subElement);
        return element;
    },

    socketNotificationReceived: function(notification, payload) {
        switch(notification) {
            case 'MMM_MIAMI_TRANSIT_RESPONSE':
                this.schedule = payload.response;
                break;
            default:
                break;
        }
    },

});
