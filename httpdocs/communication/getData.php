<?php
  $root = $_SERVER["DOCUMENT_ROOT"];
  include_once $root."/vendor/nategood/httpful/bootstrap.php";
  use \Httpful\Request;
  $book = $_GET["book"];
  $uri = 'https://api.bitso.com/v3/ticker/?book='.$book;
  $request = Request::get($uri)->send();
  echo $request->body->payload->last;
