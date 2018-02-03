$(document).ready(function () {
    console.log('ready');

    //region TOP BUTTON REGION
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    $('#top-btn').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    //endregion

    $('form').submit(function (e) {
        e.preventDefault();
        var action = $(this).attr('action');
        var data = {};
        $('form :input').not(':button').each(function handleData() {
            data[$(this).attr('name')] = $(this).val();
        });
        /* if ($('#textarea-comment').length) {
             data[$(this).attr('name')] = $(this).val();
         }*/
        var appendPosition = $(this).data('append-position');
        var appendDiv = $('#' + $(this).data('div-to-append'));
        console.log(data);
        $.ajax({
            type: 'POST',
            url: action,
            async: true,
            data: JSON.stringify(data),
            dataType: "text",
            contentType: "application/json",
            success: function (data) {
                console.log("success!");
                if (appendPosition === "start") {
                    appendDiv.prepend(data);
                }
                else if (appendPosition === "end") {
                    appendDiv.append(data);
                }
            }
        });
    });

   /* $('input[type=radio]').change(function () {
        var targetCombobox = $('select[name=subcategory]');
        $.ajax({
            type: 'POST',
            url: action,
            async: true,
            data: {category: $(this).val()},
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                $.each(data, function (item) {
                    options.append($("<option />").val(item.ImageFolderID).text(item.Name));
                });
            }
        })
    });*/

    //region MODAL REGION
    var modal = $('#modal');
    $('#submit-problem').click(function () {
        $('#modal-content').load('../forms/form_problem.html');
        modal.css("display", "block");
    });

    $('#submit-solution').click(function () {
        $('#modal-content').load('../forms/form_solution.html');
        modal.css("display", "block");
    });

    $('#submit-review').click(function () {
        $('#modal-content').load('../forms/form_review.html');
        modal.css("display", "block");
    });

    $('#submit-event').click(function () {
        $('#modal-content').load('../forms/form_event.html');
        modal.css("display", "block");
    });

    $('#close-modal').click(function () {
        modal.css("display", "none");
    });
    //endregion


});