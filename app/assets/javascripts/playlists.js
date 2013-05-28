

$(document).ready(function() {

  window.onYouTubePlayerAPIReady = function() {
    if ($(".video-player #youtube-id")) {
      var id = $(".video-player #youtube-id").html();
      new YT.Player('player_' + id, {
        events: {
          'onStateChange': function(event) {
            if (event.data == YT.PlayerState.ENDED) {
              if ($("#next-lyric-id") && $("#next-lyric-id").val()) {
                window.location = window.location.pathname + "?lyric_id=" + $("#next-lyric-id").val();
              }
              // forward them to the next video
            }
          }
        }
      });
    }
  };

  var options = {
    source: "/lyrics/search.json",
    select: function(event, ui) {
      $(this).prevAll(".lyric_id").val(ui.item.id);
    }
  };

  $(".lyric_id_search").autocomplete(options);

  $(document).on("focus", ".lyric_id_search:not(.ui-autocomplete-input)", function (event) {
    $(this).autocomplete(options);
  });
  
});

function remove_fields(link) {
  $(link).parent(".field").remove();
}

function add_fields(link, association, content) {
  var html = '<div class="field">';
  html += '<label for="playlist_lyric_ids_list_">Lyric ID: </label>';
  html += '<input class="lyric_id" id="playlist_lyric_ids_list_" name="playlist[lyric_ids_list][]" type="hidden" value="">';
  html += '<input class="lyric_id_search" type="text" value="">';
  html += ' <a href="#" onclick="remove_fields(this); return false;">remove</a>';
  html += '</div>';
  
  $(link).before(html);
}

