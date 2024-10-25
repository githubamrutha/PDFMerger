const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const {mergePdfs}  = require('./merge')
const upload = multer({ dest: 'uploads/' })





app.use('/static',express.static('public'))
const port = process.env.PORT || 3000;

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// app.use(express.static('templates'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files);
  try {
    // Merge PDFs
    let d = await mergePdfs(
      path.join(__dirname, req.files[0].path),
      path.join(__dirname, req.files[1].path)
    );
    
    // Redirect to the merged PDF file
    res.redirect(`/static/${d}.pdf`); // Ensure this matches where your merged PDF is saved
  } catch (error) {
    console.error("Error merging PDFs:", error);
    res.status(500).send("Error merging PDFs");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})