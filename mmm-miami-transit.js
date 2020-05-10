
// mmm-miami-transit.js
Module.register("mmm-miami-transit", {
    defaults: {
        foo: "I'm alaive!",
        stationId: 'BLK',
        updateInterval: 15000,
        fadeSpeed: 500,
        displayCount: 'waiting',
        
    },
    start: function (){
        this.stationInfo = {};
        var timer = setInterval(()=>{
            this.sendSocketNotification(
                "MMM_MIAMI_TRANSIT_REQUEST",
                this.config.stationId
            );
        }, this.config.updateInterval)
    },
    getDom: function() {
        var wrapper = document.createElement('div');
        
        // table name
        wrapper.innerHTML = this.stationInfo.StationName + ' Station';
        
        // create table
        var table = document.createElement('table');
        table.className = "small";
        
        // table header row
        var headers = document.createElement('tr');
        table.appendChild(headers);
        
        // train 1 row
        var train1 = document.createElement('tr');
        table.appendChild(train1);
        
        // train 2 row
        var train2 = document.createElement('tr');
        table.appendChild(train2);

        // train 3 row
        var train3 = document.createElement('tr');
        table.appendChild(train3);

        // Northbound column header
        var nbTrains = document.createElement('td');
        nbTrains.innerHTML = 'Northbound';
        headers.appendChild(nbTrains);

        // Northbound trains
        var nbTrain1 = document.createElement('td');
        nbTrain1.innerHTML = this.stationInfo.NB_Time1;
        train1.appendChild(nbTrain1);
        
        if(this.stationInfo.NB_Time1 != '*****') {
            var nbTrain2 = document.createElement('td');
            nbTrain2.innerHTML = this.stationInfo.NB_Time2;
            train2.appendChild(nbTrain2);
 
            var nbTrain3 = document.createElement('td');
            nbTrain3.innerHTML = this.stationInfo.NB_Time3;
            train3.appendChild(nbTrain3); 
        } 
        
        // Southbound column header
        var sbTrains = document.createElement('td');
        sbTrains.innerHTML = 'Southbound';
        headers.appendChild(sbTrains);
        
        // Southbound trains
        var sbTrain1 = document.createElement('td');
        sbTrain1.innerHTML = this.stationInfo.SB_Time1;
        train1.appendChild(sbTrain1);
       
        if(this.stationInfo.SB_Time1 != '*****') {
            var sbTrain2 = document.createElement('td');
            sbTrain2.innerHTML = this.stationInfo.SB_Time2;
            train2.appendChild(sbTrain2);
       
            var sbTrain3 = document.createElement('td');
            sbTrain3.innerHTML = this.stationInfo.SB_Time3;
            train3.appendChild(sbTrain3);
        }

        wrapper.appendChild(table);
        return wrapper;
    },
    notificationReceived: function() {},
    socketNotificationReceived: function(notification, payload) {
        switch(notification) {
            case "MMM_MIAMI_TRANSIT_RESPONSE":
                this.stationInfo = payload.RecordSet.Record;
                this.updateDom(this.config.fadeSpeed);
                Log.info(payload);
                break;
        }
    },
});
