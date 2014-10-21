Purple_dropdownFXselect
=======================

Examples of alternate effect option:

<h4>PurpleStore_dropdownFXselect</h4>

        <script>
            $(function() {
                $('.dropdown_select').dropdownSelect({
                    fxOption: {direction: 'up', easing: 'easeOutBounce'},
                    fxDuration: 1000,
                    arrowClass: 'arrow_up'
                });
            });
        </script>

<h4>PurpleBounce_dropdownFXselect</h4>

      <script>
            $(function() {
                $('.dropdown_select').dropdownSelect({
                    fx: 'bounce',
                    fxOption: {direction: 'vertical'},
                    fxDuration: 1000,
                    arrowClass: 'arrow_left'
                });
            });
        </script>
        
<h4>PurpleBoom_dropdownFXselect</h4>

       <script>
            $(function() {
                $('.dropdown_select').dropdownSelect({
                    fx: 'explode',
                    fxOption: {pieces: 144},
                    fxDuration: 800,
                });
            });
        </script>
        
<h4>PurplePuffyStic_dropdownFXselect</h4>

       <script>
            $(function() {
                $('.dropdown_select').dropdownSelect({
                    fx: 'puff',
                    fxOption: {easing: 'easeInOutElastic', direction: 'down'},
                    fxDuration: 1200  
                });
            });
        </script>
        
<h4>PurpleShakyShake_dropdownFXselect</h4>

        <script>
            $(function() {
                $('.dropdown_select').dropdownSelect({
                    fx: 'shake',
                    fxOption: {easing: 'easeOutBounce', distance: 60},
                    fxDuration: 1000,
                    arrowClass: 'arrow_right'
                });
            });
        </script>

<!DOCTYPE html>
<html>
    <head>
        <title>DropDown_Select_v2</title>
        <meta charset="windows-1252">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
        <!--tes liens perso en dernier pour lui permettre d'ecraser les ref ci dessus-->
        <link rel="stylesheet" href="css/dropdown_select_v2.css">
        <script src="js/dropdown_select_v2.js"></script>
        <script>
            $(function() {
                $('.dropdown_select').dropdownSelect({
                    fx: 'shake',
                    fxOption: {easing: 'easeOutBounce', distance: 60},
                    fxDuration: 1000,
                    arrowClass: 'arrow_right'
                });
            });
        </script>
</head>
<body>
<select name="select_list_01" id="select_list_01" class="dropdown_select">
            <option value="">Select an option</option>
            <option value="option_01">Option 01</option>
            <option value="option_02">Option 02</option>
            <option value="option_03">Option 03</option>
            <option value="option_04">Option 04</option>
            <option value="option_05">Option 05</option>
        </select>
</body>
</html>
