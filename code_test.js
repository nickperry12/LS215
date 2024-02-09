let text = '\"this is a double quoted string\"';

if (text.match(/".*?"/) || text.match(/'.*?'/)) {
  console.log("Got a quoted string")
}