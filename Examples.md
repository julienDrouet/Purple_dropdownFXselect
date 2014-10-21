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

