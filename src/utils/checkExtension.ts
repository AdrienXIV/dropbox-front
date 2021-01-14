const availableExtensions = [
  '.html',
  '.js',
  '.jsx',
  '.css',
  '.sql',
  '.php',
  '.ts',
  '.tsx',
  '.json',
  '.xml',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.ppt',
  '.pptx',
  '.pdf',
];

export const checkExtension = (path: string) => {
  const index = availableExtensions.findIndex(ext => path.match(ext) !== null);
  return index === -1 ? false : true;
};
