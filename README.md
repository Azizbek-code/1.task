# Simple NestJS Webhook Test

This project is a small demo that shows how to work with a test API using HTTP requests, webhooks, and data processing.  
The goal is to send data to the API, receive two parts of a secret code, combine them, and get the final message back.

---

## 📌 Task Description

1. Send a POST request to:  
   **https://test.icorp.uz/interview.php**

   The request must include JSON fields:
   - `msg` — any message you want
   - `url` — your public webhook URL (from ngrok)

   The API will return **the first part of the code**.

2. The API will send **the second part of the code** to your webhook URL.

3. Your server needs to **combine part 1 and part 2**.

4. Send a GET request to the same endpoint with a `code` parameter:  
   `?code=combined_code`

5. The API will return the **final message**.

This project does all these steps automatically.

---

## 🛠 Technologies

- **NestJS**
- **Node.js**
- **Ngrok**
- **HTTP requests (fetch)**

---

## ▶️ How to Run

### 1. Install dependencies

```bash
npm install
