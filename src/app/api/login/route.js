import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';
import bcrypt from 'bcrypt';

export async function POST(req) {
  await dbConnect();

  try {
    console.log('Request received:', req);

    const { email, password } = await req.json(); 

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: 'Account not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid credentials.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Successful login
    return new Response(JSON.stringify({ message: 'Login successful!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(JSON.stringify({ message: 'Server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}