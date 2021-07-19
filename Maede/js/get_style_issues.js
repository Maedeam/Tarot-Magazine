//  $(document).ready(function() {
//      $(".styles").click(function() {
//          console.log('clicked', this.id)
//          style = this.id;
//          switch (style) {
//              case "M-articles-Default":
//                  $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
//                  $('link[href="M-articles-Default"]').removeAttr('disabled');

//                  break;
//              case "M-articles-1700":
//                  $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
//                 //  $('link[href="M-articles-Default"]').attr('disabled', 'true');
//                  $('link[href="M-articles-1700"]').removeAttr('disabled');


//                  break;
//              case "M-articles-1800":
//                  $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
//                 //  $('link[href="M-articles-Default"]').attr('disabled', 'true');
//                  $('link[href="M-articles-1800"]').removeAttr('disabled');

//                  break;
//              case "M-articles-1900":
//                  $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
//                 //  $('link[href="M-articles-Default"]').attr('disabled', 'true');
//                  $('link[href="M-articles-1900"]').removeAttr('disabled');

//                  break;
//              case "M-articles-2021":
//                  $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
//                 //  $('link[href="M-articles-Default"]').attr('disabled', 'true');
//                  $('link[href="M-articles-2021"]').removeAttr('disabled');

//                  break;

//              default:
//                  console.log("ti prego non comparire");
//          }
//      });
//  });

 $(document).ready(function() {
     $(".styles").click(function() {
         console.log('clicked')
         style = this.id;
         switch (style) {
             case "default":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/default.css"]').removeAttr('disabled');

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
             case "home2021":
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/main.css"]').attr('disabled', 'true');
                 $('link[href="assets/css/home2021.css"]').removeAttr('disabled');

                 break;

             default:
                 $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
                 $('link[href="assets/css/default.css"]').removeAttr('disabled');
         }
     });
 });