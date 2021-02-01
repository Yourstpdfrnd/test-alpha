let App = (function () {

  'use strict';

  let gallery = $('#roku');

  let Gallery = {
    
    switch: function(trigger, imgContainer) {
      let src = trigger.attr('href'),
      thumbs = trigger.siblings(),
			img = trigger.parent().prev().children();
      
      trigger.addClass('is-active');
      
      thumbs.each(function() {
        if( $(this).hasClass('is-active') ) {
          $(this).removeClass('is-active');
        }
      });

      img.attr('src', src);
    }
  };


  function init() {
    gallery.delegate('a', 'click', function(event) {
      let trigger = $(this);
      let triggerData = trigger.data("gallery");
        if ( triggerData === 'thumb') {
        let imgContainer = trigger.parent().siblings();
        Gallery.switch(trigger, imgContainer);
      } else {
        return;
      }

      event.preventDefault();
    });

  }

  return {
    init: init
  };

})();

App.init();