 $(document).ready(function() {
     $(".styles").click(function() {
         console.log('clicked')
         style = this.id;
         switch (style) {
             case "reset":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/main.css"]').removeAttr('disabled');

                 break;
             case "home1700":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/main.css"]').attr('disabled', 'true');
                 $('link[href="assets/css/home1700.css"]').removeAttr('disabled');


                 break;
             case "home1800":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/main.css"]').attr('disabled', 'true');
                 $('link[href="assets/css/home1800.css"]').removeAttr('disabled');

                 break;
             case "home1900":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/main.css"]').attr('disabled', 'true');
                 $('link[href="assets/css/home1900.css"]').removeAttr('disabled');

                 break;

             default:
                 console.log("ti prego non comparire");
         }
     });
 });