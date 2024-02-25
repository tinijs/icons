export default function () {
  const transformName = function (name: string) {
    return name.replace(/bx-/g, '');
  };

  return {
    transformName,
  };
}
