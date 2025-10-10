🚀 NextAuth + PostgreSQL (Neon) + Prisma Setup

This guide shows how to integrate NextAuth with PostgreSQL (Neon) using Prisma ORM, and define your own schema with Teachers, Students, Classes, and Progress.

1️⃣ Install Dependencies
npm install next-auth @auth/prisma-adapter @prisma/client prisma

2️⃣ Initialize Prisma
npx prisma init


In your .env file, set the Neon DB URL:

DATABASE_URL="postgresql://username:password@ep-xxxx.neon.tech/dbname?sslmode=require"

3️⃣ Prisma Schema (prisma/schema.prisma)
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// NextAuth default tables
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? 
  access_token      String? 
  expires_at        Int? 
  token_type        String? 
  scope             String? 
  id_token          String? 
  session_state     String? 

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String     @id @default(cuid())
  name          String?
  email         String?    @unique
  password      String?    // for Credentials provider
  role          Role       @default(STUDENT)
  accounts      Account[]
  sessions      Session[]
  classes       Class[]    @relation("TeacherClasses")
  enrolledClass Class?     @relation("StudentClass", fields: [classId], references: [id])
  classId       String?
  progress      Progress[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// Custom models
model Class {
  id        String   @id @default(cuid())
  name      String
  code      String   @unique // join code
  teacher   User     @relation("TeacherClasses", fields: [teacherId], references: [id])
  teacherId String
  students  User[]   @relation("StudentClass")
}

model Progress {
  id        String   @id @default(cuid())
  student   User     @relation(fields: [studentId], references: [id])
  studentId String
  class     Class    @relation(fields: [classId], references: [id])
  classId   String
  score     Int
  completed Boolean  @default(false)
}

enum Role {
  TEACHER
  STUDENT
  ADMIN
}

4️⃣ Run Migrations
npx prisma migrate dev --name init

5️⃣ Setup NextAuth Route (app/api/auth/[...nextauth]/route.ts)
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })
        if (user && user.password === credentials?.password) {
          return user
        }
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        session.user.role = user.role
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

6️⃣ Role-Based Access Example
import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()

  if (session?.user?.role === "TEACHER") {
    return <TeacherDashboard />
  }
  return <StudentDashboard />
}

✅ Features You Get

NextAuth login/signup with Postgres + Neon.

Teachers create classes with join codes.

Students join classes via code.

Track student progress per class.

Role-based dashboards (Teacher / Student / Admin).

⚡ You can copy this whole setup into a SETUP.md file for reference.