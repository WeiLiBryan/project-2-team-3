var loadFile = function (event) {
    var image = $('#profilePic');
    image.src = URL.createObjectURL(event.target.files[0]);
    $.update('/api/user', image.src);
};

$(document).ready(function () {
    $(document).on("click", "#editBtn", editProfile);

    function editProfile() {
        var currentProfile = $(this).data()
    }
    function updateProfile() {
        $.ajax({
            method: "PUT",
            url: "/api/user",
            data: ""
        }).then(getTodos);
    }
});




// $(document).ready(function(event) {
// var uploadImage = $("#profilePic");
// image.src = URL.createObjectURL(event.target.files[0]);
// });

// Edit Button
// $("#editBtn").on("click", function (event) {
//     event.preventDefault();
//     editProfile(event);

// });

