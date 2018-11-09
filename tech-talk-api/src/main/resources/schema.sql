CREATE TABLE question (
  id    INTEGER IDENTITY PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE post (
  id          INTEGER IDENTITY PRIMARY KEY,
  content     VARCHAR(1000) NOT NULL,
  profile_id  INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  posted_at   TIMESTAMP NOT NULL,
  answer      BIT NOT NULL
);

CREATE TABLE profile (
  id          INTEGER IDENTITY PRIMARY KEY,
  username    VARCHAR(20) NOT NULL,
  title       VARCHAR(30) NOT NULL,
  email       VARCHAR(100) UNIQUE NOT NULL,
  bio         VARCHAR(1000)
);

ALTER TABLE post ADD FOREIGN KEY (profile_id) REFERENCES profile(id);
ALTER TABLE post ADD FOREIGN KEY (question_id) REFERENCES question(id);