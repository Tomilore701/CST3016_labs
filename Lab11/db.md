 Database Schema Documentation

 Entities Description

 1. Patients
 Purpose: Stores information about patients visiting the hospital.
 Data Stored: Patient details, including their identification, medical issues, arrival times, and associated priority levels and room assignments.

2. Priorities
 Purpose: Defines priority levels for patients based on urgency.
 Data Stored: Descriptions of priority levels and approximate time required for treatment.

 3. Rooms
 Purpose: Maintains details about hospital rooms and their status.
 Data Stored: Doctor assignments and room occupancy status.

  Attributes Specification

 Patients
 `patient_id`: `SERIAL PRIMARY KEY` - Unique identifier for each patient.
 `card_number`: `VARCHAR(225) NOT NULL` - Patient's identification card number.
 `name`: `VARCHAR(225) NOT NULL` - Name of the patient.
 `gender`: `VARCHAR(50)` - Gender of the patient.
 `date_of_birth`: `DATE` - Date of birth of the patient.
 `medical_issue`: `VARCHAR(225)` - Description of the patient's medical issue.
 `arrival_time`: `TIMESTAMP` - The time when the patient arrived.
 `priority_id`: `INT` - Foreign key linking to the `Priorities` table.
 `room_id`: `INT` - Foreign key linking to the `Rooms` table.

 Priorities
 `priority_id`: `SERIAL PRIMARY KEY` - Unique identifier for each priority level.
 `description`: `VARCHAR(225) NOT NULL` - Description of the priority level (e.g., High, Medium, Low).
 `approximate_time`: `INT NOT NULL` - Approximate time in minutes required for treatment.

 Rooms
 `room_id`: `SERIAL PRIMARY KEY` - Unique identifier for each room.
 `doctor_assigned`: `VARCHAR(225) NOT NULL` - Name of the doctor assigned to the room.
 `status`: `BOOLEAN NOT NULL DEFAULT FALSE` - Occupancy status of the room 

 Relationships

 1. Patients to Priorities
 Type: Many-to-One
 Details: Each patient is assigned one priority level, but a priority level can be shared by multiple patients.
 Foreign Key: `priority_id` in `Patients` references `priority_id` in `Priorities`.

 2. Patients to Rooms
 Type: Many-to-One
 Detail: Each patient is assigned one room, but a room can accommodate multiple patients over time.
 Foreign Key: `room_id` in `Patients` references `room_id` in `Rooms`
