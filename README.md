# Calculator Project

This project is a calculator application built with **.NET** for the backend and **React** (using Vite) for the frontend. The backend provides API endpoints for basic arithmetic operations, and the frontend interacts with these APIs to deliver a user-friendly interface.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or later)
- **.NET SDK** (6.0 or later)
- **npm** (comes with Node.js)

---

## Project Structure

```
calculator/
├── CalculatorAPI/          # Backend project
├── calculator-frontend/    # Frontend project
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd calculator
```

### 2. Backend Setup

Navigate to the backend directory and restore the dependencies:

```bash
cd CalculatorAPI
```

#### Restore Dependencies

```bash
dotnet restore
```

#### Run the Backend

```bash
dotnet run
```

The backend will be available at `http://localhost:5000` (default port). You can test it with tools like Postman or your browser.

---

### 3. Frontend Setup

Navigate to the frontend directory and install the dependencies:

```bash
cd calculator-frontend
npm install
```

#### Run the Frontend

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (default port). Open this URL in your browser.

---

## Running the Full Project

To manually start both services:

1. Open one terminal for the backend:

   ```bash
   cd CalculatorAPI
   dotnet run
   ```

2. Open another terminal for the frontend:

   ```bash
   cd calculator-frontend
   npm run dev
   ```

Access the application by navigating to `http://localhost:5173` in your browser.

---

## Testing API Endpoints

You can test the backend endpoints using a tool like **Postman** or **cURL**:

- **Addition**: `GET /api/calculator/add?num1=5&num2=3`
- **Subtraction**: `GET /api/calculator/subtract?num1=5&num2=3`
- **Multiplication**: `GET /api/calculator/multiply?num1=5&num2=3`
- **Division**: `GET /api/calculator/divide?num1=5&num2=3`

---

## Notes

- Ensure both the backend (`http://localhost:5000`) and frontend (`http://localhost:5173`) are running simultaneously for the application to work as intended.
- Modify the ports in case of conflicts by editing the `.NET` `launchSettings.json` for the backend or `vite.config.js` for the frontend.

---

## Troubleshooting

1. **Port Already in Use**:

   - Stop any process using the default ports or modify the port settings.

2. **Dependencies Missing**:

   - Ensure all dependencies are installed using `dotnet restore` and `npm install`.

3. **Unexpected Errors**:

   - Check the terminal logs for detailed error messages.

---

## License

This project is licensed under the MIT License.

