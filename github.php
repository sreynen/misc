<?php

  // Read project files cross-domain from GitHub repo.
  readfile('https://raw.github.com/sreynen/misc/static/project/' . $_GET['p']);

?>