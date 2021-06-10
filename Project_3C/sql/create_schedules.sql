DROP TABLE IF EXISTS schedules;

CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    day INTEGER NOT NULL CHECK (day >= 1 and day <=7),
    start_at TIME NOT NULL,
    end_at TIME NOT NULL
);