 $(document).ready(function() {
     $(".styles").click(function() {
         console.log('clicked')
         style = this.id;
         switch (style) {
             case "reset":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="stili.css"]').removeAttr('disabled');

                 break;
             case "1700":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                //  $('link[href="stili.css"]').attr('disabled', 'true');
                 $('link[href="1700.css"]').removeAttr('disabled');


                 break;
             case "1800":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                //  $('link[href="stili.css"]').attr('disabled', 'true');
                 $('link[href="1800.css"]').removeAttr('disabled');

                 break;
             case "1900":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                //  $('link[href="stili.css"]').attr('disabled', 'true');
                 $('link[href="1900.css"]').removeAttr('disabled');

                 break;

             default:
                 console.log("ti prego non comparire");
         }
     });
 });