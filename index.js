// Write your code in this file!
function scuberGreetingForFeet(travelDistance) {
  if (travelDistance <= 400) {
    return 'This one is on me!';
  } else if (travelDistance >= 2000 && travelDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (travelDistance > 2500) {
    return 'No can do';
  }
}
