const chorusArray = [ "Bye bye bye",
  "I'm doing this tonight",
  "You're probably gonna start a fight",
  "I know this can't be right",
  "Hey baby come on",
  "I loved you endlessly",
  "When you weren't there for me",
  "So now it's time to leave and make it alone",
  "I know that I can't take no more",
  "It ain't no lie",
  "I want to see you out that door",
  "Baby bye bye bye",
  "Bye bye",
  "Don't want to be a fool for you",
  "Just another player in your game for two",
  "You may hate me but it ain't no lie",
  "Baby bye bye bye",
  "Bye bye",
  "I Don't want to make it tough",
  "I just want to tell you that I've had enough",
  "It might sound crazy but it ain't no lie",
  "Baby bye bye bye"
];


export const defaultState = {
  selectedSong: 0,
  songsById: {
    0: {
      isFetching: false,
      recievedAt: 1503777196682,
      title: "Bye Bye Bye",
      artist: "N'Sync",
      songId: 0,
      songArray: chorusArray,
      arrayPosition: 0,
      currentPhrase: chorusArray[0]
    }
  }
};
