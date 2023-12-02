$(() => {
  const classes = [
    { day: "Monday", classes: ["Herbology"] },
    { day: "Tuesday", classes: ["Herbology", "Divination"] },
    { day: "Wednsday", classes: ["History of Magic"] },
    { day: "thursday", classes: ["Charms", "Potions"] },
    {
      day: "friday",
      classes: [
        "Transfiguration",
        "Defense Against the Dark Arts",
        "Quidditch practice",
      ],
    },
  ];

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

  //create var for table div container
  const $classesTable = $("#classesTable");
  console.log($classesTable);
  //create and add table and header
  const $table = $("<table>");
  $classesTable.append($table);
  $table.append("<thead><th>Day</th><th>Classes</th></thead>");

  //add table rows with days and classes
  classes.forEach((item) => {
    $table.append(`<tr><td>${item.day}</td><td>${item.classes}</td></tr>`);
  });

  //Break your wand! (select the element that contains your wand and remove it)
  $h4Wand.remove();

  //remove just the butter beer from your list
  $("ul li:first").remove();

  //Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
  $h4Wand.text("Holly Wand");
  $h4Wand.insertAfter($h4);

  //   Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file

  $h4Wand.css("color", "indigo");

  //   Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)

  const $petDiv = $("<div class='pet'></div>");
  $petDiv.insertAfter($classesTable);
  $petDiv.append($h4);

  //   Have your pet come back (remove your pet from the DOM, put it back in its original location)

  $h4.remove();
  $h4.insertBefore($h4Wand);
});
