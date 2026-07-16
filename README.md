# Siukfa Tours & Travel

A premium, modern, and responsive vehicle rental platform for exploring Northeast India.

## How to push to GitHub (Fixing Large File Error)

If you previously tried to push and got a "Large files detected" error, run these commands in your terminal:

1. **Reset your local git state**:
   ```bash
   rm -rf .git
   ```
2. **Re-initialize and push correctly**:
   ```bash
   git init
   git remote add origin https://github.com/miftahu1/Suikfa-tours-and-travel.git
   git add .
   git commit -m "Initial commit: Siukfa Tours & Travel"
   git branch -M main
   git push -u origin main --force
   ```

## Features
- **Premium Fleet**: High-quality cars and adventure bikes.
- **Dynamic Booking**: Real-time cost calculation and WhatsApp integration.
- **Modern UI**: Dark-themed with glassmorphism and Framer Motion.

## Tech Stack
- Next.js 14, Tailwind CSS, Shadcn UI, Lucide Icons.
