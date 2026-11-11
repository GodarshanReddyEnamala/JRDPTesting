/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 3242.0, "series": [{"data": [[0.0, 9.0], [0.1, 11.0], [0.2, 11.0], [0.3, 11.0], [0.4, 11.0], [0.5, 12.0], [0.6, 12.0], [0.7, 12.0], [0.8, 12.0], [0.9, 12.0], [1.0, 12.0], [1.1, 12.0], [1.2, 12.0], [1.3, 13.0], [1.4, 13.0], [1.5, 13.0], [1.6, 13.0], [1.7, 13.0], [1.8, 13.0], [1.9, 13.0], [2.0, 13.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 13.0], [2.5, 13.0], [2.6, 13.0], [2.7, 13.0], [2.8, 13.0], [2.9, 14.0], [3.0, 14.0], [3.1, 14.0], [3.2, 14.0], [3.3, 14.0], [3.4, 14.0], [3.5, 14.0], [3.6, 14.0], [3.7, 14.0], [3.8, 14.0], [3.9, 14.0], [4.0, 14.0], [4.1, 14.0], [4.2, 14.0], [4.3, 14.0], [4.4, 14.0], [4.5, 14.0], [4.6, 14.0], [4.7, 14.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 15.0], [5.3, 15.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 15.0], [5.9, 15.0], [6.0, 15.0], [6.1, 15.0], [6.2, 15.0], [6.3, 15.0], [6.4, 15.0], [6.5, 15.0], [6.6, 15.0], [6.7, 15.0], [6.8, 15.0], [6.9, 15.0], [7.0, 15.0], [7.1, 15.0], [7.2, 15.0], [7.3, 15.0], [7.4, 15.0], [7.5, 15.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 15.0], [8.0, 15.0], [8.1, 15.0], [8.2, 15.0], [8.3, 15.0], [8.4, 15.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 16.0], [11.9, 16.0], [12.0, 16.0], [12.1, 16.0], [12.2, 16.0], [12.3, 16.0], [12.4, 16.0], [12.5, 16.0], [12.6, 16.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 17.0], [13.1, 17.0], [13.2, 17.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 17.0], [13.9, 17.0], [14.0, 17.0], [14.1, 17.0], [14.2, 17.0], [14.3, 17.0], [14.4, 17.0], [14.5, 17.0], [14.6, 17.0], [14.7, 17.0], [14.8, 17.0], [14.9, 17.0], [15.0, 17.0], [15.1, 17.0], [15.2, 17.0], [15.3, 17.0], [15.4, 17.0], [15.5, 17.0], [15.6, 17.0], [15.7, 17.0], [15.8, 17.0], [15.9, 17.0], [16.0, 17.0], [16.1, 17.0], [16.2, 17.0], [16.3, 17.0], [16.4, 17.0], [16.5, 17.0], [16.6, 17.0], [16.7, 17.0], [16.8, 17.0], [16.9, 17.0], [17.0, 18.0], [17.1, 18.0], [17.2, 18.0], [17.3, 18.0], [17.4, 18.0], [17.5, 18.0], [17.6, 18.0], [17.7, 18.0], [17.8, 18.0], [17.9, 18.0], [18.0, 18.0], [18.1, 18.0], [18.2, 18.0], [18.3, 18.0], [18.4, 18.0], [18.5, 18.0], [18.6, 18.0], [18.7, 18.0], [18.8, 18.0], [18.9, 18.0], [19.0, 18.0], [19.1, 18.0], [19.2, 18.0], [19.3, 18.0], [19.4, 18.0], [19.5, 18.0], [19.6, 18.0], [19.7, 18.0], [19.8, 18.0], [19.9, 18.0], [20.0, 18.0], [20.1, 18.0], [20.2, 18.0], [20.3, 18.0], [20.4, 18.0], [20.5, 18.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 19.0], [21.1, 19.0], [21.2, 19.0], [21.3, 19.0], [21.4, 19.0], [21.5, 19.0], [21.6, 19.0], [21.7, 19.0], [21.8, 19.0], [21.9, 19.0], [22.0, 19.0], [22.1, 19.0], [22.2, 19.0], [22.3, 19.0], [22.4, 19.0], [22.5, 19.0], [22.6, 19.0], [22.7, 19.0], [22.8, 19.0], [22.9, 19.0], [23.0, 19.0], [23.1, 19.0], [23.2, 19.0], [23.3, 19.0], [23.4, 19.0], [23.5, 19.0], [23.6, 19.0], [23.7, 19.0], [23.8, 19.0], [23.9, 19.0], [24.0, 19.0], [24.1, 19.0], [24.2, 19.0], [24.3, 19.0], [24.4, 19.0], [24.5, 19.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 20.0], [25.1, 20.0], [25.2, 20.0], [25.3, 20.0], [25.4, 20.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 20.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 20.0], [27.2, 20.0], [27.3, 20.0], [27.4, 20.0], [27.5, 20.0], [27.6, 20.0], [27.7, 20.0], [27.8, 20.0], [27.9, 20.0], [28.0, 20.0], [28.1, 20.0], [28.2, 20.0], [28.3, 20.0], [28.4, 20.0], [28.5, 20.0], [28.6, 20.0], [28.7, 21.0], [28.8, 21.0], [28.9, 21.0], [29.0, 21.0], [29.1, 21.0], [29.2, 21.0], [29.3, 21.0], [29.4, 21.0], [29.5, 21.0], [29.6, 21.0], [29.7, 21.0], [29.8, 21.0], [29.9, 21.0], [30.0, 21.0], [30.1, 21.0], [30.2, 21.0], [30.3, 21.0], [30.4, 21.0], [30.5, 21.0], [30.6, 21.0], [30.7, 21.0], [30.8, 21.0], [30.9, 21.0], [31.0, 21.0], [31.1, 21.0], [31.2, 21.0], [31.3, 21.0], [31.4, 21.0], [31.5, 21.0], [31.6, 21.0], [31.7, 21.0], [31.8, 21.0], [31.9, 21.0], [32.0, 21.0], [32.1, 21.0], [32.2, 21.0], [32.3, 21.0], [32.4, 22.0], [32.5, 22.0], [32.6, 22.0], [32.7, 22.0], [32.8, 22.0], [32.9, 22.0], [33.0, 22.0], [33.1, 22.0], [33.2, 22.0], [33.3, 22.0], [33.4, 22.0], [33.5, 22.0], [33.6, 22.0], [33.7, 22.0], [33.8, 22.0], [33.9, 22.0], [34.0, 22.0], [34.1, 22.0], [34.2, 22.0], [34.3, 22.0], [34.4, 22.0], [34.5, 22.0], [34.6, 22.0], [34.7, 22.0], [34.8, 22.0], [34.9, 22.0], [35.0, 22.0], [35.1, 22.0], [35.2, 22.0], [35.3, 22.0], [35.4, 22.0], [35.5, 22.0], [35.6, 22.0], [35.7, 22.0], [35.8, 22.0], [35.9, 22.0], [36.0, 23.0], [36.1, 23.0], [36.2, 23.0], [36.3, 23.0], [36.4, 23.0], [36.5, 23.0], [36.6, 23.0], [36.7, 23.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 23.0], [37.4, 23.0], [37.5, 23.0], [37.6, 23.0], [37.7, 23.0], [37.8, 23.0], [37.9, 23.0], [38.0, 23.0], [38.1, 23.0], [38.2, 23.0], [38.3, 23.0], [38.4, 23.0], [38.5, 23.0], [38.6, 23.0], [38.7, 23.0], [38.8, 23.0], [38.9, 23.0], [39.0, 23.0], [39.1, 23.0], [39.2, 24.0], [39.3, 24.0], [39.4, 24.0], [39.5, 24.0], [39.6, 24.0], [39.7, 24.0], [39.8, 24.0], [39.9, 24.0], [40.0, 24.0], [40.1, 24.0], [40.2, 24.0], [40.3, 24.0], [40.4, 24.0], [40.5, 24.0], [40.6, 24.0], [40.7, 24.0], [40.8, 24.0], [40.9, 24.0], [41.0, 24.0], [41.1, 24.0], [41.2, 24.0], [41.3, 24.0], [41.4, 24.0], [41.5, 24.0], [41.6, 24.0], [41.7, 24.0], [41.8, 24.0], [41.9, 24.0], [42.0, 24.0], [42.1, 24.0], [42.2, 24.0], [42.3, 25.0], [42.4, 25.0], [42.5, 25.0], [42.6, 25.0], [42.7, 25.0], [42.8, 25.0], [42.9, 25.0], [43.0, 25.0], [43.1, 25.0], [43.2, 25.0], [43.3, 25.0], [43.4, 25.0], [43.5, 25.0], [43.6, 25.0], [43.7, 25.0], [43.8, 25.0], [43.9, 25.0], [44.0, 25.0], [44.1, 25.0], [44.2, 25.0], [44.3, 25.0], [44.4, 25.0], [44.5, 25.0], [44.6, 25.0], [44.7, 25.0], [44.8, 25.0], [44.9, 25.0], [45.0, 25.0], [45.1, 26.0], [45.2, 26.0], [45.3, 26.0], [45.4, 26.0], [45.5, 26.0], [45.6, 26.0], [45.7, 26.0], [45.8, 26.0], [45.9, 26.0], [46.0, 26.0], [46.1, 26.0], [46.2, 26.0], [46.3, 26.0], [46.4, 26.0], [46.5, 26.0], [46.6, 26.0], [46.7, 26.0], [46.8, 26.0], [46.9, 26.0], [47.0, 26.0], [47.1, 26.0], [47.2, 26.0], [47.3, 26.0], [47.4, 26.0], [47.5, 26.0], [47.6, 26.0], [47.7, 26.0], [47.8, 27.0], [47.9, 27.0], [48.0, 27.0], [48.1, 27.0], [48.2, 27.0], [48.3, 27.0], [48.4, 27.0], [48.5, 27.0], [48.6, 27.0], [48.7, 27.0], [48.8, 27.0], [48.9, 27.0], [49.0, 27.0], [49.1, 27.0], [49.2, 27.0], [49.3, 27.0], [49.4, 27.0], [49.5, 27.0], [49.6, 27.0], [49.7, 27.0], [49.8, 27.0], [49.9, 27.0], [50.0, 27.0], [50.1, 27.0], [50.2, 28.0], [50.3, 28.0], [50.4, 28.0], [50.5, 28.0], [50.6, 28.0], [50.7, 28.0], [50.8, 28.0], [50.9, 28.0], [51.0, 28.0], [51.1, 28.0], [51.2, 28.0], [51.3, 28.0], [51.4, 28.0], [51.5, 28.0], [51.6, 28.0], [51.7, 28.0], [51.8, 28.0], [51.9, 28.0], [52.0, 28.0], [52.1, 28.0], [52.2, 29.0], [52.3, 29.0], [52.4, 29.0], [52.5, 29.0], [52.6, 29.0], [52.7, 29.0], [52.8, 29.0], [52.9, 29.0], [53.0, 29.0], [53.1, 29.0], [53.2, 29.0], [53.3, 29.0], [53.4, 29.0], [53.5, 29.0], [53.6, 29.0], [53.7, 29.0], [53.8, 29.0], [53.9, 29.0], [54.0, 29.0], [54.1, 29.0], [54.2, 29.0], [54.3, 29.0], [54.4, 30.0], [54.5, 30.0], [54.6, 30.0], [54.7, 30.0], [54.8, 30.0], [54.9, 30.0], [55.0, 30.0], [55.1, 30.0], [55.2, 30.0], [55.3, 30.0], [55.4, 30.0], [55.5, 30.0], [55.6, 30.0], [55.7, 30.0], [55.8, 30.0], [55.9, 30.0], [56.0, 30.0], [56.1, 30.0], [56.2, 30.0], [56.3, 30.0], [56.4, 31.0], [56.5, 31.0], [56.6, 31.0], [56.7, 31.0], [56.8, 31.0], [56.9, 31.0], [57.0, 31.0], [57.1, 31.0], [57.2, 31.0], [57.3, 31.0], [57.4, 31.0], [57.5, 31.0], [57.6, 31.0], [57.7, 31.0], [57.8, 31.0], [57.9, 31.0], [58.0, 31.0], [58.1, 31.0], [58.2, 31.0], [58.3, 31.0], [58.4, 31.0], [58.5, 32.0], [58.6, 32.0], [58.7, 32.0], [58.8, 32.0], [58.9, 32.0], [59.0, 32.0], [59.1, 32.0], [59.2, 32.0], [59.3, 32.0], [59.4, 32.0], [59.5, 32.0], [59.6, 32.0], [59.7, 32.0], [59.8, 32.0], [59.9, 32.0], [60.0, 32.0], [60.1, 32.0], [60.2, 32.0], [60.3, 32.0], [60.4, 32.0], [60.5, 33.0], [60.6, 33.0], [60.7, 33.0], [60.8, 33.0], [60.9, 33.0], [61.0, 33.0], [61.1, 33.0], [61.2, 33.0], [61.3, 33.0], [61.4, 33.0], [61.5, 33.0], [61.6, 33.0], [61.7, 33.0], [61.8, 33.0], [61.9, 33.0], [62.0, 33.0], [62.1, 33.0], [62.2, 33.0], [62.3, 34.0], [62.4, 34.0], [62.5, 34.0], [62.6, 34.0], [62.7, 34.0], [62.8, 34.0], [62.9, 34.0], [63.0, 34.0], [63.1, 34.0], [63.2, 34.0], [63.3, 34.0], [63.4, 34.0], [63.5, 34.0], [63.6, 34.0], [63.7, 34.0], [63.8, 35.0], [63.9, 35.0], [64.0, 35.0], [64.1, 35.0], [64.2, 35.0], [64.3, 35.0], [64.4, 35.0], [64.5, 35.0], [64.6, 35.0], [64.7, 35.0], [64.8, 35.0], [64.9, 35.0], [65.0, 35.0], [65.1, 35.0], [65.2, 36.0], [65.3, 36.0], [65.4, 36.0], [65.5, 36.0], [65.6, 36.0], [65.7, 36.0], [65.8, 36.0], [65.9, 36.0], [66.0, 36.0], [66.1, 36.0], [66.2, 36.0], [66.3, 37.0], [66.4, 37.0], [66.5, 37.0], [66.6, 37.0], [66.7, 37.0], [66.8, 37.0], [66.9, 37.0], [67.0, 37.0], [67.1, 37.0], [67.2, 37.0], [67.3, 37.0], [67.4, 37.0], [67.5, 38.0], [67.6, 38.0], [67.7, 38.0], [67.8, 38.0], [67.9, 38.0], [68.0, 38.0], [68.1, 38.0], [68.2, 38.0], [68.3, 38.0], [68.4, 38.0], [68.5, 39.0], [68.6, 39.0], [68.7, 39.0], [68.8, 39.0], [68.9, 39.0], [69.0, 39.0], [69.1, 39.0], [69.2, 39.0], [69.3, 39.0], [69.4, 39.0], [69.5, 39.0], [69.6, 40.0], [69.7, 40.0], [69.8, 40.0], [69.9, 40.0], [70.0, 40.0], [70.1, 40.0], [70.2, 40.0], [70.3, 40.0], [70.4, 40.0], [70.5, 40.0], [70.6, 40.0], [70.7, 41.0], [70.8, 41.0], [70.9, 41.0], [71.0, 41.0], [71.1, 41.0], [71.2, 41.0], [71.3, 41.0], [71.4, 41.0], [71.5, 41.0], [71.6, 41.0], [71.7, 42.0], [71.8, 42.0], [71.9, 42.0], [72.0, 42.0], [72.1, 42.0], [72.2, 42.0], [72.3, 42.0], [72.4, 42.0], [72.5, 42.0], [72.6, 42.0], [72.7, 43.0], [72.8, 43.0], [72.9, 43.0], [73.0, 43.0], [73.1, 43.0], [73.2, 43.0], [73.3, 43.0], [73.4, 43.0], [73.5, 43.0], [73.6, 44.0], [73.7, 44.0], [73.8, 44.0], [73.9, 44.0], [74.0, 44.0], [74.1, 44.0], [74.2, 44.0], [74.3, 44.0], [74.4, 44.0], [74.5, 45.0], [74.6, 45.0], [74.7, 45.0], [74.8, 45.0], [74.9, 45.0], [75.0, 45.0], [75.1, 45.0], [75.2, 45.0], [75.3, 45.0], [75.4, 46.0], [75.5, 46.0], [75.6, 46.0], [75.7, 46.0], [75.8, 46.0], [75.9, 46.0], [76.0, 46.0], [76.1, 46.0], [76.2, 47.0], [76.3, 47.0], [76.4, 47.0], [76.5, 47.0], [76.6, 47.0], [76.7, 47.0], [76.8, 47.0], [76.9, 48.0], [77.0, 48.0], [77.1, 48.0], [77.2, 48.0], [77.3, 48.0], [77.4, 48.0], [77.5, 48.0], [77.6, 48.0], [77.7, 48.0], [77.8, 49.0], [77.9, 49.0], [78.0, 49.0], [78.1, 49.0], [78.2, 49.0], [78.3, 50.0], [78.4, 50.0], [78.5, 50.0], [78.6, 50.0], [78.7, 50.0], [78.8, 50.0], [78.9, 51.0], [79.0, 51.0], [79.1, 51.0], [79.2, 51.0], [79.3, 51.0], [79.4, 51.0], [79.5, 51.0], [79.6, 51.0], [79.7, 52.0], [79.8, 52.0], [79.9, 52.0], [80.0, 52.0], [80.1, 52.0], [80.2, 53.0], [80.3, 53.0], [80.4, 53.0], [80.5, 53.0], [80.6, 53.0], [80.7, 54.0], [80.8, 54.0], [80.9, 54.0], [81.0, 54.0], [81.1, 54.0], [81.2, 55.0], [81.3, 55.0], [81.4, 55.0], [81.5, 55.0], [81.6, 56.0], [81.7, 56.0], [81.8, 56.0], [81.9, 56.0], [82.0, 57.0], [82.1, 57.0], [82.2, 57.0], [82.3, 57.0], [82.4, 57.0], [82.5, 58.0], [82.6, 58.0], [82.7, 58.0], [82.8, 58.0], [82.9, 58.0], [83.0, 59.0], [83.1, 59.0], [83.2, 59.0], [83.3, 60.0], [83.4, 60.0], [83.5, 60.0], [83.6, 60.0], [83.7, 60.0], [83.8, 61.0], [83.9, 61.0], [84.0, 62.0], [84.1, 62.0], [84.2, 62.0], [84.3, 62.0], [84.4, 63.0], [84.5, 63.0], [84.6, 63.0], [84.7, 64.0], [84.8, 64.0], [84.9, 64.0], [85.0, 65.0], [85.1, 65.0], [85.2, 66.0], [85.3, 66.0], [85.4, 66.0], [85.5, 67.0], [85.6, 67.0], [85.7, 68.0], [85.8, 68.0], [85.9, 69.0], [86.0, 69.0], [86.1, 70.0], [86.2, 70.0], [86.3, 71.0], [86.4, 71.0], [86.5, 72.0], [86.6, 72.0], [86.7, 73.0], [86.8, 73.0], [86.9, 74.0], [87.0, 74.0], [87.1, 75.0], [87.2, 76.0], [87.3, 76.0], [87.4, 77.0], [87.5, 77.0], [87.6, 78.0], [87.7, 78.0], [87.8, 79.0], [87.9, 79.0], [88.0, 79.0], [88.1, 80.0], [88.2, 80.0], [88.3, 81.0], [88.4, 81.0], [88.5, 82.0], [88.6, 83.0], [88.7, 83.0], [88.8, 84.0], [88.9, 84.0], [89.0, 85.0], [89.1, 86.0], [89.2, 86.0], [89.3, 87.0], [89.4, 88.0], [89.5, 88.0], [89.6, 90.0], [89.7, 91.0], [89.8, 92.0], [89.9, 93.0], [90.0, 96.0], [90.1, 97.0], [90.2, 98.0], [90.3, 99.0], [90.4, 100.0], [90.5, 101.0], [90.6, 101.0], [90.7, 103.0], [90.8, 103.0], [90.9, 105.0], [91.0, 107.0], [91.1, 109.0], [91.2, 110.0], [91.3, 112.0], [91.4, 114.0], [91.5, 117.0], [91.6, 119.0], [91.7, 121.0], [91.8, 122.0], [91.9, 123.0], [92.0, 124.0], [92.1, 125.0], [92.2, 126.0], [92.3, 128.0], [92.4, 129.0], [92.5, 130.0], [92.6, 132.0], [92.7, 133.0], [92.8, 134.0], [92.9, 137.0], [93.0, 138.0], [93.1, 140.0], [93.2, 141.0], [93.3, 143.0], [93.4, 145.0], [93.5, 146.0], [93.6, 147.0], [93.7, 148.0], [93.8, 151.0], [93.9, 151.0], [94.0, 153.0], [94.1, 154.0], [94.2, 154.0], [94.3, 156.0], [94.4, 158.0], [94.5, 159.0], [94.6, 161.0], [94.7, 162.0], [94.8, 163.0], [94.9, 165.0], [95.0, 166.0], [95.1, 167.0], [95.2, 169.0], [95.3, 172.0], [95.4, 177.0], [95.5, 184.0], [95.6, 188.0], [95.7, 196.0], [95.8, 221.0], [95.9, 228.0], [96.0, 234.0], [96.1, 242.0], [96.2, 247.0], [96.3, 253.0], [96.4, 261.0], [96.5, 273.0], [96.6, 308.0], [96.7, 319.0], [96.8, 331.0], [96.9, 338.0], [97.0, 348.0], [97.1, 362.0], [97.2, 386.0], [97.3, 423.0], [97.4, 478.0], [97.5, 510.0], [97.6, 520.0], [97.7, 552.0], [97.8, 586.0], [97.9, 612.0], [98.0, 629.0], [98.1, 651.0], [98.2, 659.0], [98.3, 664.0], [98.4, 680.0], [98.5, 697.0], [98.6, 705.0], [98.7, 710.0], [98.8, 712.0], [98.9, 725.0], [99.0, 746.0], [99.1, 759.0], [99.2, 773.0], [99.3, 816.0], [99.4, 1034.0], [99.5, 1041.0], [99.6, 1066.0], [99.7, 1191.0], [99.8, 1511.0], [99.9, 1794.0], [100.0, 3242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9036.0, "series": [{"data": [[0.0, 9036.0], [600.0, 64.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 3.0], [700.0, 77.0], [200.0, 85.0], [800.0, 4.0], [3200.0, 1.0], [900.0, 5.0], [1000.0, 27.0], [1100.0, 6.0], [300.0, 63.0], [1200.0, 3.0], [1300.0, 4.0], [1500.0, 9.0], [100.0, 537.0], [400.0, 24.0], [1700.0, 3.0], [1800.0, 1.0], [500.0, 43.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9745.0, "series": [{"data": [[0.0, 9745.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 233.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.287047465808541, "minX": 1.79404494E12, "maxY": 32.90885072655226, "series": [{"data": [[1.79404494E12, 32.90885072655226], [1.794045E12, 10.287047465808541]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.794045E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 23.89896373056996, "minX": 1.0, "maxY": 719.0, "series": [{"data": [[2.0, 29.51304347826087], [3.0, 24.0311203319502], [4.0, 26.16951566951566], [5.0, 23.89896373056996], [6.0, 26.77726750861081], [7.0, 26.69767441860465], [8.0, 31.08882082695254], [9.0, 45.74147217235187], [10.0, 39.26987951807229], [11.0, 37.55710306406685], [12.0, 35.04938271604941], [13.0, 62.717131474103546], [14.0, 45.03816793893128], [15.0, 39.94495412844042], [16.0, 43.81188118811883], [17.0, 51.85000000000001], [18.0, 61.37142857142858], [19.0, 77.46103896103898], [20.0, 76.15384615384613], [21.0, 102.80597014925378], [22.0, 92.85344827586205], [23.0, 82.65957446808505], [24.0, 102.68468468468468], [25.0, 73.95098039215685], [26.0, 85.02298850574712], [27.0, 62.54761904761907], [28.0, 73.11702127659575], [29.0, 51.20224719101124], [30.0, 54.45454545454543], [31.0, 100.61333333333334], [33.0, 69.15686274509805], [32.0, 51.40740740740741], [35.0, 148.54838709677415], [34.0, 68.51851851851852], [37.0, 206.62068965517236], [36.0, 65.78571428571428], [39.0, 114.33333333333333], [38.0, 208.14285714285708], [41.0, 68.97368421052632], [40.0, 101.72727272727272], [43.0, 204.09999999999997], [42.0, 162.20000000000002], [44.0, 312.5999999999999], [45.0, 193.60000000000002], [47.0, 88.8695652173913], [46.0, 146.45833333333331], [49.0, 210.07692307692304], [48.0, 63.94444444444444], [51.0, 194.28571428571428], [50.0, 92.60000000000002], [52.0, 104.50000000000004], [53.0, 102.64705882352942], [55.0, 334.33333333333337], [54.0, 94.2], [56.0, 452.3333333333333], [57.0, 134.0], [58.0, 256.59999999999997], [59.0, 189.16666666666666], [60.0, 437.42857142857144], [61.0, 397.5], [63.0, 426.0], [62.0, 332.0], [67.0, 224.875], [65.0, 243.2], [64.0, 434.8], [66.0, 540.4], [71.0, 279.8], [69.0, 401.6363636363637], [68.0, 276.25], [70.0, 76.0], [75.0, 249.0], [73.0, 262.0], [72.0, 161.8], [74.0, 167.66666666666666], [78.0, 308.0], [79.0, 223.33333333333334], [77.0, 325.1428571428571], [76.0, 368.0], [83.0, 323.75], [82.0, 398.53846153846155], [81.0, 394.3333333333333], [80.0, 169.5], [87.0, 388.2], [86.0, 260.375], [85.0, 312.87500000000006], [84.0, 251.2857142857143], [91.0, 585.9444444444445], [90.0, 143.83333333333334], [88.0, 305.84615384615387], [89.0, 567.7777777777778], [95.0, 272.0], [94.0, 384.375], [92.0, 359.4], [93.0, 648.5], [96.0, 413.0], [97.0, 369.0], [99.0, 601.2], [103.0, 511.2], [101.0, 367.5], [100.0, 427.6666666666667], [107.0, 525.25], [106.0, 481.57142857142856], [105.0, 624.0], [104.0, 367.0], [110.0, 203.8], [109.0, 548.75], [108.0, 400.5], [111.0, 325.66666666666663], [115.0, 197.66666666666669], [114.0, 463.90000000000003], [113.0, 213.66666666666666], [112.0, 497.3333333333333], [119.0, 535.6], [118.0, 424.25], [117.0, 59.0], [116.0, 287.33333333333337], [123.0, 631.0], [122.0, 624.0], [120.0, 82.0], [121.0, 719.0], [127.0, 138.0], [126.0, 418.8], [125.0, 520.0], [124.0, 517.0], [133.0, 204.50000000000003], [130.0, 295.0], [134.0, 253.0], [132.0, 473.6], [131.0, 113.75], [129.0, 430.0], [135.0, 169.5], [128.0, 711.0], [143.0, 77.33333333333334], [142.0, 253.8571428571429], [141.0, 25.0], [140.0, 194.16666666666666], [137.0, 246.58333333333334], [138.0, 247.3529411764706], [136.0, 99.8], [139.0, 419.5], [151.0, 175.0], [150.0, 194.0], [149.0, 182.55555555555554], [147.0, 112.28571428571428], [146.0, 175.8], [145.0, 50.54545454545454], [144.0, 92.53333333333335], [148.0, 128.5], [159.0, 266.0], [158.0, 343.0], [157.0, 423.0], [156.0, 349.6666666666667], [154.0, 429.0], [152.0, 318.75], [164.0, 338.0], [163.0, 266.0], [162.0, 302.5], [160.0, 364.3333333333333], [166.0, 235.0], [165.0, 284.5], [161.0, 429.0], [175.0, 228.4], [174.0, 197.0], [173.0, 237.0], [171.0, 240.8], [172.0, 247.5], [170.0, 249.0], [168.0, 249.0], [183.0, 162.0], [182.0, 164.0], [180.0, 163.0], [179.0, 164.0], [178.0, 179.0], [177.0, 182.0], [176.0, 183.0], [191.0, 198.0], [190.0, 196.0], [188.0, 190.33333333333334], [186.0, 173.0], [185.0, 188.5], [193.0, 259.3333333333333], [1.0, 26.73214285714285]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[18.849299999999992, 62.78939999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 193.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 21132.916666666668, "minX": 1.79404494E12, "maxY": 2376408.8333333335, "series": [{"data": [[1.79404494E12, 1447257.8333333333], [1.794045E12, 2376408.8333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79404494E12, 21132.916666666668], [1.794045E12, 34700.416666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.794045E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 29.905229283990316, "minX": 1.79404494E12, "maxY": 116.78546895640683, "series": [{"data": [[1.79404494E12, 116.78546895640683], [1.794045E12, 29.905229283990316]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.794045E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 24.879485116653306, "minX": 1.79404494E12, "maxY": 94.53632760898311, "series": [{"data": [[1.79404494E12, 94.53632760898311], [1.794045E12, 24.879485116653306]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.794045E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 16.258246178600153, "minX": 1.79404494E12, "maxY": 58.701717305151924, "series": [{"data": [[1.79404494E12, 58.701717305151924], [1.794045E12, 16.258246178600153]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.794045E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 9.0, "minX": 1.79404494E12, "maxY": 3242.0, "series": [{"data": [[1.79404494E12, 3242.0], [1.794045E12, 354.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79404494E12, 246.4000000000001], [1.794045E12, 50.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79404494E12, 1096.1399999999999], [1.794045E12, 118.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79404494E12, 652.0], [1.794045E12, 65.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79404494E12, 10.0], [1.794045E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79404494E12, 40.0], [1.794045E12, 24.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.794045E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 20.0, "minX": 46.0, "maxY": 101.0, "series": [{"data": [[46.0, 32.0], [63.0, 23.0], [74.0, 30.5], [109.0, 20.0], [113.0, 24.0], [112.0, 21.5], [125.0, 24.0], [129.0, 21.0], [131.0, 20.0], [143.0, 27.0], [158.0, 21.0], [157.0, 23.0], [152.0, 25.0], [160.0, 22.0], [195.0, 32.0], [194.0, 23.0], [205.0, 89.0], [201.0, 45.0], [206.0, 39.0], [223.0, 46.5], [225.0, 26.5], [234.0, 22.0], [239.0, 24.0], [238.0, 24.0], [247.0, 22.0], [240.0, 23.0], [244.0, 24.0], [253.0, 37.0], [258.0, 42.0], [266.0, 23.0], [264.0, 23.0], [262.0, 21.0], [285.0, 36.0], [277.0, 38.0], [287.0, 36.0], [278.0, 33.0], [289.0, 22.0], [317.0, 26.0], [319.0, 51.0], [327.0, 35.0], [332.0, 37.0], [383.0, 101.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 383.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 17.0, "minX": 46.0, "maxY": 93.0, "series": [{"data": [[46.0, 25.0], [63.0, 19.0], [74.0, 26.0], [109.0, 17.0], [113.0, 21.0], [112.0, 18.0], [125.0, 21.0], [129.0, 17.0], [131.0, 17.0], [143.0, 23.0], [158.0, 18.0], [157.0, 19.5], [152.0, 21.0], [160.0, 19.0], [195.0, 27.0], [194.0, 20.0], [205.0, 85.0], [201.0, 36.0], [206.0, 31.0], [223.0, 36.0], [225.0, 22.0], [234.0, 18.0], [239.0, 20.0], [238.0, 20.0], [247.0, 18.0], [240.0, 19.0], [244.0, 20.0], [253.0, 30.0], [258.0, 35.0], [266.0, 20.0], [264.0, 20.0], [262.0, 18.0], [285.0, 30.0], [277.0, 31.0], [287.0, 28.0], [278.0, 26.0], [289.0, 19.0], [317.0, 22.0], [319.0, 41.0], [327.0, 28.0], [332.0, 30.0], [383.0, 93.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 383.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 63.53333333333333, "minX": 1.79404494E12, "maxY": 103.13333333333334, "series": [{"data": [[1.79404494E12, 63.53333333333333], [1.794045E12, 103.13333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.794045E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 63.083333333333336, "minX": 1.79404494E12, "maxY": 103.58333333333333, "series": [{"data": [[1.79404494E12, 63.083333333333336], [1.794045E12, 103.58333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.794045E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 63.083333333333336, "minX": 1.79404494E12, "maxY": 103.58333333333333, "series": [{"data": [[1.79404494E12, 63.083333333333336], [1.794045E12, 103.58333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.794045E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 63.083333333333336, "minX": 1.79404494E12, "maxY": 103.58333333333333, "series": [{"data": [[1.79404494E12, 63.083333333333336], [1.794045E12, 103.58333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.794045E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

