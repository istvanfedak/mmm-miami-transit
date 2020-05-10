const { execSync } = require('child_process');
const xmlParser = require('xml2json');
const URL = 'https://www.miamidade.gov/transit/WebServices/'+
            'TrainTracker/?StationID=';

module.exports = getStation;

// This function will return the trains arriving to the station specified by
// stationId
//  - If stationId is invalid it will return {"RecordSet":{}}
function getStation(stationId) {
    return JSON.parse(
        xmlParser.toJson(
            execSync(`curl -s ${URL}${stationId}`).toString()
        )
    );
}

