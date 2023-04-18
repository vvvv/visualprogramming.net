/**
 * Based on:
 * DSGVO Video Embed, v1.1.0
 * (c) 2021 Arndt von Lucadou
 * MIT License
 * https://github.com/a-v-l/dsgvo-video-embed
 */

 (function () {
    // Config

    const youtube = document.getElementById('youtubeBlocker').innerHTML;
    const vimeo = document.getElementById('vimeoBlocker').innerHTML;

    var text = {
        youtube: youtube,
        vimeo: vimeo
    };


    window.video_iframes = [];
    document.addEventListener("DOMContentLoaded", function () {

        const videosEnabled = localStorage.getItem('videosEnabled');
        if (videosEnabled == "true")
        {
            const frames = document.getElementsByTagName('iframe');
            for (const f of frames)
            {
               f.src = f.src || f.dataset.src;
               f.removeAttribute('data-src');
            }
            return;
        }

        var video_frame, wall, video_platform, video_src, video_id;
        for (var i = 0, max = window.frames.length - 1; i <= max; i += 1) {
            video_frame = document.getElementsByTagName('iframe')[0];
            video_src = video_frame.src || video_frame.dataset.src;
            // Only process video iframes [youtube|vimeo]
            if (video_src.match(/youtube|vimeo/) == null) {
                continue;
            }

            video_iframes.push(video_frame);
            wall = document.createElement('article');

            // Prevent iframes from loading remote content
            if (!!video_frame.src) {
                if (typeof (window.frames[0].stop) === 'undefined') {
                    setTimeout(function () {
                        window.frames[0].execCommand('Stop');
                    }, 1000);
                } else {
                    setTimeout(function () {
                        window.frames[0].stop();
                    }, 1000);
                }
            }
            video_platform = video_src.match(/vimeo/) == null ? 'youtube' : 'vimeo';
            video_id = video_src.match(/(embed|video)\/([^?\s]*)/)[2];
            wall.setAttribute('class', 'video-wall embed-responsive-item text-center');
            wall.setAttribute('data-index', i);

            wall.innerHTML = text[video_platform].replace(/\%id\%/g, video_id);
            video_frame.parentNode.replaceChild(wall, video_frame);
            document.querySelectorAll('.video-wall .playButton')[i].addEventListener('click', function () {
                if (this.parentNode.querySelector('input[name="rememberchoice"]').checked)
                {
                    localStorage.setItem('videosEnabled', 'true');
                    playAllVideos();
                }
                else
                {
                    playVideo(this.parentNode.parentNode);
                }    
            }, false);
        }

        function playVideo(video_frame)
        {
            index = video_frame.dataset.index;
            if (!!video_iframes[index].dataset.src) {
                video_iframes[index].src = video_iframes[index].dataset.src;
                video_iframes[index].removeAttribute('data-src');
            }
            video_iframes[index].src = video_iframes[index].src.replace(/www\.youtube\.com/, 'www.youtube-nocookie.com');
            video_frame.parentNode.replaceChild(video_iframes[index], video_frame); 
        }

        function playAllVideos()
        {
            document.querySelectorAll('.video-wall .playButton').forEach (el =>{
                playVideo(el.parentNode.parentNode);
            })
        }
    });
})();