import ReactHtmlParser from 'react-html-parser';

export default new class Markdown {
    /*
    *	Markdown v1.0 - Yarflam
    *	Creative Commons - BY:NC:SA - 2015
    */

    constructor () {
        this.movie_enable = false;
    }

    /* Replace the root path by relative */
    noRootPath (md) {
        return md.replace(/!\[([^\]]*)\]\((\/[^\)]*)\)/g, "![$1](.$2)")
            .replace(/\[([^\]]*)\]\((\/[^\)]*)\)/g, "[$1]($2)")
            .replace(/!\((\/[^\)]*)\)/g, "!(.$1)");
    }

    /* Markdown -> HTML (text) */
    text (md, ntab, maxlines) {
        /* Options */
        md = (md == undefined ? "" : md);
        ntab = (ntab == undefined ? 0 : ntab);
        maxlines = (maxlines == undefined ? 0 : maxlines);
        /* Windows support */
        md = md.replace(new RegExp('('+String.fromCharCode(13)+')','g'),'');
        /* Declare the variables */
        var html = "";
        var tab = this.str_repeat("\t", ntab+1);
        var lines = md.split("\n\n");
        var i, j, k, detectTitles, detectList, detectNumList,
            detectQuote, middleLines, chain, regex;
        /* Translate */
        for(i=0; i < lines.length && (!maxlines || i < maxlines); i++) {
            /* Detection */
            detectTitles = (new RegExp("^#{1,6}(\t| )").test(lines[i]));
            detectList = (new RegExp("^-(\t| )").test(lines[i]));
            detectNumList = (new RegExp("^[0-9]+.(\t| )").test(lines[i]));
            detectQuote = (new RegExp("^>(\t| )").test(lines[i]));
            /* Compare */
            if(detectTitles || detectList || detectNumList || detectQuote) {
                if(detectList) { html += tab+"<ul>\n"; }
                if(detectNumList) { html += tab+"<ol>\n"; }
                if(detectQuote) { html += tab+"<div class=\"quote\">\n"; }
            } else { html += tab+"<p>\n\t"; }
            /* Create lines */
            middleLines = lines[i].split("\n");
            for(j=0; j < middleLines.length; j++) {
                /* Treatments */
                chain = middleLines[j];
                chain = chain.replace(/</g, "&lt;");
                chain = chain.replace(/\t/g, "<span class=\"tab\"></span>");
                chain = chain.replace(/!\[([^\]]*)\]\(([^\)]*)\)/g, "<img src=\"$2\" alt=\"$1\"/>");
                chain = chain.replace(/\[([^\]]*)\]\(([^\)]*)\)/g, "<a href=\"$2\">$1</a>");
                if(this.movie_enable) { chain = chain.replace(/!\(([^\)]*)\)/g, "<iframe width=\"100%\" height=\"400px\" src=\"$1\" frameborder=\"0\" allowfullscreen></iframe>"); }
                chain = chain.replace(/(^|[^\^*])\*{2}([^*]+)\*{2}/g, "$1<b>$2</b>");
                chain = chain.replace(/(^|[^\^*])\*{1}([^*]+)\*{1}/g, "$1<i>$2</i>");
                chain = chain.replace(/(^|[^\^_])_{2}([^_]+)_{2}/g, "$1<s>$2</s>");
                chain = chain.replace(/(^|[^\^_])_([^_]+)_/g, "$1<u>$2</u>");
                chain = chain.replace(/\${2}HOST/g, "./");
                chain = chain.replace(/^-{3}$/g, "<hr/>");
                chain = chain.replace(/\^(.)/g, "$1");
                for(k=1; k < 7; k++) {
                    regex = new RegExp("^#{"+k+"}(\\t| )(.+)$","g");
                    chain = chain.replace(regex, "<h"+k+">$2</h"+k+">"); }
                /* Add list */
                if(detectList || detectNumList) {
                    chain = chain.replace(/^-(\t| )(.+)$/g, "\t<li>$2</li>");
                    chain = chain.replace(/^[0-9]+\.(\t| )(.+)$/g, "\t<li>$2</li>"); }
                /* Quote */
                if(detectQuote) {
                    chain = chain.replace(/^>(\t| )?(.*)$/g, "\t$2"); }
                /* Add the line */
                html += tab+chain;
                /* Carriage return */
                if(!(detectList || detectNumList)) {
                    if(j < (middleLines.length-1)) { html += "<br/>\n"; }
                } else { html += "\n"; }
            }
            if(!(detectList || detectNumList || detectQuote)) {
                html += "\n"+(!detectTitles ? tab+"</p>\n" : "");
            } else {
                if(detectList) { html += tab+"</ul>\n"; }
                if(detectNumList) { html += tab+"</ol>\n"; }
                if(detectQuote) { html += "</div>\n"; }
            }
        }
        return html;
    }

    /* Markdown -> HTML (React DOM) */
    html (md, ntab, maxlines) {
        return ReactHtmlParser(this.text(md, ntab, maxlines));
    }

    str_repeat (data, n) {
        return (new Array(n+1)).join(data);
    }
}
