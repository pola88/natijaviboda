<?php
  $servername = "localhost:3306";
  $username = "njboda_casamiento";
  $password = "Casamiento01728479";
  $dbname = "njboda_casamiento";

  $mysqli = new mysqli($servername, $username, $password, $dbname);
  /* check connection */
  if ($mysqli->connect_errno) {
      printf("Connect failed: %s\n", $mysqli->connect_error);
      exit();
  }

  /* change character set to utf8 */
  if (!$mysqli->set_charset("utf8")) {
      printf("Error loading character set utf8: %s\n", $mysqli->error);
      header("HTTP/1.1 400 Bad Request");
      return;
  }
?>