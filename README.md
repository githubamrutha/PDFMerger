MergePDF
MergePDF is a web application that allows users to merge multiple PDF files into a single PDF document. Built with Node.js, Express, and Bootstrap, it offers a user-friendly interface for selecting files and downloading the merged result.

Table of Contents
Features
Technologies Used
Installation
Usage
Contributing
License
Features
Upload multiple PDF files.
Merge selected PDF files into one.
User-friendly interface with Bootstrap.
Download the merged PDF directly from the web app.
Technologies Used
Node.js: JavaScript runtime for server-side programming.
Express: Web framework for Node.js to handle routing and requests.
Multer: Middleware for handling multipart/form-data for file uploads.
pdf-merger-js: Library for merging PDF files.
Bootstrap: Front-end framework for responsive design.
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/USERNAME/MergePDF.git
Replace USERNAME with your GitHub username.

Navigate to the project directory:

bash
Copy code
cd MergePDF
Install the dependencies:

bash
Copy code
npm install
Usage
Start the server:

bash
Copy code
node server.js
The application will be available at http://localhost:3000.

Open your web browser and navigate to http://localhost:3000.

Use the "Select files(.pdf) to merge..." section to choose multiple PDF files.

Click the "Submit" button to merge the selected PDF files.

After merging, you will be redirected to the download link for the merged PDF.

Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

