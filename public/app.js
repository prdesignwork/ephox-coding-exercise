tinymce.init({
  selector:'#editor',
  height: 400,
  setup: function(editor) {
    editor.addButton('addName', {
      text: 'Insert User Name',
      icon: false,
      onclick: function() {
        editor.windowManager.open({
          title: 'Insert User Name',
          body: [{
              type: 'textbox',
              name: 'firstName',
              label: 'First Name'
            },
            {
              type: 'textbox',
              name: 'lastName',
              label: 'Last Name'
            }
          ],
          height: 300,
          onsubmit: function(e) {
            editor.insertContent(e.data.firstName)
            editor.insertContent(' ')
            editor.insertContent(e.data.lastName)
          },
        })
      }
    })
  }
})
