
$(document).ready(function() {
  var options = {
    source: "/lyrics/search.json",
    select: function(event, ui) {
      $(this).prevAll(".lyric_id").val(ui.item.id);
    }
  };

  $(".lyric_id_search").autocomplete(options);

  $(document).on("focus", ".lyric_id_search"/*:not(.ui-autocomplete-input)"*/, function (event) {
    console.log("yeah, bro");
    $(this).autocomplete(options);
  });
  
});

function remove_fields(link) {
  $(link).parent(".field").remove();
}

function add_fields(link, association, content) {
  var html = '<div class="field">';
  html += '<label for="playlist_lyric_ids_">Lyric ID: </label>';
  html += '<input class="lyric_id" id="playlist_lyric_ids_" name="playlist[lyric_ids][]" type="hidden">';
  html += '<input class="lyric_id_search" id="playlist_lyric_ids_" name="playlist[lyric_ids][]" size="30" type="text" value="">';
  html += ' <a href="#" onclick="remove_fields(this); return false;">remove</a>';
  html += '</div>';
  
  $(link).before(html);
}

