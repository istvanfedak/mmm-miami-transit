# mmm-miami-transit
Magic Mirror module that displays the Miami Metrorail times for different 
train stations.

## Installation
- Clone the module from github: 
    `git clone [mmm-miami=transit] ~/MagicMirror/modules`
- Navigate to the mmm-miami-transit folder and install the node dependencies: 
    `cd ~/MagicMirror/modules/mmm-miami-transit && npm install`
- Add your brand new module to your config!
    - Open the configuration file: `nano ~/MagicMirror/config/config.js`
    - Add the mmm-miami-transit module to the modules array:
    ```
    {
        module: 'mmm-miami-transit',
        position: 'position',
        stationId: 'BKL'
    }
    ```
    -  Edit stationId to your station (default is Brickell)
        - Go to `[Miami transit stations]` and find your stationId

[Miami transit stations]: http://www.miamidade.gov/transit/WebServices/TrainStations
[mmm-miami-transit]: https://github.com/istvanfedak/mmm-miami-transit
