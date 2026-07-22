/* Reduced motion for autoplaying video.
   The CSS `prefers-reduced-motion` query can only reach animations and transitions.
   It cannot stop a <video autoplay loop>, so that part is done here.

   The markup keeps `autoplay loop`, which means the no-JS case behaves exactly as it
   did before: video plays. This script only ever takes motion away, never adds it. */
(function () {
  if (!window.matchMedia) return;

  var query = window.matchMedia('(prefers-reduced-motion: reduce)');

  function apply() {
    var videos = document.getElementsByTagName('video');

    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];

      if (query.matches) {
        /* Drop the attribute as well as the property: a video that has not started
           buffering yet would otherwise still autoplay once it has enough data. */
        video.removeAttribute('autoplay');
        video.autoplay = false;
        video.loop = false;
        video.pause();
      } else {
        /* Restore looping if the setting is turned back off mid-session. Playback is
           deliberately not resumed: the visitor may have paused it on purpose, and
           starting motion under someone's cursor is the thing this file exists to
           prevent. The controls are right there. */
        video.loop = true;
      }
    }
  }

  apply();

  /* Respond to the OS setting changing after load. addEventListener is the current
     API; addListener is the deprecated one Safari needed for a long time. */
  if (query.addEventListener) {
    query.addEventListener('change', apply);
  } else if (query.addListener) {
    query.addListener(apply);
  }
})();
