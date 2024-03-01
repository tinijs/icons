export default function () {
  const transformName = function (name: string) {
    return name.replace(/(bx|bxl|bxs)-/g, '');
  };

  return {
    transformName,
  };
}
