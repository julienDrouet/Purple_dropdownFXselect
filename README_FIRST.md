Purple_dropdownFXselect
==================

Dropdown select list with custom effects options from jQuery UI

Link required files
First, the jQuery library and jQuery UI needs to be included (no need to download - link directly from Google). Next, download and link the purple_dropdownFXselect CSS and Javascript files.

        <!-- jQuery and jQuery UI library (served from Google) -->
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
        
        <!-- Purple_dropdownFXselect CSS and Javascript file -->
        <link rel="stylesheet" href="css/purple_dropdownFXselect.css">
        <script src="js/purple_dropdownFXselect.js"></script>
        
Create HTML markup
Create a ```<select class="dropdown_select">``` element, with a ```<option>``` for each option you have. You can apply the design and effects to all your select dropdow menu just by adding the class="dropdown_select" on every one.

    <body>
        
        <select name="select_list_01" id="select_list_01" class="dropdown_select">
            <option value="">Select an option</option>
            <option value="option_01">Option 01</option>
            <option value="option_02">Option 02</option>
            <option value="option_03">Option 03</option>
        </select>
        
        <select name="select_list_02" id="select_list_02" class="dropdown_select">
            <option value="">Sélectionnez une option</option>
            <option value="option_01">Option 01</option>
            <option value="option_02">Option 02</option>
            <option value="option_03">Option 03</option>
        </select>
        
    </body>

Call the purple_dropdownFXselect
Call .dropdowSelect() on ```<select class="dropdown_select">```.

        <script>
            $(function(){
                $('.dropdown_select').dropdownSelect({
                });   
            });
        </script>








