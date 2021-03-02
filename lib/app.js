$designSelect = $('#designSelect');
$sizeSelect = $('#sizeSelect');
$languageSelect = $('#languageSelect');
$bookmarkPreview = $('#bookmarkPreview');

$('select').on('change', function() {
    if ($designSelect.val() == 'colored1'){
        $bookmarkPreview.attr('src', 'lib/img/bookmarks/color-1.jpg').prop('alt', 'Image of Colored 1 Bookmark');
    }
    else if($designSelect.val() == 'blackWhite1') {
        $bookmarkPreview.attr('src', 'lib/img/bookmarks/bw-1.jpg').prop('alt', 'Image of Black and White 1 Bookmark');
    }
  });