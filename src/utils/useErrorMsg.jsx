export default function useErrorMsg(objectValue, headingTag) {
  const arr = Object.values(objectValue);
  const arrRemain = arr.filter((val) => !val);
  return arrRemain.length
    ? `You missed to fill ${arrRemain.length} fields in ${headingTag}`
    : "";
}
