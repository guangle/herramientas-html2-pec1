/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import $ from "jquery";

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');
} )();


$(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
  $(".header").toggleClass("pushed");
  $(".main-content").toggleClass("main-pushed");
  $('.bar').toggleClass('animate');
});