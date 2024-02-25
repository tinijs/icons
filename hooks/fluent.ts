export default function () {
  const filterPaths = function (paths: string[]) {
    return paths.filter(path => path.includes('_24_'));
  };

  const transformName = function (name: string) {
    return name.replace(/_24_/g, '-');
  };

  return {
    filterPaths,
    transformName,
  };
}
