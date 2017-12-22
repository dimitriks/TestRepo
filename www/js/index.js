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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        var captureAudioButton = document.getElementsByClassName("capture-audio");
        var captureVideoButton = document.getElementsByClassName("capture-video");

        if (captureAudioButton.length) {
            captureAudioButton[0].addEventListener("click", this.onClickCaptureAudioButton.bind(this), false);
        }
        if (captureVideoButton) {
            captureVideoButton[0].addEventListener("click", this.onClickCaptureVideoButton.bind(this), false);
        }
    },

    onClickCaptureAudioButton: function () {
        var options = {duration: 10};

        if (!navigator.device) {
            navigator.notification.alert("navigator.device  undefined", null, "Error");
            return;
        }
        navigator.device.capture.captureAudio(
            this.captureSuccess, this.captureError, [options]
        );
    },

    onClickCaptureVideoButton: function () {
        var options = {duration: 10};

        if (!navigator.device) {
            navigator.notification.alert("navigator.device  undefined", null, "Error");
            return;
        }
        navigator.device.capture.captureVideo(
            this.captureVideoSuccess, this.captureError, [options]
        );
    },

    captureSuccess: function (e) {
        console.log('captureSuccess');
        // console.dir(e);
        //
        // var sound = {};
        // sound.file = e[0].localURL;
        // sound.filePath = e[0].fullPath;
        //
        // if (!sound.file) {
        //     navigator.notification.alert("Record a sound first.", null, "Error");
        //     return;
        // }
        //
        //
        // var media = new Media(sound.file, function () {
        //     media.release();
        // }, function (err) {
        //     console.log("media err", err);
        // });
        //
        // media.play();
    },


    captureVideoSuccess: function (e) {
        console.log('captureVideoSuccess');
        // console.dir(e);
        //
        // var video = {};
        // video.file = e[0].localURL;
        // video.filePath = e[0].fullPath;
        //
        //
        // if (!video.file) {
        //     navigator.notification.alert("Record a video first.", null, "Error");
        //     return;
        // }
        //
        // function completeCallback() {
        //     console.log(' VideoPlayer completeCallback');
        // }
        //
        // function errorCallback(e) {
        //     console.log(' VideoPlayer errorCallback ', e);
        // }
        //
        // var options = {volume: 0.5};
        // VideoPlayer.play(video.file, [options], [completeCallback], [errorCallback]);
    },

    captureError: function (e) {
        console.log('captureError ', e);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {


        console.log('Received Event: ' + id);
    }
};

app.initialize();