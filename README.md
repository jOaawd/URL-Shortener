
# URL Shortener

This is a simple URL shortener application built using Node.js and Express. It allows users to shorten URLs with optional custom aliases and track the number of shortened URLs they have created.

## Features
- Shorten URLs with either a random alias or a custom alias.
- Limit of 5 shortened URLs per user.
- Redirect from the shortened URL to the original long URL.

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites
Before you begin, make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Steps to Set Up

1. **Clone the repository**  
   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/jOaawd/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Install dependencies**  
   Go to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Create a `.env` file**  
   Create a `.env` file in the root directory of the project and add the following content, replacing `your-secret-key` with a secret of your choice:

   ```
   SESSION_SECRET=your-secret-key
   ```

4. **Run the server**  
   Start the server by running:

   ```bash
   npm start
   ```

## Usage
Once the server is running, you can visit the application in your browser and start shortening URLs.

---

### Contributing

Feel free to fork this project, open issues, and submit pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
