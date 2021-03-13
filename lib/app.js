$designSelect = $('#designSelect');
$sizeSelect = $('#sizeSelect');
$languageSelect = $('#languageSelect');
$bookmarkPreview = $('#bookmarkPreview');
$printBookmarkButton = $('#printBookmarkButton');

function printImg(url) {
    var win = window.open('');
    win.document.write('<img src="' + url + '" onload="window.print();window.close()" />');
    win.focus();
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function selectChange(languageSelect, designSelect, bookmarkPreview) {
    let language = languageSelect.val();
    let design = designSelect.val();
    bookmarkPreview.attr('src', `lib/img/bookmarks/${language}-${design}.jpg`).prop('alt', `Image of ${capitalize(language)} ${capitalize(design)} Bookmark`);
}

function printBookmark(languageSelect, designSelect) {
    let language = languageSelect.val();
    let design = designSelect.val();
        printImg(`lib/img/bookmarks/${language}-${design}.jpg`);
}

$('select').on('change', function() {
    selectChange($languageSelect, $designSelect, $bookmarkPreview);
});

$($printBookmarkButton).click(() => {
    printBookmark($languageSelect, $designSelect);
});