!function() {
    var API_URL = "http://dxproxy.devexpress.com:32580/api/flights/",
        MAX_ATTEMPTS_COUNT = 15,
        USE_JSONP = !window.WinJS;

    var searchIsCompleted = function(event, ui) {
        $(event.target).removeClass("ui-autocomplete-loading");
    };

    var airportCodesForLocation = function(location, callback) {        
        // YQL is used as JSON to JSONP proxy
        var url = "http://airportcode.riobard.com/search?q=" + encodeURIComponent(location) + "&fmt=JSON";
        $.ajax({
            dataType: "jsonp",
            url: "http://query.yahooapis.com/v1/public/yql",
            data: {
                q: "select * from json where url=\"" + url + "\"",
                format: "json"
            },
            success: function(data) {
                
                var results = data.query.results;
                if(results) {
                    var onlyUSCities = $.grep(results.json.json ? results.json.json : [results.json] || [], function (result) {
                        return /United States/.test(result.location);
                    });
                    
                    callback(onlyUSCities.slice(0, 10));
                }
                else
                    $("input").removeClass("ui-autocomplete-loading");
            }
        });
    };

    var airportAutocompleteSource = function(request, response) {
        airportCodesForLocation(request.term, function (airports) {
            var options = $.map(airports || [], function(a) {
                return {
                    label: a.name + ", " + a.location,
                    value: a.location,
                    code: a.code
                };
            });
            response(options);
        });
    };

    var pullFlights = function(instanceId, callback, attemptNumber) {
        attemptNumber = attemptNumber || 0;
        $.ajax({
            url: API_URL + "pull.html",
            dataType: USE_JSONP ? "jsonp" : "json",
            data: {
                format: "json",
                instanceId: instanceId,
                rand: 1
            }
        }).done(function(data) {
            var shouldStop = data.response.pendingResults == "true" && data.response.itineraries.length > 1 || attemptNumber > MAX_ATTEMPTS_COUNT;
            if(!shouldStop) {
                setTimeout(function() {
                    pullFlights(instanceId, callback, 1 + attemptNumber);
                }, 5000);
            }
            else
                callback(data.response);
        });
    };

    var searchFlight = function(params, callback) {
        var cabinClass = params.cabinClass || "Economy";
        $.ajax({
            url: API_URL + "startSearch.html",
            dataType: USE_JSONP ? "jsonp" : "json",
            data: {
                format: "json",
                fromLocation: params.from,
                toLocation: params.to,
                tripType: "roundTrip",
                cabinClass: cabinClass,
                inboundDate: params.inboundDate,
                outboundDate: params.outboundDate,
                numAdults: "1",
                ts_code: "a7557"
            }
        }).done(function(response) {
            if(!response.error) {
                sessionStorage.setItem("wegoInstanceId", response.request.instanceId);
                pullFlights(response.request.instanceId, callback);
            }
            else {
                callback([]);
            }
        });
    };

    var flightItinerary = function(params, callback) {
        $.ajax({
            url: API_URL + "details.html",
            dataType: USE_JSONP ? "jsonp" : "json",
            data: {
                format: "json",
                instanceId: sessionStorage.getItem("wegoInstanceId"),
                itineraryId: params.itineraryId,
                outboundDate: params.outboundDate,
                inboundDate: params.inboundDate
            }
        }).done(function(response) {
            callback(response);
        });
    };

    DXTravel.FlightUtils = {
        airportAutocompleteSource: airportAutocompleteSource,
        searchFlight: searchFlight,
        flightItinerary: flightItinerary,
        searchIsCompleted: searchIsCompleted
    };

}();