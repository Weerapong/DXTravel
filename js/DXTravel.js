!function() {

    var MS_PER_MINUTE = 60000,
        MS_PER_DAY = 86400000,
        global = this;

    var BaseTripViewModel = DevExpress.Class.inherit({

        ctor: function(trip) {
            this.id = trip.id;
            this.location = trip.location;
            this.title = this.location;

            this.dates = formatDateRange(trip.startDate, trip.endDate);
            this.days = Math.ceil((trip.endDate - trip.startDate) / MS_PER_DAY);

            // TODO: remove???
            this.travelers = trip.travelers || [];

            this.flights = $.map(trip.flights || [], $.proxy(this._flightToFlightModel, this));

            // TODO: remove???
            this.appointments = $.map(trip.appointments || [], $.proxy(this._appointmentToAppointmentsModel, this));
            this.tripAppointments = ko.observableArray();
            this.tripTravelers = ko.observableArray();
            this._getTripAppointments.call(this, trip);
            this._getTripTravelers.call(this, trip);
        },

        getConfirmedTravelers: function() {
            return $.grep(this.tripTravelers() || [], function (t) {
                return !t.pending;
            });
        },

        getPendingTravelers: function() {
            return $.grep(this.tripTravelers() || [], function (t) {
                return t.pending;
            });
        },

        _flightToFlightModel: function(flight) { 
            return flight;
        },

        _appointmentToAppointmentsModel: function(appointment) {
            return appointment;
        },

        _getTripAppointments: function (trip) {
            var self = this;
            DXTravel.db.appointments.load({
                filter: ["trip_id", trip.id],
                sort: "date"
            }).done(
                function (response) {
                    self.tripAppointments($.map(response || [], $.proxy(self._appointmentToAppointmentsModel, self)));
                }
            );
        },

        _getTripTravelers: function (trip) {
            var self = this;
            DXTravel.db.travelers.load({
                filter: ["trip_id", trip.id]
            }).done(
                function (response) {
                    self.tripTravelers(response);
                }
            );
        }

    });

    var tripById = function(id, callback) {
        DXTravel.db.trips
            .load({
                filter: ["id", id]
            })
            .done(function(trips) {
                var trip = trips[0];
                if(trip)
                    callback(trip);
            });
    };

    var calcTimeTraveled = function(trips) {
        return DevExpress.data.query(trips)
            .filter("startDate", "<", new Date)
            .groupBy(function(t) {
                return t.startDate.getFullYear();
            })
            .select(function(group) {
                var days = 0;
                $.each(group.items, function() {
                    days += (this.endDate - this.startDate) / MS_PER_DAY
                });
                return {
                    year: group.key,
                    days: days
                }
            })
            .toArray();
    };

    var getNextTrip = function(trips) {
        return DevExpress.data.query(trips)
            .filter("startDate", ">=", new Date)
            .sortBy("startDate")
            .toArray()[0];
    };

    var getUpcomingTrips = function(trips) {
        return DevExpress.data.query(trips)
            .filter("startDate", ">=", new Date)
            .sortBy("startDate")
            .slice(1)
            .toArray();
    };

    var getPastTrips = function(trips) {
        return DevExpress.data.query(trips)
            .filter("startDate", "<", new Date)
            .toArray();
    };

    var formatDateRange = function(from, to) {
        if(from.getMonth() === to.getMonth())
            return Globalize.format(from, "MMM ") + from.getDate() + " - " + to.getDate() + ", " + from.getFullYear();

        return Globalize.format(from, "MMM d, yyyy") + " - " + Globalize.format(to, "MMM d, yyyy");
    };

    var formatTime = function(date) {
        return Globalize.format(date, "h:mm tt");
    };

    var notImplemented = function() {
        alert("Not implemented for the demo");
    };

    global.DXTravel = {
        MS_PER_MINUTE: MS_PER_MINUTE,
        MS_PER_DAY: MS_PER_DAY,

        BaseTripViewModel: BaseTripViewModel,
        tripById: tripById,        

        calcTimeTraveled: calcTimeTraveled,
        
        getNextTrip: getNextTrip,
        getUpcomingTrips: getUpcomingTrips,
        getPastTrips: getPastTrips,

        formatDateRange: formatDateRange,
        formatTime: formatTime,
        notImplemented: notImplemented
    };


}();