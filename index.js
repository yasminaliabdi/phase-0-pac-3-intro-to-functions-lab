// 1. shout function - returns string in uppercase
function shout(string) {
  return string.toUpperCase();
}

// 2. whisper function - returns string in lowercase
function whisper(string) {
  return string.toLowerCase();
}

// 3. logShout function - logs string in uppercase
function logShout(string) {
  console.log(string.toUpperCase());
}

// 4. logWhisper function - logs string in lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// 5. sayHiToHeadphonedRoommate function - returns different strings based on input
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}