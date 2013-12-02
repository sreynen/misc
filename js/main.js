(function ($) {

  var projects = {};
  var converter = new Showdown.converter();

  if (!String.prototype.trim) {
    String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
  } // if

  $(document).ready(function(){

    $.get('github.php?p=project/index.txt', function(data){

      var i = 0;
      var lines = data.split("\n");
      var parts = false

      for (i in lines) {
        
        if (lines[i].trim() != '') {

          parts = lines[i].split(' > ');
          
          $('<li class="list-group-item"><span class="glyphicon glyphicon-star"></span> <a href="#" data-path="' + parts[1] + '">' + parts[0] + '</a></li>')
            .appendTo('#project-list')
            .find('a').click(function(){
  
              var path = $(this).attr('data-path');
              console.log(path);
              loadProject(path);
              return false;
  
            });

        } // if

      } // for

    });
    
    $.get('github.php?p=upcoming.md', function(data){

      $('#upcoming').empty();
      $('#upcoming').append(converter.makeHtml(data));

    });

    $('h1 a').click(function(){

      $('#project').hide();
      $('#index').show();
      
      return false;

    });

  });

  function loadProject(path) {

    if (typeof projects[path] === 'undefined') {

      var url = 'github.php?p=project/' + path;

      $.get(url, function(data){

        projects[path] = data;
        loadProject(path);

      });

    } // if
    else {
      
      var projectInfo = parseProject(projects[path]);

      $('#index').hide();
      $('#project').empty();

      $('<h2>' + projectInfo.title + '</h2>').appendTo('#project');

      if (projectInfo.description) {
        $('<div class="description"><h3>Description</h3>' + converter.makeHtml(projectInfo.description) + '</div>').appendTo('#project');
      } // if

      if (projectInfo.idea) {
        $('<div class="idea"><h3>Idea</h3>' + converter.makeHtml(projectInfo.idea) + '</div>').appendTo('#project');
      } // if
      
      if (projectInfo.status) {
        $('<div class="status"><h3>Status</h3>' + converter.makeHtml(projectInfo.status) + '</div>').appendTo('#project');
      } // if

      if (projectInfo.demo) {
        $('<div class="demo"><h3>Demo</h3>' + converter.makeHtml(projectInfo.demo) + '</div>').appendTo('#project');
      } // if
      
      if (projectInfo.repo) {
        $('<div class="repo"><h3>Repository</h3>' + converter.makeHtml(projectInfo.repo) + '</div>').appendTo('#project');
      } // if

      $('#project').show();

    } // else

  } // loadProject
  
  function parseProject(projectMarkdown) {

    var i = false;
    var projectInfo = {}
    var projectParts = projectMarkdown.split('-----');
    var lines = [];
    var title = false;

    projectParts.shift();
    
    for (i in projectParts) {

      lines = projectParts[i].split("\n\n");
      title = lines.shift();
      projectInfo[title] = lines.join("\n\n").trim();

    } // for

    return projectInfo;

  } // parseProject

})(jQuery);