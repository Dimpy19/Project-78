var images = ["https://png.pngtree.com/png-vector/20201128/ourlarge/pngtree-cooking-mom-png-image_2456980.jpg", "https://www.pngitem.com/pimgs/m/67-674901_png-pinterest-clip-only-father-clipart-transparent-png.png", "https://thumbs.dreamstime.com/b/nerdy-girl-glasses-cartoon-character-man-women-boy-125450170.jpg","https://flyclipart.com/thumb2/school-children-children-school-children-520555.png","https://previews.123rf.com/images/jemastock/jemastock1806/jemastock180602267/102900656-cute-and-happy-grandfather-cartoon-vector-illustration-graphic-design.jpg","https://png.pngtree.com/png-clipart/20200225/original/pngtree-granny-cooking-illustration-vector-on-white-background-png-image_5302351.jpg", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34449/three-generation-family-clipart-md.png"];
var names = ["Mom(Vidya Patel)", "Dad(Jagdish Patel)", "Me(Dimpy Patel)","Brother(Ved Patel)","Grand-Father(Khetaram Patel)","Grand-Mother(Valbai Patel)","Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];    
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}

