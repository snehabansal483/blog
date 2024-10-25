import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';
import bcrypt from 'bcrypt';

export async function POST(req) {
    await dbConnect();

    try {
        const { name, email, password } = await req.json();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ message: 'User already exists.' }), {
                status: 409, 
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        return new Response(JSON.stringify({ message: 'User created successfully!' }), {
            status: 201, 
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error during signup:', error);
        return new Response(JSON.stringify({ message: 'Server error.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
