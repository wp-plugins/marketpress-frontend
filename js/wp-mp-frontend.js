jQuery(document).ready(function($) {

           jQuery('#downloadable').live("click", function() {
       if (this.checked) {
        jQuery('#downloadupload').show();
                         }
       else {
        jQuery('#downloadupload').hide();
                         }
 });

});