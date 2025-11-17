import { NextResponse } from 'next/server';
import { connectDB } from '@/src/lib/db';
import User from '@/src/models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '@/src/lib/jwt';

export async function POST(req: Request) {
  try {
    const { fullName, email, password } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = signToken({ id: newUser._id, email: newUser.email });

    const res = NextResponse.json({ message: 'Registered successfully' });

    return res;
  } catch (err) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
