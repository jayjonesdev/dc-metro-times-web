# Project Title
DC Metro Times
## Demo link:
Coming soon...

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App
DC Metro Times is an app that allows you to view the schedules of buses and trains in Washington, DC.

## Screenshots

<img width="2056" alt="Train Schedule" src="https://user-images.githubusercontent.com/78396656/171270790-11648c5e-e513-423d-964e-64de6d21f9ab.png">

## Technologies
- React
- TypeScript
- TailwindCSS
- Socket.IO
- Jest
- Storybook

## Setup
- download/clone the repository
- run `npm install`
- Create a `.env` file, with these variables in it
    - `REACT_APP_SERVER_URL`: This is the URL of your server (download/clone [dc-metro-times-server](https://github.com/jayjonesdev/dc-metro-times-server))
- Follow install instructions for [dc-metro-times-server](https://github.com/jayjonesdev/dc-metro-times-server) if you have not already
- Start dc-metro-times-server
- Start the web client by running `npm start` 

## Approach
I wanted to create a simple UI using TailwindCSS to display the schedules of DC trains and buses. To get realtime updates, socket-io is being used.

## Status
Currently only the train schedules are being displayed, eventually the bus schedule will be integrated as well.

## License

GNU General Public License @ Jerrell Jones
