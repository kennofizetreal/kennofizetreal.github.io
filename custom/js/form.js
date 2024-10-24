(function ($) {

    "use strict";

    if ($("#memory-book-form").length) {
        $("#memory-book-form").validate({
            rules: {
                note: "required",
            },

            messages: {
                note: "Vui lòng điền Nội dung"
            },

            submitHandler: function (form) {
                $("#loader").show();
                $('#button-sumbit').hide();
                $.ajax({
                    type: "POST",
                    url: "https://bke.reg.vn/api/event-dev/note",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $('#button-sumbit').show();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 30000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $('#button-sumbit').show();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

        });
    }

    if ($("#register_to_attend_form").length) {
        $("#register_to_attend_form").validate({
            rules: {
                name: "required",
                number_of_attendees: "required",
                time_key: "required",
            },

            messages: {
                name: "Vui lòng điền Tên",
                number_of_attendees: "Vui lòng chọn Số người tham dự",
                time_key: "Vui lòng chọn Khung giờ Tham dự",
            },

            submitHandler: function (form) {
                $("#c-loader").show();
                $('#c-button-sumbit').hide();
                $.ajax({
                    type: "POST",
                    url: "https://bke.reg.vn/api/event-dev/note",
                    data: $(form).serialize(),
                    success: function () {
                        $("#c-loader").hide();
                        $('#c-button-sumbit').show();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 30000);
                        form.reset();
                    },
                    error: function () {
                        $("#c-loader").hide();
                        $('#c-button-sumbit').show();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

        });
    }

})(window.jQuery);