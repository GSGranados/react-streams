# React Streams - Streamy

This is a React App created using Redux mainly and many other NPM dependencies to make basic operations to some stream records and ultimately stream video through the App using a **RTMP Server** and a JSON Server to store the streams' information.

## Installation

Inside the repository you will have three locations

```bash
cd/client
./ (our Root Folder)
cd/rtmpserver
```
### Client
Open a Terminal Window and navigate to the first location. On the Command Line, type `npm install` and wait until it installs all dependencies for the client side.

### JSON Server
Repeat the same process; navigate to the specified location and type `npm install`

### RTMP Server
Same as above.

Once you have all dependencies installed, open `three terminal windows` to run the three services required for this app. Every service can be started using `npm start`

## Usage

### Create some streams on the client side.
1 - Open the React App on your local machine at [localhost:3000](http://localhost:3000).

2 - Sign In with your Google Account.

3- Create one or two streams (Just provide a title and a description).

## OBS setup.

First, download the [OBS Studio Program](https://obsproject.com/) and install it in your local machine.

> Once you download it you need to configure your stream service.
On the options provided for `Stream Source` select 'Custom' and provide the `rtmp://localhost/live` URL. Then, provide a *Stream Key*, this is one of the IDs you created on the client side (React App), just put '1'. Apply those changes and select **Okay**.

> On the bottom left options there is a '+' to create a scenery and add a display (One of your Monitors and a Audio Source). Once you configure those, you should be able to see your own screen on the OBS software, now you can click on the right options **Start Streaming**.

## The moment of truth.

Go back to the react application and click on the First Stream you created and it should load the same image as your OBS Software.
