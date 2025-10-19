import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Insert email into waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email: email.toLowerCase().trim() }])
      .select()

    if (error) {
      // Handle duplicate email error gracefully
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You\'re already on the list! 💅' },
          { status: 200 }
        )
      }
      
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'You\'re on the list! 💅' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
