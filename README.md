# ZoomProject
You know how on Zoom when another person has their camera off it just displays their name?

Well, this application tries to recreate this with one major difference. (other than the font and background is off - it’s hard to find free fonts!) 

The major difference is that the name displayed bounces around. Just like the DVD logo bouncing around the screen [here](https://www.youtube.com/watch?v=5mGuCdlCcNM).

To do this:
1. Download all files locally. 
2. Using any text editor edit line 8 in sketch.js and put the text you want displayed. 
3. Download git and install node. 
1a. See the Coding Train's tutorial [here](https://www.youtube.com/watch?v=_sLgRBrZh6o) and [here](https://www.youtube.com/watch?v=FjWbUK2HdCo) to install git and node. You could use the server package he used in the video or the one in next step. 
4. Using the direction on the site [live-server](https://www.npmjs.com/package/live-server), install that node package.
5. Steps 3-4 are ways to create a local server, so if you already know how to do that, just to that!
6. Run your local server in this project's directory (on your computer). 
7. Download [OBS](https://obsproject.com/). 
8. Within OBS create a new "Browser" source, put the link to the server as the URL. Adjust the size and everything to fit the screen.
9. Click "Virtual Camera" to start a "fake" camera. 
10. Open Zoom, and in the Video settings, there should be an option to select different cameras. Select "OBS Virtual Camera" (you might have to log-out and log-in from Zoom if you don't see it). Make sure to turn off any virtual background stuff if you have it on.
11. Done!

These directions should work as of March 2021. 

