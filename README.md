# ATLocal News

An Alexa skill that will stream audio of local news via YouTube's API. Similar to Haystack, but with a focus on Atlanta.

TODO:

### CBS 2 Action News

CBS 2 Action News:
- https://www.youtube.com/playlist?list=PLEdcMQ0ZHXxXgRoTOUYJ31t5XlbyipvDR

Get HTML:
```node
http
```

```javascript
document.getElementsByClassName("pl-video-title-link");
```

Use [YTDL](https://github.com/fent/node-ytdl-core) to stream the video and pipe it back in to the response:

```node
var fs = require('fs');
var ytdl = require('ytdl-core');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
```
