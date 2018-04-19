# Product Support Engineer -  Coding Exercise
This was a two part exercise invoking the plugin similar to common use cases of customers implementing TinyMCE.

## Deployed Site:
https://eph0xc0de.firebaseapp.com/

## Part A: Invoke TinyMCE in a Simple HTML Page
* Signed up for the latest TinyMCE via the Cloud service which then kicked me over to the TinyMCE website, and in the Download page I saw the TinyMCE Cloud deployment example.
* Copied that into a new page, and started seeing how the code work, and started modifying to meet the need of just affecting a textarea with the ID name of 'editor', and got it working correctly.
* Google searched of "tiny mce target textarea id".
* https://www.tinymce.com/docs/configure/integration-and-setup/
* Was able to target the specific textarea afterwards.

## Part B: Add a Custom Dialog using TinyMCE`'`s WindowManager
* Next I took the javascript, and put in an App.js file, created a stylesheet, and prepared to push and host on Firebase.
* Once that was all working, started playing with the WindowsManager, and creating a custom toolbar and dialog.
* https://www.tinymce.com/docs/advanced/events/
* https://www.tinymce.com/docs/advanced/editor-control-identifiers/
* The WindowsManager took several attempts to get right, and was by far the biggest sticking point.
