function readURL(input, selector) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(selector)
                .attr('src', e.target.result)
                .width(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
