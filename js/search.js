$('#search').click(function() {
   //  var $btn=$(this);
   //  $btn.button('loading');
   //$('#searchQuery').empty();
//$('#searchInput').val().length()
//$('#searchQuery').append("<a> link </a>");

//'div[id*="'+$('#searchInput').val() + "\""
$(".collapse").each(function(index, element)
{
//   if (element.id !== $('#searchInput').val()) {
//     element.style.display = "none";
//     console.log("removing element");
//   } else {
//     element.style.display = "show";
//   }
var re = new RegExp(".*" + $('#searchInput').val() + ".*");
	if(re.test($(this).attr('id')))
	{
		$(this).collapse("show");
	} else {
		$(this).collapse("hide");
	}
});
        /*each(function(index) {
        	$(this).collapse('toggle');
        })*/
  //    $btn.button('reset');
});

$('#getPDF').click(function() {
  console.log("yes");
  // $.get('http://localhost:3000/download', {name: "bfd"}, function(data, status) {
  //   alert(data + status);
  // });
  $.ajax({
    url: "http://localhost:3000/download",
    type: "get",
    data: {
      name: "ERfbdv"
    }
  });

  alert($_GET['name']);
});

RegExp.escape= function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
