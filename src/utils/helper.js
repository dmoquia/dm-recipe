export const separator = (props) => {
  const splitter = props?.split(",");
  return splitter ? splitter[0] : "No tags";
};

export const flattenArray = (str) => {
  return str
    ?.filter((item) => item.trim().length > 0)
    .join(", ")
    .concat(".");
};
