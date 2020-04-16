// Tabs - Taken from W3Schools.com //
function openMeal(mealName,elmnt,color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(mealName).style.display = "block";
}

//Call to Widget taken from WidgetPack.com//
wpac_init = window.wpac_init || [];
wpac_init.push({widget: 'Rating', id: 9969});
(function() {
  if ('WIDGETPACK_LOADED' in window) return;
  WIDGETPACK_LOADED = true;
  var mc = document.createElement('script');
  mc.type = 'text/javascript';
  mc.async = true;
  mc.src = 'https://embed.widgetpack.com/widget.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
})();
