# TheGirlz.store - Coming Soon Website

A beautiful, elegant "Coming Soon" website for TheGirlz.store with a waitlist powered by Supabase.

## Features

- ✨ **Lilac Luxe Design** - Elegant pastel lilac theme with soft gradients
- 📱 **Responsive Design** - Mobile-first approach with beautiful desktop layout
- 🎭 **Smooth Animations** - Framer Motion powered entrance animations
- 📧 **Email Waitlist** - Supabase-powered email collection with duplicate handling
- 🚀 **Vercel Ready** - Zero-config deployment to Vercel

## Tech Stack

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling with custom Lilac Luxe theme
- **Framer Motion** for animations
- **Supabase** for database and email storage
- **Google Fonts** - Playfair Display & DM Sans

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema in your Supabase SQL editor:
   ```sql
   create table if not exists waitlist (
     id uuid primary key default uuid_generate_v4(),
     email text unique not null,
     created_at timestamptz default now()
   );
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your Supabase URL and anon key from your project dashboard.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Other Platforms

The app works on any platform that supports Next.js 15. Just make sure to set the environment variables.

## Design System

### Colors
- **Lilac Palette**: 50-900 shades from soft pastels to deep purples
- **Gradients**: Soft lilac to white background gradients
- **Accents**: Purple glow effects on interactive elements

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: DM Sans (clean, modern)

### Animations
- **Entrance**: Fade-in with staggered children
- **Interactions**: Smooth hover states with glow effects
- **Form States**: Loading spinners and success animations

## API Endpoints

### POST /api/join
Adds an email to the waitlist.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "You're on the list! 💅"
}
```

**Error Response:**
```json
{
  "error": "Please enter a valid email address"
}
```

## Database Schema

```sql
create table if not exists waitlist (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  created_at timestamptz default now()
);
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the Lilac Luxe color palette.

### Content
Update `app/page.tsx` to change the heading, subtext, and form behavior.

### Styling
Modify `app/globals.css` for custom styles and animations.

## License

© 2025 TheGirlz.store — All rights reserved.
