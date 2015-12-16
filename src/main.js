require('es6-promise').polyfill()
require('match-media')
require('window.requestanimationframe')

var Doc = require('./models/doc')
var Backbone = require('backbone')
var Litewrite = require('./litewrite')
var Router = require('./router')
var utils = require('./utils')

// this way we can prevent remotestorage from stealing the url hash
var originalHash = window.location.hash

utils.handleAppcacheUpdates()

var litewrite = new Litewrite()
  .on('ready', startHistory)

litewrite.router = new Router({ litewrite: litewrite })

function startHistory () {
  window.location.hash = originalHash
  Backbone.history.start()
}

function createNewNote(url) {
    var doc = litewrite.docs.addNew();
    doc.content = url;
    doc.attributes.content = url;
    doc.updateTitle(doc);
    doc.updateLastEdited(doc);
    litewrite.open(doc);
}

function manageIntent () {
        window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_TEXT, function (url) {
            if (url) {
                createNewNote(url);
               }
            }, function() { });
        
        window.plugins.webintent.getUri(function(url) {
            if(url) {
                createNewNote(url); 
            }
        });
}

document.addEventListener('deviceready', function() {
    if (window.plugins && window.plugins.webintent) {
        manageIntent();
    }


    window.plugins.webintent.onNewIntent(function(url) {
        if (url) {
            createNewNote(url);
        }
    });
}, false);
 
