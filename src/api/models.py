from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    second_name = db.Column(db.String(120), nullable=True)
    imaginary_nickname = db.Column(db.String(120), nullable=True)
    favorite_superhero = db.Column(db.String(120), nullable=True)
    favorite_villain = db.Column(db.String(120), nullable=True)
    password = db.Column(db.String(80), nullable=False)
    eye_color = db.Column(db.String(50), nullable=True)
    hair_color = db.Column(db.String(50), nullable=True)
    mail = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    favorite_variable = db.Column(db.String(50), default="Var")
    experience_rate = db.Column(db.String(10), default="1")
    phone = db.Column(db.String(20), nullable=True)
    favorite_colour = db.Column(db.String(50), nullable=True)
    birth_day = db.Column(db.Date, nullable=True)
    computer_name = db.Column(db.String(120), nullable=True)
    hated_variable = db.Column(db.String(50), default="Var")
    tabs_spaces_chaos = db.Column(db.String(50), default="Tabs")
    bug_type = db.Column(db.String(120), nullable=True)
    apologized_to_computer = db.Column(db.String(50), default="No")
    form_summary = db.Column(db.Text, nullable=True)
    honest_experience_rate = db.Column(db.String(10), default="1")
    potential_password = db.Column(db.String(80), nullable=True)
    favorite_number = db.Column(db.Integer, default=0)
    love_for_var = db.Column(db.String(10), default="1")
    fetch_preference = db.Column(db.String(50), default="Await")
    mode_preference = db.Column(db.String(50), default="Dark mode")
    programming_without_fingers = db.Column(db.String(120), nullable=True)
    favorite_day = db.Column(db.String(50), nullable=True)
    random_guess = db.Column(db.String(120), nullable=True)
    worst_football_team = db.Column(db.String(120), default="Sevilla")
    time_to_complete = db.Column(db.String(50), default="1min")

    def __repr__(self):
        return f'<UserProfile {self.mail}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "second_name": self.second_name,
            "imaginary_nickname": self.imaginary_nickname,
            "favorite_superhero": self.favorite_superhero,
            "favorite_villain": self.favorite_villain,
            "eye_color": self.eye_color,
            "hair_color": self.hair_color,
            "mail": self.mail,
            "age": self.age,
            "favorite_variable": self.favorite_variable,
            "experience_rate": self.experience_rate,
            "phone": self.phone,
            "favorite_colour": self.favorite_colour,
            "birth_day": self.birth_day,
            "computer_name": self.computer_name,
            "hated_variable": self.hated_variable,
            "tabs_spaces_chaos": self.tabs_spaces_chaos,
            "bug_type": self.bug_type,
            "apologized_to_computer": self.apologized_to_computer,
            "form_summary": self.form_summary,
            "honest_experience_rate": self.honest_experience_rate,
            "potential_password": self.potential_password,
            "favorite_number": self.favorite_number,
            "love_for_var": self.love_for_var,
            "fetch_preference": self.fetch_preference,
            "mode_preference": self.mode_preference,
            "programming_without_fingers": self.programming_without_fingers,
            "favorite_day": self.favorite_day,
            "random_guess": self.random_guess,
            "worst_football_team": self.worst_football_team,
            "time_to_complete": self.time_to_complete,
        }
