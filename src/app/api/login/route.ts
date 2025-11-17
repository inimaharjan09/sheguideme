import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/src/models/User';
import { connectDB } from '@/src/lib/db';
import { signToken } from '@/src/lib/jwt';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 });

    const token = signToken({ id: user._id, email: user.email });
    const res = NextResponse.json({ message: 'Login successful' });
    res.cookies.set('token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
