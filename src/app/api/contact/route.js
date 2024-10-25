import Contact from '../../models/Contact';
import dbConnect from '../../utils/dbConnect';


await dbConnect();


export async function POST(req) {
    try {
        const { name, email, message } = await req.json(); 

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'All fields are required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save(); 

        return new Response(JSON.stringify({ message: 'Your message has been sent!' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        return new Response(JSON.stringify({ message: 'Server error, please try again later.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export function OPTIONS() {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
    });
}
