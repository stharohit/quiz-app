export function shuffleQuiz(data: Array<any>) {
    let length = data.length;
    while (length--) {
      const randomIndex = Math.floor(Math.random() * (length + 1));
      [data[length], data[randomIndex]] = [data[randomIndex], data[length]];
    }
    return data;
  }