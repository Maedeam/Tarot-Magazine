$(document).ready(main);

function main() {
    var jsonArticle = {
        "articles": [{
                "number": "1",
                "title": "A Sociology of Tarot",
                "url": "article1.html",
                "box": "article1_box",
                "author": "Mike Soteric",
                "authordescription": "none",
                "date_article": "December 1, 2020"
            },
            {
                "number": "2",
                "title": "TAROT IN BOLOGNA: DOCUMENTS FROM THE UNIVERSITY LIBRARY",
                "url": "article2.html",
                "box": "article2_box",
                "author": "Franco Pratesi",
                "authordescription": "none",
                "date_article": "May 13, 2020"

            },
            {
                "number": "3",
                "title": "THE CARDINAL IMPORTANCE OF NAMES",
                "url": "article3.html",
                "box": "article3_box",
                "author": "Colleen Walsh",
                "authordescription": "none",
                "date_article": "May 14, 2020"

            }
        ]
    };
    addArticles(jsonArticle);


    function addArticles(obj) {

        for (i in obj.articles) {
            $("#infobox" + obj.articles[i].number + " .card-title").text(obj.articles[i].title);
            $("#infobox" + obj.articles[i].number + " #cauthor").text("Author: " + obj.articles[i].author);
            $("#infobox" + obj.articles[i].number + " #authordescr").text("Author description: " + obj.articles[i].authordescription);
            $("#infobox" + obj.articles[i].number + " #date_article").text("Date of publication: " + obj.articles[i].date_article);

        }

    }



}