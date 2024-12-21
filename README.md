# URL Shortener

This is a simple URL shortener application built using Node.js and Express. It allows users to shorten URLs with optional custom aliases and track the number of shortened URLs a user has created.

## Features
- Shorten a URL with a random alias or a custom alias.
- Limit of 5 shortened links per user.
- Redirect from short URL to the original long URL.

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**

   Clone the repository to your local machine.

   ```bash
   git clone https://github.com/jOaawd/URL-Shortener.git
   cd URL-Shortener


2, ** Instal Dep**
Go to package.json and install all dep by
pip install (dep)

3. **Add .ENV file**
 add a ENV for SESSION_SECRET=your-secret-key


4. **Run the server**

   npm start
