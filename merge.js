const PDFMerger = require('pdf-merger-js');
const fs = require('fs');
const path = require('path');

var merger = new PDFMerger();

const mergePdfs =async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  let timestamp = new Date().getTime();
  const outputPath = path.join(__dirname, 'public', `${timestamp}.pdf`); // Save to 'public' directory

  await merger.save(outputPath); // save under given name and reset the internal document
  return timestamp; 
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs}