# TinyMCE Plugin Coding Exercise
This was a two part exercise invoking the plugin similar to common use cases of customers implementing TinyMCE.

## Deployed Site:
* https://eph0xc0de.firebaseapp.com/

## Part A: Invoke TinyMCE in a Simple HTML Page
* I signed up for the latest TinyMCE via the Cloud service which then kicked me over to the TinyMCE website, and in the Download page I saw the TinyMCE Cloud deployment example.
* I copied that into a new page, and started seeing how the code work, and started modifiying to meet the need of just affecting a textarea with the ID name of 'editor', and got it working correctly.
* All it really took was a google search of "tiny mce target textarea id", which got me to this page via google.
* https://www.tinymce.com/docs/configure/integration-and-setup/
* Was able to target the specific textarea afterwards.

## Part B: Add a Custom Dialog using TinyMCE’s WindowManager
* Next I took the javascript, and put in an App.js file, and prepared to push and host on Firebase.
* Once that was all working, started playing with the WindowsManager, and creating a custom toolbar and dialog.
* The WindowsManager took several attempts to get right, and was by far the biggest sticking point.
* https://www.tinymce.com/docs/advanced/events/
* https://www.tinymce.com/docs/advanced/editor-control-identifiers/
