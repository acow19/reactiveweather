# Reactive Weather

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was based on [this tutorial by freeCodeCamp.org](https://www.youtube.com/watch?v=Reny0cTTv24).

## What I did differently

Below is a list of what I did differently from the tutorial that this project is based on:

### `Color Scheme & Styling`

The color scheme that I chose was inspired by
[this Vue Theme for VS Code](https://marketplace.visualstudio.com/items?itemName=mariorodeghiero.vue-theme).

### `Change to Display Fahrenheit & Imperial instead of Celsius & Metric`

The tutorial used Celsius and Metric for the units of measurement of displaying the weather data.\
In order to change the units of measurement displayed for the weather data to Fahrenheit and Imperial, this required me to read
[OpenWeatherMap's API documentation on current weather data](https://openweathermap.org/current#data).

### `Change Cities Displayed Based on Population`

The tutorial used an optional parameter to only display cities with a minimum population of 1,000,000.\
This was an attempt to improve load times. This is fine. However, this doesn't help my purpose.
My purpose is to use this for cities which have a much smaller population as well.
In order to do this, I read the [documentation for the GeoDB Cities API on Rapid API for the Cities endpoint](https://rapidapi.com/wirefreethought/api/geodb-cities/)
and referenced the minPopulation optional parameter. I changed the minPopulation optional paramter to 1,000 for my specific purpose.

### APIs & Packages used, & Other External Links

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### OpenWeather API

[OpenWeather API Homepage](https://openweathermap.org/)
[Current weather data](https://openweathermap.org/current)

### GeoDB Cities API

[GeoDB Cities API on Rapid API](https://rapidapi.com/wirefreethought/api/geodb-cities/)

### react-accessible-accordion

[react-accessible-accordion on NPM](https://www.npmjs.com/package/react-accessible-accordion)

### react-select-async-paginate

[react-select-async-paginate on NPM](https://www.npmjs.com/package/react-select-async-paginate)

### The Tutorial that this Project is based on

[This tutorial by freeCodeCamp.org](https://www.youtube.com/watch?v=Reny0cTTv24).

### The repo for the Tutorial that this project is based on

[react-weather-app code repo](https://github.com/bobangajicsm/react-weather-app)
