$(() => {
  //create var container
  const $container = $("#container");
  console.log($container);
  //create h1 element and apnend to container
  const $h1 = $("<h1>");
  $h1.text("Hogwarts");
  $container.append($h1);
  console.log($h1);
  //create h2 element and apnend to container
  const $h2 = $("<h2>");
  $h2.text("Yuliya");
  $container.append($h2);
  console.log($h2);
  //create h3 element and apnend to container
  const $h3 = $("<h3>");
  $h3.text("Hufflepuff");
  $container.append($h3);
  console.log($h3);
  //create h3 element and apnend to container
  const $h4 = $("<h4>");
  $h4.addClass("cat");
  $h4.text("Thomas");
  $container.append($h4);
  console.log($h4);
  //h4 element with your wand
  const $h4Wand = $("<h4>");
  $h4Wand.text("Holly Wand with Unicorn Hair Core");
  $container.append($h4Wand);
  console.log($h4Wand);

  //add the following into an unordered list (with the attribute of storage and a value of trunk):
  const $ul = $("<ul>");
  $ul.attr("storage", "trunk");
  $container.append($ul);
  $ul.append(
    "<li>Butter Beer</li><li class='secret'>Invisibility Cloak</li><li class='secret'>Magic Map</li><li class='secret'>Time Turner</li><li class='cat'>Leash</li><li>Bertie Bott's Every Flavor [Jelly] Beans</li>"
  );
});
