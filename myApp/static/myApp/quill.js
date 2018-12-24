

$(document).ready(function(){

var toolbarOptions = [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [ 'link', 'image', 'video', 'formula' ],          // add's image support
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],

                ['clean']                                         // remove formatting button
            ];

        var quill = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions,
                imageResize: {
                    displaySize: true
                },

                 imageDrop: true,
            },
            placeholder: 'rrr',

            theme: 'snow',
        });
         $('button.press').click(function(){
             quill.clipboard.dangerouslyPasteHTML(0,$('.content').html());
             $('.main-quill').css("display","block");
         });
          $('div.main-quill').click(function(){
               if( $(event.target).is('.main-quill')) {
                   $('.main-quill').css("display", "none");
                   $('.main-quill').slideUp();
               }
         });
 $('.qpress').click(function(){

     var delta = quill.getContents();
     var tempCont = document.createElement("div");
     (new Quill(tempCont)).setContents(delta);
     var u = tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
     // $('#result').append(u);
      $.ajax({
             type: 'POST',
             url: '/myApp/change',
             data: {'data': u, 'csrfmiddlewaretoken': '{{ csrf_token }}'},
             success: function (data, textStatus) {
            //alert(data, textStatus);
            // $('#output').html(data); // append to inner html
        },
             error: function(xhr, status, e) {
            alert(status, e);
        }
         });
    });
});