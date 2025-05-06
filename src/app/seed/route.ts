//  Seed database with initial data
import postgres from 'postgres';
import {employees} from "@/app/lib/placeholder-data";

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require'});

async function seedEmployees() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS employees (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );
    `;
    const insertedEmployees = await Promise.all(
        employees.map(
            (employee) => sql`
                INSERT INTO employees (id, first_name, last_name, image_url)
                VALUES (${employee.id}, ${employee.first_name}, ${employee.last_name}, ${employee.image_url})
                ON CONFLICT (id) DO NOTHING;
            `,
        ),
    );
    return insertedEmployees;
}

export async function GET() {
    try {
        const result = await sql.begin((sql) => [
            seedEmployees(),
        ]);

        return Response.json({ message: 'Database seeded successfully.' });
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}