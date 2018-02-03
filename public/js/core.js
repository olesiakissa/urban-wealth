$(document).ready(function () {
    console.log('ready');

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

    $('input[type=radio]').change(function () {
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
    });
    });