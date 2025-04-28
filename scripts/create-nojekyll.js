const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');