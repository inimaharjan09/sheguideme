import { NextResponse } from 'next/server';
import { connectDB } from '@/src/lib/db';
import User from '@/src/models/User';
import { verifyToken } from '@/src/lib/jwt';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token)
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });

    const decoded: any = verifyToken(token);
    if (!decoded)
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });

    const data = await req.json();
    await connectDB();

    await User.findByIdAndUpdate(decoded.id, { travelerInfo: data });

    return NextResponse.json({ message: 'Traveler profile saved' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
