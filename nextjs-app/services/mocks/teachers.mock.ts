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
        dateOfBirth: faker.date
            .birthdate({ min: 25, max: 60, mode: "age" })
            .toISOString(),
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
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
        hireDate: faker.date.past({ years: 5 }).toISOString(),
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

export const MOCK_TEACHERS: ITeacher[] = [
    {
        id: "1",
        username: "john.smith",
        password: "password123",
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@example.com",
        phoneNumber: "(555) 123-4567",
        address: "123 Main St, New York, NY 10001",
        dateOfBirth: "1985-03-15T00:00:00.000Z",
        createdAt: "2023-01-15T10:30:00.000Z",
        updatedAt: "2024-01-10T14:20:00.000Z",
        expertise: {
            skills: ["React", "TypeScript", "Node.js"],
            primarySubject: "Computer Science",
            yearsOfExperience: 8,
        },
        qualification: [
            {
                degree: "Master",
                institution: "MIT University",
                year: 2015,
            },
        ],
        hireDate: "2020-09-01T00:00:00.000Z",
        salaryBasic: 3500,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 450,
        },
    },
    {
        id: "2",
        username: "sarah.johnson",
        password: "password456",
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@example.com",
        phoneNumber: "(555) 234-5678",
        address: "456 Oak Ave, Boston, MA 02101",
        dateOfBirth: "1990-07-22T00:00:00.000Z",
        createdAt: "2023-02-20T09:15:00.000Z",
        updatedAt: "2024-01-12T16:45:00.000Z",
        expertise: {
            skills: ["Next.js", "PostgreSQL", "TypeScript"],
            primarySubject: "Mathematics",
            yearsOfExperience: 5,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Harvard University",
                year: 2018,
            },
        ],
        hireDate: "2021-03-15T00:00:00.000Z",
        salaryBasic: 2800,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 350,
        },
    },
    {
        id: "3",
        username: "michael.chen",
        password: "password789",
        firstName: "Michael",
        lastName: "Chen",
        email: "michael.chen@example.com",
        phoneNumber: "(555) 345-6789",
        address: "789 Pine Rd, San Francisco, CA 94102",
        dateOfBirth: "1988-11-30T00:00:00.000Z",
        createdAt: "2023-03-10T11:20:00.000Z",
        updatedAt: "2024-01-15T10:30:00.000Z",
        expertise: {
            skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
            primarySubject: "Physics",
            yearsOfExperience: 12,
        },
        qualification: [
            {
                degree: "PhD",
                institution: "Stanford University",
                year: 2016,
            },
            {
                degree: "Master",
                institution: "Stanford University",
                year: 2013,
            },
        ],
        hireDate: "2019-08-20T00:00:00.000Z",
        salaryBasic: 4200,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 650,
        },
    },
    {
        id: "4",
        username: "emily.davis",
        password: "password321",
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.davis@example.com",
        phoneNumber: "(555) 456-7890",
        address: "321 Elm St, Chicago, IL 60601",
        dateOfBirth: "1992-05-18T00:00:00.000Z",
        createdAt: "2023-04-05T08:45:00.000Z",
        updatedAt: "2024-01-18T12:15:00.000Z",
        expertise: {
            skills: ["Next.js", "React", "TypeScript"],
            primarySubject: "English",
            yearsOfExperience: 6,
        },
        qualification: [
            {
                degree: "IELTS 8.5",
                institution: "Cambridge University",
                year: 2017,
            },
        ],
        hireDate: "2020-11-10T00:00:00.000Z",
        salaryBasic: 3100,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 400,
        },
    },
    {
        id: "5",
        username: "david.martinez",
        password: "password654",
        firstName: "David",
        lastName: "Martinez",
        email: "david.martinez@example.com",
        phoneNumber: "(555) 567-8901",
        address: "654 Maple Dr, Austin, TX 78701",
        dateOfBirth: "1987-09-25T00:00:00.000Z",
        createdAt: "2023-05-12T13:30:00.000Z",
        updatedAt: "2024-01-20T09:40:00.000Z",
        expertise: {
            skills: ["PostgreSQL", "Node.js", "React"],
            primarySubject: "Computer Science",
            yearsOfExperience: 10,
        },
        qualification: [
            {
                degree: "Master",
                institution: "Berkeley University",
                year: 2014,
            },
        ],
        hireDate: "2019-06-01T00:00:00.000Z",
        salaryBasic: 3800,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 550,
        },
    },
    {
        id: "6",
        username: "lisa.anderson",
        password: "password987",
        firstName: "Lisa",
        lastName: "Anderson",
        email: "lisa.anderson@example.com",
        phoneNumber: "(555) 678-9012",
        address: "987 Cedar Ln, Seattle, WA 98101",
        dateOfBirth: "1991-12-08T00:00:00.000Z",
        createdAt: "2023-06-18T10:00:00.000Z",
        updatedAt: "2024-01-22T14:25:00.000Z",
        expertise: {
            skills: ["React", "TypeScript", "Next.js"],
            primarySubject: "Mathematics",
            yearsOfExperience: 7,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Yale University",
                year: 2019,
            },
        ],
        hireDate: "2021-01-15T00:00:00.000Z",
        salaryBasic: 3300,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 420,
        },
    },
    {
        id: "7",
        username: "james.wilson",
        password: "password147",
        firstName: "James",
        lastName: "Wilson",
        email: "james.wilson@example.com",
        phoneNumber: "(555) 789-0123",
        address: "147 Birch Ave, Denver, CO 80201",
        dateOfBirth: "1986-04-12T00:00:00.000Z",
        createdAt: "2023-07-22T11:45:00.000Z",
        updatedAt: "2024-01-24T15:50:00.000Z",
        expertise: {
            skills: ["Node.js", "PostgreSQL", "TypeScript", "React"],
            primarySubject: "Physics",
            yearsOfExperience: 14,
        },
        qualification: [
            {
                degree: "PhD",
                institution: "Princeton University",
                year: 2017,
            },
        ],
        hireDate: "2018-09-10T00:00:00.000Z",
        salaryBasic: 4500,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 700,
        },
    },
    {
        id: "8",
        username: "jennifer.taylor",
        password: "password258",
        firstName: "Jennifer",
        lastName: "Taylor",
        email: "jennifer.taylor@example.com",
        phoneNumber: "(555) 890-1234",
        address: "258 Spruce St, Portland, OR 97201",
        dateOfBirth: "1993-08-19T00:00:00.000Z",
        createdAt: "2023-08-15T09:30:00.000Z",
        updatedAt: "2024-01-26T11:20:00.000Z",
        expertise: {
            skills: ["Next.js", "React"],
            primarySubject: "English",
            yearsOfExperience: 4,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Columbia University",
                year: 2020,
            },
        ],
        hireDate: "2022-02-01T00:00:00.000Z",
        salaryBasic: 2600,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 300,
        },
    },
    {
        id: "9",
        username: "robert.brown",
        password: "password369",
        firstName: "Robert",
        lastName: "Brown",
        email: "robert.brown@example.com",
        phoneNumber: "(555) 901-2345",
        address: "369 Willow Way, Miami, FL 33101",
        dateOfBirth: "1989-01-27T00:00:00.000Z",
        createdAt: "2023-09-20T12:15:00.000Z",
        updatedAt: "2024-01-28T13:35:00.000Z",
        expertise: {
            skills: ["TypeScript", "PostgreSQL", "Node.js"],
            primarySubject: "Computer Science",
            yearsOfExperience: 9,
        },
        qualification: [
            {
                degree: "Master",
                institution: "UCLA University",
                year: 2016,
            },
        ],
        hireDate: "2020-05-20T00:00:00.000Z",
        salaryBasic: 3600,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 480,
        },
    },
    {
        id: "10",
        username: "amanda.moore",
        password: "password741",
        firstName: "Amanda",
        lastName: "Moore",
        email: "amanda.moore@example.com",
        phoneNumber: "(555) 012-3456",
        address: "741 Aspen Blvd, Phoenix, AZ 85001",
        dateOfBirth: "1994-06-14T00:00:00.000Z",
        createdAt: "2023-10-10T14:40:00.000Z",
        updatedAt: "2024-01-30T10:45:00.000Z",
        expertise: {
            skills: ["React", "Next.js", "TypeScript"],
            primarySubject: "Mathematics",
            yearsOfExperience: 3,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Duke University",
                year: 2021,
            },
        ],
        hireDate: "2022-08-15T00:00:00.000Z",
        salaryBasic: 2400,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 280,
        },
    },
    {
        id: "11",
        username: "christopher.lee",
        password: "password852",
        firstName: "Christopher",
        lastName: "Lee",
        email: "christopher.lee@example.com",
        phoneNumber: "(555) 123-4568",
        address: "852 Hickory Ct, Atlanta, GA 30301",
        dateOfBirth: "1984-10-03T00:00:00.000Z",
        createdAt: "2023-11-05T08:20:00.000Z",
        updatedAt: "2024-02-01T15:10:00.000Z",
        expertise: {
            skills: ["PostgreSQL", "Node.js", "React", "TypeScript"],
            primarySubject: "Physics",
            yearsOfExperience: 16,
        },
        qualification: [
            {
                degree: "PhD",
                institution: "Caltech University",
                year: 2015,
            },
        ],
        hireDate: "2017-07-01T00:00:00.000Z",
        salaryBasic: 4800,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 800,
        },
    },
    {
        id: "12",
        username: "michelle.garcia",
        password: "password963",
        firstName: "Michelle",
        lastName: "Garcia",
        email: "michelle.garcia@example.com",
        phoneNumber: "(555) 234-5679",
        address: "963 Poplar Pl, Dallas, TX 75201",
        dateOfBirth: "1995-02-28T00:00:00.000Z",
        createdAt: "2023-12-12T11:55:00.000Z",
        updatedAt: "2024-02-03T09:25:00.000Z",
        expertise: {
            skills: ["Next.js", "TypeScript"],
            primarySubject: "English",
            yearsOfExperience: 2,
        },
        qualification: [
            {
                degree: "IELTS 8.5",
                institution: "Oxford University",
                year: 2022,
            },
        ],
        hireDate: "2023-01-10T00:00:00.000Z",
        salaryBasic: 2200,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 250,
        },
    },
    {
        id: "13",
        username: "daniel.rodriguez",
        password: "password159",
        firstName: "Daniel",
        lastName: "Rodriguez",
        email: "daniel.rodriguez@example.com",
        phoneNumber: "(555) 345-6780",
        address: "159 Cypress Dr, Houston, TX 77001",
        dateOfBirth: "1990-11-11T00:00:00.000Z",
        createdAt: "2024-01-08T10:30:00.000Z",
        updatedAt: "2024-02-05T12:40:00.000Z",
        expertise: {
            skills: ["React", "Node.js", "PostgreSQL"],
            primarySubject: "Computer Science",
            yearsOfExperience: 6,
        },
        qualification: [
            {
                degree: "Master",
                institution: "Cornell University",
                year: 2019,
            },
        ],
        hireDate: "2021-09-01T00:00:00.000Z",
        salaryBasic: 3200,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 410,
        },
    },
    {
        id: "14",
        username: "elizabeth.hernandez",
        password: "password357",
        firstName: "Elizabeth",
        lastName: "Hernandez",
        email: "elizabeth.hernandez@example.com",
        phoneNumber: "(555) 456-7891",
        address: "357 Magnolia Ave, Philadelphia, PA 19101",
        dateOfBirth: "1988-07-07T00:00:00.000Z",
        createdAt: "2024-01-15T13:20:00.000Z",
        updatedAt: "2024-02-07T14:55:00.000Z",
        expertise: {
            skills: ["TypeScript", "Next.js", "React", "PostgreSQL"],
            primarySubject: "Mathematics",
            yearsOfExperience: 11,
        },
        qualification: [
            {
                degree: "PhD",
                institution: "Northwestern University",
                year: 2018,
            },
        ],
        hireDate: "2019-03-15T00:00:00.000Z",
        salaryBasic: 4100,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 620,
        },
    },
    {
        id: "15",
        username: "matthew.lopez",
        password: "password486",
        firstName: "Matthew",
        lastName: "Lopez",
        email: "matthew.lopez@example.com",
        phoneNumber: "(555) 567-8902",
        address: "486 Walnut St, San Diego, CA 92101",
        dateOfBirth: "1992-03-21T00:00:00.000Z",
        createdAt: "2024-01-20T09:45:00.000Z",
        updatedAt: "2024-02-09T11:30:00.000Z",
        expertise: {
            skills: ["Node.js", "React", "TypeScript"],
            primarySubject: "Physics",
            yearsOfExperience: 5,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Brown University",
                year: 2018,
            },
        ],
        hireDate: "2021-06-01T00:00:00.000Z",
        salaryBasic: 2900,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 360,
        },
    },
    {
        id: "16",
        username: "stephanie.gonzalez",
        password: "password624",
        firstName: "Stephanie",
        lastName: "Gonzalez",
        email: "stephanie.gonzalez@example.com",
        phoneNumber: "(555) 678-9013",
        address: "624 Chestnut Ln, Columbus, OH 43201",
        dateOfBirth: "1996-09-16T00:00:00.000Z",
        createdAt: "2024-01-25T12:10:00.000Z",
        updatedAt: "2024-02-11T10:15:00.000Z",
        expertise: {
            skills: ["React", "Next.js"],
            primarySubject: "English",
            yearsOfExperience: 1,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Dartmouth University",
                year: 2023,
            },
        ],
        hireDate: "2023-09-01T00:00:00.000Z",
        salaryBasic: 2000,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 200,
        },
    },
    {
        id: "17",
        username: "andrew.wilson",
        password: "password735",
        firstName: "Andrew",
        lastName: "Wilson",
        email: "andrew.wilson@example.com",
        phoneNumber: "(555) 789-0124",
        address: "735 Sycamore Rd, Indianapolis, IN 46201",
        dateOfBirth: "1987-05-05T00:00:00.000Z",
        createdAt: "2024-01-28T15:25:00.000Z",
        updatedAt: "2024-02-13T13:45:00.000Z",
        expertise: {
            skills: ["PostgreSQL", "TypeScript", "Node.js", "React"],
            primarySubject: "Computer Science",
            yearsOfExperience: 13,
        },
        qualification: [
            {
                degree: "Master",
                institution: "Carnegie Mellon University",
                year: 2015,
            },
            {
                degree: "Bachelor",
                institution: "Carnegie Mellon University",
                year: 2012,
            },
        ],
        hireDate: "2018-04-01T00:00:00.000Z",
        salaryBasic: 4300,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 670,
        },
    },
    {
        id: "18",
        username: "nicole.martinez",
        password: "password846",
        firstName: "Nicole",
        lastName: "Martinez",
        email: "nicole.martinez@example.com",
        phoneNumber: "(555) 890-1235",
        address: "846 Redwood Dr, Charlotte, NC 28201",
        dateOfBirth: "1991-08-30T00:00:00.000Z",
        createdAt: "2024-02-01T08:50:00.000Z",
        updatedAt: "2024-02-15T09:20:00.000Z",
        expertise: {
            skills: ["Next.js", "React", "TypeScript"],
            primarySubject: "Mathematics",
            yearsOfExperience: 7,
        },
        qualification: [
            {
                degree: "Master",
                institution: "Vanderbilt University",
                year: 2017,
            },
        ],
        hireDate: "2020-10-15T00:00:00.000Z",
        salaryBasic: 3400,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 440,
        },
    },
    {
        id: "19",
        username: "kevin.anderson",
        password: "password957",
        firstName: "Kevin",
        lastName: "Anderson",
        email: "kevin.anderson@example.com",
        phoneNumber: "(555) 901-2346",
        address: "957 Dogwood Way, San Antonio, TX 78201",
        dateOfBirth: "1985-12-24T00:00:00.000Z",
        createdAt: "2024-02-05T11:35:00.000Z",
        updatedAt: "2024-02-17T14:10:00.000Z",
        expertise: {
            skills: ["React", "PostgreSQL", "Node.js"],
            primarySubject: "Physics",
            yearsOfExperience: 15,
        },
        qualification: [
            {
                degree: "PhD",
                institution: "Rice University",
                year: 2016,
            },
        ],
        hireDate: "2017-11-01T00:00:00.000Z",
        salaryBasic: 4600,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 750,
        },
    },
    {
        id: "20",
        username: "rebecca.thomas",
        password: "password168",
        firstName: "Rebecca",
        lastName: "Thomas",
        email: "rebecca.thomas@example.com",
        phoneNumber: "(555) 012-3457",
        address: "168 Cottonwood Ct, Detroit, MI 48201",
        dateOfBirth: "1993-04-09T00:00:00.000Z",
        createdAt: "2024-02-10T10:20:00.000Z",
        updatedAt: "2024-02-19T12:50:00.000Z",
        expertise: {
            skills: ["TypeScript", "Next.js", "React"],
            primarySubject: "English",
            yearsOfExperience: 4,
        },
        qualification: [
            {
                degree: "Bachelor",
                institution: "Emory University",
                year: 2020,
            },
        ],
        hireDate: "2022-03-01T00:00:00.000Z",
        salaryBasic: 2700,
        allowances: {
            housing: 500,
            transport: 200,
            bonus: 320,
        },
    },
]

export const getTeacherById = (id: string): ITeacher | undefined => {
    console.log("Searching for teacher with ID - Book:", id, typeof id)

    return MOCK_TEACHERS.find((teacher) => teacher.id === id)
}

export const getAllTeachers = (): ITeacher[] => {
    return MOCK_TEACHERS
}
