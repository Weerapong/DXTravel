!function() {
    var FacebookUtility = DevExpress.social.Facebook,
        FRIEND_FIELDS = ["uid", "first_name", "last_name", "pic_square", "profile_url"];

    var loadFriends = function() {
        return FacebookUtility.api(
            "me/fql",
            {
                q: "select " + FRIEND_FIELDS.join() + " from user where uid in (select uid1 from friend where uid2=me())"
            }
        );
    };

    var loadFriend = function(uid) {
        return FacebookUtility.api(
            "me/fql",
            {
                q: "select " + FRIEND_FIELDS.join() + " from user where uid = " + uid
            }
        );
    };

    DXTravel.FacebookUtils = {
        loadFriends: loadFriends,
        loadFriend: loadFriend
    };    

}();