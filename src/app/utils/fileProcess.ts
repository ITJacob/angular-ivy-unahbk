export function readFile(file: Blob) {
  return new Promise<string[][]>((res) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = () => {
      const lines = (reader.result as string).split('\r\n');
      const header = lines[0].split(',').filter((l) => l); // 除去空列
      const content = lines
        .slice(1)
        // 除去没有表头的空列
        .map((l) => l.split(',').slice(0, header.length))
        // 除去没有内容的空行
        .filter((l) => l.join(''));
      // 表头和内容拼接，二维数组
      const result = [header].concat(content);
      res(result);
    };
  });
}

// 专门处理表头是 中文-英文 的结构
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
