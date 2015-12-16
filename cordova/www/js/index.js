/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.addEventListener('resume', app.handleIntent, false);
        app.handleIntent();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

    handleIntent: function() {
        /*if (window.plugins && window.plugins.webintent) {
            window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_TEXT, function (url) {
                if (url) {
                    var doc = new Doc();
                    doc.content = url;
                    doc.updateTitle();
                    litewrite.openOnCreate(doc)
                    alert(url);}
                }, function() { //Fail
                    //console.log('no ')
                });
        } */ 
        /*webintent.onNewIntent(function(intent, test) {
                  console.log("new intent event detected", intent, test);
                        webintent.hasExtra(webintent.EXTRA_TEXT, function(hasExtra) {
                                    if(hasExtra){
                                                  console.log("Intent passed, handling that way");
                                                          }
                                          });
                            });

            //handle app invoke via activity
                window.plugins.webintent.getUri(function(invokeUrl) {
                      console.log("[INTENT] handleAndroidOpen: " +
                     invokeUrl);});
        */
    }    
};

app.initialize();
