const fs = require('fs');
const path = require('path');
const CWD = process.cwd();
const productsFile = path.join(CWD, 'src', 'lib', 'data', 'products.ts');
if (!fs.existsSync(productsFile)) {
  console.error(JSON.stringify({ error: 'products.ts not found', path: productsFile }));
  process.exit(1);
}
const src = fs.readFileSync(productsFile, 'utf8');
// gather imports
const imports = {};
const importRe = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;
let m;
while ((m = importRe.exec(src))) {
  imports[m[1]] = m[2];
}
// gather product image references
const productsRe = /export\s+const\s+products\s*[:=][\s\S]*?=\s*\[([\s\S]*?)\]\s*;/m;
let block = '';
const pm = src.match(productsRe);
if (pm) block = pm[1]; else {
  // fallback: find last bracketed array
  const fallback = src.split('export const products').pop();
  block = fallback || '';
}
const objRe = /\{([\s\S]*?)\}(?:,|$)/g;
const products = [];
while ((m = objRe.exec(block))) {
  const obj = m[1];
  const idMatch = obj.match(/id:\s*['\"]([^'\"]+)['\"]/);
  const id = idMatch ? idMatch[1] : null;
  const imageMatch = obj.match(/image:\s*(?:['\"]([^'\"]+)['\"]|([A-Za-z0-9_]+))/);
  const raw = imageMatch ? (imageMatch[1] || imageMatch[2]) : null;
  products.push({ id, raw });
}
// folders to inspect
const folders = [
  path.join('src', 'lib', 'assets', 'ULTIMATE FIRE SOLUTIONS PROJECT', 'Addressable Devices'),
  path.join('src', 'lib', 'assets', 'ULTIMATE FIRE SOLUTIONS PROJECT', 'Emergency Lighting'),
  path.join('src', 'lib', 'assets', 'ULTIMATE FIRE SOLUTIONS PROJECT', 'CONVENTIONAL CONTROL PANELS', 'Conventional Devices')
].map(p => path.resolve(CWD, p));
// collect all files under those folders
function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const items = fs.readdirSync(dir);
  for (const it of items) {
    const full = path.join(dir, it);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else out.push(path.relative(path.join(CWD, 'src', 'lib', 'assets'), full).replace(/\\/g, '/'));
  }
  return out;
}
let allAssets = [];
for (const f of folders) allAssets = allAssets.concat(walk(f));
// resolve imported files
const imported = Object.entries(imports).map(([name, p]) => {
  let resolved = p;
  if (resolved.startsWith('$lib/')) resolved = resolved.replace(/^\$lib\//, 'src/lib/');
  const abs = path.resolve(CWD, resolved);
  return { name, raw: p, abs, rel: fs.existsSync(abs) ? path.relative(path.join(CWD, 'src', 'lib', 'assets'), abs).replace(/\\/g, '/') : null, exists: fs.existsSync(abs) };
});
// map products to imports
const mapped = products.map(prod => {
  let resolved = null;
  if (!prod.raw) return { id: prod.id, raw: null, exists: false, resolved: null };
  if (imports[prod.raw]) {
    let p = imports[prod.raw];
    if (p.startsWith('$lib/')) p = p.replace(/^\$lib\//, 'src/lib/');
    const abs = path.resolve(CWD, p);
    return { id: prod.id, raw: prod.raw, resolved: p, abs, exists: fs.existsSync(abs) };
  }
  // raw might be a $lib path string
  if (prod.raw && prod.raw.startsWith('$lib/')) {
    const p = prod.raw.replace(/^\$lib\//, 'src/lib/');
    const abs = path.resolve(CWD, p);
    return { id: prod.id, raw: prod.raw, resolved: p, abs, exists: fs.existsSync(abs) };
  }
  return { id: prod.id, raw: prod.raw, resolved: null, abs: null, exists: false };
});
// unmapped assets
const importedRels = imported.filter(i => i.rel).map(i => i.rel);
const unmapped = allAssets.filter(a => !importedRels.includes(a));
const report = { imported, products: mapped, allAssets, unmapped };
console.log(JSON.stringify(report, null, 2));
