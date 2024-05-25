# Introduction to the College Data Management System Project

## Overview

The College Data Management System (CDMS) is a comprehensive software solution designed to streamline and automate various administrative and academic processes within a college. This system aims to enhance the efficiency and effectiveness of managing student information, academic records, timetables, notifications, and more. The project is divided into two main components: the front-end and the back-end.

### Front-End

The front-end of the College Data Management System is developed using modern web technologies to ensure a responsive and user-friendly interface. It provides various features such as user authentication, profile management, timetable viewing, notifications, and settings management.

**//This repo is for Front-End only
#### How to Run the Front-End

To run the front-end of the project, follow these steps:

1. Clone the front-end repository from GitHub:
   ```bash
   git clone https://github.com/TracyHT/SE--College-Data-Management-System.git
   ```
2. Navigate to the project directory and install the dependencies:
   ```bash
   cd SE--College-Data-Management-System
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Back-End

The back-end of the College Data Management System is built using Node.js and Express.js, with Sequelize as the ORM (Object-Relational Mapping) tool for database interactions. It provides a robust API for managing users, subjects, grades, timetables, and notifications. The back-end ensures secure authentication and role-based access control, enabling different levels of access for students, faculty, and administrators.

#### How to Run the Back-End Locally

To run the back-end of the project locally, follow these steps:

1. **Docker Setup:**
   - Run the following command to start a MySQL container using Docker:
     ```bash
     docker run --name db_college_system -e MYSQL_ROOT_PASSWORD=1234 -d -p 3310:3306 mysql
     ```

2. **Database Setup:**
   - Set up TablePlus or any other database management tool to connect to the MySQL database:
     ```
     {
       name: db_college_system
       Host: localhost
       Port: 3310
       user: root
       password: 1234
     }
     ```
   - Connect to the database and create a new database named `db_college_system`.
   - Import the SQL file `db_college_system.sql` to set up the initial database schema and data.

3. **Clone the Backend Source Code:**
   - Open a terminal and clone the back-end repository:
     ```bash
     git clone https://github.com/Khanhhungtran23/BE-SE.git
     ```
   - Switch to the main branch:
     ```bash
     git switch main
     ```
   - Install the necessary packages:
     ```bash
     yarn
     ```

4. **Sequelize-Auto:**
   - Update the database schema to match the source code by running:
     ```bash
     yarn sequelize-auto -h localhost -d db_college_system -u root -x 1234 -p 3310 --dialect mysql -o src/models -l esm
     ```

5. **Run the Back-End:**
6. # Introduction to the College Data Management System Project

## Overview

The College Data Management System (CDMS) is a comprehensive software solution designed to streamline and automate various administrative and academic processes within a college. This system aims to enhance the efficiency and effectiveness of managing student information, academic records, timetables, notifications, and more. The project is divided into two main components: the front-end and the back-end.

### Front-End

The front-end of the College Data Management System is developed using modern web technologies to ensure a responsive and user-friendly interface. It provides various features such as user authentication, profile management, timetable viewing, notifications, and settings management.

#### How to Run the Front-End

To run the front-end of the project, follow these steps:

1. Clone the front-end repository from GitHub:
   ```bash
   git clone https://github.com/TracyHT/SE--College-Data-Management-System.git
   ```
2. Navigate to the project directory and install the dependencies:
   ```bash
   cd SE--College-Data-Management-System
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Back-End

The back-end of the College Data Management System is built using Node.js and Express.js, with Sequelize as the ORM (Object-Relational Mapping) tool for database interactions. It provides a robust API for managing users, subjects, grades, timetables, and notifications. The back-end ensures secure authentication and role-based access control, enabling different levels of access for students, faculty, and administrators.

#### How to Run the Back-End Locally

To run the back-end of the project locally, follow these steps:

1. **Docker Setup:**
   - Run the following command to start a MySQL container using Docker:
     ```bash
     docker run --name db_college_system -e MYSQL_ROOT_PASSWORD=1234 -d -p 3310:3306 mysql
     ```

2. **Database Setup:**
   - Set up TablePlus or any other database management tool to connect to the MySQL database:
     ```
     {
       name: db_college_system
       Host: localhost
       Port: 3310
       user: root
       password: 1234
     }
     ```
   - Connect to the database and create a new database named `db_college_system`.
   - Import the SQL file `db_college_system.sql` to set up the initial database schema and data.

3. **Clone the Backend Source Code:**
   - Open a terminal and clone the back-end repository:
     ```bash
     git clone https://github.com/Khanhhungtran23/BE-SE.git
     ```
   - Switch to the main branch:
     ```bash
     git switch main
     ```
   - Install the necessary packages:
     ```bash
     yarn
     ```

4. **Sequelize-Auto:**
   - Update the database schema to match the source code by running:
     ```bash
     yarn sequelize-auto -h localhost -d db_college_system -u root -x 1234 -p 3310 --dialect mysql -o src/models -l esm
     ```

5. **Run the Back-End:**
   - Start the server:
     ```bash
     yarn start
     ```

6. **Testing the API:**
   - Download and install Postman to test the API endpoints.
   - Contact Khanh Hung to be invited to the Postman collaboration space, which contains all the API endpoints for testing.

### Current Features and Updates

The College Data Management System is continuously being updated to enhance its functionality. The current development focuses on several key features, including:

- **Login Page:** Secure authentication for users with role-based access control.
- **Overview Page:** A dashboard providing a summary of key information and statistics.
- **Homepage:** The main landing page for users after logging in, showing relevant information and quick links.
- **Timetable Page:** Allows users to view their schedules and manage class timetables.
- **Settings Page:** Enables users to update their personal information and system preferences.
- **Notification Page:** Manages and displays notifications related to academic and administrative events.

The project is a collaborative effort aimed at delivering a robust and user-friendly system to improve the management of college data and processes. By leveraging modern technologies and adhering to best practices, the College Data Management System strives to meet the needs of students, faculty, and administrators effectively.
