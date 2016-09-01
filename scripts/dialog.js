$(document).ready(function () {

  var modalDialogManipulationCssClass;
  var originalViewportContent;

  setupModalDialog()

  function setupModalDialog() {
    modalDialogManipulationCssClass = getModalDialogManipulationClass();
    $('html').addClass(getModalDialogManipulationClass)

    originalViewportContent = getOrCreateViewportMetaTag().attr('content');
    getOrCreateViewportMetaTag().attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

    $('#baufilead-dialog-close-button').click(function () {
      cleanUpDialog();
    });

  }

  function cleanUpDialog() {
    $('#modal-dialog').remove();
    $('html').removeClass(modalDialogManipulationCssClass);
    getOrCreateViewportMetaTag().attr('content', originalViewportContent);
  }

  function getOrCreateViewportMetaTag() {
    var result = $('meta[name=viewport]');
    if (result.length == 0) {
      result = $('<meta name="viewport" content=""/>');
      $('head').append(result);
    }
    return result.last();
  }

  function getModalDialogManipulationClass() {
    var suffix = isIosUserAgent(window.navigator.userAgent) ? '-ios' : '';
    return 'baufilead-html-manipulation-fuer-dialog' + suffix;
  }

  function isIosUserAgent(userAgent) {
    return userAgent != null && userAgent.match(/iPhone|iPad|iPod/i) != null;
  }

});


