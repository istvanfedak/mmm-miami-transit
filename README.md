# mmm-miami-transit
Magic Mirror module that displays the Miami Metrorail times for different 
train stations.

## Installation
- Clone the module from github: 
    `git clone https://github.com/istvanfedak/mmm-miami-transit 
     ~/MagicMirror/modules`
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
    - Edit stationId to your station (default is Brickell)
        - Go to http://www.miamidade.gov/transit/WebServices/TrainStations
          and find your stationId
    - Save and close the file by typing: `Ctrl-o` and then `Ctrl-x`
