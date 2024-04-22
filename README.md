# InfoBoard

A dynamic information board for transport stations and other public places.

## Usage

InfoBoard is entirely static and can be hosted on any web server. InfoBoard also doesn't require much processing power, so it can be hosted on a Raspberry Pi or similar device.

To edit the information displayed on the board, edit the `info.json` file.

### Example

```json
{
    "title": "Example Information Screen",
    "pages": 4,
    "seconds-per-page": 10,
    "pages-content": {
        "1": [
            "Bus route 23 - 2 Minutes",
            "Bus route 64 - 5 Minutes",
            "Bus route 1A - 7 Minutes",
            "Bus route 1B - 10 Minutes"
        ],
        "2": [
            "Bus route 23 - 14 Minutes",
            "Bus route D2 - 15 Minutes",
            "Bus route 4D - 20 Minutes",
            "Bus route 1B - 22 Minutes"
        ],
        "3": [
            "Bus station information:",
            "The lift is out of order please use the stairs or escalator",
            "The ticket office is open from 8am to 6pm"
        ],
        "4": [
            "Bus routes 23, 64, 1A and 1B",
            "Are out of service due to road works and other disruptions"
        ]
    },
    "scrolling-text": "Welcome to example station | Please be aware of the following bus route disruptions. Bus routes 23, 64, 1A and 1B are out of service. This is due to road works and other disruptions. We apologise for any inconvenience caused | The lift is out of order please use the stairs or escalator | The ticket office is open from 8am to 6pm"
}
```

## Licence

This project is licenced under the GNU General Public Licence v3.0. Please see the [LICENCE](LICENCE) file for more information.