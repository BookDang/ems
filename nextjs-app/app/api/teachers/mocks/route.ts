import { UserWithoutPasswordT } from "@/types/user"
import { faker } from "@faker-js/faker"

export async function POST() {
    try {
        // throw new Error("Simulated error Book")
        const teachers: Array<UserWithoutPasswordT> = Array.from({
            length: 10,
        }).map((index) => ({
            id: index as unknown as number,
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            date_of_birth: faker.date
                .birthdate({ min: 25, max: 65, mode: "age" })
                .toISOString(),
            phone_number: faker.phone.number(),
            address: faker.location.streetAddress(),
            hire_date: faker.date.past({ years: 10 }).toISOString(),
            salary_basic: parseFloat(
                faker.finance.amount({ min: 30000, max: 100000, dec: 2 })
            ),
            created_at: faker.date.past({ years: 1 }).toISOString(),
            updated_at: faker.date.recent({ days: 10 }).toISOString(),
            expertise: faker.person.jobType(),
            qualification: faker.person.jobTitle(),
            allowances: parseFloat(
                faker.finance.amount({ min: 5000, max: 20000, dec: 2 })
            ),
        }))

        await new Promise((resolve) => setTimeout(resolve, 3000))

        return Response.json({ teachers }, { status: 201 })
    } catch (error) {
        return Response.json(
            {
                message:
                    error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        )
    }
}
