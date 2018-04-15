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
var appmap = {
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
        console.log("ler eventos");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        appmap.receivedEvent('deviceready');
        // navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
        navigator.geolocation.getCurrentPosition(appmap.onSuccess, appmap.onError);
        // alert(" Device iniciou" )
        // Dispositivo Iniciou no console
        console.log("Device iniciou");
        
        
    },
    onSuccess: function(position){
        
   
        

                var longitude = position.coords.longitude;
                var latitude = position.coords.latitude;
                var latLong = new google.maps.LatLng(latitude, longitude);
                // alert(" sucesso localizacao" )
                console.log("Conseguiu a localização");
                var mapOptions = {
                    center: latLong,
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
        
                var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
            
                var marker = new google.maps.Marker({
                      position: latLong,
                      map: map,
                      title: 'Minha Localização'
                  });
            },
            onError: function(error){
                console.log("cod erro " + error.code + ". \n" + 
                    "mensagem: " + error.message);
            },
            
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
       
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Evento recebido : ' + id);
        // alert("Recebimento do ReceivedEvent " + ". \n" + 
        // "mensagem: ")
    }
};
