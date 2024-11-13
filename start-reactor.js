startReactor = {
  computerCombination: [],
  playerCombinatio: [],
  computerCombinationPosition: 1,
  combinationMaxPosition: 5,
  memoryMaxCombination: 9,

  audio: {
    start: "start.mp3",
    fail: "fail.mp3",
    complete: "complete.mp3",
    combinations: [
      "0.mp3",
      "1.mp3",
      "2.mp3",
      "3.mp3",
      "4.mp3",
      "5.mp3",
      "6.mp3",
      "7.mp3",
      "8.mp3",
    ],
    loadAudio(filename) {
      const file = `.audio/${filename}?cb=${new Date().getTime()}`;
      const audio = new Audio(file);
      audio.load();
      return audio;
    },

    loadAudios() {},
  },
};
