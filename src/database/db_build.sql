BEGIN;

DROP TABLE IF EXISTS contact_form CASCADE;

-- Form table: get in touch
CREATE TABLE contact_form (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL
);

-- Insert default form
INSERT INTO contact_form (name, email, message) VALUES
(
  'Michal Weizman', 
  'm.weizman@gmail.com', 
  'Get in touch about working together, cheers! Michal'
);

COMMIT;
