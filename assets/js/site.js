/**
 * Menu
 */
$("a.menu-icon").on("click", function(event) {
  var w = $(".menu");

  w.css({
    display: (w.css("display") === "none")
      ? "block"
      : "none"
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the menu icon and menu elements
  const menuIcon = document.querySelector('.site-nav .menu-icon');
  const menu = document.querySelector('.site-nav .menu');
  
  // Only add click handler if elements exist
  if (menuIcon && menu) {
    menuIcon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle menu visibility
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && e.target !== menuIcon) {
        menu.style.display = 'none';
      }
    });
  }
});

/**
 * Footer year
 */
$(document).ready(function() {
  $("#year").text(new Date().getFullYear());
});

/**
 * Footer email
 */
$(document).ready(function() {
  $(".email-link-cloaked").on("click", function(event) {
    const _link = event.target;

    const _user = reverseString(_link.getAttribute("data-resu"));
    const _domain = reverseString(_link.getAttribute("data-eman-niamod"));
    const _tld = reverseString(_link.getAttribute("data-dlt-niamod"));

    window.location.href = `mailto:${_user}@${_domain}.${_tld}`;
  });
});

/**
 * Reverses a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Moves WeChat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });

  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});
