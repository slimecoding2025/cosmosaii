# Fix COSMOS-AI Chat Interference Error

## Problem
The chat UI shows "Cosmic interference detected. Re-establishing neural link…" because the Gemini API rejects requests where the conversation history starts with a `model` role (from the initial assistant greeting).

## Plan
1. **Fix `lib/api.js`** ✅: Sanitize contents to start with `user`, add debug logging (`GEMINI RAW`), improve error handling, and fix response extraction.
2. **Fix `sections/AIChatSection.jsx`** ✅: Pass `messages.slice(1)` to exclude the initial UI greeting from API history.
3. **Fix `components/FloatingChat.jsx`** ✅: Apply the same history fix and fix syntax error.

## Progress
- [x] lib/api.js
- [x] sections/AIChatSection.jsx
- [x] components/FloatingChat.jsx

