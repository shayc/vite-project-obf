export function useBoard() {
  function onButtonClick() {
    console.log("Button clicked");
  }

  return {
    onButtonClick,
  };
}
