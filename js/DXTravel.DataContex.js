!function() {
    var LOCAL_DATA = DXTravel.LOCAL_DATA;

    DXTravel.db = {
        trips: new DevExpress.data.ArrayStore(LOCAL_DATA.trips),
        travelers: new DevExpress.data.ArrayStore(LOCAL_DATA.travelers),
        appointments: new DevExpress.data.ArrayStore(LOCAL_DATA.appointments)
    };
}();