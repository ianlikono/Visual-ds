export const importTxt = () => {
    fetch('/sample.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })
}