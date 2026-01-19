import { faker } from "@faker-js/faker"
import { ITeacher, IExpertise, IQualification } from "@/types/teacher"
import { IUser } from "@/types/user"

const createMockUser = (): IUser => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    return {
        id: faker.string.uuid(),
        username: faker.internet
            .username({ firstName, lastName })
            .toLowerCase(),
        password: faker.internet.password(),
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({ firstName, lastName }),
        phoneNumber: faker.phone.number({ style: "national" }),
        address: faker.location.streetAddress({ useFullAddress: true }),
        dateOfBirth: faker.date.birthdate({ min: 25, max: 60, mode: "age" }),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    }
}

export const createMockTeacher = (): ITeacher => {
    const user = createMockUser()

    const expertise: IExpertise = {
        skills: faker.helpers.arrayElements(
            ["React", "Node.js", "Next.js", "PostgreSQL", "TypeScript"],
            { min: 2, max: 4 }
        ),
        primarySubject: faker.helpers.arrayElement([
            "Mathematics",
            "Computer Science",
            "Physics",
            "English",
        ]),
        yearsOfExperience: faker.number.int({ min: 1, max: 20 }),
    }

    const qualification: IQualification[] = Array.from(
        { length: faker.number.int({ min: 1, max: 2 }) },
        () => ({
            degree: faker.helpers.arrayElement([
                "Bachelor",
                "Master",
                "PhD",
                "IELTS 8.5",
            ]),
            institution: faker.company.name() + " University",
            year: faker.date.past({ years: 10 }).getFullYear(),
        })
    )

    return {
        ...user,
        expertise,
        qualification,
        hireDate: faker.date.past({ years: 5 }),
        salaryBasic: parseFloat(faker.commerce.price({ min: 1500, max: 5000 })),
        allowances: {
            housing: 500,
            transport: 200,
            bonus: faker.number.int({ min: 100, max: 1000 }),
        },
    }
}

export const generateMockTeachers = (amount: number = 10): ITeacher[] => {
    return Array.from({ length: amount }, createMockTeacher)
}
