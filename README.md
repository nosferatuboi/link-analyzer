# Link Analyzer

Link Analyzer is a web application that allows users to paste URLs and receive a summary, intended audience, and purpose of the content at the provided URL. This project uses React for the frontend and Express for the backend, with the OpenAI API providing the analysis.

## Features

- Paste a URL to analyze the content
- Receive a summary, audience, and purpose of the URL content
- Simple and intuitive user interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API Key

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/link-analyzer.git
    cd link-analyzer
    ```

2. Install dependencies for both frontend and backend:

    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your OpenAI API key:

    ```env
    OPENAI_API_KEY=your_openai_api_key_here
    ```

### Running the Application

1. Start the backend server:

    ```sh
    cd backend
    node server.js
    ```

2. Start the frontend development server:

    ```sh
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Paste a URL into the input field and click "Add Link".
2. The analysis results will be displayed in the table below, showing the link, summary, audience, and purpose of the content.

## Project Structure

- `backend/`: Contains the Express server and the OpenAI API integration.
- `frontend/`: Contains the React application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [OpenAI](https://openai.com/) for their API.
- [React](https://reactjs.org/) for the frontend framework.
- [Express](https://expressjs.com/) for the backend framework.
