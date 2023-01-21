export function readFile(file: Blob) {
  return new Promise<string[][]>((res) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = () => {
      const lines = (reader.result as string).split('\r\n');
      const header = lines[0].split(',').filter((l) => l);
      const content = lines
        .slice(1)
        .map((l) => l.split(',').slice(0, header.length))
        .filter((l) => l.join(''));
      const result = [header].concat(content);
      console.log(result);

      res(result);
    };
  });
}

export function getHeader(lines: string[][]) {
  const desc = {};
  const header: string[] = lines[0].map((col) => {
    const [v, k] = col.split('-');
    desc[k] = v;
    return k;
  });
  const content: string[][] = lines.slice(1);
  return { header, content, desc };
}
