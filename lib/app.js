$designSelect = $('#designSelect');
$sizeSelect = $('#sizeSelect');
$languageSelect = $('#languageSelect');
$bookmarkPreview = $('#bookmarkPreview');
$printBookmark = $('#printBookmark');

function printImg(url) {
    var win = window.open('');
    win.document.write('<img src="' + url + '" onload="window.print();window.close()" />');
    win.focus();
}

$('select').on('change', function() {
    if ($languageSelect.val() == 'English') {
        if ($designSelect.val() == 'colored1') {
            $bookmarkPreview.attr('src', 'lib/img/bookmarks/color-en-1.jpg').prop('alt', 'Image of Colored 1 Bookmark');
        }
        else if($designSelect.val() == 'blackWhite1') {
            $bookmarkPreview.attr('src', 'lib/img/bookmarks/bw-en-1.jpg').prop('alt', 'Image of Black and White 1 Bookmark');
        }
    }
});

$($printBookmark).click(() => {
    if ($languageSelect.val() == 'English') {
        if ($designSelect.val() == 'colored1') {
            printImg('lib/img/bookmarks/color-en-1.jpg');
        }
        else if($designSelect.val() == 'blackWhite1') {
            printImg('lib/img/bookmarks/bw-en-1.jpg');
        }
    }
});